
import React from 'react';
import { Target, Heart, Award, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Our Journey</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Asian Kid was founded to bring the rigor and precision of Asian educational methods to the global stage through 1-to-1 and focused 3-to-1 online coaching.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-navy mb-6">Expert 1-to-1 Tutoring based in India</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The Asian Kid is a specialized online education provider headquartered in India, serving students in the UK, Australia, and the US. We believe in the power of individual attention and small-group synergy.
              </p>
              <div className="space-y-4">
                {[
                  '1-to-1 Mastery: Personalized focus for every student.',
                  '3-to-1 Interaction: Small batches for collaborative learning.',
                  'Board Specialists: Expertise in GCSE, A-Level, NAPLAN, and Common Core.',
                  'Expert Mentors: Tutors trained in international pedagogical standards.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-navy font-semibold">
                    <ShieldCheck className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Tutoring" className="rounded-2xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600" alt="Students" className="rounded-2xl shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl font-extrabold text-navy">Our Core Philosophy</h2></div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="text-blue-600" />, title: 'Personalized Growth', desc: 'Our 1-to-1 model ensures no child is left behind or held back by a generic classroom pace.' },
              { icon: <Heart className="text-blue-600" />, title: 'Focused batches', desc: 'Our 3-to-1 batches are meticulously curated for maximum interaction and peer support.' },
              { icon: <Award className="text-blue-600" />, title: 'Global Excellence', desc: 'We maintain the highest standards of Indian teaching excellence adapted for global curricula.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
