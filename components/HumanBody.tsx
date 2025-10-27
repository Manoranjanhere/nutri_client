'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Bone, Activity, Dumbbell } from 'lucide-react';

interface NutrientInfo {
  name: string;
  description: string;
  icon: any;
}

const hotspots = [
  {
    id: 'brain',
    name: 'Brain',
    position: { x: 50, y: 15 },
    nutrients: {
      name: 'Omega-3 & B Vitamins',
      description: 'Essential for cognitive function, memory, and mood regulation. Found in fatty fish, nuts, and leafy greens.',
    },
    icon: Brain,
    color: 'purple',
  },
  {
    id: 'heart',
    name: 'Heart',
    position: { x: 50, y: 35 },
    nutrients: {
      name: 'CoQ10 & Omega-3',
      description: 'Supports cardiovascular health, reduces inflammation, and maintains healthy cholesterol levels.',
    },
    icon: Heart,
    color: 'red',
  },
  {
    id: 'bones',
    name: 'Bones',
    position: { x: 50, y: 50 },
    nutrients: {
      name: 'Calcium & Vitamin D',
      description: 'Builds strong bones and teeth, prevents osteoporosis. Essential for bone density maintenance.',
    },
    icon: Bone,
    color: 'blue',
  },
  {
    id: 'gut',
    name: 'Gut',
    position: { x: 50, y: 62 },
    nutrients: {
      name: 'Probiotics & Fiber',
      description: 'Promotes healthy digestion, balances gut flora, and improves nutrient absorption.',
    },
    icon: Activity,
    color: 'orange',
  },
  {
    id: 'muscles',
    name: 'Muscles',
    position: { x: 50, y: 78 },
    nutrients: {
      name: 'Protein & Magnesium',
      description: 'Supports muscle growth, recovery, and optimal performance. Helps prevent muscle cramps.',
    },
    icon: Dumbbell,
    color: 'green',
  },
];

export default function HumanBody() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const handleHotspotClick = (id: string) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-visible">
      {/* Human Body Silhouette */}
      <div className="relative mx-auto overflow-visible" style={{ width: '300px', height: '600px' }}>
        {/* SVG Human Body Silhouette */}
        <svg 
          viewBox="0 0 200 400" 
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <ellipse cx="100" cy="60" rx="35" ry="40" fill="currentColor" className="text-gray-300" />
          
          {/* Neck */}
          <rect x="92" y="92" width="16" height="15" fill="currentColor" className="text-gray-300" />
          
          {/* Torso */}
          <ellipse cx="100" cy="180" rx="50" ry="80" fill="currentColor" className="text-gray-300" />
          
          {/* Arms */}
          <ellipse cx="60" cy="160" rx="15" ry="60" transform="rotate(-30 60 160)" fill="currentColor" className="text-gray-300" />
          <ellipse cx="140" cy="160" rx="15" ry="60" transform="rotate(30 140 160)" fill="currentColor" className="text-gray-300" />
          
          {/* Legs */}
          <rect x="70" y="250" width="28" height="130" rx="14" fill="currentColor" className="text-gray-300" />
          <rect x="102" y="250" width="28" height="130" rx="14" fill="currentColor" className="text-gray-300" />
        </svg>

        {/* Hotspots */}
        {hotspots.map((hotspot) => {
          const Icon = hotspot.icon;
          return (
            <div
              key={hotspot.id}
              className={`absolute cursor-pointer group z-10 ${activeHotspot === hotspot.id ? 'z-[2000]' : ''}`}
              style={{
                left: `${hotspot.position.x}%`,
                top: `${hotspot.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={() => handleHotspotClick(hotspot.id)}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                  className={`z-0 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                    activeHotspot === hotspot.id ? 'ring-4 ring-white' : ''
                  } ${
                    hotspot.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                    hotspot.color === 'red' ? 'bg-gradient-to-br from-red-400 to-red-600' :
                    hotspot.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                    hotspot.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                    'bg-gradient-to-br from-green-400 to-green-600'
                  }`}
              >
                <Icon className="text-white" size={32} />
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {activeHotspot === hotspot.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-20 w-72 z-[1000] transform -translate-x-1/2 pointer-events-auto"
                  >
                    <div className="relative z-[1000] bg-white rounded-xl shadow-2xl p-6 border-2 border-gray-100">
                      <div className="flex items-center mb-3">
                        <Icon className={`mr-3 ${
                          hotspot.color === 'purple' ? 'text-purple-600' :
                          hotspot.color === 'red' ? 'text-red-600' :
                          hotspot.color === 'blue' ? 'text-blue-600' :
                          hotspot.color === 'orange' ? 'text-orange-600' :
                          'text-green-600'
                        }`} size={24} />
                        <h3 className="text-xl font-bold text-gray-800">{hotspot.name}</h3>
                      </div>
                      <p className="text-lg font-semibold text-gray-700 mb-2">
                        {hotspot.nutrients.name}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {hotspot.nutrients.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
        {hotspots.map((hotspot) => {
          const Icon = hotspot.icon;
          return (
            <motion.div
              key={hotspot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + hotspots.indexOf(hotspot) * 0.1 }}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleHotspotClick(hotspot.id)}
            >
              <Icon className={`mx-auto mb-2 ${
                hotspot.color === 'purple' ? 'text-purple-600' :
                hotspot.color === 'red' ? 'text-red-600' :
                hotspot.color === 'blue' ? 'text-blue-600' :
                hotspot.color === 'orange' ? 'text-orange-600' :
                'text-green-600'
              }`} size={32} />
              <h4 className="font-semibold text-gray-800 text-center">{hotspot.name}</h4>
              <p className="text-sm text-gray-600 text-center mt-1">
                {hotspot.nutrients.name.split(' & ')[0]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

