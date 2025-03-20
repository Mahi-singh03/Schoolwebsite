import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Dummy data

 // Dummy data for features section
 const features = [
  { title: 'Academic Excellence', description: 'World-class curriculum and learning environment' },
  { title: 'Sports Academy', description: 'Developing champions in various sports disciplines' },
  { title: 'Arts Program', description: 'Nurturing creativity and artistic expression' },
];


const principalMessage = {
  name: "Dr. Sarah Johnson",
  role: "School Principal",
  message: "At our school, we believe in nurturing both intellectual curiosity and moral character. Our community fosters a love for learning while developing responsible global citizens.",
  image: "principal-placeholder.jpg"
};

const schoolStats = [
  { number: 2500, label: "Students" },
  { number: 150, label: "Qualified Staff" },
  { number: 98, label: "Graduation Rate (%)" },
  { number: 35, label: "Years of Excellence" }
]; 

const faqs = [
  { question: "What's the admission process?", answer: "Admissions begin with an online application followed by an entrance assessment..." },
  { question: "Do you offer scholarships?", answer: "Yes, we offer merit-based and need-based scholarships..." },
  { question: "What extracurriculars are available?", answer: "We offer over 50 clubs and activities ranging from robotics to drama..." }
];

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: 'spring', bounce: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-40 ">
      {/* Hero Section */}
      <section className="pt-6 pb-12 px-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-white space-y-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Welcome to Our Premier Educational Institution
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl opacity-90 md:pr-12">
              Shaping futures through innovative learning and character development
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                Apply Now
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-80 md:h-96 bg-gradient-to-tr from-purple-500 to-indigo-400 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">Campus View</h3>
              <p>Modern Learning Facilities</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">{principalMessage.name}</h3>
              <p className="text-lg">{principalMessage.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-800">
              Message from Our Principal
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {principalMessage.message}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <span className="text-indigo-600 text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Campus Life
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gray-300 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* School Stats */}
      <section className="py-16 bg-blue-600 text-white rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {schoolStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl font-bold mb-2">
                {stat.number}+
              </div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                  <motion.span
                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                    className="text-indigo-600 text-xl ml-4"
                  >
                    ▼
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 my-3 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SchoolName</h3>
            <p className="text-gray-400">Established 1995</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">123 School Street<br/>Education City, EC 12345</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}