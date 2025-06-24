"use client";
import React from "react";
import { Pyramid, Gem, Compass, CheckCircle } from 'lucide-react';

// Astro remedies
const astroRemedies = [
  {
    icon: <Pyramid size={32} className="text-amber-500" />,
    title: "Pyramid Energy Alignment",
    description: "Strategic placement of pyramids to neutralize negative energy and enhance positivity."
  },
  {
    icon: <Gem size={32} className="text-blue-500" />,
    title: "Crystal Harmonization",
    description: "Selection and placement of specific crystals based on planetary influences and energy requirements."
  },
  {
    icon: <Compass size={32} className="text-green-500" />,
    title: "Directional Energy Correction",
    description: "Aligning energy flows based on your birth chart and property's directional energies."
  },
  {
    icon: <CheckCircle size={32} className="text-purple-500" />,
    title: "Yantra Activation",
    description: "Installation of energized yantras to counteract specific planetary challenges from your horoscope."
  }
];

// Planetary influences
const planetaryInfluences = [
  {
    planet: "Sun",
    influence: "Career growth, father figures, authority, vitality",
    direction: "East",
    color: "Orange/Gold"
  },
  {
    planet: "Moon",
    influence: "Mind, emotions, mother figures, intuition",
    direction: "Northwest",
    color: "White/Silver"
  },
  {
    planet: "Mercury",
    influence: "Communication, intelligence, siblings, adaptability",
    direction: "North",
    color: "Green"
  },
  {
    planet: "Venus",
    influence: "Relationships, luxury, comfort, creativity",
    direction: "Southeast",
    color: "Pink/White"
  },
  {
    planet: "Mars",
    influence: "Energy, courage, siblings, ambition",
    direction: "South",
    color: "Red"
  },
  {
    planet: "Jupiter",
    influence: "Wisdom, wealth, spirituality, growth",
    direction: "Northeast",
    color: "Yellow/Gold"
  },
  {
    planet: "Saturn",
    influence: "Discipline, longevity, obstacles, perseverance",
    direction: "West",
    color: "Blue/Black"
  },
  {
    planet: "Rahu",
    influence: "Illusion, obsession, worldly desires",
    direction: "Southwest",
    color: "Grey/Smoky"
  },
  {
    planet: "Ketu",
    influence: "Spirituality, liberation, past life karma",
    direction: "Southwest",
    color: "Brown/Multi-colored"
  }
];

export default function AstroVastuPage() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7a2323] dark:text-white leading-tight">
              Astro Vastu Remedies
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Combining the ancient sciences of astrology and Vastu to provide personalized solutions that harmonize your spaces with your unique astrological chart.
            </p>
          </div>
        </div>
      </div>

      {/* Astro Remedies Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Our Astro-Vastu Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We offer specialized remedies that blend astrological insights with Vastu principles to create harmonious spaces:
            </p>
          </div>
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {astroRemedies.map((remedy, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">{remedy.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{remedy.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{remedy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
                How Astro-Vastu Works
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Our unique approach integrates your birth chart with Vastu principles to create personalized solutions:
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-[#7a2323] dark:text-purple-300 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-semibold">Birth Chart Analysis</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">We analyze your astrological chart to identify planetary influences affecting your life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-[#7a2323] dark:text-purple-300 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-semibold">Space Evaluation</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">We assess your living or working space according to Vastu principles and directional energies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-[#7a2323] dark:text-purple-300 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-semibold">Personalized Remedies</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">We create custom solutions that address both astrological challenges and spatial energy imbalances.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-[#7a2323] dark:text-purple-300 rounded-full flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h4 className="text-xl font-semibold">Implementation & Activation</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">We guide you through the proper placement and activation of remedies for maximum effectiveness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1507561880929-0169a5ab1515?q=80&w=1080&auto=format&fit=crop"
                alt="Crystal and Moon"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planetary Influences Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Planetary Influences & Directions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Each planet influences different aspects of your life and corresponds to specific directions in your space:
            </p>
          </div>
          <div className="mt-16 max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-[#7a2323] text-white">
                  <th className="p-4 text-left">Planet</th>
                  <th className="p-4 text-left">Influences</th>
                  <th className="p-4 text-left">Direction</th>
                  <th className="p-4 text-left">Color Energy</th>
                </tr>
              </thead>
              <tbody>
                {planetaryInfluences.map((planet, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}>
                    <td className="p-4 font-medium">{planet.planet}</td>
                    <td className="p-4">{planet.influence}</td>
                    <td className="p-4">{planet.direction}</td>
                    <td className="p-4">{planet.color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Discover Your Personalized Astro-Vastu Solution
          </h2>
          <p className="text-xl mx-auto mt-6 mb-10 max-w-3xl text-white/90">
            Let us help you harmonize your space with your unique astrological chart for improved wellbeing and prosperity.
          </p>
          <div>
            <a href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform transition-all duration-300 hover:scale-105">
              Book Your Astro-Vastu Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 