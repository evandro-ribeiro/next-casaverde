import Image from "next/image"
import Link from 'next/link'

export function NavBar() {
    return (
        <section className="flex justify-around items-center mx-2">
            <div className="ml-4 mt-4">
                <Link href="/" >
                    <Image className="w-auto h-auto" src="/logo.svg" alt="Logo" width={100} height={100} />
                </Link>
            </div>
            <div className="flex font-bold z-10 mt-5 font-montserrat">
                <Link href="/" className="mx-3">Home</Link>
                <span>/</span>
                <Link href="/produto-2" className="mx-3">Oferta do Dia</Link>
                <span>/</span>
                <Link href="/meu-carrinho" className="mx-3">Finalizar Compra</Link>
            </div>
        </section>
    )
}