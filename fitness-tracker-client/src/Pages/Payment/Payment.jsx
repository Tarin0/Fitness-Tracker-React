import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData, useLocation } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const location = useLocation();
  const trainerId = new URLSearchParams(location.search).get("trainerId");
  const allTrainers = useLoaderData();
  const remainingTrainer = allTrainers.filter(trainer => trainer._id === trainerId);
  console.log("Trainer ID:", trainerId);
  console.log("Trainer ID:", remainingTrainer);
    // console.log(trainer);
    return (
        <div>
            <p className="text-center text-2xl font-semibold">Please pay</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm remainingTrainer={remainingTrainer}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;