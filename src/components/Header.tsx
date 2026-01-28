import Link from 'next/link';

export default function Header() {
    const categorias = ['Home', 'Figures', 'Clothing', 'Collectibles', 'Anime', 'Tech'];

    return (
        <header className="w-full py-4 px-10 flex flex-row items-center justify-between border-b border-white/5 bg-[#05070a]/80 backdrop-blur-md sticky top-0 z-50">

            {/* Logo alinhado à esquerda */}
            <Link href="/" className="text-2xl font-black tracking-tighter italic border-2 border-cyan-500 px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform">
                <span className="text-cyan-400">GEEK</span> <span className="text-pink-500">GUILD</span>
            </Link>

            {/* Menu de Navegação alinhado à direita */}
            <nav className="flex gap-8">
                {categorias.map((cat) => (
                    <Link
                        key={cat}
                        href={`/categoria/${cat.toLowerCase()}`}
                        className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        {cat}
                    </Link>
                ))}
            </nav>

            {/* Div auxiliar opcional para manter o equilíbrio visual se quiser centralizar o menu, 
                ou pode adicionar um botão de "Login/Perfil" aqui */}
        </header>
    );
}