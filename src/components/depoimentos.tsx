import Image from "next/image";
import { Quote, ArrowLeft } from "lucide-react";

interface depoimentoProps {
    src: string,
    alt: string,
    autor: string,
    anoCliente: string
}

export function Depoimentos({ src, alt, autor, anoCliente }: depoimentoProps) {
    return (
        <section className="flex mb-20">
            <Image src="/home/retangulo.svg" alt="retângulo amarelo" className="absolute z-0" width={400} height={400} />
            <div className="flex flex-col md:flex-row items-center justify-center md:mx-64 md:gap-6 mt-14">
                <Image src={src} alt={alt} className="max-w-2/5 h-fit z-10" width={300} height={100} />
                <div className="flex flex-col w-3/5">
                    <h2 className="text-zinc-900 text-2xl md:text-3xl font-bold font-title mb-4 pt-6">Não acredite em nós <br/> veja o que os clientes tem a dizer</h2>
                    <div className="flex flex-col items-center md:flex-row gap-4">
                        <Quote className="w-12 md:w-60 rounded-full bg-yellow-300 size-9 p-2" color="white" />
                        <p
                            className="text-zinc-400 mb-1 text-sm text-center md:text-start font-montserrat"
                        >Nullam a orci vitae orci fringilla pulvinar sit amet quis felis. Quisque vel ornare arcu. Fusce urna quam, tempus vitae vehicula et, efficitur non sem. Morbi tincidunt congue lorem eu tempor. Nulla bibendum ligula lorem, vel sollicitudin nibh scelerisque non. Proin ut nisi congue, sodales tellus at, consectetur tellus. Praesent ac elit quis purus congue bibendum. Etiam nec massa ac enim vehicula maximus. Pellentesque semper fermentum maximus. Integer dignissim libero felis, id tempor purus viverra non. Quisque sodales non lacus ut tincidunt. Cras in venenatis leo.”</p>
                    </div>
                    <div className="flex justify-between text-center mt-6 md:px-14">
                        <div>
                            <h3 className="font-montserrat">{autor}</h3>
                            <p className="text-zinc-400 mb-1 text-sm font-montserrat font-semibold">Cliente desde {anoCliente}</p>
                        </div>
                        <div className="flex gap-6 items-center">
                            <ArrowLeft color="lightgray" height={20}/>
                            <Image className="h-auto w-auto" src="/home/seta-direita.svg" alt="seta para a direita" width={50} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}