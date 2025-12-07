"use client";

import CountUp from '@/components/countUp';

export default function Progress({
  progress,
}:{
  progress: number,
}) {

  const progressBarStyle = {
    width: `0%`,
    animation: `progressBar 4s ease-out forwards`,
  };

  const progressBarAnimation = (
    <style jsx>
      {`
        @keyframes progressBar {
          0%   { width: 0%; }
          100% { width: ${progress}%; }
        }
      `}
    </style>
  );

  return (
    <div className="flex items-center w-full rounded-xl relative bg-white h-5">
      <div className="bg-green-500 flex items-center justify-center h-5 leading-none rounded-xl transition-all duration-500 delay-500" style={progressBarStyle} />
      <span className="absolute left-0 w-full text-xs text-center font-bold text-white z-10">
        <CountUp start={0} end={progress} duration={3000} /> %
      </span>
      {progressBarAnimation}
    </div>
  );
}