import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";

interface Profile {
  name: string;
  age: number;
  location: string;
  image: string;
}

// Extended list of mock profiles for the carousel
const mockProfiles = [
  {
    name: "Emma",
    age: 27,
    location: "LAX → Tokyo",
    image: "/images/profile-1.jpg",
  },
  {
    name: "Alex",
    age: 31,
    location: "Singapore → Sydney",
    image: "/images/profile-2.jpg",
  },
  {
    name: "Sophie",
    age: 25,
    location: "Dubai → London",
    image: "/images/profile-3.jpg",
  },
  {
    name: "Michael",
    age: 29,
    location: "JFK → Paris",
    image: "/images/profile-1.jpg",
  },
  {
    name: "Olivia",
    age: 26,
    location: "Chicago → Mexico City",
    image: "/images/profile-2.jpg",
  },
  {
    name: "James",
    age: 32,
    location: "Madrid → Rome",
    image: "/images/profile-3.jpg",
  },
];

export default function MobileMockup() {
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  // State for active carousel index
  const [activeIndex, setActiveIndex] = useState(0);
  // State for touch enabled
  const [isTouching, setIsTouching] = useState(false);
  // Animation controls
  const [isDragging, setIsDragging] = useState(false);

  // Update mobile state based on window size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotate carousel on mobile - with increased interval
  useEffect(() => {
    if (isMobile && !isTouching && !isDragging) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % mockProfiles.length);
      }, 5000); // Increased from 3000 to 5000 ms to reduce frequency of changes
      return () => clearInterval(interval);
    }
  }, [isMobile, activeIndex, isTouching, isDragging]);

  // Handle swipe on mobile
  const handleDragStart = () => {
    setIsTouching(true);
    setIsDragging(true);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (isMobile) {
      if (info.offset.x < -100) {
        // Increased threshold from 50 to 100
        // Swipe left
        setActiveIndex((prev) => (prev + 1) % mockProfiles.length);
      } else if (info.offset.x > 100) {
        // Increased threshold from 50 to 100
        // Swipe right
        setActiveIndex(
          (prev) => (prev - 1 + mockProfiles.length) % mockProfiles.length
        );
      }
    }
    setIsTouching(false);
    setTimeout(() => setIsDragging(false), 500); // Increased from 300 to 500 ms
  };

  // Desktop view: show first 3 static profiles
  // Mobile view: show current profile + previous & next
  const getVisibleProfiles = () => {
    if (!isMobile) {
      return mockProfiles.slice(0, 3);
    } else {
      const totalProfiles = mockProfiles.length;
      return [
        mockProfiles[(activeIndex - 1 + totalProfiles) % totalProfiles], // Previous
        mockProfiles[activeIndex], // Current
        mockProfiles[(activeIndex + 1) % totalProfiles], // Next
      ];
    }
  };

  // Get position styles with slower transitions
  const getCardStyles = (index: number) => {
    // Common transition for both mobile and desktop - smoother with less bouncy spring
    const transition = isMobile
      ? {
          type: "tween", // Changed from spring to tween for mobile
          duration: 0.3,
          ease: "easeOut",
        }
      : {
          type: "spring",
          stiffness: 300,
          damping: 25, // Increased damping from 20 to 25
          duration: 0.5,
        };

    if (isMobile) {
      // Mobile view card positions
      if (index === 0)
        return {
          x: -10,
          y: 20,
          rotate: -3,
          scale: 0.9,
          zIndex: 1,
          transition,
        };
      if (index === 1)
        return {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          zIndex: 3,
          transition,
        };
      if (index === 2)
        return {
          x: 10,
          y: 20,
          rotate: 3,
          scale: 0.9,
          zIndex: 2,
          transition,
        };
    } else {
      // Desktop view card positions - unchanged
      if (index === 0)
        return {
          x: -140,
          y: 30,
          rotate: -6,
          scale: 0.92,
          zIndex: 1,
          transition,
        };
      if (index === 1)
        return {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          zIndex: 3,
          transition,
        };
      if (index === 2)
        return {
          x: 140,
          y: 30,
          rotate: 6,
          scale: 0.92,
          zIndex: 2,
          transition,
        };
    }
    return {};
  };

  const visibleProfiles = getVisibleProfiles();

  return (
    <div
      className={`relative w-full ${
        isMobile ? "h-[500px]" : "h-[600px] md:h-[650px]"
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Profile Cards */}
      <div className="relative w-full h-full flex items-center justify-center">
        {visibleProfiles.map((profile, index) => (
          <motion.div
            key={`${profile.name}-${index}-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              ...getCardStyles(index),
            }}
            drag={isMobile ? "x" : false}
            dragElastic={0.3} // Reduced from 0.7 to 0.3 for less extreme movement
            dragConstraints={{ left: -50, right: 50 }} // Limited drag range
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="absolute w-[240px] sm:w-[260px] md:w-[280px] touch-none"
            style={{ position: "absolute" }}
          >
            {/* Profile Card */}
            <div className="relative w-full aspect-[3/4] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl">
              {/* Profile Image */}
              <div className="relative w-full h-full">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60"></div>

                {/* Profile Info */}
                <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 px-3 sm:px-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {profile.name}
                    </h3>
                    <span className="text-base sm:text-lg text-white/90">
                      {profile.age}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs sm:text-sm text-white/80">
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 sm:gap-3 p-3 sm:p-4">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md sm:shadow-lg hover:scale-105 transition-transform">
                    <span className="text-red-500 text-lg sm:text-xl">✕</span>
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md sm:shadow-lg hover:scale-105 transition-transform">
                    <span className="text-blue-500 text-lg sm:text-xl">★</span>
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md sm:shadow-lg hover:scale-105 transition-transform">
                    <span className="text-green-500 text-lg sm:text-xl">♥</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Swipe instruction - Mobile Only */}
      {isMobile && (
        <div className="absolute top-4 left-0 right-0 text-center z-10">
          <div className="text-xs text-white/80 bg-black/30 backdrop-blur-sm py-1 rounded-full mx-auto w-max px-3">
            <span>Swipe to see more profiles</span>
          </div>
        </div>
      )}

      {/* Carousel Indicator - Mobile Only */}
      {isMobile && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pb-2 px-4 z-10">
          {mockProfiles.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                index === activeIndex ? "bg-[#FF4B6E] w-8" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to profile ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
