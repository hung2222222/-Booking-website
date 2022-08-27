import NavBar from "../../components/Navbar/NavBar";
import Header from "../../components/Header/Header";
import CtyRender from "../../components/CityRender/CityRender";
import FromRender from "../../components/FromRender/FromRender";
import FooterRender from "../../components/FooterRender/FooterRender";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <CtyRender />
      <FromRender />
      <FooterRender />
    </div>
  );
};

export default Home;
