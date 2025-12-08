import Progress from "@/components/progress";
import HotmartUpsell from "@/components/hotmart-upsell";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        width="50"
        height="35"
        src="/youtube.svg"
        alt="YouTube Rewards"
        priority
      />
      <div className="flex flex-col gap-1">
        <span className="text-lg font-bold leading-none text-gray-900">YouTube</span>
        <span className="text-xs font-semibold leading-none tracking-wide text-gray-400">Rewards</span>
      </div>
    </div>
  );
}

function Balance() {
  return (
    <div className="flex items-center gap-3 rounded-lg border-dashed border-2 shadow-sm p-3 border-green-300 bg-white">
      <span className="text-[10px] text-right font-semibold uppercase leading-3 text-gray-900">
        Your<br />balance:
      </span>
      <span className="text-2xl font-semibold leading-none text-green-600">
        US$ 180
      </span>
    </div>
  );
}

export default function Black() {
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
        <div className="flex justify-between items-center w-full">
          <Logo />
          <Balance />
        </div>
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