import React, { useState } from "react"
import back_arrow from "../../../assets/other-images/backarrow.svg"
import forward_arrow from "../../../assets/other-images/forwardarrow.svg"
import first_testimony from "../../../assets/homepage_images/Frame 140@2x.jpg"
import second_testimony from "../../../assets/homepage_images/Frame 136.svg"


function Carousel() {
      // State to track the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of carousel items
  let carouselItems = [first_testimony, second_testimony];

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
     <img src={carouselItems[currentIndex]} alt="Carousel Item" className="md:w-full" />
      <div className="flex justify-center items-center mt-[1.5rem]">
      <button onClick={handlePrevious}>
      <img src={back_arrow} alt="back-arrow" className="md:w-full mr-[0.813rem]"/>
      </button>
      <button onClick={handleNext}>
      <img src={forward_arrow} alt="forward-arrow" className="md:w-full ml-[0.813rem]" />
      </button>
      </div>
    </div>
  )
}

export default Carousel