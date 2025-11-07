import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  animationType?: 'glow' | 'scale' | 'float';
  index?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  link, 
  animationType = 'scale',
  index = 0 
}: ServiceCardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link to={link} className="group block">
        <Card className="h-full overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
          {/* Image Container */}
          <motion.div 
            className="relative h-48 overflow-hidden"
            variants={imageVariants}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animation Effects based on type */}
            {animationType === 'glow' && (
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            )}
          </motion.div>

          {/* Content */}
          <motion.div variants={contentVariants}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                {description}
              </p>
              <motion.div 
                className="flex items-center text-blue-600 font-semibold"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </CardContent>
          </motion.div>

          {/* Floating Animation */}
          {animationType === 'float' && (
            <motion.div
              className="absolute inset-0 border-2 border-blue-400 rounded-lg opacity-0 group-hover:opacity-100"
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </Card>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;