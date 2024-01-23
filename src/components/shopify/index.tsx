import shopify from "@/assets/Shopify.png";
import AvatarText from "@/assets/AvatarText.png";
import Arrows from "@/assets/Arrows.png";
import Contents from "@/assets/Contents.png";

const Shopify = () => {
  return (
    <div className='bg-[#F9FAFB] md:my-20 my-10 md:py-20 py-10'>
      <div className='w-5/6 mx-auto md:flex justify-around items-center'>
        <div className='md:w-2/5'>
          <img src={shopify} className='w-20 mb-16' alt='' />
          <div className='font-semibold text-black text-2xl mb-10 w-11/12 relative'>
            <div className='before:absolute before:-top-10 before:content-stars'>
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </div>
          </div>
          <div className='flex justify-between'>
            <img src={AvatarText} className='w-4/6' alt='' />
            <img src={Arrows} className='w-1/5' alt='' />
          </div>
        </div>
        <img src={Contents} className='md:w-1/2 mt-20 md:mt-0' alt='' />
      </div>
    </div>
  );
};

export default Shopify;
