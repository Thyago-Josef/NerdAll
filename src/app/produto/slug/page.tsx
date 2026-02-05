import produtos from '@/../data/produtos.json';
import { notFound } from 'next/navigation';
import { ShoppingCart, CheckCircle, Lightbulb } from 'lucide-react';

// --- GERAÇÃO ESTÁTICA ---
export async function generateStaticParams() {
    return produtos.map((p) => ({
        slug: p.slug,
    }));
}

// --- METADADOS DINÂMICOS (Corrigido para Promise) ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const produto = produtos.find((p) => p.slug === slug);

    if (!produto) return { title: 'Produto Não Encontrado' };

    return {
        title: `${produto.titulo} | Nerd Achados`,
        description: produto.descricao,
    };
}

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
    // 1. AWAIT PARAMS: Essencial para evitar tela branca no Next.js 15
    const { slug } = await params;
    const produto = produtos.find((p) => p.slug === slug);

    if (!produto) {
        notFound();
    }

    // 2. FORMATAÇÃO DE PREÇO SEGURA
    const precoFormatado = Number(produto.preco || 0).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <main className="min-h-screen bg-[#05070a] text-white p-6 md:p-12 relative overflow-hidden">
            {/* Blurs de Fundo */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>

            <div className="max-w-6xl mx-auto relative z-10 p-6 bg-[#0f0f0f] rounded-3xl border border-white/5">

                {/* Breadcrumbs */}
                <nav className="text-sm text-slate-500 mb-6 flex gap-2">
                    <a href="/" className="hover:text-cyan-400">Home</a>
                    <span>/</span>
                    <span className="text-slate-300">{produto.categoria}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Imagem */}
                    <div className="rounded-xl overflow-hidden border border-white/10 p-4 bg-white flex justify-center items-center shadow-2xl">
                        <img
                            src={produto.imagem}
                            alt={produto.titulo}
                            className="w-full h-auto max-h-[450px] object-contain"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col">
                        <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">{produto.categoria}</span>
                        <h1 className="text-4xl font-black mt-2 leading-tight uppercase italic">
                            {produto.titulo} <span className="text-purple-500">{produto.subtitulo || ""}</span>
                        </h1>
                        <p className="text-slate-400 mt-6 text-lg leading-relaxed">{produto.descricao}</p>

                        <div className="mt-8 p-8 bg-[#161920] rounded-2xl border border-white/5 shadow-2xl">
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Preço na Shopee</p>
                            <p className="text-5xl font-black text-white mt-1">{precoFormatado}</p>

                            <a
                                href={produto.urlAfiliado}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="block text-center mt-8 bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-xl text-xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:scale-[1.02]"
                            >
                                <ShoppingCart size={24} />
                                RESGATAR NA SHOPEE
                            </a>
                        </div>
                    </div>
                </div>

                {/* Seções extras (Só aparecem se existirem no JSON) */}
                {(produto.detalhesTecnicos || produto.pontosPositivos) && (
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {produto.detalhesTecnicos && (
                            <div className="p-6 bg-[#161920] rounded-xl border border-white/5">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
                                    <Lightbulb size={20} /> Especificações
                                </h2>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    {produto.detalhesTecnicos.map((item: string, i: number) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {produto.pontosPositivos && (
                            <div className="p-6 bg-[#161920] rounded-xl border border-white/5">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
                                    <CheckCircle size={20} /> Vantagens
                                </h2>
                                <ul className="space-y-2 text-slate-400 text-sm">
                                    {produto.pontosPositivos.map((item: string, i: number) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-green-500">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}