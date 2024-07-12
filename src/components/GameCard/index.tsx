import { GameProps } from '@/utils/types/games';
import Image from 'next/image';
import Link from 'next/link';
import { BiRightArrowCircle } from 'react-icons/bi';

interface GameCardProps {
  game: GameProps;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link href={`/game/${game.id}`}>
      <section className="mb-5 w-full rounded-lg bg-slate-200 p-4">
        <div className="relative h-56 w-full transition-all duration-300 hover:scale-105">
          <Image
            src={game.image_url}
            alt={game.title}
            fill={true}
            quality={100}
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, ?(max-width: 1200px) 44vw"
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="overflow-hidden truncate text-ellipsis whitespace-nowrap px-2 text-sm font-bold text-black">
            {game.title}
          </p>
          <BiRightArrowCircle size={24} color="#000" />
        </div>
      </section>
    </Link>
  );
};

export default GameCard;
