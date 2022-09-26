import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import "./home.scss";
import List from "../components/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;