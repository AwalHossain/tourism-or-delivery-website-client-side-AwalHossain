
import Banner from '../Banner/Banner';
import LargeCard from '../LargeCard/LargeCard';
import MidddleSection  from '../MiddleSection/MiddleSection'
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel'
const Home = () => {
    return (
        <div>
            {/* This is home section where all element stack together */}
            <Banner></Banner>
            <MidddleSection></MidddleSection>
            <Services></Services>
            <LargeCard></LargeCard>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;