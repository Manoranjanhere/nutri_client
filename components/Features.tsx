'use client';

import { motion } from 'framer-motion';
import { TestTube, Sparkles, Shield, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: TestTube,
    title: 'Blood Test Analysis',
    description: 'Upload your blood test results and get instant insights into your nutritional needs.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Recommendations',
    description: 'Our advanced algorithm analyzes your results and creates personalized nutrition plans.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Science-Backed',
    description: 'Every recommendation is based on peer-reviewed scientific research and clinical studies.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Target,
    title: 'Track Progress',
    description: 'Monitor your improvements and see how nutrients are impacting your health metrics.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Get notified when new research emerges that could benefit your personalized plan.',
    color: 'from-yellow-500 to-yellow-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose DeficiBox?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete nutrition platform designed to optimize your health
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

