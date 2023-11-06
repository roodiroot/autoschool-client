import { MenuLinkType } from "@/types";
import NavLinkFooter from "./nav-link-footer";

const NavFooter: React.FC<{ links: MenuLinkType[] }> = ({ links }) => {
  return (
    <nav className='w-full max-w-[400px]'>
      <ul className='space-y-4 font-bold  md:text-lg md:space-y-6 xl:text-xl'>
        {links.map((e: MenuLinkType) => (
          <NavLinkFooter key={e.id} link={e} />
        ))}
      </ul>
    </nav>
  );
};

export default NavFooter;
