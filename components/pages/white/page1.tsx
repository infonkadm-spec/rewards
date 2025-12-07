/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";

export default function Page1({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 bg-gradient-to-t appear border-t px-8 py-8 from-gray-50 to-gray-200/50 border-gray-300">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold">Welcome to the Rewards Program</span>
          <span>Learn how online evaluation and survey platforms work and how people can earn small rewards over time.</span>
        </div>
        <div className="rounded-lg border-2 border-dashed shadow-lg p-5 bg-green-50 border-green-500">
          <span className="font-bold uppercase">This is an educational guide about reward platforms. Earnings, if any, depend on your activity and are never guaranteed.</span>
        </div>
        <div className="flex flex-col gap-4">
          <span>Click the button below to see step-by-step how these reward platforms work.</span>
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-green-600 !border-green-700 hover:!bg-green-500">
        Access the guide
      </Button>
      <ConfettiEffect />
    </>
  );

};