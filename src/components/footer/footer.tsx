import { navLinks, socials } from "@/constance";
import Container from "../container";
import NavFooter from "./nav-footer";
import ContactsFooter from "./contacts-footer";
import i from "../../assets/LOGO3.png";
import Image from "next/image";
import Logo from "../header/logo";

const Footer = () => {
  return (
    <div className='relative z-10 w-full py-10 shadow-m bg-mwhite'>
      <Container>
        <div className='w-full flex flex-col md:flex-row justify-between md:items-center'>
          <NavFooter links={navLinks} />
          <div className='relative w-36 h-36 md:w-40 md:h-40 xl:w-60 xl:h-60 '>
            <Logo big />
          </div>
          <ContactsFooter socialsLinks={socials} />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
