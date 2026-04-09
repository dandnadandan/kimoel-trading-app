import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import ProductHero from "@/components/ProductHero";
import { ArrowLeft, Package, Award, Settings, Info } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  // Ensure scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, []);
  
  const product = getProductById(productId || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-muted/30">
        <ProductHero category="Products" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/products")}>
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Banner */}
      <ProductHero category={product.category} productName={product.title} />
      
      {/* Product Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto"
        >
          {/* Product Image */}
          <motion.div variants={itemVariants} className="order-1 lg:order-1">
            <Card className="rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="order-2 lg:order-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-[#FFD700] font-medium mb-2">
                <Package className="w-4 h-4" />
                {product.category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Brand</p>
                    <p className="font-semibold text-brand-blue-dark">{product.brand}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Model</p>
                    <p className="font-semibold text-brand-blue-dark">{product.model}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 rounded-xl sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                    <Info className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-semibold text-brand-blue-dark">{product.type}</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 md:mt-16 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-4">
                About This Product
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {product.about}
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Specifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 md:mt-12 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-6 md:p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-6">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, type: "spring" as const, stiffness: 100, damping: 12 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Navigation to Category */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 text-center"
        >
          <Link to="/products">
            <Button
              variant="outline"
              className="border-brand-blue-dark text-brand-blue-dark hover:bg-brand-blue-dark hover:text-white transition-all duration-300"
            >
              View More {product.category} Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
