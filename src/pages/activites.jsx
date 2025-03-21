import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const activities = [
    { 
      title: "Robotics Club", 
      category: "stem",
      description: "Weekly workshops and national competition preparation",
      schedule: "Every Wednesday 3-5 PM"
    },
    { 
      title: "School Orchestra", 
      category: "arts",
      description: "Musical training and seasonal performances",
      schedule: "Every Friday 4-6 PM"
    },
    { 
      title: "Debate Society", 
      category: "academic",
      description: "Develop public speaking and critical thinking skills",
      schedule: "Every Tuesday 3:30-5 PM"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'stem', label: 'STEM' },
    { id: 'arts', label: 'Arts' },
    { id: 'academic', label: 'Academic' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Student Life & Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white opacity-90"
          >
            Explore our diverse range of extracurricular programs
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities
            .filter(activity => activeCategory === 'all' || activity.category === activeCategory)
            .map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Activity Image</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-3">
                    {activity.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex items-center text-gray-500">
                    <span className="mr-2">⏰</span>
                    {activity.schedule}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div className="grid gap-4">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Annual Science Fair 2024</h3>
                    <p className="text-gray-600">March 15-17, 2024 | School Campus</p>
                  </div>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}