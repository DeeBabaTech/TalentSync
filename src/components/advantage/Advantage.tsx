import { Advant } from "@/hook/types";

const Advantage = ({ title, paragraph, icon }: Advant) => {
  return (
    <div className='md:w-[44%] md:block
     flex flex-col items-center mx-auto text-center md:text-start'>
      <img src={icon} alt={`${icon}-icon`} className="w-18 md:w-fit" />
      <div className='font-semibold text-black my-2 mt-5'>{title}</div>
      <div className='text-sm'>{paragraph}</div>
    </div>
  );
};

export default Advantage;
