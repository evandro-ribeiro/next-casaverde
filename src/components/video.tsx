import Image from "next/image"

interface videoProps {
    src: string,
    alt: string
}

export function Video({ src, alt }: videoProps) {
    return (
        <div>
            <a href="#">
                <Image className="absolute rounded-3xl bg-white size-10 m-20 pl-4 pr-2.5 py-2 h-auto" src="/icones/play.svg" alt="símbolo de iniciar vídeo" width={50} height={50} />
                <Image src={src} alt={alt} width={200} height={100}  />
            </a>
            <h3 className="font-montserrat font-bold">Vídeo XYZ</h3>
            <p className="text-zinc-400 mb-1 text-xs font-montserrat font-semibold">Publicado em março de 2019</p>
        </div>
    )
}