import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { articles } from "./data";
import { ArrowLeft, Clock, CalendarDays, ShieldAlert, Sparkles } from "lucide-react";

export function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-20 text-center bg-[#FEF9E6] border border-[#4A2C2A]/20 rounded-sm">
        <h2 className="font-serif text-3xl font-bold mb-4">Story not found.</h2>
        <Link to="/" className="font-display text-sm uppercase underline font-bold hover:text-[#C2873B] transition-colors">
          Go back to front page
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto py-6 bg-[#FEF9E6] p-6 md:p-10 border border-[#4A2C2A]/20 rounded-sm shadow-sm relative space-y-6"
    >
      <div className="absolute top-0 left-0 w-3 h-3 bg-[#8BA88A]"></div>
      
      <div className="flex justify-between items-center pb-4 border-b border-[#4A2C2A]/10">
        <Link to="/" className="inline-flex items-center gap-1.5 font-display text-[10px] uppercase font-bold tracking-widest text-[#4A2C2A]/70 hover:text-[#C2873B] transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Kembali Ke Utama
        </Link>
        <span className="text-[10px] font-mono bg-[#8BA88A]/15 text-[#4A2C2A] font-bold px-2 py-0.5 rounded-sm">
          {article.date}
        </span>
      </div>

      {/* Featured Banner Image */}
      <div className="relative h-64 md:h-[350px] w-full overflow-hidden rounded-sm border border-[#4A2C2A]/10 shadow-inner">
        <img
          src={article.imageUrl}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-[#4A2C2A]/90 text-white text-[9px] font-mono px-2 py-0.5 rounded-sm">
          Sponsor: Winbox Platform
        </div>
      </div>

      <div>
        <span className="font-display text-[11px] uppercase font-bold tracking-widest text-[#8BA88A] mb-2 block">
          {article.category} • {article.readTimeMin} min bacaan
        </span>
        
        <h1 className="font-serif text-3xl md:text-4xl font-black leading-tight mb-4 text-[#4A2C2A] text-balance">
          {article.title}
        </h1>
      </div>

      <div className="flex items-center justify-between border-y border-[#4A2C2A]/15 py-3 font-display text-[10px] uppercase font-bold text-[#4A2C2A]/60">
        <span>Kopi Press Publications</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#C2873B]" />
          <span>Editor's Pick</span>
        </div>
      </div>

      {/* Article Body */}
      <div className="font-body text-base md:text-lg leading-relaxed text-[#2B1E1D] space-y-6">
        <p className="font-serif text-lg md:text-xl italic opacity-95 mb-6 border-l-4 border-[#C2873B] pl-4 text-balance">
          {article.summary}
        </p>

        {/* Dangerous set inner HTML to correctly render live backlinks for winbox & winbox666 */}
        <div 
          className="prose prose-stone max-w-none text-[#2B1E1D]/90"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* Beautiful informative footer on responsible gaming */}
      <div className="mt-10 p-4 bg-[#8BA88A]/5 border border-[#8BA88A]/20 rounded-sm flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-[#C2873B] shrink-0 mt-0.5" />
        <div className="text-xs font-sans text-[#2B1E1D]/80 leading-relaxed">
          <p className="font-bold text-[#4A2C2A] mb-1">Amalan Rekreasi Bertanggungjawab</p>
          Urus modal anda dengan bijak semasa bermain dalam talian di platform terpilih seperti <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-[#C2873B] font-bold underline hover:text-[#4A2C2A] transition-colors">winbox</a>. Rancang masa santai anda dengan penuh berhemah untuk keseronokan berterusan yang sihat.
        </div>
      </div>

      <div className="pt-6 border-t border-[#4A2C2A]/15 flex justify-between items-center">
        <Link to="/" className="text-xs font-sans font-bold uppercase text-[#C2873B] hover:underline flex items-center gap-1">
          &larr; Lihat Koleksi Jun 2026
        </Link>
        <p className="font-serif italic text-sm text-[#4A2C2A]/80">
          "Kopi secawan, berita seimbang."
        </p>
      </div>
    </motion.article>
  );
}
