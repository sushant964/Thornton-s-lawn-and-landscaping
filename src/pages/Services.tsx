import { motion } from 'motion/react';
import { CheckCircle2, Leaf, Droplets, Scissors, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Lawn Mowing & Edging',
    description: 'Keep your lawn neat, clean, and well-maintained. We provide regular mowing schedules customized to your grass type and property needs.',
    icon: Leaf,
    image: 'https://i.ibb.co/zHXPbt0k/8c68d46d2ac0e4e2689298db13dc9a5f.jpg',
    features: ['Precision mowing', 'Edge trimming', 'Clipping removal', 'Blowing pathways clean']
  },
  {
    title: 'Hedging & Pruning',
    description: 'Professional trimming for healthy, great-looking plants and hedges. We shape and maintain your shrubs to keep them thriving and attractive.',
    icon: Scissors,
    image: 'https://i.ibb.co/VcnN3KGQ/4dd5f9ba83ee510c9a8f03c488bd3aba.jpg',
    features: ['Shrub shaping', 'Tree pruning', 'Health assessments', 'Green waste removal']
  },
  {
    title: 'Yard Clean-Ups & More',
    description: 'Full outdoor clean-ups to refresh and restore your space. Whether it is an end-of-lease cleanup or a seasonal transformation, we handle it all.',
    icon: Droplets,
    image: 'https://i.ibb.co/qL7Q6Bwp/f200b9bc64e4d37e80dc681ee703135d.jpg',
    features: ['Weed removal', 'Mulching & soil', 'Rubbish removal', 'Garden bed restoration']
  },
];

export default function Services() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-brand-900 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://i.ibb.co/1fp0GCnt/378e7c0e48cdd63986a1f4d1c2233687.jpg')] bg-cover bg-center" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10 text-center text-white">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-lg leading-8 text-brand-100 max-w-2xl mx-auto">
              Comprehensive lawn care and landscaping solutions designed to keep your outdoor spaces looking their absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-stone-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-stone-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button nativeButton={false} render={<Link to="/contact" />} size="lg" className="bg-stone-900 text-white hover:bg-stone-800 rounded-full px-8 border-0">
                    Request this service
                  </Button>
                </div>
                
                <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="bg-brand-50 py-16 border-t border-brand-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-16 text-center">
          <h2 className="text-2xl font-bold text-brand-900 mb-4">Don't see what you need?</h2>
          <p className="text-brand-700 mb-8 max-w-xl mx-auto">We offer custom landscaping solutions. Reach out to discuss your specific requirements.</p>
          <Button nativeButton={false} render={<Link to="/contact" />} variant="outline" className="border-brand-300 text-brand-700 hover:bg-brand-100 rounded-full h-12 px-8">
             Contact us
          </Button>
        </div>
      </section>
    </div>
  );
}
