import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

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
              Let’s Transform Your Outdoor Space
            </h1>
            <p className="text-lg leading-8 text-brand-100 max-w-2xl mx-auto">
              Get in touch for a free quote or to discuss your landscaping needs. We're ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-1">Call Us</h3>
                    <p className="text-stone-500 mb-2">Available Mon-Fri, 7am - 5pm.</p>
                    <a href="tel:0490894087" className="text-brand-600 font-medium hover:text-brand-700 text-lg">0490 894 087</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-1">Follow Us</h3>
                    <p className="text-stone-500 mb-2">See our latest work on Instagram.</p>
                    <a href="https://www.instagram.com/thorntonslawnandlandscaping?igsh=MmUzc2YwMWt6bzVn" target="_blank" rel="noreferrer" className="text-brand-600 font-medium hover:text-brand-700">@thorntonslawnandlandscaping</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-1">Email Us</h3>
                    <p className="text-stone-500 mb-2">Send us a message anytime.</p>
                    <span className="text-stone-700 font-medium">Use the contact form below</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-brand-50 rounded-2xl border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">Why work with us?</h3>
                <p className="text-brand-700">We offer free, no-obligation quotes for all residential properties. We pride ourselves on transparent pricing and reliable service.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100"
            >
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Request a Quote</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-brand-50 border border-brand-200 text-brand-800 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <Button 
                    onClick={() => setFormStatus('idle')} 
                    variant="outline" 
                    className="mt-6 border-brand-300 text-brand-700 hover:bg-brand-100"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-700">Full Name</Label>
                    <Input id="name" required placeholder="John Doe" className="bg-stone-50/50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-stone-700">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="0490 894 087" className="bg-stone-50/50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-stone-700">How can we help?</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Tell us about your property and what services you need..." 
                      className="min-h-[150px] bg-stone-50/50 resize-y"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-brand-600 hover:bg-brand-500 text-white rounded-full h-12 text-base font-semibold border-0"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : (
                      <>
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
