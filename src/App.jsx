import Banner from "./Components/Banner/Banner";
import Equipments from "./Components/Equipments/Equipments";
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import BgImage from "./assets/bg.png";

import Img1 from './assets/2.png'
import Img2 from './assets/3.png'
import Tab from "./Components/Tab/Tab";
import Testimonials from "./Components/Testimonials/Testimonials";
import Banner2 from "./Components/Banner/Banner2";
import Footer from "./Components/Footer/Footer";

const BannerData = {
  image : Img1,
  title : 'The Importants To Take Care Of Yourself',
  subtitle : 'The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.',
  link : '#'
}

const Banner2Data = {
  image : Img2,
  title : 'The Importants To Take Care Of Yourself',
  subtitle : 'The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.',
  link : '#'
}



const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};


const App = () => {
  return (
    <div className="overflow-x-hidden">
    <div style={bgStyle}>
     <NavBar/>
     <Hero/>
    </div>
    <Equipments/>
    <Banner {...BannerData}/>
    <Tab/>
    <Banner {...Banner2Data}/>
    <Testimonials/>
    <Banner2/>
    <Footer/>
    </div>
  )
}

export default App
