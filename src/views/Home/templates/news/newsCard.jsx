import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./newsCard.module.scss";
import img from "./../../../../assets/news2.jpg";
import { Link } from "react-router-dom";
import {BsArrowRightShort} from 'react-icons/bs'
function NewsCard(props) {
  return (
    <div>
      <Card className={styles.card} style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} style={{height:'200px'}} />
        <Card.Body className={styles.card_body}>
          <Card.Title className={styles.title}>News Title</Card.Title>
          <Card.Text className={styles.text}>
            Ac, amet lacus, tristique viverra et sit convallis. Egestas amet
            bibendum vitae in egestas Ut libero lorem arcu interdum...
          </Card.Text>
          < Link className={styles.btn} to='#'> Read More <span className={styles.arrow}> <BsArrowRightShort size={25}/></span> </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
