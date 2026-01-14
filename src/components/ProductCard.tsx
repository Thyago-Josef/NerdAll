import Link from 'next/link';

export default function ProductCard({ produto }: { produto: any }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all group">
            <img src={produto.imagem} alt={produto.titulo} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
            <div className="p-4">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{produto.categoria}</span>
                <h2 className="text-xl font-bold text-white mt-1 leading-tight">{produto.titulo}</h2>
                <p className="text-2xl font-black text-green-400 mt-3">R$ {produto.preco.toFixed(2)}</p>
                <Link
                    href={`/produto/${produto.slug}`}
                    className="block text-center mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition-colors"
                >
                    Ver Detalhes
                </Link>
            </div>
        </div>
    );
}