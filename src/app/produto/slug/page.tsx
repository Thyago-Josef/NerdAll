import produtos from '@/../data/produtos.json';
import { notFound } from 'next/navigation';
import { ShoppingCart, CheckCircle, Lightbulb } from 'lucide-react'; // Instale: npm i lucide-react

// --- GERAÇÃO ESTÁTICA PARA SEO (CRUCIAL!) ---
export async function generateStaticParams() {
    return produtos.map((p) => ({
        slug: p.slug,
    }));
}

// --- METADADOS DINÂMICOS PARA SEO (CRUCIAL!) ---
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const produto = produtos.find((p) => p.slug === params.slug);
    if (!produto) {
        return {
            title: 'Produto Não Encontrado | Nerd Achados',
        };
    }
    return {
        title: `${produto.titulo} ${produto.titulo ? produto.subtitulo + ' | ' : ''} Nerd Achados`,
        description: produto.descricao,
        openGraph: {
            images: [{ url: produto.imagem }],
            title: `${produto.titulo} ${produto.subtitulo}`,
            description: produto.descricao,
            url: `https://seusite.com.br/produto/${produto.slug}`, // Mude para seu domínio
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${produto.titulo} ${produto.subtitulo}`,
            description: produto.descricao,
            images: [{ url: produto.imagem }],
        },
    };
}


export default function ProdutoPage({ params }: { params: { slug: string } }) {
    const produto = produtos.find((p) => p.slug === params.slug);

    if (!produto) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-nerd-black p-6 md:p-12 relative overflow-hidden">
            {/* Elementos Decorativos de Fundo (Blur) - Repeti-los aqui */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-nerd-purple/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-nerd-cyan/10 blur-[120px] rounded-full"></div>

            <div className="max-w-6xl mx-auto relative z-10 p-6 bg-[#0f0f0f] rounded-3xl border border-white/5 shadow-lg shadow-nerd-purple/10">

                {/* Breadcrumbs (Opcional, mas bom para SEO e UX) */}
                <nav className="text-sm text-slate-400 mb-6">
                    <a href="/" className="hover:text-nerd-purple">Home</a>
                    <span className="mx-2">/</span>
                    <a href={`/categoria/${produto.categoria.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-nerd-purple">{produto.categoria}</a>
                    <span className="mx-2">/</span>
                    <span className="text-white">{produto.titulo}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Lado Esquerdo: Imagem */}
                    <div className="rounded-xl overflow-hidden border border-white/10 p-2 bg-black flex justify-center items-center">
                        <img
                            src={produto.imagem}
                            alt={produto.titulo}
                            className="w-full h-auto max-h-[500px] object-contain opacity-90"
                        />
                    </div>

                    {/* Lado Direito: Info e Link */}
                    <div className="flex flex-col">
                        <span className="text-nerd-purple text-sm font-bold uppercase tracking-widest">{produto.categoria}</span>
                        <h1 className="text-4xl font-black text-white mt-2 leading-tight">
                            {produto.titulo} <span className="text-nerd-cyan">{produto.subtitulo}</span>
                        </h1>
                        <p className="text-slate-300 mt-6 text-lg leading-relaxed">{produto.descricao}</p>

                        <div className="mt-8 p-6 bg-slate-900 rounded-xl border border-white/10 shadow-lg shadow-nerd-purple/5">
                            <p className="text-slate-400 text-base">Preço na Shopee:</p>
                            <p className="text-5xl font-black text-nerd-green mt-1">R$ {produto.preco.toFixed(2)}</p>

                            <a
                                href={produto.urlAfiliado}
                                target="_blank"
                                rel="noopener noreferrer nofollow" // 'nofollow' é uma boa prática para links de afiliado
                                className="block text-center mt-6 bg-nerd-orange hover:bg-orange-600 text-white font-extrabold py-4 rounded-full text-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                            >
                                <ShoppingCart size={24} />
                                COMPRAR NA SHOPEE
                            </a>
                            <p className="text-center text-xs text-slate-500 mt-4 italic">
                                * Comprando pelo link você ajuda o site a continuar trazendo conteúdo gamer!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Seções de Detalhes Técnicos e Pontos Positivos/Negativos */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {produto.detalhesTecnicos && produto.detalhesTecnicos.length > 0 && (
                        <div className="p-6 bg-slate-900 rounded-xl border border-white/10 shadow-lg shadow-nerd-cyan/5">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Lightbulb className="text-nerd-cyan" />
                                Especificações Técnicas
                            </h2>
                            <ul className="list-none space-y-3 text-slate-300">
                                {produto.detalhesTecnicos.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="text-slate-500">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {produto.pontosPositivos && produto.pontosPositivos.length > 0 && (
                        <div className="p-6 bg-slate-900 rounded-xl border border-white/10 shadow-lg shadow-nerd-green/5">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle className="text-nerd-green" />
                                O que amamos neste produto
                            </h2>
                            <ul className="list-none space-y-3 text-slate-300">
                                {produto.pontosPositivos.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="text-nerd-green">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}