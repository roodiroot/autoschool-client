import Image from "next/image";

const Matryoshka = () => {
  return (
    <a
      href='https://matryoshka-studio.ru/'
      className='text-xs inline-block py-5 text-right'
    >
      {/* <div className='w-[82px] aspect-[5/3] rounded-xl bg-slate-400 ml-auto mb-2 relative overflow-hidden'>
        <Image
          src='https://matryoshka-studio.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-no-color.30c61145.jpg&w=750&q=75'
          width={100}
          height={50}
          alt='matryoshka'
          className='absolute w-full h-full object-cover'
        />
      </div> */}
      <div className=''>Придумала этот сайт «Matrёshka» </div>
    </a>
  );
};

export default Matryoshka;
