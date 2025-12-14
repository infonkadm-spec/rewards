"use client";

import Script from "next/script";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, BookOpen, Video } from "lucide-react";

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
  // BACK REDIRECT
  useEffect(() => {
    function setBackRedirect(url: string) {
      let urlBackRedirect = url;
      urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      
      const handlePopState = () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      };
      
      window.addEventListener('popstate', handlePopState);
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }

    const backLink = '/lastchance';
    const cleanup = setBackRedirect(backLink);
    return cleanup;
  }, []);

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
      {/* Top Bar */}
      <div className="bg-red-500 text-white text-center py-3 shadow-md relative z-50">
        <div className="flex flex-col gap-1">
          <span className="text-sm md:text-base font-bold tracking-wide uppercase animate-pulse">
            Your purchase is being processed...
          </span>
          <span className="text-xs md:text-sm font-medium">
            Please do not close this page.
          </span>
        </div>
      </div>

      <motion.main
        className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.section variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 drop-shadow-sm">
            Ready to take the next step and start editing videos with confidence?
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            With <span className="font-semibold text-rose-600">Play Pro</span>, you&apos;ll learn the first steps of video editing in a simple and practical way using CapCut, even if you&apos;re starting from absolute zero.
          </p>
        </motion.section>

        {/* Subheadline */}
        <motion.section variants={itemVariants} className="text-center space-y-4">
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Stop feeling stuck, confused, or wasting time trying to edit videos without knowing where to start.
          </p>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Play Pro was created for beginners who want to learn editing the right way, without complications.
          </p>
        </motion.section>

        {/* Section - What you'll learn */}
        <motion.section variants={itemVariants} className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2 text-slate-800 text-center justify-center">
            <BookOpen className="w-7 h-7 text-rose-500" />
            <span>What you&apos;ll learn</span>
          </h3>
          <ul className="space-y-5 max-w-3xl mx-auto">
            {[
              { icon: Check, text: 'The fundamental concepts of video editing, explained in a simple way.' },
              { icon: Check, text: 'How to use the essential tools inside CapCut, step by step.' },
              { icon: Check, text: 'How to organize your clips to create clean and engaging videos.' },
              { icon: Check, text: 'Basic techniques to improve videos for social media and online content.' },
              { icon: Check, text: 'How to edit videos confidently, even with zero previous experience.' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-700">
                <item.icon className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-base md:text-lg leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Highlight Box */}
        <motion.section variants={itemVariants} className="bg-gradient-to-br from-rose-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">We can&apos;t wait to see your first videos come to life!</h3>
            <p className="text-rose-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              This is where you stop saying &quot;I don&apos;t know how to edit&quot; and start creating simple, organized, and professional-looking videos using CapCut.
            </p>
            <div className="flex justify-center">
              <Video className="w-16 h-16 text-white/80 fill-white/20 animate-pulse" />
            </div>
          </div>
        </motion.section>

        {/* Section - How does it work? */}
        <motion.section variants={itemVariants} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How does it work?</h2>
            <p className="text-slate-600 text-lg">Play Pro was designed to help you start the right way:</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Simple Beginning", desc: "Learn from scratch with clear explanations and no technical jargon." },
              { title: "CapCut in Practice", desc: "Discover the main CapCut tools and how to use them effectively." },
              { title: "Visual, Step-by-Step Lessons", desc: "Watch exactly where to click and how to edit, without confusion." },
              { title: "Immediate Application", desc: "Learn today and start editing your own videos right away." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-2xl mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-800 mb-3 text-lg">{feature.title}</h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section - What you'll get */}
        <motion.section variants={itemVariants} className="space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">What you&apos;ll get</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                { emoji: "🎬", text: "Complete beginner video editing course using CapCut" },
                { emoji: "📱", text: "Basic editing techniques for social media videos" },
                { emoji: "🧩", text: "Simple video organization and structure" },
                { emoji: "🚀", text: "Strong foundation to improve your editing skills" },
                { emoji: "✅", text: "Beginner-friendly content, no experience required" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-3 bg-purple-50 text-purple-700 rounded-full text-sm md:text-base font-medium border border-purple-100">
                  <span className="text-lg">{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final Call to Action */}
        <motion.section variants={itemVariants} className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Are you ready to improve your videos and start editing with confidence?
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Add Play Pro to your order now and learn video editing in a simple, practical, and beginner-friendly way.
            </p>

            <div className="flex flex-col items-center gap-6">
              <p className="text-base text-slate-400 font-medium">
                ⬇️ Click below to unlock immediate access to Play Pro
              </p>

              {/* HOTMART - Sales Funnel Widget */}
              <div id="hotmart-sales-funnel" className="w-full max-w-md bg-white rounded-xl overflow-hidden min-h-[200px] flex items-center justify-center">
                {/* The widget will be mounted here */}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.section variants={itemVariants} className="text-center py-8">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            ℹ️ This course is designed for beginners and focuses on teaching essential video editing skills using CapCut.
          </p>
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