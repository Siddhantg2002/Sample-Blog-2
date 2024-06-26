
import crypto from 'crypto';
import prisma from '../prisma/prisma.js'; 

const optimization_for_feeding_data = async (data, hashName, collection, name) => {
  const newHash = crypto
    .createHash('sha256')
    .update(JSON.stringify(data))
    .digest('hex');

  try {
    const existingHashDoc = await prisma.hashStore.findUnique({
      where: {
        name: hashName,
      },
    });

    if (existingHashDoc && existingHashDoc.hash === newHash) {
      console.log(`${name} has not changed.`);
      return;
    }

    if (existingHashDoc) {
      await collection.deleteMany({});
      console.log(`${name} data deleted.`);
    }

    await collection.createMany({
      data,
    });

    console.log(`${name} inserted (new).`);

    if (existingHashDoc) {
      await prisma.hashStore.update({
        where: {
          id: existingHashDoc.id,
        },
        data: {
          hash: newHash,
        },
      });
    } else {
      await prisma.hashStore.create({
        data: {
          name: hashName,
          hash: newHash,
        },
      });
    }

    console.log('Hash updated.');
  } catch (error) {
    console.error(`Error optimizing ${name}:`, error);
  } 
};

export default optimization_for_feeding_data;
