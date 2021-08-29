import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap">
        <HeaderItem title="ƏSAS SƏHİFƏ" Icon={HomeIcon} />
        <HeaderItem title="TREND" Icon={LightningBoltIcon} />
        <HeaderItem title="TƏSDİQLƏNMİŞ" Icon={BadgeCheckIcon} />
        <HeaderItem title="KOLLEKSİYALAR" Icon={CollectionIcon} />
        <HeaderItem title="AXTARIŞ" Icon={SearchIcon} />
        <HeaderItem title="HESABIM" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/Kino.svg"
        alt="Logo"
        width={160}
        height={120}
      />
    </header>
  );
}

export default Header;
