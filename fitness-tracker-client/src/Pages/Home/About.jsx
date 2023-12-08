
import { Link } from 'react-router-dom';
import '../Home/About.css';

const About = () => {
  return (
    <div className='mb-10'>
      <section className="about-us">
        <div className="about">
          <img src="https://i.ibb.co/S5KVJ58/young-happy-athletic-man-having-weight-training-health-club.jpg" className="pic" alt="Fitness Training" />
          <div className="text">
            <h2>About Us</h2>
            <h5>Fitness Enthusiast & <span>Developer</span></h5>
            <p>
              Welcome to our fitness community! We are passionate about helping individuals achieve their health and wellness goals. Whether you're looking to build muscle, improve cardiovascular fitness, or find inner balance through yoga, our dedicated team is here to support you on your fitness journey.
            </p>
            <div className="data">
              <Link to="/login" className="hire">Join Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
