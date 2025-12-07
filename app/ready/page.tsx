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
          <span className="text-sm text-gray-700">
            We are processing your fee payment...
          </span>
          <Progress progress={67} />
        </div>
        <div className="flex flex-col text-center rounded-3xl gap-5 bg-white border border-gray-200 shadow-sm px-5 py-6">
          <div className="flex items-center justify-center gap-2 text-lg font-bold text-gray-800 uppercase">
            <span>🎉</span>
            <span>CONGRATULATIONS! YOU WON A SURPRISE!</span>
            <span>🎁</span>
          </div>
          <div className="text-sm font-semibold text-gray-700 uppercase">
            CLICK THE GREEN BUTTON BELOW AND RECEIVE IT IMMEDIATELY!
          </div>
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );

};