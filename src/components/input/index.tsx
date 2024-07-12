'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Input = () => {
  const [input, setInput] = useState(''); // Estado do input
  const router = useRouter(); // Hook para navegação

  // Função para lidar com a busca
  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (input === '') return;
    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="my-5 flex w-full items-center justify-between gap-2 rounded-lg bg-slate-200 p-2"
    >
      <input
        className="w-11/12 bg-slate-200 outline-none"
        type="text"
        placeholder="Procurando algum jogo?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
};

export default Input;
