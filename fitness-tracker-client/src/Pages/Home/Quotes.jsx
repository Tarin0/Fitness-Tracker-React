import '../Home/Quotes.css';

const Quotes = () => {
    return (
        <div>
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-5 text-gray-600">Inspirational Fitness Stories<br/></h1>
            <h3 className="text-xl text-center mb-5 font-light">Motivation, Success, and Wellness Journeys</h3>

            <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                <figure className="snip1157">
                    <blockquote>Transforming my body was more than a physical journey; it was a mental and spiritual awakening. The power to change lies within, and fitness became my guide to rediscovering my true self.
                        <div className="arrow"></div>
                    </blockquote>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg" alt="sq-sample3" />
                    <div className="author">
                        <h5>Emma Wellness <span> FitMindBody.com</span></h5>
                    </div>
                </figure>
                <figure className="snip1157 hover">
                    <blockquote>Every drop of sweat is a step towards success. Embracing the grind, I found strength I never knew I had. Fitness is not just a routine; it's a lifestyle that empowers you to conquer your limits.
                        <div className="arrow"></div>
                    </blockquote>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg" alt="sq-sample27" />
                    <div className="author">
                        <h5>Nathan Strong<span> FitnessRevolution.com</span></h5>
                    </div>
                </figure>
                <figure className="snip1157">
                    <blockquote>Wellness is a holistic journey, embracing mind, body, and soul. Through fitness, I found balance and vitality. It's not just about how you look; it's about how you feel from the inside out.
                        <div className="arrow"></div>
                    </blockquote>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17" />
                    <div className="author">
                        <h5>Aria Vitality<span> BalancedLifeWellness.com</span></h5>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default Quotes;
