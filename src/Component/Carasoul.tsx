import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import certificateData from "../data";

const Carasoul = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-full max-w-lg"> {/* Reduced overall width */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={3000} // 3000ms = 3 seconds
          stopOnHover
          swipeable
          emulateTouch
        >
          {certificateData.map((cert, index) => (
            <div key={index} className="flex flex-col items-center p-5">
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={`Certificate ${index}`}
                className="w-full max-w-xs h-auto object-contain"
              />
              {/* Certificate Details */}
              <div className="mt-4 p-4 bg-white shadow-lg rounded-lg text-center w-auto max-w-xs">
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.details}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carasoul;
