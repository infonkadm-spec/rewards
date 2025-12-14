"use client";

import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";
import { useEffect } from "react";

export default function Black() {
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

  return (
    <>
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
            Please do not close or refresh this page, as errors may occur when paying the fee!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-80">We are processing your fee payment…</span>
          <Progress progress={67} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          <div className="font-bold uppercase">
            <span className="text-sm font-semibold text-center">🎉 Congratulations! You won a surprise! 🎁</span>
            <br />
            <br />
            <span className="text-xs opacity-100">Click the green button below and receive it immediately!</span>
          </div>
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>
  );
}