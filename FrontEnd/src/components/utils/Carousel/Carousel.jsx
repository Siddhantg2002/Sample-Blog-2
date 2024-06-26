import style from "./styles.module.css";

const Carousel = () => {
  return (
    <div className={style.Carousel_holder}>
      <div className="carousel-item w-full h-full">
        <img src="/Login/1.webp"/>
      </div>
      <div className="carousel-item w-full h-full">
        <img src="/Login/4.jpeg"/>
      </div>
      <div className="carousel-item w-full h-full">
        <img src="/Login/3.jpeg"/>
      </div>
    </div>
  );
};

export default Carousel;
