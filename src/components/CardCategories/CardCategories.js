import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./CardCategories.css";

const CardCategories = (props) => {
  const vehicles = props.vehicle;
  const { title, imgUrl, id } = vehicles;
  const history = useHistory();
  const handleBook = (id) => {
    history.push(`/destination/${id}`);
  };
  return (
    <Card onClick={() => handleBook(id)} className="card-categories">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardCategories;
