import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import bgImage from './assets/server-bg.jpg';

function LoginApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login credentials:', { email, password });
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* طبقة تظليل داكنة لضمان وضوح الكرت والنصوص */}
      <div className="absolute inset-0 bg-[#0b0f1a]/80 backdrop-blur-[2px]"></div>

      {/* كرت تسجيل الدخول */}
      <div className="relative z-10 w-full max-w-[360px] bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
          B2B SERVICE DESK
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Authorized Personnel Only
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wider">
              EMAIL / USERNAME
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-300 mb-1 tracking-wider">
              PASSWORD
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-3.5 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 mt-2 bg-[#1f2d52] hover:bg-[#293b6a] text-white font-bold rounded-full text-sm tracking-wide transition-colors shadow-md cursor-pointer border border-blue-400/20"
          >
            LOGIN
          </button>
        </form>

        {/* تم حذف Register والإبقاء فقط على رابط المساعدة/استعادة كلمة المرور */}
        <div className="mt-5 text-center text-xs">
          <a href="#forgot" className="text-blue-400 hover:text-blue-300 transition-colors">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <LoginApp />
  </React.StrictMode>
);