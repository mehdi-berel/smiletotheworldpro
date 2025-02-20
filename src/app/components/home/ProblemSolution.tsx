'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Search, RefreshCw, CheckCircle, XCircle, DollarSign,
  Clock, Globe, AlertTriangle, UserX, Scale, Truck,
  Users, Lock, BadgeCheck, Zap, Building2, HeartHandshake
} from 'lucide-react';

const problems = [
  {
    icon: Search,
    title: "Limited Equipment Access",
    description: "Dental professionals struggle to find quality equipment internationally, often restricted to local suppliers with limited options."
  },
  {
    icon: XCircle,
    title: "Quality Uncertainty",
    description: "No reliable way to verify the quality and authenticity of second-hand dental equipment before purchase."
  },
  {
    icon: DollarSign,
    title: "Price Inefficiency",
    description: "Traditional distribution channels lead to inflated prices and lack of transparency in the dental equipment market."
  },
  {
    icon: Clock,
    title: "Time-Consuming Process",
    description: "Finding and verifying equipment through traditional channels is time-consuming and often delays practice operations."
  },
  {
    icon: AlertTriangle,
    title: "Trust Issues",
    description: "Lack of trust between buyers and sellers in the international dental equipment market leads to missed opportunities."
  },
  {
    icon: Globe,
    title: "Geographic Limitations",
    description: "Physical boundaries and import/export complexities restrict access to global dental equipment markets."
  }
];

const solutions = [
  {
    icon: Shield,
    title: "Secure Trading Platform",
    description: "Our platform connects dental professionals directly, enabling secure equipment trading with built-in verification systems."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Every piece of equipment undergoes rigorous quality checks by certified experts before being listed on our platform."
  },
  {
    icon: RefreshCw,
    title: "Market Efficiency",
    description: "Direct peer-to-peer trading reduces costs and creates a more efficient market for dental equipment."
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Built-in escrow system ensures secure transactions and protects both buyers and sellers throughout the process."
  },
  {
    icon: Building2,
    title: "Global Network",
    description: "Access to an international network of verified dental professionals and equipment suppliers."
  },
  {
    icon: HeartHandshake,
    title: "Community Trust",
    description: "Built-in rating system and community reviews create transparency and trust in the marketplace."
  }
];

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = React.useState<'problems' | 'solutions'>('problems');
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section className="relative py-24 bg-white dark:bg-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-grid-pattern opacity-50" />
      
      <div className="relative container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-sm font-semibold text-primary mb-4"
          >
            Market Innovation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Revolutionizing Dental
            <span className="text-primary"> Equipment Trading</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            We're transforming how dental professionals buy and sell equipment with our 
            secure, quality-assured marketplace platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-red-500/50 via-red-300/30 to-red-500/50 rounded-lg blur-sm group-hover:blur opacity-75 transition duration-500 group-hover:opacity-100" />
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Current Challenges
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <problem.icon className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{problem.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg blur-sm group-hover:blur opacity-75 transition duration-500 group-hover:opacity-100" />
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Our Solutions
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <solution.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{solution.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
