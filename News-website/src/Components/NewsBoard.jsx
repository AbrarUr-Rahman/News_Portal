import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=de020858fbe248b5b814f7f4adebb8f2`; //!ENV Key not working
    // console.log(import.meta.env.VITE_API_KEY);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
    return () => {};
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title.slice(0, 20)}
            description={
              news.description
                ? news.description.slice(0, 90)
                : "Some custom description for you to read"
            }
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

NewsBoard.propTypes = {
  category: propTypes.string,
};

export default NewsBoard;
