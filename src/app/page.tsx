import Container from '@/components/container';
import { GameProps } from '@/utils/types/games';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightSquare } from 'react-icons/bs';
import Input from '@/components/input';

// Função para buscar o jogo do dia
async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (error) {
    throw new Error('Não foi possível obter o jogo do dia');
  }
}

// Página Home
export default async function Home() {
  const dalyGame: GameProps = await getDalyGame(); // Busca o jogo do dia

  return (
    <main className="w-full">
      <Container>
        <h1 className="mb-5 mt-8 text-center text-xl font-bold">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full rounded-lg bg-black">
            <div className="relative h-96 max-h-96 w-full rounded-lg">
              <div className="absolute bottom-0 z-20 flex items-center justify-center gap-2 p-3">
                <p className="text-xl font-bold text-white">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 rounded-lg object-cover opacity-50 transition-all duration-300 hover:opacity-100"
                sizes="(max-width: 768px) 100vw, ?(max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>
        <Input />
      </Container>
    </main>
  );
}
