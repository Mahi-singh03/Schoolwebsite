import { motion } from 'framer-motion';

export default function About() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  // Timeline data
  const history = [
    { year: '1990', title: 'Foundation', description: 'Established with a vision for quality education' },
    { year: '2005', title: 'Expansion', description: 'New campus built with modern facilities' },
    { year: '2020', title: 'Recognition', description: 'Awarded Best Educational Institution' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About Our Institution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Nurturing excellence through innovation and tradition
          </motion.p>
        </div>
      </section>

      

      {/* Values Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {['Integrity', 'Excellence', 'Innovation'].map((value, index) => (
              <motion.div
                key={value}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-indigo-600 text-2xl">★</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Leadership Team
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {['Principal', 'Vice Principal', 'Dean'].map((role, index) => (
              <motion.div
                key={role}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-300 aspect-square rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Dr. John Smith</h3>
                <p className="text-indigo-600 mb-4">{role}</p>
                <p className="text-gray-600">Experienced educator with 20+ years in academic leadership.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}