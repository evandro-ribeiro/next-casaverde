"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function ToastCarrinho() {
  const { toast } = useToast()

  return (
    <Button
      variant="secondary"
      size="default"
      onClick={() => {
        toast({
          title: "Produto adicionado ao carrinho",
          action: <ToastAction altText="Ir para pagamento" className="text-yellow-300 border-none" >Ir para o pagamento</ToastAction>,
        })
      }}
    >
      Adicionar ao carrinho
    </Button>
  )
}
