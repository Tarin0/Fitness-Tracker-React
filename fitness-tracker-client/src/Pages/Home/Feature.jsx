
// import { FaDumbbell, FaRunning, FaYoga, FaWeight, FaRubleSign } from 'react-icons/fa';
import { FaBalanceScale, FaDumbbell, FaHeartbeat, FaRubleSign, FaRunning, FaWeight } from 'react-icons/fa';
import '../Home/Feature.css';

const Feature = () => {
  return (
    <div>
      <section>
        <div className="row">
          <h1>Our Features</h1>
        </div>
        <div className="row">
          {/* <!-- Column One --> */}
          <div className="column">
            <div className="card">
              <div className="icon">
                <FaDumbbell />
              </div>
              <h3>Bodybuilding</h3>
              <p>
                Sculpt your body and build muscle with our specialized bodybuilding programs and workouts.
              </p>
            </div>
          </div>
          {/* <!-- Column Two --> */}
          <div className="column">
            <div className="card">
              <div className="icon">
                <FaRubleSign />
              </div>
              <h3>Fitness Running</h3>
              <p>
                Hit the pavement and improve your cardiovascular health with our fitness running plans and challenges.
              </p>
            </div>
          </div>
          {/* <!-- Column Three --> */}
          <div className="column">
            <div className="card">
              <div className="icon">
                <FaBalanceScale />
              </div>
              <h3>Classic Yoga</h3>
              <p>
                Find balance, flexibility, and inner peace with our classic yoga classes and guided meditation sessions.
              </p>
            </div>
          </div>
          {/* <!-- Column Four --> */}
          <div className="column">
            <div className="card">
              <div className="icon">
                <FaWeight />
              </div>
              <h3>Weight Lifting</h3>
              <p>
                Boost your strength and power through targeted weight lifting exercises and expert guidance.
              </p>
            </div>
          </div>

          {/* <!-- Column five --> */}
          <div className="column">
            <div className="card">
              <div className="icon">
                <FaHeartbeat />
              </div>
              <h3>Health Monitoring</h3>
              <p>
                Monitor your heart rate, track your progress, and stay on top of your health with our  monitoring features.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="icon">
                <FaRunning />
              </div>
              <h3>Personal Training</h3>
              <p>
                Get personalized training plans from certified fitness trainers to optimize your workout routine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
