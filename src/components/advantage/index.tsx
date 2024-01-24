import { Advant } from "@/hook/types";
import Advantage from "./Advantage";
import zap1 from "@/assets/zap1.png";
import zap2 from "@/assets/zap2.png";
import zap3 from "@/assets/zap3.png";
import zap4 from "@/assets/zap4.png";
import Rectangle from "@/assets/Rectangle.png";

const advantages: Advant[] = [
  {
    icon: zap1,
    title: "Crystal-clear HD video",
    paragraph:
      "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    icon: zap2,
    title: "Noise-canceling audio",
    paragraph:
      "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    icon: zap3,
    title: "Scheduling made easy",
    paragraph:
      "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: zap4,
    title: "Bank-grade security",
    paragraph:
      "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

const Advantages = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <div className='md:w-7/12 mb-10'>
        <p className='text-blue-700 text-sm'>The ClearLink Advantage</p>
        <div className='text-black font-semibold text-3xl my-3'>
          Why Choose ClearLink?
        </div>
        <p>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className='md:flex justify-between items-center basis-4/5'>
        <div className='flex flex-wrap md:w-3/5 w-4/5 mx-auto md:gap-8 gap-16'>
          {advantages.map((item, index) => (
            <Advantage
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              icon={item.icon}
            />
          ))}
        </div>
        <div className='md:w-2/5 mx-auto md:mx-0 md:ml-10 relative mt-14 md:mt-0'>
          <div className='before:absolute before:-top-52 md:before:content-arrow before:scale-75'>
            <img src={Rectangle} alt='Rectangle' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
