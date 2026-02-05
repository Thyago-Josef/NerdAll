import produtos from '@/../data/produtos.json';
import ProductCard from '@/components/ProductCard';
import { Link } from 'lucide-react';
import { notFound } from 'next/navigation';


interface Produto {
    id: string;
    titulo: string;
    slug: string;
    preco: number;
    categoria: string; // Se for obrigatório
    imagem: string;
    // ... outros campos
}

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Filtro "blindado" contra itens incompletos no JSON
    const produtosFiltrados = produtos.filter((p: any) => {
        // 1. Verifica se p existe
        // 2. Verifica se p.categoria existe
        // 3. Compara com o slug da URL
        return p?.categoria && p.categoria.toLowerCase() === slug.toLowerCase();
    });

    // SE A SEÇÃO ESTIVER VAZIA:
    if (produtosFiltrados.length === 0) {
        return (
            <main className="min-h-screen bg-[#05070a] flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-3xl font-black text-white uppercase italic">
                    Ops! O loot de <span className="text-cyan-400">{slug}</span> sumiu.
                </h2>
                <p className="text-slate-400 mt-4 mb-8">Ainda não encontramos itens nesta categoria.</p>

                <Link href="/" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-sm transition-all uppercase tracking-widest text-xs">
                    Voltar para a Home
                </Link>
            </main>
        );
    }

    // Se a categoria não existir ou não tiver produtos, mostra 404
    if (produtosFiltrados.length === 0) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#05070a] p-8">
            <header className="max-w-[1400px] mx-auto mb-10">
                <h1 className="text-3xl font-black italic text-white uppercase tracking-tighter">
                    Loot: <span className="text-cyan-400">{slug}</span>
                </h1>
                <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
            </header>

            <section className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {produtosFiltrados.map((p: any) => (
                        <ProductCard key={p.id} produto={p} />
                    ))}
                </div>
            </section>
        </main>
    );
}