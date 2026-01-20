
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';
import { COUNTRY_EXAMS } from '../constants';

const CountriesPage: React.FC = () => {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy mb-6">Global Curricula & Exams</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We offer expert coaching specifically designed for the academic standards of the UK, Australia, and the USA.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {COUNTRY_EXAMS.map((item) => (
              <div key={item.id} className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
                <div className="p-1 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="p-8 md:p-12 lg:flex lg:gap-16">
                  <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <div className="text-6xl mb-6">{item.flag}</div>
                    <h2 className="text-4xl font-extrabold text-navy mb-4">{item.country}</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-bold text-navy mb-6 flex items-center">
                      <GraduationCap className="mr-3 text-blue-600" /> Exams We Specialize In:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {item.exams.map((exam, i) => (
                        <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                          <CheckCircle className="text-blue-600 mr-3 shrink-0" size={20} />
                          <span className="font-bold text-navy">{exam}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-600 mb-8 p-6 border-l-4 border-blue-600 bg-blue-50/30 italic">
                      {item.details}
                    </p>
                    <Link to="/contact" className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                      Enquire for {item.country} <ArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Need support for a different curriculum?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Our faculty has extensive experience with various international boards. Contact us to see if we can accommodate your specific needs.
          </p>
          <Link to="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
            Contact Academic Counselor <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CountriesPage;
