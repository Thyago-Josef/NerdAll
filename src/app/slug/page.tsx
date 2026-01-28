import produtos from '@/../data/produtos.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return produtos.map((p) => ({
        slug: p.slug,
    }));
}

// Note o "async" e o "await params" - necessário nas versões novas do Next.js
export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const produto = produtos.find((p) => p.slug === slug);

    if (!produto) {
        notFound();
    }

    // Garantia: Converte o preço para número, caso esteja como string no JSON
    const precoNumerico = Number(produto.preco);

    return (
        <main className="min-h-screen bg-black text-white p-4 md:p-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-white">
                    <img src={produto.imagem} alt={produto.titulo} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm">{produto.categoria}</span>
                    <h1 className="text-4xl font-black mt-2 leading-tight">{produto.titulo}</h1>
                    <p className="text-slate-400 mt-6 text-lg">{produto.descricao}</p>

                    <div className="mt-8 p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <p className="text-slate-400 text-sm italic">Preço na Shopee:</p>

                        {/* SOLUÇÃO DO ERRO AQUI: toLocaleString é mais seguro que toFixed */}
                        <p className="text-4xl font-black text-green-400">
                            R$ {precoNumerico.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>

                        <a
                            href={produto.urlAfiliado}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center mt-6 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 rounded-full text-xl transition-all hover:scale-105"
                        >
                            VER NA SHOPEE
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}