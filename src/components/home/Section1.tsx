'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselCard1 from '../carousel-cards/CarouselCard1';

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "عروض الجمعة البيضاء",
      subtitle: "خصم يصل إلى 80%",
      description: "على جميع المنتجات الإلكترونية والأزياء",
      image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      buttonText: "تسوق الآن"
    },
    {
      title: "مجموعة الشتاء الجديدة",
      subtitle: "أحدث صيحات الموضة",
      description: "ملابس شتوية أنيقة ومريحة لجميع أفراد العائلة",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      buttonText: "اكتشف المجموعة"
    },
    {
      title: "أجهزة ذكية متطورة",
      subtitle: "تكنولوجيا المستقبل",
      description: "أحدث الهواتف الذكية والأجهزة اللوحية بأفضل الأسعار",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      buttonText: "اطلع على العروض"
    },
    {
      title: "منتجات المنزل والمطبخ",
      subtitle: "جودة عالية وأسعار مناسبة",
      description: "كل ما تحتاجه لمنزل عصري ومريح",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      buttonText: "تسوق المنزل"
    },
    {
      title: "رياضة وصحة",
      subtitle: "نمط حياة صحي",
      description: "معدات رياضية ومكملات غذائية لحياة أفضل",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600",
      buttonText: "ابدأ رحلتك"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Carousel */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Slides Container */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <CarouselCard1
                  title={slide.title}
                  subtitle={slide.subtitle}
                  description={slide.description}
                  image={slide.image}
                  buttonText={slide.buttonText}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🚚",
              title: "شحن مجاني",
              description: "للطلبات أكثر من 200 ريال"
            },
            {
              icon: "🔒",
              title: "دفع آمن",
              description: "حماية كاملة لبياناتك"
            },
            {
              icon: "↩️",
              title: "إرجاع مجاني",
              description: "خلال 30 يوم من الشراء"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;