import { MenuLinkType } from "@/types";
import NavLinkFooter from "./nav-link-footer";
import Link from "next/link";

const NavFooter: React.FC<{ links: MenuLinkType[] }> = ({ links }) => {
  return (
    <nav className="w-full max-w-[400px]">
      <ul className="space-y-4 font-bold  md:text-lg md:space-y-6 xl:text-xl">
        {links.map((e: MenuLinkType) => (
          <NavLinkFooter key={e.id} link={e} />
        ))}
        <Link
          href={"/docs/privacy-policy"}
          className="block cursor-pointer hover:text-mgreen traansition"
        >
          Политика конфиденциальности
        </Link>
        <Link
          href={"/docs/pd-consent"}
          className="block  cursor-pointer hover:text-mgreen traansition"
        >
          Согласие на обработку персональных данных
        </Link>
      </ul>
    </nav>
  );
};

export default NavFooter;
