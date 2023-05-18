/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CaretDown, CaretUp, CaretLeft, CaretRight } from 'phosphor-react';

const Carousel = ({ content }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [seeMore, setSeeMore] = useState(false);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % content.length);
    setSeeMore(false);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? content.length - 1 : prevImage - 1
    );
    setSeeMore(false);
  };

  return (
    <div className="relative w-full rounded-md bg-primaryColors-400 max-w-[450px] mx-auto">
      <div>
        <img src={content[currentImage].img} alt="Carousel Image" className='rounded-sm w-full object-cover h-full max-h-[700px]' />
        <div className='p-5 transition-all text-left'>
          <span className='flex items-center justify-between font-bold'>
            <h3 className='text-xl' >{content[currentImage].title} - {content[currentImage].releaseYear}</h3>
            <button onClick={() => setSeeMore(!seeMore)}>{seeMore ? <CaretUp size={24} className="mr-1" /> : <CaretDown size={24} className="mr-1" />}</button>
          </span>
          <span className={`${seeMore ? "inline-block" : "hidden"} transition-all text-sm py-2`}><strong className='font-bold'>Autor:</strong> {content[currentImage].author}</span>
          <p className={`${seeMore ? "inline-block" : "hidden"} transition-all`}>{content[currentImage].description}</p>
        </div>
      </div>

      <div className="absolute top-[350px] left-0 transform -translate-y-1/2 flex justify-between w-full">
        <button
          onClick={previousImage}
          className="p-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-gray-800 bg-opacity-30 border border-gray-200 text-white rounded-full ml-3"
        >
          <CaretLeft size={24} />
        </button>

        <button
          onClick={nextImage}
          className="p-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-gray-800 bg-opacity-30 border border-gray-200 text-white rounded-full mr-3"
        >
          <CaretRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;