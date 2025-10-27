'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HumanBody from '@/components/HumanBody';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800">DeficiBox</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-gray-700 hover:text-green-600 transition">
                Features
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:shadow-lg transition duration-300"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Foods Your Body Needs
              <br />Powered by Your Blood Tests
          </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver fresh milk, dairy, fruits, and protein-rich foods tailored to your biomarkers and health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition duration-300 flex items-center justify-center"
              >
                Join Waitlist
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="#nutrition-map"
                className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-full text-lg font-semibold hover:border-green-500 hover:text-green-600 transition duration-300"
              >
                See Body-Food Map
              </a>
            </div>
          </motion.div>

          {/* Interactive Body Visualization */}
          <motion.div
            id="nutrition-map"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Your Body, The Right Foods
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore which foods support each body system based on your blood work
              </p>
            </div>
            
            <HumanBody />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Personalized Food Box?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Fresh dairy, fruits, and protein foods curated from your biomarkers and goals.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-green-600 rounded-full text-lg font-semibold hover:shadow-2xl transition duration-300"
            >
              Join Waitlist Now
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
