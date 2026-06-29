'use client';

import { useState } from 'react';

export default function CustomizePage() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    allergies: [] as string[],
    restrictions: [] as string[],
    dislikes: '',
  });

  const allergyOptions = ['Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Shellfish'];
  const restrictionOptions = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Halal', 'Kosher'];

  const toggleOption = (list: 'allergies' | 'restrictions', value: string) => {
    setFormData(prev => ({
      ...prev,
      [list]: prev[list].includes(value)
        ? prev[list].filter(i => i !== value)
        : [...prev[list], value],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-header font-bold text-forest-green mb-2">
        Customize Your Plate 🎨
      </h1>
      <p className="text-zinc-600 font-body mb-8">
        Tell us about your little one so our nutritionists can create the perfect balance.
      </p>

      <form className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-header font-bold text-forest-green">Child&apos;s Name</label>
            <input
              type="text"
              value={formData.childName}
              onChange={e => setFormData({ ...formData, childName: e.target.value })}
              placeholder="e.g. Leo"
              className="px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-coral outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-header font-bold text-forest-green">Age</label>
            <input
              type="number"
              value={formData.childAge}
              onChange={e => setFormData({ ...formData, childAge: e.target.value })}
              placeholder="3-10"
              className="px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-coral outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-header font-bold text-forest-green">Allergies</label>
          <div className="flex flex-wrap gap-2">
            {allergyOptions.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleOption('allergies', opt)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all border ${
                  formData.allergies.includes(opt)
                    ? 'bg-coral text-white border-coral'
                    : 'bg-white text-zinc-600 border-zinc-300 hover:border-coral'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-header font-bold text-forest-green">Dietary Restrictions</label>
          <div className="flex flex-wrap gap-2">
            {restrictionOptions.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleOption('restrictions', opt)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all border ${
                  formData.restrictions.includes(opt)
                    ? 'bg-forest-green text-white border-forest-green'
                    : 'bg-white text-zinc-600 border-zinc-300 hover:border-forest-green'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-header font-bold text-forest-green">Things they absolutely hate</label>
          <textarea
            value={formData.dislikes}
            onChange={e => setFormData({ ...formData, dislikes: e.target.value })}
            placeholder="e.g. Mushy peas, olives..."
            className="px-4 py-2 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-coral outline-none transition-all h-24"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-coral text-white rounded-full font-bold text-lg hover:bg-forest-green transition-all shadow-lg"
        >
          Save Preferences ✨
        </button>
      </form>
    </div>
  );
}
