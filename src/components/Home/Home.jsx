import "./Home.scss";
import NewsList from '../NewsList/NewsList';
import Ads from "../Ads/Ads";

const Home = () => {
  return (
    <div className="mainHome">
      <div className="homeWrapper">
        <Ads />
        <NewsList />
      </div>
    </div>
  );
};

export default Home;
