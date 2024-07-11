import Image from 'next/image';
import Link from 'next/link';
import { LiaGamepadSolid } from 'react-icons/lia';
import Logo from '../../../public/logo.svg';

// Componente de cabeçalho
const Header = () => {
  return (
    <header className="h-28 w-full bg-slate-100 px-2 text-black">
      <div className="mx-auto flex h-28 max-w-screen-xl items-center justify-center sm:justify-between">
        <nav className="flex items-center justify-center gap-4">
          <Link href="/">
            <Image src={Logo} alt="logo do site DalyGames" quality={100} priority={true} className="w-full" />
          </Link>
          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>
        <div className="hidden sm:flex">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
