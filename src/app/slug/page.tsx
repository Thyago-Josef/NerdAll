import produtos from '@/../data/produtos.json'; // Note o uso do alias ou caminho relativo
import { notFound } from 'next/navigation';

// Função para gerar as páginas no momento do build (SEO Máximo)
export async function generateStaticParams() {
    return produtos.map((p: { slug: any; }) => ({
        slug: p.slug,
    }));
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
    const produto = produtos.find((p: { slug: string; }) => p.slug === params.slug);

    if (!produto) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Lado Esquerdo: Imagem */}
                <div className="rounded-2xl overflow-hidden border border-slate-800">
                    <img src={produto.imagem} alt={produto.titulo} className="w-full h-full object-cover" />
                </div>

                {/* Lado Direito: Info e Link */}
                <div className="flex flex-col justify-center">
                    <span className="text-purple-500 font-bold uppercase tracking-tighter">{produto.categoria}</span>
                    <h1 className="text-4xl font-black mt-2 leading-tight">{produto.titulo}</h1>
                    <p className="text-slate-400 mt-6 text-lg">{produto.descricao}</p>

                    <div className="mt-8 p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <p className="text-slate-400 text-sm">Preço na Shopee:</p>
                        <p className="text-4xl font-black text-green-400">R$ {produto.preco.toFixed(2)}</p>

                        <a
                            href={produto.urlAfiliado}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center mt-6 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 rounded-full text-xl transition-all hover:scale-105"
                        >
                            VER NA SHOPEE
                        </a>
                        <p className="text-center text-xs text-slate-500 mt-4 italic">
                            * Comprando pelo link você ajuda o site a continuar trazendo conteúdo!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}