
const Location = () => {
    return (
        <div className="p-5 mb-5">
            <h1 className="text-3xl ml-28">Find Us Easily: Directions and Contact Information for Our Location</h1>
           <div className="grid mt-5 grid-cols-1 gap-4">
           <div className="mx-auto rounded-lg bg-gray-100 w-6/12 " >
                <p className="p-3">📞 +880-12345678</p>
            </div>
            <div className="mx-auto rounded-lg bg-gray-100 w-6/12 " >
                <p className="p-3">📬 fitnezz@tracker.com</p>
            </div>
            <div className="mx-auto rounded-lg bg-gray-100 w-6/12 " >
                <p className="p-3">📌 GEC Convention , GEC , Chittagong Bangladesh </p>
            </div>
            <div className="map-section">
                <div className="gmap-frame">
                <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=GEC,%20chittagong+(Fitness%20Tracker)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>

                </div>
            </div>
           </div>

        </div>
    );
};

export default Location;