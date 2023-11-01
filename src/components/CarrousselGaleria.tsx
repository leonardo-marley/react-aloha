import { useState } from "react";
import { items } from "../../public/ItemsGaleria.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/CarrousselGaleria.module.css";

export default function CarrousselGaleria() {
  
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{borderRadius:'1rem', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)'}}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
