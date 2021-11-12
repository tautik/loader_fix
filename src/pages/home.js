import CustomAppBar from "../components/CustomAppBar";
import { useState, useEffect } from "react";
const Home = () => {
    const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function getVideos() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/videos`,
        { method: "GET" }
      );
      const data = await response.json();
      setVideos(data);
    }
    getVideos();
  }, []);
  return (
    <div>
      <CustomAppBar
        label="Search"
        onSearch={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {videos.length === 0 ? (
        <p>Loading ...</p>
      ) : (
        videos
          .filter((e) =>
            searchText.length !== 0
              ? e.title.toLowerCase().includes(searchText.toLowerCase())
              : true
          )
          .map((e) => (
            <div key={videos.indexOf(e)}>
              <img src={e.image} alt={e.title} />
              <p>{e.title}</p>
              <p>{e.views}</p>
              <p>{e.uploadedBy}</p>
              <p>{e.uploadedAgo}</p>
            </div>
          ))
      )}
    </div>
  );
}
 
export default Home;