

const Vertical = ({ title, text, image, isEven }) => {

    return (
        <div className="bg-[url('/bg-circle.png')] bg-left bg-cover">
            <div className={`flex flex-col gap-5 md:justify-between md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center py-8 px-4 md:px-[8%]`}>
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center  overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-w-md h-auto h-[70vh] object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
                    <p className="text-gray-600">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Vertical;
