import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Mockup from "@/assets/Mockup.png";

const Subscription = () => {
  return (
    <div className='w-5/6 mx-auto md:my-32 my-14 relative'>
      <div className='md:flex justify-between'>
        <div className='md:w-3/5'>
          <h2 className='text-black leading-snug font-semibold md:text-4xl text-3xl'>
            Ready to clear the path to perfect communication?
          </h2>
          <div className='md:ml-4 my-5 flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <CheckCircleIcon className='text-blue-600 w-5 h-5' />
              <p>30 days free trial</p>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircleIcon className='text-blue-600 w-5 h-5' />
              <p>Cancel at any time</p>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircleIcon className='text-blue-600 w-5 h-5' />
              <p>Access to all features</p>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircleIcon className='text-blue-600 w-5 h-5' />
              <p>Personalized onboarding</p>
            </div>
          </div>
          <div className='flex text-sm gap-2'>
            <div className='border border-slate-400 py-2 px-4 rounded-full'>
              Talk to sales
            </div>
            <div className='bg-blue-700 py-2 px-4 rounded-full text-white'>
              Sign up for free
            </div>
          </div>
        </div>
        <img src={Mockup} className='md:w-3/5 -mr-24 md:-mt-10 mt-10' alt='' />
      </div>
    </div>
  );
};

export default Subscription;
