import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { Pedido } from "@/components/pedido";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";

export default function MeuCarrinho() {
    return (
        <section className="bg-linhas">
            <NavBar />
            <section className="justify-center py-20 flex flex-col md:flex-row gap-8">
                <section className="max-w-xl flex flex-col items-center md:items-start">
                    <h2 className="text-zinc-900 text-3xl font-bold font-title mb-4">Finalizar pedido</h2>
                    <div className="flex gap-6 items-center mb-12 px-3 md:mr-1">
                        <ShoppingCart color="white" className="rounded-3xl bg-yellow-300 size-12 px-3 w-24" />
                        <p className="text-zinc-400 mb-1">Insira suas informações abaixo e você receberá um e-mail com os detalhes da sua compra. Assim que o pagamento for processado você receberá seu produto em sua casa em até 7 dias úteis.</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-6 mb-10">
                        <h3 className="text-zinc-900 text-2xl font-bold font-title">Informações</h3>
                        <Input placeholder="Nome" className="w-80 md:w-96" />
                        <Input placeholder="E-mail" className="md:w-96" />
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-6 mb-10">
                        <h3 className="text-zinc-900 text-2xl font-bold font-title">Endereço de entrega</h3>
                        <Input placeholder="CEP" className="w-96" />
                        <Input placeholder="Rua / Avenida" className="w-96" />
                        <div className="flex gap-4 w-full">
                            <Input placeholder="Número" className="w-2/5" />
                            <Input placeholder="Complemento" className="w-3/4" />
                        </div>
                        <div className="flex gap-4 w-full">
                            <Input placeholder="Cidade" className="w-3/4" />
                            <Input placeholder="Estado" className="w-2/4" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-6 mb-10">
                        <h3 className="text-zinc-900 text-2xl font-bold font-title">Pagamento</h3>
                        <Input placeholder="Número do cartão" className="w-full" />
                        <Input placeholder="Nome do titular do cartão" className="w-full" />
                        <div className="flex gap-4 w-full">
                            <Input placeholder="Validade" className="w-3/4" />
                            <Input placeholder="CVV" className="w-2/4" />
                        </div>
                        <Input placeholder="CPF do titular do cartão" className="w-full" />
                        <Input placeholder="Número de parcelas" className="w-full" />
                    </div>
                    <Button className="px-10">Finalizar pagamento</Button>
                </section>
                <section className="bg-white p-8 h-fit">
                    <h3 className="text-zinc-900 text-3xl font-bold font-title mb-4">Resumo do pedido</h3>
                    <Pedido />
                </section>
            </section>
            <Footer />
        </section>
    )
}