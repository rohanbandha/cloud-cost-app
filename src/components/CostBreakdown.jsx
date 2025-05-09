// File: components/CostBreakdown.jsx
import React from 'react';
import useEstimatorStore from '../store/useEstimatorStore';

export default function CostBreakdown() {
  const { provider, instance, hours, storage } = useEstimatorStore();

  const costPerHour = {
    AWS: { 't2.micro': 0.0116, 't2.medium': 0.0464, 'm5.large': 0.096 },
    GCP: { 'e2-medium': 0.0346, 'n1-standard-1': 0.0475 },
    Azure: { B1s: 0.012, 'D2s v3': 0.096 },
  };

  const storageCostPerGB = {
    AWS: 0.023,
    GCP: 0.020,
    Azure: 0.018,
  };

  const computeCost = (costPerHour[provider]?.[instance] || 0) * hours;
  const storageCost = (storageCostPerGB[provider] || 0) * storage;
  const totalCost = computeCost + storageCost;

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-10 tracking-tight animate-gradient">Cost Breakdown</h2>
      <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/20">
        <div className="space-y-8">
          <div className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md border border-gray-100/50 group">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center group-hover:text-indigo-600 transition-colors duration-200">
                <span className="mr-2">⚡</span>
                Compute Cost
              </h3>
              <p className="text-sm text-gray-600 mt-2">Based on {hours} hours of {instance}</p>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-200">${computeCost.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md border border-gray-100/50 group">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center group-hover:text-indigo-600 transition-colors duration-200">
                <span className="mr-2">💾</span>
                Storage Cost
              </h3>
              <p className="text-sm text-gray-600 mt-2">{storage} GB of storage</p>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-200">${storageCost.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between p-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl text-white transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider opacity-90 flex items-center group-hover:opacity-100 transition-opacity duration-200">
                <span className="mr-2">💰</span>
                Total Monthly Cost
              </h3>
              <p className="text-sm opacity-75 mt-2 group-hover:opacity-90 transition-opacity duration-200">Including compute and storage</p>
            </div>
            <span className="text-4xl font-bold group-hover:scale-110 transition-transform duration-200">${totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
