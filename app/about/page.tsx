'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Target, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800">DeficiBox</span>
            </Link>
            <Link 
              href="/"
              className="flex items-center text-gray-700 hover:text-green-600 transition"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              About DeficiBox
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionizing personalized nutrition through science and data
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-6">
                <Target className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  DeficiBox was born from a simple observation: most nutrition advice is generic and doesn't account for individual differences. We believe that personalized nutrition based on actual blood test data can transform health outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                <Heart className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Using advanced algorithms and peer-reviewed scientific research, we analyze your blood test results to identify nutritional deficiencies and create a customized nutrition plan.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Analyze your blood test results for key nutrient markers
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Identify deficiencies and imbalances
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Create personalized meal plans and supplement recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Track your progress and adjust recommendations over time
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why It Matters</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Studies show that up to 90% of people have at least one nutritional deficiency. These deficiencies can impact energy levels, cognitive function, immune health, and overall well-being. By understanding your unique nutritional needs based on actual data, you can make informed decisions about your health.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl shadow-xl p-8 md:p-12 text-white"
          >
            <div className="flex items-start">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-6">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Built With Passion</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Our team combines nutrition science, data analytics, and user experience design to create a platform that makes personalized nutrition accessible to everyone. We're constantly improving based on the latest research and user feedback.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

