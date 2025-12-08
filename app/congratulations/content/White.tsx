"use client";

import Script from "next/script";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Heart, Flame, Leaf, Utensils, ArrowDown } from "lucide-react";

// Interface para o tipo do Hotmart
interface HotmartCheckoutElements {
  init: (type: string) => {
    mount: (selector: string) => void;
  };
}

declare global {
  interface Window {
    checkoutElements?: HotmartCheckoutElements;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function White() {
  useEffect(() => {
    // Aguarda o script do Hotmart carregar e então inicializa o widget
    const initHotmartWidget = () => {
      if (typeof window !== 'undefined' && window.checkoutElements) {
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };

    // Verifica se o script já foi carregado
    if (typeof window !== 'undefined' && window.checkoutElements) {
      initHotmartWidget();
    } else {
      // Se não foi carregado ainda, aguarda o evento de load
      window.addEventListener('load', initHotmartWidget);
      return () => window.removeEventListener('load', initHotmartWidget);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Top Bar - Preserved */}
      <div className="bg-red-500 text-white text-center py-3 shadow-md relative z-50">
        <span className="text-sm md:text-base font-bold tracking-wide uppercase animate-pulse">
          Your purchase is being processed...
        </span>
      </div>

      <motion.main
        className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4 shadow-sm">
            <Star className="w-8 h-8 text-rose-500 fill-rose-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 drop-shadow-sm">
            Ready to take your transformation even further?
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            With <span className="font-semibold text-rose-600">Refining and Maximizing Your Results</span>, you&apos;ll unlock the exact strategies to keep burning fat, stay consistent, and build the body and lifestyle you&apos;ve always wanted.
          </p>
        </motion.section>

        {/* Features Grid */}
        <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Zap className="w-6 h-6 text-amber-500" />
              <span>What you get</span>
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Check, text: '6 powerful cheat codes to stay consistent and avoid the stop-and-start cycle' },
                { icon: Utensils, text: 'The 5 most filling foods that cut cravings and make weight loss simple' },
                { icon: Flame, text: 'Quick, delicious 10–15 minute meals that replace unhealthy takeout' },
                { icon: Leaf, text: 'Smart calorie density hacks to eat MORE while still losing weight' },
                { icon: Heart, text: 'Core-strengthening and mindset strategies to sculpt, sustain, and feel confident' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <item.icon className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl font-bold">We can&apos;t wait to see your next level of results!</h3>
              <p className="text-rose-100 text-lg">
                This is where your journey shifts from just losing weight to truly maximizing your lifestyle.
              </p>
              <div className="flex justify-center">
                <Heart className="w-16 h-16 text-white/80 fill-white/20 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section variants={itemVariants} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How does it work?</h2>
            <p className="text-slate-600">Refining and Maximizing Your Results is built to help you:</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Sustainable Habits", desc: "Create habits that stick instead of chasing quick fixes." },
              { title: "Volume Eating", desc: "Use high-volume, low-calorie foods to stay full and energized." },
              { title: "Mindset Mastery", desc: 'Apply mindset frameworks like "never miss twice" to bounce back quickly.' },
              { title: "Beyond Weight Loss", desc: "Refocus your plan to build strength, consistency, and confidence." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-xl mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What You Receive & CTA */}
        <motion.section variants={itemVariants} className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-800">What will you receive?</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Step-by-step habit guide", "Family-friendly recipes", "Food swaps", "Roadmap for muscle tone", "Full support"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
                  ✨ {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                Are you ready to refine your journey and maximize your results?
              </h3>

              <div className="flex flex-col items-center gap-6">
                <ArrowDown className="w-8 h-8 text-rose-400 animate-bounce" />

                {/* HOTMART - Sales Funnel Widget */}
                <div id="hotmart-sales-funnel" className="w-full max-w-md bg-white rounded-xl overflow-hidden min-h-[200px] flex items-center justify-center">
                  {/* The widget will be mounted here */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>

      {/* Script do Hotmart */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            window.checkoutElements?.init('salesFunnel').mount('#hotmart-sales-funnel');
          }
        }}
      />
    </div>
  );
}