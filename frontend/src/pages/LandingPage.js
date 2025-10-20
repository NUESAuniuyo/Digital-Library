import { useState, useEffect, useMemo } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, ChevronDown, Book, Users as UsersIcon, FileText, Award, Clock, FileSearch, GraduationCap } from 'lucide-react';

// Import your images
import facultyBuilding1 from '../logo/faculty building 2.png';
import facultyBuilding2 from '../logo/faculty building.png';

// Stats data
const stats = [
  { icon: Book, value: '1000+', label: 'E-Books' },
  { icon: UsersIcon, value: '5000+', label: 'Students' },
  { icon: FileText, value: '50+', label: 'Departments' },
  { icon: Award, value: '24/7', label: 'Access' }
];

// Features data
const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Resources',
    description: 'Access a vast collection of academic materials, research papers, and reference books all in one place.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Study at your own pace with round-the-clock access to all our digital resources.'
  },
  {
    icon: FileSearch,
    title: 'Easy Navigation',
    description: 'Find exactly what you need with our intuitive search and categorization system.'
  },
  {
    icon: Users,
    title: 'Collaborate',
    description: 'Connect with peers, share notes, and collaborate on projects through our platform.'
  },
  {
    icon: GraduationCap,
    title: 'Expert Guidance',
    description: 'Get access to curated reading lists and recommendations from faculty members.'
  },
  {
    icon: Award,
    title: 'Stay Updated',
    description: 'Never miss important announcements, deadlines, or new additions to our collection.'
  }
];

// Move the ImageSlideshow component before the LandingPage component
const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => [
    { id: 1, src: facultyBuilding1, alt: 'Faculty Building Exterior' },
    { id: 2, src: facultyBuilding2, alt: 'Faculty Building Front View' },
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-[32rem] lg:h-[36rem] overflow-hidden rounded-lg shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TypewriterText = ({ text, speed = 50, delay = 0, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className={className}>{displayText}</span>;
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <ImageSlideshow />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold hero-text">
                <TypewriterText 
                  text="Welcome to NUESA E-Library Uniuyo"
                  speed={60}
                  delay={800}
                  className="inline-block text-green-500"
                />
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-3xl mb-8 hero-subtitle text-white/95"
            >
              <TypewriterText 
                text="Making Learning Easy"
                speed={80}
                delay={2500}
                className="inline-block"
              />
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
              className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white/90 hero-subtitle"
            >
              Your comprehensive digital library for the Faculty of Engineering, 
              University of Uyo. Access course materials, connect with peers, 
              and excel in your academic journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 4.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/departments"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 inline-flex items-center space-x-2 rounded-lg transition-colors duration-300"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Departments</span>
              </Link>
              
              <Link
                to="/map"
                className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-4 inline-flex items-center space-x-2 rounded-lg transition-colors duration-300 border border-white/20"
              >
                <Users className="w-5 h-5" />
                <span>Faculty Map</span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.5, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">NUESA E-Library</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of academic resources with our comprehensive digital library platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of engineering students who are already using NUESA E-Library 
              to excel in their studies.
            </p>
            <Link
              to="/departments"
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4 inline-flex items-center space-x-2 rounded-lg transition-colors duration-300 font-medium"
            >
              <BookOpen className="w-5 h-5" />
              <span>Get Started Now</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;