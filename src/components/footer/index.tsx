import Logo from "@/assets/Logo.png";
import GoogleStore from "@/assets/GoogleStore.png";
import AppStore from "@/assets/AppStore.png";
import LinkedIn from "@/assets/LinkedIn.png";
import Twitter from "@/assets/Twitter.png";
import Facebook from "@/assets/Facebook.png";
import Instagram from "@/assets/Instagram.png";
import Github from "@/assets/Github.png";
import YouTube from "@/assets/YouTube.png";

const Footer = () => {
  return (
    <>
      <div className='w-5/6 mx-auto my-10'>
        <div className='flex flex-col text-center md:text-start md:flex-row justify-center items-center md:items-start md:justify-between'>
          <div className='md:w-1/3 mb-10 md:mb-0'>
            <img src={Logo} className='mb-5 w-32 mx-auto md:mx-0' alt='Logo' />
            <p>
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>
          <div className="flex flex-wrap justify-around md:justify-evenly gap-10 md:gap-14">
            <div className='font-semibold flex flex-col gap-4'>
              <h1 className='text-sm text-slate-400'>Product</h1>
              <p>Overview</p>
              <p>Features</p>
              <p>Solutions</p>
              <p>Tutorials</p>
              <p>Pricing</p>
            </div>
            <div className='font-semibold flex flex-col gap-4'>
              <h1 className='text-sm text-slate-400'>Company</h1>
              <p>About us</p>
              <p>Careers</p>
              <p>Press</p>
              <p>News</p>
              <p>Contact</p>
            </div>
            <div className='font-semibold flex flex-col gap-4'>
              <h1 className='text-sm text-slate-400'>Resources</h1>
              <p>Blog</p>
              <p>Events</p>
              <p>Help centre</p>
              <p>Tutorials</p>
              <p>Support</p>
            </div>
            <div className='font-semibold flex flex-col gap-4'>
              <h1 className='text-sm text-slate-400'>Legal</h1>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Licenses</p>
              <p>Contact</p>
            </div>
            <div className='font-semibold flex flex-col gap-4'>
              <h1 className='text-sm text-blue-600'>Get the app</h1>
              <img src={GoogleStore} alt='GoogleStore' />
              <img src={AppStore} alt='PlayStore' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-100'>
        <div className='w-5/6 mx-auto flex md:flex-row flex-col items-center justify-between py-7 text-sm gap-5 md:gap-0'>
          <p className='font-semibold'>
            © 2023 ClearLink. All rights reserved.
          </p>
          <div className='flex md:gap-5 gap-2'>
            <img src={LinkedIn} alt='LinkedIn' />
            <img src={Twitter} alt='Twitter' />
            <img src={Facebook} alt='Facebook' />
            <img src={Instagram} alt='Instagram' />
            <img src={Github} alt='Github' />
            <img src={YouTube} alt='YouTube' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
