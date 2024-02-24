"use client"

import { X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useCartContext } from "@/context";
import { produtos } from "../../public/produto.json";


interface carrinhoProps {
    id: number
}

type Produto = {
    id: number,
    title: string,
    price: number,
    img: string
}

export default function CardCarrinho({ id }: carrinhoProps) {

    const { qtd, somarQuantidade, diminuirQuantidade, excluirItem, items } = useCartContext();

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
            produto.img = item.img;
        }
    })

    function alteraQuantidade() {
        const [ativo, setAtivo] = useState(false);

        var elemento = <>
            <ChevronDown />
            <p className="mb-1 text-sm font-semibold">{qtd} qtd</p>
        </>
        
        return (
            <div>
                <button onClick={() => setAtivo(!ativo)}>
                    {ativo ? elemento : <ChevronRight />}
                </button>
                <div className="flex justify-between">
                    {ativo ? <button onClick={() => diminuirQuantidade(produto.id)}>-</button> : ''}
                    {ativo ? <button onClick={() => somarQuantidade(produto.id)}>+</button> : ''}
                </div>
            </div>
        )
    }

    function removerItem(e: any) {
        excluirItem(e.parentNode.id);
    }

    return (
        <div className="flex gap-4 items-center py-3 max-w-96 min-w-80 justify-between" id={produto.id.toString()}>
            <Image className="shadow-xl shadow-stone-200 h-auto" src={produto.img} alt={`Imagem da planta ${produto.id}`} width={60} height={50} />
            <div className="flex flex-col gap-1 pl-2 pr-10">
                <h4 className="text-zinc-900 font-semibold font-montserrat text-sm">{produto.title}</h4>
                <p className="text-zinc-400 mb-1 text-sm font-bold">R$ {produto.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col gap-1 items-end" id={produto.id.toString()}>
                <X cursor="pointer" onClick={(e) => removerItem(e.target)} />
                <div className="flex gap-2 text-zinc-400">
                    {alteraQuantidade()}
                </div>
            </div>
        </div>
    )
}