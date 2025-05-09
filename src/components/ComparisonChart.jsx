// File: components/ComparisonChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useEstimatorStore from '../store/useEstimatorStore';

export default function ComparisonChart() {
  const { instance, hours, storage } = useEstimatorStore();

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

  const providers = ['AWS', 'GCP', 'Azure'];

  const data = providers.map((provider) => {
    const computeRate = costPerHour[provider]?.[instance] || 0;
    const compute = computeRate * hours;
    const storageCost = (storageCostPerGB[provider] || 0) * storage;
    return {
      provider,
      cost: +(compute + storageCost).toFixed(2),
    };
  });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100/50 transform transition-all duration-200 hover:scale-105">
          <p className="text-sm font-medium text-gray-900 flex items-center">
            <span className="mr-2">☁️</span>
            {label}
          </p>
          <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mt-1">${payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-10 tracking-tight animate-gradient">Cost Comparison</h2>
      <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/20">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0.4}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis 
                dataKey="provider" 
                fontSize={14} 
                tick={{ fill: '#4B5563' }}
                axisLine={{ stroke: '#E5E7EB' }}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis 
                fontSize={14} 
                tick={{ fill: '#4B5563' }}
                axisLine={{ stroke: '#E5E7EB' }}
                tickLine={false}
                tickFormatter={(value) => `$${value}`}
                padding={{ top: 20, bottom: 20 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="cost" 
                fill="url(#colorGradient)" 
                radius={[8, 8, 0, 0]}
                maxBarSize={80}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center">
            <span className="mr-2">📊</span>
            Comparing monthly costs across cloud providers for {instance} instance
          </p>
          <p className="text-xs text-gray-400 mt-2 flex items-center justify-center">
            <span className="mr-1">💡</span>
            Hover over bars to see detailed costs
          </p>
        </div>
      </div>
    </div>
  );
}
