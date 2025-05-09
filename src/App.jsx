// File: App.jsx
import React from 'react';
import CloudForm from './components/CloudForm';
import CostBreakdown from './components/CostBreakdown';
import ComparisonChart from './components/ComparisonChart';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans text-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <header className="text-center mb-20 animate-fade-in">
          <div className="inline-block p-3 px-6 mb-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl">☁️</span>
          </div>
          <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 animate-gradient">
            Cloud Cost Estimator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compare cloud compute costs visually and interactively. Make informed decisions with our intuitive cost analysis tool.
          </p>
        </header>

        <div className="space-y-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] border border-white/20 hover:border-white/40">
            <CloudForm />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] border border-white/20 hover:border-white/40">
              <CostBreakdown />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] border border-white/20 hover:border-white/40">
              <ComparisonChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
