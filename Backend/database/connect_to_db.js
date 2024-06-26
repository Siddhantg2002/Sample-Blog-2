import prisma from "../prisma/prisma.js";
import data_feeding_in_db from "../seeding/data_feeding_in_db.js"

const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to database");
        await data_feeding_in_db()
    } catch (error) {
        console.error(error.message);
    }
}

export default connectToDatabase;
