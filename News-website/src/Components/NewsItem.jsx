import propTypes from "prop-types";
import image from "../assets/news_img.avif";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "250px", width: "320px", margin: "0px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  url: propTypes.string,
  src: propTypes.string,
};

export default NewsItem;
