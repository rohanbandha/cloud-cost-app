// File: components/CloudForm.jsx
import React from 'react';
import useEstimatorStore from '../store/useEstimatorStore';

export default function CloudForm() {
  const { provider, instance, hours, storage, setFormValue } = useEstimatorStore();

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-10 tracking-tight animate-gradient">Select Cloud Options</h2>
      <form className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3 group">
          <label className="block text-gray-700 font-medium text-sm uppercase tracking-wider group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
            <span className="mr-2">☁️</span>
            Provider
          </label>
          <select
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-gray-900 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md group-hover:border-indigo-200"
            value={provider}
            onChange={(e) => setFormValue('provider', e.target.value)}
          >
            <option value="AWS">AWS</option>
            <option value="GCP">GCP</option>
            <option value="Azure">Azure</option>
          </select>
        </div>
        <div className="space-y-3 group">
          <label className="block text-gray-700 font-medium text-sm uppercase tracking-wider group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
            <span className="mr-2">⚡</span>
            Instance Type
          </label>
          <select
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-gray-900 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md group-hover:border-indigo-200"
            value={instance}
            onChange={(e) => setFormValue('instance', e.target.value)}
          >
            <option value="">Select Instance</option>
            {provider === 'AWS' && (
              <>
                <option value="t2.micro">t2.micro</option>
                <option value="t2.medium">t2.medium</option>
                <option value="m5.large">m5.large</option>
              </>
            )}
            {provider === 'GCP' && (
              <>
                <option value="e2-medium">e2-medium</option>
                <option value="n1-standard-1">n1-standard-1</option>
              </>
            )}
            {provider === 'Azure' && (
              <>
                <option value="B1s">B1s</option>
                <option value="D2s v3">D2s v3</option>
              </>
            )}
          </select>
        </div>
        <div className="space-y-3 group">
          <label className="block text-gray-700 font-medium text-sm uppercase tracking-wider group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
            <span className="mr-2">⏱️</span>
            Hours / Month
          </label>
          <input
            type="number"
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-gray-900 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md group-hover:border-indigo-200"
            value={hours}
            onChange={(e) => setFormValue('hours', Number(e.target.value))}
            min="0"
            placeholder="Enter hours per month"
          />
        </div>
        <div className="space-y-3 group">
          <label className="block text-gray-700 font-medium text-sm uppercase tracking-wider group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
            <span className="mr-2">💾</span>
            Storage (GB)
          </label>
          <input
            type="number"
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-gray-900 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md group-hover:border-indigo-200"
            value={storage}
            onChange={(e) => setFormValue('storage', Number(e.target.value))}
            min="0"
            placeholder="Enter storage in GB"
          />
        </div>
      </form>
    </div>
  );
}
