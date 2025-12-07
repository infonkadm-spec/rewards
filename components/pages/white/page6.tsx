/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";
import { CirclePlay } from 'lucide-react';

export default function Page6({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-7 bg-gradient-to-t appear px-8 py-10 from-gray-50 to-gray-200">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold">Guide Completed</span>
          <span className="text-base font-normal">You have completed the educational guide about reward platforms.</span>
        </div>
        <div className="rounded-lg shadow-lg border p-5 bg-green-50">
          <span className="font-semibold text-base">This guide showed you how evaluation platforms work. Remember that earnings are not guaranteed and depend on external platforms and your activity.</span>
        </div>
        <div className="text-sm">
          Click the button below to see how withdrawal processes work on these platforms.
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-gray-600 !border-gray-700 hover:!bg-gray-500">
        <CirclePlay /> See how it works
      </Button>
      <ConfettiEffect />
    </>
  );

};