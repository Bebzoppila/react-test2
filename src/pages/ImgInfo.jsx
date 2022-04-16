import { useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import catsApiGet from "../api/catsApi";
const ImgInfo = () => {
    const params = useParams();
    const [catInfoImg, setCatInfoImg] = useState({})

    useState(() => {
        catsApiGet(`https://api.thecatapi.com/v1/images/${params.id}`)
        .then(data => setCatInfoImg(data.data))
    },[])
    
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={catInfoImg.url} />
      <Card.Body>
        <Card.Title>Картинка </Card.Title>
        <Card.Text>Катугории - { catInfoImg.categories?.map(cat => cat.name)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImgInfo;
