/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import VSLGray from '@/components/videos/vsl-gray';

export default function Page7({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {


  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-5 bg-gradient-to-t appear px-2 pt-7 pb-2 from-gray-50 to-gray-200">
        <span className="text-base sm:text-xl font-semibold tracking-tight">
          Watch the video for an informative overview of how digital platforms work.
        </span>
      </div>
      
      <div className="flex items-center flex-col gap-8 relative">
        <VSLGray />
      </div>

      <div className="text-sm text-center p-2">
        🔊 Check if your sound is activated
      </div>
    </>
  );
}
