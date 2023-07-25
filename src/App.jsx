import { useEffect, useState } from "react";
import NewsPage from "./components/NewsPage";
import { getNewsData } from "./utils/newsDataService";

const App = () => {

  const [news, setNews] = useState([]);

  const getNews = async () => {
    const data = await getNewsData();
    if (data instanceof Error) {
      console.error(data.message);
      setNews([]);
    } else {
      setNews(data);
    }
  }

  useEffect(() => {
    getNews();
  }, []);


  return (
    <>
      <NewsPage newsData={news} />
    </>
  )

}


export default App;
