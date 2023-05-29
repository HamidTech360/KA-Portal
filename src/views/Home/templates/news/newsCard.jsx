import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./newsCard.module.scss";
import { Link } from "react-router-dom";
import img from './../../../../assets/news2.jpg'
import { BsArrowRightShort } from "react-icons/bs";
function NewsCard({title, body}) {

  const trimString = (string)=>{
    return string.split(" ").slice(0, 20).join(" ")  
} 
  return (
    <div>
      <Card className={styles.card} style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} style={{ height: "200px" }} />
        <Card.Body className={styles.card_body}>
          <Card.Title style={{fontSize:'20px'}} className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.text}>
            {trimString(body)}...
          </Card.Text>
          <Link className={styles.btn} to="#">
            {" "}
            Read More{" "}
            <span className={styles.arrow}>
              {" "}
              <BsArrowRightShort size={25} />
            </span>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
