import Image from "next/image";

export function Footer() {
    return (
        <section className="flex md:gap-20 bg-white h-72 px-5 md:pb-28 md:pl-72 md:pt-8">
            <Image className="absolute pt-60 mt-2 md:pt-14 left-0 md:mt-28 w-1/2 md:w-2/6" src="/home/splash-rodape.svg" alt="Imagem de um splash de tinta amarela" width={100} height={200} />
            <div className="flex gap-4 flex-col justify-center">
                <Image className="w-3/4" src="/logo.svg" alt="Logo da CasaVerde" width={150} height={150} />
                <div className="flex gap-3 md:gap-6">
                    <Image className="h-auto w-auto" src="/icones/facebook.svg" alt="Logo do Facebook" width={20} height={20} />
                    <Image className="h-auto w-auto" src="/icones/twitter.svg" alt="Logo do Twitter" width={20} height={20} />
                    <Image className="h-auto w-auto" src="/icones/instagram.svg" alt="Logo do Instagram" width={20} height={20} />
                </div>
            </div>
            <div className="flex flex-col justify-center pr-4">
                <h3 className="font-montserrat font-bold mb-2">Rio de Janeiro</h3>
                <p className="text-zinc-400 mb-1 text-xs font-montserrat">Rua Siqueira Campos, 171, 303</p>
                <p className="text-zinc-400 mb-1 text-xs font-montserrat">Copacabana</p>
                <p className="text-zinc-400 mb-1 text-xs font-montserrat">Telefone: (21) 99876-0099</p>
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="font-montserrat font-bold mb-2">São Paulo</h3>
                <p className="text-zinc-400 mb-1 text-xs font-montserrat">Rua Anita Garibaldi, 33, 13</p>
                <p className="text-zinc-400 mb-1 text-xs font-montserrat">Sé</p>
                <p className="text-zinc-400 mb-1 text-xs font-montserrat">Telefone: (11) 99875-2201</p>
            </div>
            <Image className="w-64 -mt-20 pt-12 right-28 absolute hidden md:inline" src="/home/img-footer.svg" alt="Mulher cultivando plantas" width={100} height={100} />
        </section>
    )
}