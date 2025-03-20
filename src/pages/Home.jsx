import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center rounded-sm">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to Our Premier Educational Institution
            </h1>
            <p className="text-xl opacity-90">
              Shaping futures through innovative learning and character development
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              Apply Now
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-300 h-96 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Hero Image Placeholder</span>
          </div>
        </div>
      </section>
      
      {/* Principal Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center"
          >
            <span className="text-gray-500">Principal's Photo</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">Message from Our Principal</h2>
            <h3 className="text-xl text-blue-600">{principalMessage.name}</h3>
            <p className="text-gray-600 text-lg">{principalMessage.message}</p>
          </motion.div>
        </div>
      </section>
      

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 text-2xl">📚</span> {/* Icon placeholder */}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Life</h2>
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-300 h-48 mb-4 rounded-xl flex items-center justify-center hover:scale-98 transition-transform"
            >
              <span className="text-gray-500">Gallery Image {item}</span>
            </div>
          ))}
        </div>
      </section>

       {/* School Stats */}
       <section className="py-16 bg-blue-600 text-white rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 ">
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

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-8"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className={`transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 rounded-3xl m-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-4 gap-8">
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
            <p className="text-gray-300">123 School Street<br />Education City, EC 12345</p>
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

