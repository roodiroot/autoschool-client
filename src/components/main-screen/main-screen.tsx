"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import usePopap from "@/hooks/usePopap";
import { russo } from "@/fonts";
import { Button } from "@/components/ui/button";

const MainScreen: React.FC<{ className?: string }> = ({ className }) => {
  const { onOpen } = usePopap();
  return (
    <div
      className={cn(
        "w-full h-full max-w-7xl mx-auto px-5 py-[90px] sm:py-[50px] md:py-[150px] lg:py-[250px]",
        className
      )}
    >
      <div className='w-full h-full flex flex-col-reverse md:flex-row items-center justify-start'>
        <div className='my-auto w-full max-w-[250px] sm:max-w-[320px] md:max-w-[410px] lg:max-w-[590px]'>
          <h1
            className={cn(
              "font-semibold mb-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl",
              russo.className
            )}
          >
            <span className='text-mgreen'>Автошкола плюс</span> обучим Вас на
            права за 2 месяца
          </h1>
          <p className='text-xs sm:text-sm md:text-base lg:text-xl mb-8'>
            <span className='text-mgreen'>Поможем</span> получить права с
            гарантией 98%
          </p>
          <div className='flex gap-8 flex-col md:flex-row'>
            <Button onClick={onOpen} className=' flex-1' variant='mfull'>
              Консультация
            </Button>
            <div className={russo.className}>
              <div className='text-xs sm:text-sm md:text-base lg:text-xl'>
                Скидка по студенческому:
              </div>
              <div className='text-lg sm:text-2xl md:text-4xl font-bold text-mgreen'>
                2000 р
              </div>
            </div>
          </div>
        </div>
        <div className='relative -z-10 w-full h-1/2 min-h-[260px] sm:min-h-[400px] md:h-full'>
          <div className='absolute  bg-mgreen rounded-full shadow-m z-0 bottom-0 -right-[180px] md:-top-[261px] md:left-1 w-[519px] h-[519px] sm:w-[765px] sm:h-[765px] lg:-top-[554px] lg:-left-4 lg:w-[1300px] lg:h-[1300px]'></div>
          <div className='absolute z-10 shadow-m rounded-full bg-mwhite bottom-8 right-8 w-[200px] h-[200px] sm:bottom-8 sm:right-8 sm:w-[300px] sm:h-[300px] md:left-[56px] md:bottom-1/2 md:translate-y-1/2 md:w-[400px] md:h-[400px] lg:translate-y-1/2 lg:w-[600px] lg:h-[600px]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-slate-100 overflow-hidden'>
              <Image
                alt='main-photo'
                loading='lazy'
                width='980'
                height='696'
                decoding='async'
                data-nimg='1'
                src='/photo/main5.jpg'
                className='absolute w-full h-full object-cover -rotate-5'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
