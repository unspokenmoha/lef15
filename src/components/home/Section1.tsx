'use client';

import Navbar from '../navbar/Navbar';
import CarouselCard1 from '../carousel-cards/CarouselCard1';
import React from 'react';

const Section1 = () => {
  return (
    <>
      <Navbar navListOpen={true} />

      <section className="bg-white mb-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* الكاروسيل */}
          <div className="relative overflow-hidden">
            {/* هنا سنعرض 5 شرائح بشكل يدوي مبدأياً */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {[...Array(5)].map((_, idx) => (
                <CarouselCard1 key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
