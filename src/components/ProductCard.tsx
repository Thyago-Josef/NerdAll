export default function ProductCard({ produto }: { produto: any }) {
    return (
        // Dentro do seu ProductCard.tsx
        <div className="bg-[#0f1217] border border-white/5 rounded-md overflow-hidden flex flex-col h-full group">

            {/* Container da Imagem */}
            {/* <div className="relative aspect-square w-full bg-white overflow-hidden">
                <img
                    src={produto.imagem}
                    alt={produto.titulo}
                    // 'object-contain' mantém a foto inteira sem cortar. 
                    // Se quiser que ela ocupe TODO o espaço (estilo Shopee), mude para 'object-cover'
                    className="w-full h-full object-contain p-0 transition-transform duration-300 group-hover:scale-110"
                />
            </div> */}
            {/* Container da Imagem - SEM PADDING */}
            <div className="relative aspect-square w-full bg-black overflow-hidden">
                <img
                    src={produto.imagem}
                    alt={produto.titulo}
                    /* w-full: Encosta nas laterais.
                       h-full + object-contain: Mostra o produto inteiro sem cortar.
                       Se quiser que preencha TUDO (estilo Shopee), mude para 'object-cover'.
                    */
                    className="w-full h-full object-contain p-0 transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            {/* Conteúdo do Card (Mais compacto) */}
            <div className="p-2 flex flex-col flex-1 justify-between">
                <div>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase block mb-1">
                        {produto.categoria}
                    </span>
                    <h3 className="text-white text-xs font-semibold line-clamp-2 leading-tight">
                        {produto.titulo}
                    </h3>
                </div>

                <div className="mt-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[8px] text-slate-500 uppercase font-bold">Preço</p>
                            <p className="text-sm font-black text-white">
                                R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        {/* <button className="bg-white text-black text-[10px] font-black px-2 py-1 rounded-sm">
                            <link >{produto.urlAfiliado}</link>
                            COMPRAR
                        </button> */}
                        <a
                            href={produto.urlAfiliado}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black text-[10px] font-black px-2 py-1 rounded-sm hover:bg-cyan-400 transition-colors"
                        >
                            COMPRAR
                        </a>
                    </div>
                </div>
            </div>

        </div>

    );
}