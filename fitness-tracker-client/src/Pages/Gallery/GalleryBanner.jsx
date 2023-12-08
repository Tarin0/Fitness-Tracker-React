
const GalleryBanner = () => {
    return (
        <div>
   

            <section
                className="mt-10 relative bg-[url(https://i.ibb.co/c6TKPwf/gallery.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl text-center ml-20 text-[#0af115bd] font-extrabold sm:text-5xl">
                        Our Gallery 
                        </h1>

                        <p className="mt-12 pl-32 text-white max-w-lg sm:text-xl/relaxed">
                        our dedicated team is here to support you on your fitness journey.
                        </p>

                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryBanner;