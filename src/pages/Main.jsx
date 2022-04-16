import { useSelector, useDispatch } from "react-redux";
import CategoryItem from "../components/CategoryItem";
import { useEffect } from "react";
import Loader from "../components/Loader";
const Main = () => {
  const categories = useSelector((state) => state.categories);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher({ type: "GALERY_FETCH_CATEGORY" });
  }, []);

  return (
    <div className="w-75 p-3 mx-auto">
      <Loader isLoad={categories.length}>
        {categories.map((category) => (
          <CategoryItem
            
            id={category.id}
            name={category.name}
            key={category.id}
          ></CategoryItem>
        ))}
      </Loader>
    </div>
  );
};

export default Main;
