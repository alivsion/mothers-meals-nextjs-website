import Image from 'next/image';
 
const SectionTwo: React.FC = () => {
return (
    <>
        <section className="sectionTwo   flex flex-col md:flex-row items-center justify-evenly p-10  ">
            {/* Left Section */}
            <div className="left text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4  ">
  Explore Home Food Delivery
</h1>
                <small className="text-lg text-gray-600">
                    '' Made with love and care.''
                </small>
                {/*Left Section - Trust Badges */}
                <div className="Left flex flex-col gap-3 mt-5">
                    {/* Badge 1 */}
                    <div className="badge flex items-center text-center gap-1">
                        <Image
                            src="/trust-badge/Authentic.webp"
                            alt="Quality Badge"
                            className="w-18 mb-2"
                            width={50}
                            height={50}
                        />
                        <p className="text-lg font-semibold text-gray-700">
                            Taste Authentic Flavours of India
                        </p>
                    </div>

                    {/* Badge 2 */}
                    <div className="badge flex items-center text-center gap-1">
                        <Image
                            src="/trust-badge/Fresh.webp"
                            alt="Fresh Badge"
                            className="w-18 mb-2"
                            width={50}
                            height={50}
                        />
                        <p className="text-lg font-semibold text-gray-700">
                            Freshly Prepared Always
                        </p>
                    </div>

                    {/* Badge 3 */}
                    <div className="badge flex items-center text-center gap-1">
                        <Image
                            src="/trust-badge/Hygiene.webp"
                            alt="Delivery Badge"
                            className="w-18 mb-2"
                            width={50}
                            height={50}
                        />
                        <p className="text-lg font-semibold text-gray-700">
                            Cleanliness & Hygiene Guaranteed
                        </p>
                    </div>

                    {/* Badge 4 */}
                    <div className="badge flex items-center text-center gap-1">
                        <Image
                            src="/trust-badge/Highest-Rating.webp"
                            alt="Home Chefs Badge"
                            className="w-18 mb-2"
                            width={50}
                            height={50}
                        />
                        <p className="text-lg font-semibold text-gray-700">
                            Highest rating by consumers
                        </p>
                    </div>
                </div>
            </div>
            <div className="Right">
                <Image
                    src="/app-screens.webp"
                    alt="App Screens"
                    width={600}
                    height={600}
                />
            </div>
        </section>
    </>
);
};

export default SectionTwo;