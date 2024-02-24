import '../globals.css';

export const metadata = {
  title: 'CasaVerde | Meu Carrinho',
  description: 'Página de finalização das compras',
}

export default function CarrinhoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background bg-cover">{children}</div>
  )
}
