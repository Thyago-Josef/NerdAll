import produtos from '../../data/produtos.json';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Nerd Achados
        </h1>
        <p className="text-slate-400 mt-2">A melhor curadoria de itens geek da Shopee</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtos.map(p => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </main>
  );
}