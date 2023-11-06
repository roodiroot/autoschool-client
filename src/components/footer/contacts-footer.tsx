import { SocialLinkType } from "@/types";
import SocialLink from "./social-link";

const ContactsFooter: React.FC<{ socialsLinks: SocialLinkType[] }> = ({
  socialsLinks,
}) => {
  return (
    <div className='space-y-4 font-bold  md:text-lg md:space-y-6 xl:text-xl md:text-right max-w-[400px]'>
      <div className=''>
        431440, Республика Мордовия, г. Рузаевка, ул. Ленина, д. 51.
      </div>
      <a href='tel:88345164141' className='block hover:text-mgreen transition'>
        8 ( 83451 ) 6 - 41 - 41
      </a>
      <a
        href='mailto:avt2016s@yandex.ru'
        className='block hover:text-mgreen transition'
      >
        avt2016s@yandex.ru
      </a>

      <div className='flex gap-3 md:justify-end'>
        {socialsLinks.map((e: SocialLinkType) => (
          <SocialLink key={e.name} element={e} />
        ))}
      </div>
    </div>
  );
};

export default ContactsFooter;
