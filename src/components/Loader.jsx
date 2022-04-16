import { Spinner } from "react-bootstrap";
const Loader = ({ children, isLoad }) => {

  return isLoad ? (
    <div>{ children }</div>
  ) : (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loader;
