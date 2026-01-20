
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, UserPlus, PlayCircle, BarChart3, ChevronRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Free 1-to-1 Demo',
      desc: 'Experience our teaching style with a personalized trial session focused purely on your child\'s academic gaps.'
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Select Your Format',
      desc: 'Choose between 1-to-1 intensive coaching or our high-interaction 3-to-1 small group batches.'
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: 'Start Live Classes',
      desc: 'Login to our digital classroom and begin learning with top-tier Indian faculty focused on your region\'s curriculum.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Monthly Success Reports',
      desc: 'Get granular data on performance, attendance, and grade improvement milestones every 4 weeks.'
    }
  ];

  // Specific high-quality unsplash IDs for education
  const images = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div>
      <section className="bg-navy py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">The Asian Kid Method</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">A proven approach to academic success through 1-to-1 and small group focus.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 mb-8">{step.icon}</div>
                  <h2 className="text-3xl font-extrabold text-navy mb-6"><span className="text-blue-600 block text-sm uppercase tracking-widest mb-2">Step 0{idx + 1}</span>{step.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{step.desc}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                    <img 
                      src={images[idx]} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
