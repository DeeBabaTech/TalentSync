import useMediaQuery from "@/hook/useMediaQuery";
import Avatars from "@/assets/Avatars.png";
import AI from "@/assets/AI.png";
import Review from "@/assets/Reviews.png";
import Shopify from "@/assets/Shopify.png";
import Coinbase from "@/assets/Coinbase.png";
import Dropbox from "@/assets/Dropbox.png";
import Intercom from "@/assets/Intercom.png";
import Marvel from "@/assets/Marvel.png";
import Automattic from "@/assets/Automattic.png";

const Body = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id='home' className='gap-16 bg-grey-20 md:pt-20 pt-32 md:pb-20 pb-5'>
      <div className='md:flex mx-auto w-5/6 items-center justify-between text-center md:text-start'>
        <div className='z-10 md:basis-2/5'>
          <div className='md:text-4xl  text-3xl  text-black font-semibold'>
            Uniting the world, <br /> one video call at a time
          </div>
          <div className='mt-5'>
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </div>
          <div className='mt-5 flex items-center justify-center md:justify-start gap-5 text-sm'>
            <div className='bg-blue-700 py-2 px-5 rounded-full text-white'>
              Start your free trial
            </div>
            <div className='flex gap-2'>
              <img src={AI} alt='AI' />
              <p className='text-blue-700'>Discover AI assistant</p>
            </div>
          </div>
          <img
            src={Review}
            className='w-56 mt-8 mx-auto md:mx-0'
            alt='Reviews'
          />
        </div>
        <div className='flex basis-1/2 justify-center mt-10'>
          <img src={Avatars} alt='Avatars' />
        </div>
      </div>
      {isAboveMediumScreens && (
        <div className='h-[150px] w-5/6 mx-auto py-10'>
          <p className="text-center mb-5">
            Join 1,500+ companies already video conferencing the ClearLink way
          </p>
          <div className='flex items-center justify-between'>
            <img src={Shopify} className='w-32' alt='shopify-sponsor' />
            <img src={Coinbase} className='w-32' alt='coinbase-sponsor' />
            <img src={Dropbox} className='w-32' alt='dropbox-sponsor' />
            <img src={Intercom} className='w-32' alt='intercom-sponsor' />
            <img src={Marvel} className='w-32' alt='marvel-sponsor' />
            <img src={Automattic} className='w-32' alt='automattic-sponsor' />
          </div>
        </div>
      )}
    </section>
  );
};

export default Body;
