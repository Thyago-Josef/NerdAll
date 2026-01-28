"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ produtos }: { produtos: any[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: false,
        slidesToScroll: 1
    });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative max-w-7xl mx-auto px-4 group">
            {/* Botões de Navegação */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/20 hover:bg-cyan-500 text-white p-2 rounded-full border border-cyan-500/50 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6 py-8">
                    {produtos.map((p) => (
                        <div key={p.id} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                            <ProductCard produto={p} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/20 hover:bg-cyan-500 text-white p-2 rounded-full border border-cyan-500/50 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}