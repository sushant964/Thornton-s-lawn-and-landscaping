import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-brand-900 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/1fp0GCnt/378e7c0e48cdd63986a1f4d1c2233687.jpg"
            alt="Lawn care professional"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Leaf className="w-4 h-4 text-brand-300" />
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-100">Our Story</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-stone max-w-none"
          >
            <p className="text-2xl text-stone-900 leading-snug font-medium mb-10">
              Thornton's Lawn & Landscape is dedicated to transforming outdoor spaces with precision, care, and attention to detail.
            </p>
            
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              We take pride in delivering reliable and professional lawn care and landscaping services that enhance the beauty and value of every property in our community. Our goal has always been to provide exceptional service that our clients can depend on, season after season.
            </p>

            <p className="text-stone-600 mb-10 leading-relaxed text-lg">
              Whether it's routine maintenance or a full yard transformation, we approach every project with passion and commitment. From the first cut to the final cleanup, we treat your property with the same care and respect as if it were our own.
            </p>

            <div className="my-16 rounded-3xl overflow-hidden shadow-xl aspect-video relative">
              <img 
                src="https://loremflickr.com/1600/900/landscaping,lawn/all" 
                alt="Our landscaping team at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-16 pt-16 border-t border-stone-100">
              <div className="bg-stone-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Our Mission</h3>
                <p className="text-stone-600 leading-relaxed inline">
                  To provide top-tier lawn and landscaping services that exceed client expectations, build lasting relationships, and make every outdoor space a place to be proud of.
                </p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Our Promise</h3>
                <p className="text-stone-600 leading-relaxed inline">
                  We stand by our work. When you hire Thornton's, you're getting a team that shows up on time, works with integrity, and never cuts corners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
