import Image from "next/image";
import { produtos } from "../../../public/produto.json";
import { AbaCarrinho } from "../../components/abaCarrinho";
import { Button } from "../../components/ui/button";
import { NavBar } from "../../components/navbar";
import { Hash } from "lucide-react";
import { Depoimentos } from "../../components/depoimentos";
import { Footer } from "../../components/footer";
import { CardOfertas } from "../../components/cardOfertas";

type Produto = {
    id: number,
    title: string,
    price: number,
    description: string,
    img: string
}

export default function Produto1() {

    var produto: Produto = {
        id: 0, 
        title: '',
        price: 0,
        description: '',
        img: ''
    }

    produtos.map(item => {
        if(item.id == 1) {
            produto.id = item.id;
            produto.title = item.title;
            produto.price = item.price;
            produto.description = item.description;
            produto.img = item.img
        }
    })

    return (
        <section className="bg-linhas">
            <NavBar />
            <section className="justify-center md:justify-end md:py-4 flex h-96 md:h-fit">
                <Image className="absolute h-auto w-64 top-20 mt-20 left-48 z-10" src={produto.img} alt={`Imagem do produto ${produto.id}`} width={900} height={300} />
                <Image className="absolute left-0 top-16 mt-8 z-0" src="/ofertas/splash-chamada-ofertas.svg" alt="Imagem de um borrão de tinta amarela" width={400} height={500} />
                <div className="flex flex-col max-w-96 mr-64 gap-2">
                <h1 className="text-zinc-900 text-6xl font-bold font-title">{produto.title}</h1>
                <p className="text-zinc-400 mb-1 text-md font-bold">R$ {produto.price.toFixed(2)}</p>
                <p className="text-zinc-400 mb-1 text-sm">{produto.description}</p>
                <div className="flex gap-6" id={produto.id.toString()}>
                    <Button>Comprar agora</Button>
                    <AbaCarrinho />
                </div>
                </div>
            </section>
            <section className="bg-white flex h-screen w-full">
                <div className="absolute bg-white p-9 w-full z-20" />
                <div className="w-2/5 mt-20 ml-52">
                    <h2 className="text-zinc-900 text-3xl font-bold font-title mb-4">Descrição do produto</h2>
                    <div className="flex gap-5 mt-4">
                        <Hash className="w-60 rounded-full bg-yellow-300 size-10 p-2" color="white" />
                        <div>
                            <p className="text-zinc-400 mb-1 text-md">Sed arcu risus, posuere viverra imperdiet eu, commodo interdum enim. Suspendisse finibus, quam dictum vestibulum tristique, nisi lectus luctus tellus, eget faucibus tortor magna vel arcu. Aliquam nisl ligula, pretium ut erat pharetra, volutpat tempus quam. Quisque sed velit nec ex tincidunt auctor eu sit amet libero.</p>
                            <br />
                            <p className="text-zinc-400 mb-1 text-md">Aliquam pulvinar, lacus id efficitur rutrum, lacus ex pretium libero, non euismod sem neque sit amet elit. Sed varius augue eget augue cursus, vel maximus sem rutrum. Vivamus dapibus lacus a dui tristique, sodales cursus justo gravida. Mauris vehicula lobortis diam porttitor scelerisque. Sed ac quam ligula. Phasellus convallis ipsum nec lorem tincidunt viverra. Sed elementum nunc velit, id congue mi posuere eget. Phasellus imperdiet est ac ex blandit fringilla. Vivamus eget aliquet leo, eu scelerisque quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <Image className="absolute right-28 mr-28 mt-20 w-3/12" src="/ofertas/img-descricao-produto.png" alt="Planta em vaso de vidro com água" width={400} height={100} />
            </section>
            <div className="absolute bg-white p-20 w-full z-0" />
            <div>
                <h2 className="absolute z-10 right-14 mr-56 mt-20 text-zinc-900 text-3xl font-bold font-title">Não acredite em nós <br/> veja o que os clientes tem a dizer</h2>
                <Depoimentos src="/ofertas/depoimento-ofertas.png" alt="Mulher fazendo pose para foto" autor="Clarissa Sampaio" anoCliente="2017" />
            </div>
            <section className="mt-10 mb-20">
                <div className="flex flex-col items-center">
                    <p className="text-zinc-400 mb-1 font-semibold">Conheça produtos</p>
                    <h2 className="text-zinc-900 text-6xl font-bold font-title mb-4">similares</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-5 mx-6">
                    <CardOfertas id={2} />
                    <CardOfertas id={3} />
                    <CardOfertas id={5} />
                </div>
            </section>
            <Footer />
        </section>
    )
}