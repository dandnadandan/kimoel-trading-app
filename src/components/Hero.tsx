import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// NOTE: If videos are large files (>5MB each), consider compressing them
// at https://www.freeconvert.com/video-compressor before deploying
// Target: MP4, H.264, under 5MB each, 1080p

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
];

const heroContent = [
  {
    headline: 'Explore Our Engineering & Technology Solutions Today!',
    description: 'Delivering innovative machines and reliable components from industrial equipment to electrical and electronic parts trusted by businesses across the Philippines.',
    buttonText: 'View Products',
    buttonAction: 'products'
  },
  {
    headline: 'Civil, Mechanical & Electrical Works',
    description: 'Trusted contractor for industrial, commercial, and residential projects across the Philippines.',
    buttonText: 'Our Services',
    buttonAction: 'services'
  },
  {
    headline: 'Accredited. Trusted. Reliable.',
    description: 'PEZA-accredited contractor serving Laguna Technopark and Mitsubishi-Hitachi Philippines.',
    buttonText: 'About Us',
    buttonAction: 'about'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance to next video
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade transition
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setNextIndex((prev) => (prev + 1) % videos.length);
        setContentIndex((prev) => (prev + 1) % heroContent.length);
        setIsFading(false);
      }, 1000); // 1 second fade duration

    }, 6000); // Show each video for 6 seconds

    return () => clearInterval(interval);
  }, []);

  // Autoplay current video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const handleButtonClick = (action: string) => {
    const target = document.getElementById(action);
    if (!target) return;

    const header = document.querySelector("header") as HTMLElement | null;
    const headerHeight = header?.offsetHeight ?? 0;
    const top =
      target.getBoundingClientRect().top + window.scrollY - (headerHeight + 8);

    window.scrollTo({ top, behavior: "smooth" });
  };

  const currentContent = heroContent[contentIndex];

  return (
    <section 
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >

      {/* CURRENT VIDEO */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0"
        animate={{ opacity: isFading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videos[currentIndex]}
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* NEXT VIDEO (preloading in background) */}
      <motion.div
        key={`next-${nextIndex}`}
        className="absolute inset-0"
        animate={{ opacity: isFading ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <video
          ref={nextVideoRef}
          className="w-full h-full object-cover"
          src={videos[nextIndex]}
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20 flex flex-col items-center
                   justify-center h-full text-center px-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="pt-16 md:pt-20">
            <h1 className="mx-auto font-extrabold tracking-tight leading-tight md:leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {currentContent.headline}
            </h1>
          </div>
          <div className="space-y-4 sm:space-y-6 md:space-y-8 mt-8">
            <p className="mx-auto max-w-[60ch] text-white/90 text-base sm:text-lg md:text-xl">
              {currentContent.description}
            </p>
            <Button
              variant="hero"
              size="lg"
              className="shadow-button w-full sm:w-auto"
              onClick={() => handleButtonClick(currentContent.buttonAction)}
              aria-label={`Go to ${currentContent.buttonAction}`}
            >
              {currentContent.buttonText}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Video indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                      z-20 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setNextIndex((index + 1) % videos.length);
              setContentIndex(index % heroContent.length);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
