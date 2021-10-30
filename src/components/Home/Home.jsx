
import Banner from '../Banner/Banner';
import LargeCard from '../LargeCard/LargeCard';
import MidddleSection  from '../MiddleSection/MiddleSection'
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MidddleSection></MidddleSection>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
};

export default Home;