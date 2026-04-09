import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  // Build Gmail compose URL (same approach as Contact.tsx)
  const buildGmailComposeUrl = (serviceName: string): string => {
    const to = "kimoel_leotagle@yahoo.com";
    const subject = `Service Inquiry - ${serviceName}`;
    const body = `Hello KIMOEL Trading and Construction,

I would like to inquire about your ${serviceName} service.

Here are my details:

Name:
Company / Organization:
Position:
Contact Number:
Email Address:

My inquiry / requirements:


I look forward to hearing from you.

Thank you.`;

    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: to,
      su: subject,
      body: body
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button variant="outline">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter(s => s.id !== service.id);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-brand-blue-primary/80" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-end pb-8">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.name}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue-dark mb-4">
                About {service.name}
              </h2>
              <div className="space-y-3 text-gray-700">
                {service.description.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6"
              >
                <Button
                  variant="hero"
                  onClick={() => {
                    const gmailUrl = buildGmailComposeUrl(service.name);
                    window.open(gmailUrl, '_blank');
                  }}
                  aria-label={`Send an email about ${service.name} service`}
                  title={`Send an email about ${service.name} service`}
                >
                  Send an Email
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      {otherServices.length > 0 && (
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-brand-blue-dark text-center mb-6 md:mb-8"
            >
              Other Services
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {otherServices.map((otherService, index) => (
                <motion.div
                  key={otherService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/services/${otherService.id}`} className="block">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={otherService.image}
                          alt={otherService.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold text-brand-blue-dark group-hover:text-[#FFD700] transition-colors">
                          {otherService.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                          {otherService.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
};

export default ServiceDetail;
