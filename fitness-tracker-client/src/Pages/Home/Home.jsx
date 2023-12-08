import About from "./About";
import Banner from "./Banner";
import Feature from "./Feature";
import Newsletter from "./Newsletter";
import Quotes from "./Quotes";
import Team from "./Team";
import Blogs from "./Blogs";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitNezz | Home</title>
            </Helmet>
             <Banner></Banner>
            <Feature></Feature>
            <About></About>
            <Quotes></Quotes>
            <Blogs></Blogs>
            <Team></Team> 
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;