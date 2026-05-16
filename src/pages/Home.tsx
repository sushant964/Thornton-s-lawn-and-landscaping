import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PhoneCall, ArrowRight, CheckCircle2, Leaf, Droplets, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Lawn Mowing & Edging',
    description: 'Keep your lawn neat, clean, and well-maintained with our regular mowing services.',
    icon: Leaf,
    image: 'https://i.ibb.co/zHXPbt0k/8c68d46d2ac0e4e2689298db13dc9a5f.jpg',
  },
  {
    title: 'Hedging & Pruning',
    description: 'Professional trimming for healthy, great-looking plants and hedges.',
    icon: Scissors,
    image: 'https://i.ibb.co/VcnN3KGQ/4dd5f9ba83ee510c9a8f03c488bd3aba.jpg',
  },
  {
    title: 'Yard Clean-Ups & More',
    description: 'Full outdoor clean-ups to refresh and restore your space.',
    icon: Droplets,
    image: 'https://i.ibb.co/qL7Q6Bwp/f200b9bc64e4d37e80dc681ee703135d.jpg',
  },
];

const reasons = [
  "Local & Reliable Service",
  "Professional Equipment",
  "Attention to Detail",
  "Free Custom Quotes"
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-950 text-white min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/1fp0GCnt/378e7c0e48cdd63986a1f4d1c2233687.jpg"
            alt="Beautifully manicured front lawn and landscaping"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Leaf className="w-4 h-4 text-brand-300" />
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-100">Thornton's Lawn & Landscape</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-[1.05] tracking-tight">
              Transforming outdoor spaces with <span className="text-brand-300 italic font-medium">expert care.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-50/90 mb-10 max-w-xl leading-relaxed">
              Expert tree lopping, lawn care, and landscaping. Reliable, professional, and passionate about every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button nativeButton={false} render={<Link to="/contact" />} size="lg" className="bg-brand-500 hover:bg-brand-400 text-white text-base font-semibold px-8 h-14 rounded-full shadow-[0_0_20px_rgba(82,183,136,0.3)] border-0">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button nativeButton={false} render={<a href="tel:0490894087" />} size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white text-base font-semibold px-8 h-14 rounded-full backdrop-blur-sm">
                <PhoneCall className="mr-2 w-5 h-5" /> 0490 894 087
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="uppercase text-[0.85rem] tracking-[0.1em] text-brand-600 font-bold mb-4 flex items-center gap-2">
                <div className="h-px w-8 bg-brand-600" />
                About Our Business
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-6 leading-tight">
                Your local experts for a pristine outdoor space.
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Thornton's Lawn & Landscape is dedicated to transforming outdoor spaces with precision, care, and attention to detail. We take pride in delivering reliable and professional lawn care and landscaping services that enhance the beauty and value of every property.
              </p>
              <Button nativeButton={false} render={<Link to="/about" />} variant="link" className="text-brand-600 font-semibold p-0 h-auto text-lg hover:text-brand-700">
                Learn more about us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://i.ibb.co/b5RDqFBX/cb54d8d902cc33de6b699716cc9b0f44.jpg" 
                  alt="Professional lawn care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-100 rounded-full blur-3xl z-0 opacity-60" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand-200 rounded-full blur-3xl z-0 opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-6">Our Services</h2>
            <p className="text-lg text-stone-500">From routine maintenance to complete yard makeovers, we have the tools and expertise to make your property shine.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="overflow-hidden border-0 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full bg-stone-50 group transition-all hover:shadow-[0_8px_30px_rgba(64,145,108,0.1)]">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                    <p className="text-stone-500 leading-relaxed mb-6">{service.description}</p>
                    <Link to="/services" className="text-brand-600 font-semibold inline-flex items-center text-sm uppercase tracking-wider group-hover:text-brand-700 transition-colors">
                      Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button nativeButton={false} render={<Link to="/services" />} size="lg" className="rounded-full bg-stone-900 text-white hover:bg-stone-800 border-0 h-14 px-8">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-900 text-brand-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Why Choose Thornton's?</h2>
              <p className="text-brand-100/80 text-lg mb-10 leading-relaxed max-w-2xl">
                Whether it's routine maintenance or a full yard transformation, we approach every project with passion and commitment. We are trusted by the local community.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {reasons.map((reason, i) => (
                  <motion.div 
                    key={reason}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0" />
                    <span className="font-medium text-brand-50">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-500 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            Ready to enhance the beauty and value of your property?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button nativeButton={false} render={<Link to="/contact" />} size="lg" className="bg-stone-900 border-0 text-white hover:bg-stone-800 text-base font-semibold px-10 h-14 rounded-full">
              Request a Quote
            </Button>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
}
