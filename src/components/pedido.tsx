"use client"

import { useCartContext } from "@/context";
import CardCarrinho from "./cardCarrinho";

export function Pedido() {
    
    const { items, somarPreco } = useCartContext();

    var taxaEntrega = 10.00;

    return (
        <div className="divide-y">
          {items?.map(produto => <CardCarrinho key={produto.id} id={produto.id} />)}
          <div className="pt-8 flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-zinc-400 mb-1 text-sm font-semibold font-montserrat">Valor dos produtos</p>
              <p className="text-zinc-400 mb-1 text-sm font-semibold font-montserrat">R$ {somarPreco()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-zinc-400 mb-1 text-sm font-semibold font-montserrat">Taxa de entrega</p>
              <p className="text-zinc-400 mb-1 text-sm font-semibold font-montserrat">R$ {taxaEntrega.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-zinc-900 mb-1 text-sm font-semibold font-montserrat">Subtotal</p>
              <p className="text-zinc-900 mb-1 text-sm font-semibold font-montserrat">R$ {(parseFloat(somarPreco()) + taxaEntrega).toFixed(2)}</p>
            </div>
          </div>
        </div>
    )
}