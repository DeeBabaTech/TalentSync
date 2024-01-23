import { Quest } from "@/hook/types";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import "animate.css";

const Question = ({ question, response }: Quest) => {
  const [answer, setAnswer] = useState<boolean>(false);
  const background = answer ? 'bg-slate-100 rounded-xl' : ''

  return (
    <div className={`${background} border-t-2 border-slate-200 relative p-4 text-sm`}>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={() => setAnswer(!answer)}>
        <div className='text-black font-semibold w-4/5 md:w-full'>{question}</div>
        {answer ? (
          <MinusCircleIcon className='h-5 w-5' />
        ) : (
          <PlusCircleIcon className='h-5 w-5' />
        )}
      </div>
      <div
        className={
          answer
            ? "transition-all duration-200 pt-5 animate__animated animate__fadeIn animate__slow"
            : "h-0 transition-all text-white"
        }>
        {response}
      </div>
    </div>
  );
};

export default Question;
