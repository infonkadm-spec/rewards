import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";

export default function Page() {

  return (
    <>
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            Please do not close or refresh this page, as there may be errors when paying the fee!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-xl gap-6 px-5 py-6">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-sm text-gray-700 italic">
            We are processing your payment...
          </span>
          <Progress progress={99} />
        </div>
        <div className="flex flex-col text-center rounded-3xl gap-5 bg-white border border-gray-200 shadow-sm px-5 py-6">
          <div className="flex items-center justify-center gap-2 text-lg font-bold text-gray-800">
            <span>🎉</span>
            <span>Wait! This is your LAST chance to claim the surprise gift</span>
            <span>🎁</span>
          </div>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <p>You have been selected to receive this bonus, but access is about to expire.</p>
            <p>By leaving this page, the offer will be lost.</p>
            <p>This opportunity is unique and cannot be recovered later.</p>
          </div>
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );

};

