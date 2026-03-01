import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const ServiceCTA = () => {
  return (
    <section className="relative py-12 px-6 lg:px-12 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-500">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3fe8e2]/5 to-[#2DA3B4]/5 rounded-bl-full -mr-10 -mt-10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to transform <span className="text-[#2DA3B4]">your business?</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-xl">
                Partner with us to build digital experiences that drive growth. Explore our portfolio or get in touch today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link 
                to="/project" 
                className="text-sm font-bold text-gray-600 hover:text-[#2DA3B4] transition-colors"
              >
                Our Work
              </Link>
              <Link to="/contact">
                <Button 
                  text="Get Started" 
                  className="bg-[#2DA3B4] hover:bg-[#1E6B7A] px-8 py-3 text-sm shadow-none"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
