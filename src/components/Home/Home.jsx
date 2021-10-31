
import Banner from '../Banner/Banner';
import LargeCard from '../LargeCard/LargeCard';
import MidddleSection  from '../MiddleSection/MiddleSection'
import Services from '../Services/Services';
import Carousel from '../Carousel/Carousel'
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div>
            {/* This is home section where all element stack together */}
            <Banner></Banner>
            <MidddleSection></MidddleSection>
            <Services></Services>
            <LargeCard></LargeCard>
            <Carousel></Carousel>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;