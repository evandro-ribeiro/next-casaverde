"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { useCartContext } from "@/context";
import { Pedido } from "./pedido";

export function AbaCarrinho() {

  const { incluirItem, items } = useCartContext();

  function adicionarItem(e: any) {
    incluirItem(e.parentNode.id);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button onClick={(e) => adicionarItem(e.target)} variant="secondary" size="default">Adicionar ao carrinho</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-zinc-900 text-3xl font-bold font-title pb-4">Meu carrinho</SheetTitle>
        </SheetHeader>
          {/* Aqui está a abstração do context geral do carrinho */}
          <Pedido />        
        <SheetFooter>
          <SheetClose asChild>
            <Link href="/meu-carrinho">
              <Button type="submit" className="mr-48 mt-4 px-3">Finalizar compra</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
