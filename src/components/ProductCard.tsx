"use client";
import Link from 'next/link';

export default function ProductCard({ produto }: { produto: any }) {
    return (
        <div className="bg-[#0f1217] border border-cyan-500/20 hover:border-cyan-400 rounded-xl overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] flex flex-col group">
            <div className="aspect-square bg-white flex items-center justify-center p-4 overflow-hidden">
                <img
                    src={produto.imagem}
                    alt={produto.titulo}
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300/white/000?text=Nerd+Item"; }}
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                {/* Categoria pequena acima do título para dar o estilo da imagem */}
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em] mb-1">
                    {produto.categoria || "Nerd Gear"}
                </span>

                <h3 className="text-slate-100 font-bold text-lg mb-4 line-clamp-2 min-h-[3.5rem]">
                    {produto.titulo}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Preço</span>
                        <span className="text-2xl font-black text-white">
                            R$ {produto?.preco ? Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'}
                        </span>
                    </div>

                    {/* Ajustado para comportamento de afiliado real */}
                    <a
                        href={produto.urlAfiliado}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-cyan-400 text-black font-black px-4 py-2 text-xs rounded transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                    >
                        COMPRAR
                    </a>
                </div>
            </div>
        </div>
    );
}