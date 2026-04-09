import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductHeroProps {
  category: string;
  productName?: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ category, productName }) => {
  return (
    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/90 to-brand-blue-dark/85" />
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=400&fit=crop"
          alt="Industrial background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Link to="/products" className="hover:text-white transition-colors duration-200">
                Products
              </Link>
              <span className="text-white/70">/</span>
              <span className="text-white font-medium">{category}</span>
              {productName && (
                <>
                  <span className="text-white/70">/</span>
                  <span className="text-white/90">{productName}</span>
                </>
              )}
            </div>

            {/* Page Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center border border-[#FFD700]/30">
                <Package className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {category} Products
                </h1>
                <p className="text-white/90 text-sm sm:text-base mt-1">
                  Industrial-grade solutions for your business needs
                </p>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
                className="border-white/60 bg-white/10 text-white hover:bg-white/20 hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {category}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
