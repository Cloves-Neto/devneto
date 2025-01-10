'use client'

import React, { useState } from 'react';

interface Service {
  title: React.ReactNode;
  description: string;
  image: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title:
      (
        <>
            DEVELOPMENT 
            <br />
            & SEO STRATEGY
        </>
        ),
      description:
        "My services include  development  custom websites that not only meet the specific needs of your business, but are also optimized for search engine performance with effective SEO strategies to increase your brand visibility, drive qualified traffic, and improve conversion rates.",
      image: '/images/card-1.svg',
    },
    {
      title:(
        <>
            CREATIVE DESIGN 
            <br />
            & RESPONSIVE WEBSITE
        </>
        ),
      description:
        "I offer creative design and responsive website development services, focusing on creating compelling and functional visuals that capture the essence of your brand. My goal is to transform your ideas into impactful designs that not only grab attention but also provide a seamless user experience across all devices.",
      image: '/images/card-2.svg',
    },
    {
        title: (
            <>
              TECHNICAL SUPPORT
              <br />
              & MAINTENANCE
            </>
          ),
        description:
            "I provide ongoing technical support and maintenance to ensure your website runs efficiently and securely. From regular updates to quick troubleshooting, I take care of all the technical aspects so you can focus on your business.Monitoring, performance optimization and security patches are all part of my service, ensuring your website is always up to date and up and running.",
        image: '/images/card-3.svg',
      },
      {
        title:(
            <>
              DIGITAL DESIGN
              <br />
              & CREATIVE CONTENT
            </>
          ),
        description:
          "I create digital designs and creative content to strengthen your brand and online presence. I offer website prototypes, social media post designs, in-bio links, banners, and other website and social media edits. Each project is designed to convey your message clearly and impactfully, generating engagement and reinforcing your brand's visual identity.",
        image: '/images/card-4.svg',
      },
    // Adicione mais serviços conforme necessário
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#1a1625] py-12 px-4 h-[90dvh] flex items-center justify-centerx">
      <div className="max-w-6xl mx-auto">
        <div className="text-purple-500 mb-4">my services</div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              What can I do for you
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need a sleek website, a full-stack solution, or a
              captivating user interface, I'm here to transform your ideas into
              powerful digital experiences. Let's work together to elevate your
              brand and turn your vision into reality!
            </p>
          </div>

          <div className="relative">
            {/* Carrossel */}
            <div className="overflow-hidden">
              <div
                className=" h-72 flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service, index) => (
                <div
                    key={index}
                    className="min-w-full h-full flex justify-center rounded-2xl overflow-hidden relative"
                    style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover" }}
                >
                        {/* Pseudo-elemento para aplicar a opacidade ao background */}
                        <div className="absolute inset-0 bg-purple-800/70"></div>
                    
                        {/* Conteúdo interno */}
                        <div className="z-10 p-8 gap-6 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-gray-200 font-medium">{service.description}</p>
                        </div>
                </div>
                        ))}
                </div>
            </div>

            {/* Botões de navegação */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button
                onClick={handlePrevious}
                className="p-2 text-white rounded-full"
              >
                ❮
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button
                onClick={handleNext}
                className="p-2 text-white rounded-full"
              >
                ❯
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex gap-2 justify-center mt-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-purple-500' : 'bg-purple-900'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
