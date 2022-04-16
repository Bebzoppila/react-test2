import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import catsApiGet from "../api/catsApi";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const CategoryItem = ({ name, id }) => {
  
  const [categoryItemState, setCategoryItemState] = useState([]);
  const [linkShown, setLinkShown] = useState(false);

  useEffect(() => {
    const params = { limit: 4, category_ids: id };
    catsApiGet("https://api.thecatapi.com/v1/images/search", params).then(
      (data) => setCategoryItemState(data.data)
    );
  }, []);

  return (
    <div className="w-50 ">
      <h2>{name}</h2>
      <Loader isLoad={categoryItemState.length}>
        <Carousel interval={100000000000000000}>
          {categoryItemState.map((categoryItem) => (
            <Carousel.Item className="position-relative" onMouseEnter={() => setLinkShown(true)}>
              <Link
                style={{zIndex: 10000}}
                className={
                  "btn btn-primary zindex-dropdown position-absolute top-0 start-0" +
                  (linkShown ? " d-block" : "  d-none")
                }
                to={"/img-info/" + categoryItem.id}
              >
                Дополнительная информация
              </Link>
              <img
                className="d-block w-50 p-3 h-50"
                src={categoryItem.url}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Loader>
    </div>
  );
};

export default CategoryItem;
