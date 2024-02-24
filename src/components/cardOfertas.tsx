import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { produtos } from "../../public/produto.json";


interface ofertasProps {
    id: number
}

type Produto = {
    id: number,
    title: string,
    price: number,
    img: string
}

export function CardOfertas({ id }: ofertasProps) {
    var produto: Produto = {
        id: 0, 
        title: '',
        price: 0,
        img: ''
    }

    produtos.find(item => {
        if(item.id == id) {
            produto.id = item.id;
            produto.title = item.title;
            produto.price = item.price;
            produto.img = item.img
        }
    })
    return (
        <div className="flex max-w-80 max-h-48 bg-white shadow-xl">
            <Image src={produto.img} alt={`Imagem do produto ${produto.id}`} width={200} height={200} className="h-auto w-40"/>
            <div className="flex flex-col py-8 z-10">
                <h2 className="text-zinc-900 text-3xl font-bold font-title mb-1">{produto.title}</h2>
                <p className="text-zinc-400 mb-1 font-semibold">R$ {produto.price.toFixed(2)}</p>
                <Link href={`/produto-${produto.id}`} className="flex gap-6 text-yellow-400 mt-3">
                    <span>Comprar</span>
                    <ArrowRight />
                </Link>
            </div>
        </div>
    )
}