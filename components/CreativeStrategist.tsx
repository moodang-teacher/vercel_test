
import React, { useState } from 'react';
import { generateCreativeStrategy } from '../services/geminiService';

const CreativeStrategist: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const data = await generateCreativeStrategy(input);
      setResult(data);
    } catch (error) {
      console.error("Strategy generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white p-8 md:p-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Consult our <br /><span className="italic text-gray-400">Creative Oracle.</span>
          </h2>
          <p className="text-lg font-light text-gray-400 mb-12 max-w-md">
            Enter a prompt to generate a brand strategy combining 3D character design with your industry needs.
          </p>
          
          <form onSubmit={handleSubmit} className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. A luxury skincare brand reimagined..."
              className="w-full bg-transparent border-b border-gray-700 py-4 px-0 text-2xl focus:outline-none focus:border-white transition-colors"
            />
            <button 
              type="submit"
              disabled={loading}
              className={`absolute right-0 bottom-4 uppercase text-xs tracking-widest font-bold ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-400'}`}
            >
              {loading ? 'Synthesizing...' : 'Generate'}
            </button>
          </form>
        </div>

        <div className="bg-[#242424] p-12 rounded-lg border border-gray-800 min-h-[400px] flex items-center justify-center">
          {!result && !loading && (
            <div className="text-center text-gray-500 font-serif italic text-xl">
              Waiting for your creative spark.
            </div>
          )}
          
          {loading && (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Mapping Neural Pathways</p>
            </div>
          )}

          {result && !loading && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-4">Strategy Report</span>
              <h3 className="text-3xl font-serif mb-6">{result.title}</h3>
              <p className="text-gray-400 font-light mb-8 leading-relaxed">
                {result.strategy}
              </p>
              <div className="flex flex-wrap gap-2">
                {result.concepts.map((concept: string, idx: number) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-tight text-gray-300">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreativeStrategist;
