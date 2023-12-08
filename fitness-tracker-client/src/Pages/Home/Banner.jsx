import { Link } from 'react-router-dom';
import  '../Home/Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="home" id="home">
            <div className="homeText">
                <h1>Commit To Be Fit</h1>
                <h3>Once You See Result, It Becomes An Addiction</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                    culpa ipsam.adipisicing elit. Alias, culpa ipsam. </p>
                <Link to="/classes"><button>Join Now</button></Link>
            </div>
            <img className='w-[200px] h-[800px]'
             src="https://i.ibb.co/1qR1x91/weightlifting-man-health-hispanic-lifting.jpgy" alt="" />
        </div>
        </div>
    );
};

export default Banner;