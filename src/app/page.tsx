import Container from '@/components/container';
import { GameProps } from '@/utils/types/games';
import Image from 'next/image';
import Link from 'next/link';

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`
    );
    return res.json();
  } catch (error) {
    throw new Error('Não foi possível obter o jogo do dia');
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  console.log(dalyGame);

  return (
    <main className="w-full">
      <Container>
        <h1 className="mb-5 mt-8 text-center text-xl font-bold">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full rounded-lg bg-black">
            <Image
              src={dalyGame.image_url}
              alt={dalyGame.title}
              priority={true}
              quality={100}
              width={100}
              height={100}
            />
          </section>
        </Link>
      </Container>
    </main>
  );
}
