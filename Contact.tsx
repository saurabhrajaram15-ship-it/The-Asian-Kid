
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageCircle, Send, Phone, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'UK',
    grade: 'Year 4-6',
    format: '1-to-1',
    message: ''
  });

  const validatePhone = (number: string) => {
    // Strip spaces, hyphens, and brackets for validation
    const cleanNumber = number.replace(/[\s\-\(\)]/g, '');
    
    // UK: +44 followed by 10 digits
    const ukRegex = /^\+44\d{10}$/;
    // USA: +1 followed by 10 digits
    const usaRegex = /^\+1\d{10}$/;
    // Australia: +61 followed by 9 digits
    const auRegex = /^\+61\d{9}$/;

    if (ukRegex.test(cleanNumber)) return true;
    if (usaRegex.test(cleanNumber)) return true;
    if (auRegex.test(cleanNumber)) return true;
    
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');

    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid UK (+44), USA (+1), or Australia (+61) international number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzddvlyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          parent_name: formData.name,
          _replyto: formData.email,
          phone_number: formData.phone,
          target_country: formData.country,
          tutoring_format: formData.format,
          grade: formData.grade,
          message: formData.message
        })
      });

      if (response.ok) {
        alert('Thank you! Your enquiry has been submitted successfully.');
        navigate('/');
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Start Your Journey</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Book your free 1-to-1 demo session and see the individual focus we provide.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-5 mb-12 lg:mb-0 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-navy mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0"><Mail /></div>
                    <div><h4 className="font-bold text-navy">Email Support</h4><p className="text-slate-600">hello@theasiankid.com</p></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0"><MessageCircle /></div>
                    <div><h4 className="font-bold text-navy">WhatsApp</h4><p className="text-slate-600">+91 98765 43210</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-2xl border border-slate-100">
                <h2 className="text-3xl font-extrabold text-navy mb-8">Enquiry Form</h2>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Name</label>
                      <input 
                        required 
                        type="text" 
                        name="parent_name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Email</label>
                      <input 
                        required 
                        type="email" 
                        name="_replyto"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Phone Number (Required: UK/USA/AU)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={18} className={`${phoneError ? 'text-red-500' : 'text-slate-400'}`} />
                        </div>
                        <input 
                          required 
                          type="tel" 
                          name="phone_number"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${phoneError ? 'border-red-500 bg-red-50' : 'border-slate-200'} outline-none focus:ring-2 focus:ring-blue-600`} 
                          value={formData.phone} 
                          onChange={e => {
                            setFormData({...formData, phone: e.target.value});
                            if(phoneError) setPhoneError('');
                          }} 
                          placeholder="+44 1234 567890"
                        />
                      </div>
                      {phoneError && (
                        <div className="mt-2 flex items-center text-red-500 text-xs font-bold animate-pulse">
                          <AlertCircle size={14} className="mr-1" />
                          {phoneError}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Target Country</label>
                      <select 
                        name="country"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" 
                        value={formData.country} 
                        onChange={e => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="US">United States</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Preferred Format</label>
                      <select 
                        name="tutoring_format"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" 
                        value={formData.format} 
                        onChange={e => setFormData({...formData, format: e.target.value})}
                      >
                        <option value="1-to-1">1-to-1 Personal</option>
                        <option value="3-to-1">3-to-1 Group</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Student's Grade / Exam Focus</label>
                      <select 
                        name="grade"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" 
                        value={formData.grade} 
                        onChange={e => setFormData({...formData, grade: e.target.value})}
                      >
                        <option value="Year 4-6">Year 4-6 (Foundational)</option>
                        <option value="Year 7-9">Year 7-9 (Middle School)</option>
                        <option value="GCSE">GCSE / IGCSE</option>
                        <option value="A-Level">A-Level / HSC / SAT</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Additional Details (Optional)</label>
                    <textarea 
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600" 
                      placeholder="Tell us about your child's learning needs..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-navy text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Demo'} <Send className="ml-2" size={20} />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Note: We only accept international student enquiries from the UK, USA, and Australia.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
