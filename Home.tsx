
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Users, Video, ClipboardCheck, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, COUNTRY_EXAMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider mb-6">
                1-to-1 & 3-to-1 Experts
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
                Personalized Learning with <span className="text-blue-600">The Asian Kid</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Premium online tutoring for students in the UK, Australia, and USA. Master GCSE, NAPLAN, SAT and more with top-tier Indian faculty.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-navy text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-navy/20 active:scale-95 text-center">
                  Book Free Demo
                </Link>
                <Link to="/countries" className="bg-white text-navy border-2 border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all text-center">
                  Explore Curricula
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500">
                <div className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Grade Improvement</div>
                <div className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> 1-to-1 Specialists</div>
                <div className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> Global Exam Focused</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" alt="Student learning online" className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full"><Video className="text-green-600" size={20} /></div>
                    <div><p className="text-xs font-bold text-slate-500 uppercase">Live 1-to-1</p><p className="text-sm font-bold text-navy">Global Exam Mastery</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries / Exams Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">Global Exam Experts</h2>
            <p className="text-lg text-slate-600">We specialize in international curricula, providing students with the tools to excel in their national exams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COUNTRY_EXAMS.map((item) => (
              <div key={item.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-4xl mb-6">{item.flag}</div>
                <h3 className="text-2xl font-bold text-navy mb-4">{item.country}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.exams.map((exam, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">{exam}</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-6">{item.description}</p>
                <Link to="/countries" className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">Why The Asian Kid?</h2>
            <p className="text-lg text-slate-600">Our signature 1-to-1 and small-batch 3-to-1 models are designed for maximum output.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="text-blue-600" />, title: '1-to-1 Personalization', desc: 'Custom tailored learning plans focusing exclusively on your child\'s pace and needs.' },
              { icon: <TrendingUp className="text-blue-600" />, title: '3-to-1 Interaction', desc: 'Focused small groups that encourage healthy peer discussion while ensuring individual attention.' },
              { icon: <ShieldCheck className="text-blue-600" />, title: 'Expert Indian Tutors', desc: 'Subject matter experts with deep knowledge of UK, US, and AU curricula.' },
              { icon: <ClipboardCheck className="text-blue-600" />, title: 'Rigorous Assessment', desc: 'Weekly tests and detailed reports shared regularly with parents for transparency.' },
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Student Success Stories</h2>
            <div className="flex justify-center space-x-1">{[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={24} />)}</div>
            <p className="mt-4 text-slate-400">Trusted by families in the UK, USA, and Australia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <p className="text-lg text-slate-300 italic mb-6">"{t.content}"</p>
                <div><h4 className="font-bold text-lg">{t.name}</h4><p className="text-blue-400 text-sm uppercase tracking-widest">{t.location}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white rounded-3xl shadow-2xl p-12 lg:p-20 relative overflow-hidden border border-slate-100">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy mb-6">Master Your Exams</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Book your first 1-to-1 demo class today and experience the Asian Kid advantage.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center">
              Book Your Free Demo <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
