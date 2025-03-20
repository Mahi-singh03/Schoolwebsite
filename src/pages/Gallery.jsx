import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Dummy gallery data
  const galleryItems = [
    { id: 1, category: 'campus', image: 'placeholder.jpg' },
    { id: 2, category: 'events', image: 'placeholder.jpg' },
    { id: 3, category: 'sports', image: 'placeholder.jpg' },
    // Add more items...
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-gray-50  pt-40 ">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Campus Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Explore life at our institution through these captivating moments
          </motion.p>
        </div>
      </section>

      {/* Gallery Filters */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-12 flex justify-center gap-4"
      >
        {['all', 'campus', 'events', 'sports'].map((category) => (
          <motion.button
            key={category}
            variants={fadeInUp}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            className="aspect-square relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-end p-4 text-white"
            >
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform">
                <h3 className="font-bold text-lg">Image Title</h3>
                <p className="text-sm opacity-90">Category: {item.category}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}