import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=de020858fbe248b5b814f7f4adebb8f2`; //!ENV Key not working
    // console.log(import.meta.env.VITE_API_KEY);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
    return () => {};
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
