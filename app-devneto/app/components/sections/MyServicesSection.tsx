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
    {
        title: (
            <>
              TECHNICAL SUPPORT
              <br />
              & MAINTENANCE
            </>
          ),
        description:
            "Experienced in delivering ongoing technical support and maintenance to ensure seamless website functionality. Proficient in performing regular updates, troubleshooting, performance monitoring, and implementing security patches. Adept at optimizing website performance and ensuring up-to-date, secure, and uninterrupted operations, enabling businesses to focus on growth and success.",
        image: '/images/card-3.svg',
      },
    // Adicione mais serviços conforme necessário
  ];
  return (
    <section className="bg-[#0a051a] p-6 w-full h-auto flex items-center justify-center py-20">
      <div className="max-w-screen-2xl flex flex-col">

        <h4 className="text-purple-500 text-sm mb-4 text-center">my services</h4>

        <div className="w-full h-auto flex flex-col gap-16">

          <div className="space-y-6 md:w-[50%] mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">
              What can I do for you
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Whether you need a sleek website, a full-stack solution, or a
              captivating user interface, I'm here to transform your ideas into
              powerful digital experiences. Let's work together to elevate your
              brand and turn your vision into reality!
            </p>
          </div>

          <div className="flex flex-col p-2 w-full h-auto gap-6 
                          md:flex-wrap md:flex-row md:w-[80%] items-center justify-center mx-auto">
            {/* Carrossel */}
                {services.map((service, index) => (
                  <div
                      key={index}
                      className="w-full h-96 max-w-md flex justify-center rounded-2xl overflow-hidden relative border group hover:border-white"
                      style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover" }}
                  >
                          {/* Pseudo-elemento para aplicar a opacidade ao background */}
                          <div className="absolute inset-0 bg-purple-900/75 transition-all group-hover:bg-slate-950/90"></div>
                         
                          {/* Pseudo elemento design */}
                          <div className="hidden absolute top-0 right-0 w-full gap-2 transition-all group-hover:flex items-end justify-end p-6 z-10">
                              <span className="block w-4 h-4 bg-red-600 rounded-full" />
                              <span className="block w-4 h-4 bg-yellow-500 rounded-full" />
                              <span className="block w-4 h-4 bg-green-500 rounded-full" />
                          </div>

                          {/* Conteúdo interno */}
                          <div className="z-10 p-8 gap-6 flex flex-col justify-center">
                              <h3 className="text-xl font-bold text-white">{service.title}</h3>
                              <p className="text-gray-200 font-medium">{service.description}</p>
                          </div>
                  </div>
                ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
