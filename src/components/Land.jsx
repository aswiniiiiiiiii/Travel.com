import React, { useRef, useEffect } from 'react';
import './Land.css';
import {Parallax} from 'react-parallax'
import SecImg1 from '../assets/sec3.jpeg'
const Land = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const handleNext = () => {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    };

    const handlePrev = () => {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        slideRef.current.prepend(items[items.length - 1]);
      }
    };

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);

    return () => {
      nextButton.removeEventListener('click', handleNext);
      prevButton.removeEventListener('click', handlePrev);
    };
  }, []);

  return (
    <>
    
      <div className='body'>
        <div className='container'>
          <div className='slide' ref={slideRef}>
            <div className='item' style={{ backgroundImage: 'url(/images/img1.jpg)' }}>
              <div className='content'>
                <div className='name'>Switzerland</div>
                <div className='des'>Switzerland, officially the Swiss Confederation, is a landlocked country located in west-central Europe</div>
                <button>See more</button>
              </div>
            </div>
  
            <div className='item' style={{ backgroundImage: 'url(/images/img2.jpg)' }}>
              <div className='content'>
                <div className='name'>Canada</div>
                <div className='des'>Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean </div>
                <button>See more</button>
              </div>
            </div>
  
            <div className='item' style={{ backgroundImage: 'url(/images/img3.jpg)' }}>
              <div className='content'>
                <div className='name'>New Zealand</div>
                <div className='des'>New Zealand is an island country in the southwestern Pacific Ocean</div>
                <button>See more</button>
              </div>
            </div>
            <div className='item' style={{ backgroundImage: 'url(/images/img4.jpg)' }}>
              <div className='content'>
                <div className='name'>Italy </div>
                <div className='des'>Italy, officially the Italian Republic, is a country in Southern and Western Europe.</div>
                <button>See more</button>
              </div>
            </div>
            <div className='item' style={{ backgroundImage: 'url(/images/img6.jpg)' }}>
              <div className='content'>
                <div className='name'>United Kingdom</div>
                <div className='des'>The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom or Britain</div>
                <button>See more</button>
              </div>
            </div>
            {/* Add other items similarly */}
          </div>
  
          <div className='button'>
            <button className='prev'>
              <i className='fa-solid fa-arrow-left'></i>
            </button>
            <button className='next'>
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </div>
  
      </div>
      
    </>
    
  );
};

export default Land;
