import produtos from '@/../data/produtos.json';
import ProductCard from '@/components/ProductCard';
import ProductCarousel from '@/components/ProductCarousel';


export default function Home() {

  function HeroBanner() {
    return (
      <section className="relative w-full max-w-7xl mx-auto h-[400px] mt-8 rounded-3xl overflow-hidden border border-cyan-500/30 group">
        {/* Background com efeito tecnológico */}
        <div className="absolute inset-0 bg-[url('https://wallpaperaccess.com/full/2561563.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>

        {/* Texto Central */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-4">
            GEAR UP, <span className="text-cyan-400 font-outline-2">HERO.</span>
          </h2>
          <p className="text-xl text-slate-300 font-bold tracking-tight mb-8 uppercase">
            Unlock Exclusive Nerd Loot
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-10 py-3 rounded-md transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]">
            SHOP NOW
          </button>
        </div>
      </section>
    );
  }
  return (


    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden pb-20">
      {/* Luzes de Fundo (Aura Neon) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      {/* Header Estilizado */}
      <header className="py-12 text-center relative z-10">
        <h1 className="text-5xl font-black italic tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          NERD ACHADOS
        </h1>
        <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_#a855f7]"></div>
      </header>

      {/* Grid com espaçamento corrigido */}
      {/* 2. SEÇÃO DE GRID (Todos os Produtos) */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">
            Explore <span className="text-purple-500">All Loot</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {produtos.map((p: any) => (
            <ProductCard key={p.id} produto={p} />
          ))}
        </div>
      </section>
      <footer className="w-full py-10 mt-20 border-t border-white/5 bg-[#05070a] text-center">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Logo reduzida no rodapé */}
          <div className="text-xl font-black italic mb-4 opacity-50">
            <span className="text-cyan-400">GEEK</span> <span className="text-pink-500">GUILD</span>
          </div>

          {/* Texto de Copyright */}
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Nerd Achados - Geek Guild. Todos os direitos reservados.
          </p>

          {/* Aviso Legal (Importante para sites de afiliados) */}
          <p className="text-slate-600 text-[9px] mt-4 max-w-2xl mx-auto leading-relaxed">
            O Geek Guild é um site independente que participa de programas de afiliados.
            Ao clicar em nossos links, podemos receber uma pequena comissão, o que não altera o valor final para você e nos ajuda a manter a nave espacial voando.
          </p>
        </div>
      </footer>
    </main>
  );
}