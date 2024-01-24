import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hook/useMediaQuery";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-slate-100 drop-shadow";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-5 z-30 w-full`}>
        <div
          className={`${navbarBackground} ${flexBetween} mx-auto w-[85%] py-4 px-6 rounded-full`}>
          <div className={`${flexBetween} w-full md:gap-32`}>
            <img src={Logo} alt='logo' className='w-32' />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <div className={`${flexBetween} gap-1`}>
                    <a href='/'>Products</a>
                    <ChevronDownIcon className='w-4 text-slate-500' />
                  </div>
                  <div className={`${flexBetween} gap-1`}>
                    <a href='/'>Solutions</a>
                    <ChevronDownIcon className='w-4 text-slate-500' />
                  </div>
                  <div className={`${flexBetween} gap-1`}>
                    <a href='/'>Resources</a>
                    <ChevronDownIcon className='w-4 text-slate-500' />
                  </div>
                  <div className={`${flexBetween} gap-1`}>
                    <a href='/'>Pricing</a>
                    <ChevronDownIcon className='w-4 text-slate-500' />
                  </div>
                </div>
                <div className={`${flexBetween} gap-2 font-semibold`}>
                  <div className='border border-slate-400 py-2 px-5 rounded-full'>
                    Talk to sales
                  </div>
                  <div className='bg-blue-700 py-2 px-5 rounded-full text-white'>
                    Sign up for free
                  </div>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className='h-6 w-6' />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed bg-slate-100 right-0 bottom-0 z-40 h-full w-3/5 bg-primary-100 drop-shadow-xl'>
          <div className='flex justify-end p-10'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-grey-400' />
            </button>
          </div>
          <div className='flex flex-col gap-10 text-xl'>
            <div className='flex justify-end gap-2 mr-10'>
              <a href='/'>Products</a>
              <ChevronDownIcon className='w-4 text-slate-500' />
            </div>
            <div className='flex justify-end gap-2 mr-10'>
              <a href='/'>Solutions</a>
              <ChevronDownIcon className='w-4 text-slate-500' />
            </div>
            <div className='flex justify-end gap-2 mr-10'>
              <a href='/'>Resources</a>
              <ChevronDownIcon className='w-4 text-slate-500' />
            </div>
            <div className='flex justify-end gap-2 mr-10'>
              <a href='/'>Pricing</a>
              <ChevronDownIcon className='w-4 text-slate-500' />
            </div>
            <div className='border mx-auto border-slate-400 py-2 px-4 w-fit rounded-full'>
              Talk to sales
            </div>
            <div className='bg-blue-700 mx-auto -mt-5 w-fit py-2 px-4 rounded-full text-white'>
              Sign up for free
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
