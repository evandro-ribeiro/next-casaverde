"use client"

import { InputWithButton } from "@/components/input";
import Image from "next/image";

import { MousePointer, ShoppingCart, Truck } from 'lucide-react';
import { CardOfertas } from "@/components/cardOfertas";
import { Depoimentos } from "@/components/depoimentos";
import { Video } from "@/components/video";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-linhas">
      <NavBar />
      <Image src="/home/splash-chamada.png" alt="Imagem de um splash de tinta" width={600} height={500} 
        className="absolute top-0 right-0 z-0"
      />
      <section className="flex justify-center items-center ml-52 w-2/6 h-screen -mt-10">
        <div className="z-20">
          <p className="text-zinc-400 mb-4 text-xl">Sua casa com as</p>
          <h2 className="text-zinc-900 text-6xl font-bold font-title mb-4">melhores plantas</h2>
          <p className="text-zinc-400 mb-6 text-sm">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
          <InputWithButton />
        </div>
        {/* z-10 w-3/5 mr-12 */}
        <Image src="/home/planta-chamada.png" alt="Planta com folhas largas" width={500} height={500} 
          className="absolute right-80 h-screen mr-3"
        />
      </section>

      <section className="flex justify-center mx-72 w-3/5 -mt-6">
        <Image src="/home/como-conseguir.png" alt="Planta verde com folhas maiores" width={250} height={100} 
          className="w-5/12 h-72 box-border"
        />
        <div className="bg-white h-72 w-72 p-6 shadow-2xl z-20">
          <p className="text-zinc-400 mb-1 font-semibold">Como conseguir</p>
          <h2 className="text-zinc-900 text-3xl font-bold font-title mb-4">minha planta</h2>
          <ul className="flex flex-col gap-5 font-semibold">
            <li className="flex text-zinc-400 items-center gap-3"><MousePointer color="white" className="rounded-3xl bg-yellow-300 size-9 p-2.5" />Escolha suas plantas</li>
            <li className="flex text-zinc-400 items-center gap-3"><ShoppingCart color="white" className="rounded-3xl bg-yellow-300 size-9 p-2.5" />Faça seu pedido</li>
            <li className="flex text-zinc-400 items-center gap-3"><Truck color="white" className="rounded-3xl bg-yellow-300 size-9 p-2.5" />Aguarde na sua casa</li>
          </ul>
        </div>
      </section>
      <section className="mt-10 mb-20">
        <div className="flex flex-col items-center">
          <p className="text-zinc-400 mb-1 font-semibold">Conheça nossas</p>
          <h2 className="text-zinc-900 text-6xl font-bold font-title mb-4">ofertas</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mx-10">
          <CardOfertas id={1} />
          <CardOfertas id={2} />
          <CardOfertas id={3} />
          <CardOfertas id={4} />
          <CardOfertas id={5} />
          <CardOfertas id={6} />
        </div>
      </section>
      <Depoimentos src="/home/mulher-sorrindo.png" alt="Mulher sorrindo" autor="Juliana Ferraz" anoCliente="2018" />
      <section>
        <div className="flex flex-col items-center">
          <p className="text-zinc-400 mb-1 font-semibold">Veja aqui os nossos</p>
          <h2 className="text-zinc-900 text-6xl font-bold font-title mb-4">vídeos</h2>
          <div className="flex gap-6 mb-20">
            <Video src="/home/video1.png" alt="Imagem do vídeo 1" />
            <Video src="/home/video2.png" alt="Imagem do vídeo 2" />
            <Video src="/home/video3.png" alt="Imagem do vídeo 3" />
            <Video src="/home/video4.png" alt="Imagem do vídeo 4" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
