
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { COURSES } from '../constants';

const CoursesPage: React.FC = () => {
  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy mb-6">Course Formats</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose between intensive 1-to-1 sessions or our signature 3-to-1 focused batches for all levels.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
                <div className="p-1 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-5xl">{course.icon}</div>
                    <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Available in 1-to-1</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-navy mb-4">{course.gradeLevel}</h3>
                  <p className="text-slate-600 mb-8 text-lg">{course.description}</p>
                  <div className="space-y-4 mb-10">
                    <p className="font-bold text-navy uppercase text-sm tracking-widest flex items-center"><BookOpen size={16} className="mr-2 text-blue-600" /> Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((sub, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200">{sub}</span>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                    Enquire for 1-to-1 or 3-to-1 <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
