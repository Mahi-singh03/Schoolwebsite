import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    { year: 2023, title: "National Science Fair Champions", category: "Academic" },
    { year: 2022, title: "State Basketball Tournament Winners", category: "Sports" },
    { year: 2021, title: "Best Community Service Program", category: "Social" },
    { year: 2020, title: "National Robotics Competition Finalists", category: "STEM" },
  ];

  const milestones = [
    { number: "50+", label: "National Awards" },
    { number: "100%", label: "College Acceptance" },
    { number: "1st", label: "State Ranking" },
    { number: "200+", label: "Alumni Network" },
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
            Our Legacy of Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white opacity-90"
          >
            Celebrating decades of academic and extracurricular achievements
          </motion.p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {milestone.number}
              </div>
              <div className="text-gray-600">{milestone.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notable Achievements</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2" />
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`mb-8 w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
              >
                <div className="relative pl-8 md:pl-0">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-0 md:left-auto md:right-[-8px] top-6" />
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-blue-600 font-semibold mb-2">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}