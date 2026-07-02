import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { articles, marketMamak, todayInHistory, kopiTalk, events, Article } from "./data";
import { TrendingUp, TrendingDown, Clock, CalendarDays, Ticket, Sparkles, Search, SlidersHorizontal, BookOpen, ExternalLink } from "lucide-react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedDate, setSelectedDate] = useState("Semua");

  const categories = ["Semua", "Gaya Hidup", "Teknologi", "Hiburan", "Santai", "Suara Rakyat", "Sukan"];

  // Unique list of dates from our 27 articles (sorted newest first)
  const availableDates = Array.from(new Set(articles.map(a => a.date)));

  // Filter logic
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    const matchesDate = selectedDate === "Semua" || article.date === selectedDate;

    return matchesSearch && matchesCategory && matchesDate;
  });

  // Highlighted article (the newest/first match, or the top one)
  const featuredArticle = filteredArticles[0] || articles[0];
  const listArticles = filteredArticles.slice(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* Search & Filter Header Control Center */}
      <div className="bg-[#FEF9E6] p-6 border-2 border-[#4A2C2A]/20 rounded-sm shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-4 border-b border-[#4A2C2A]/10">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#C2873B]" />
            <h3 className="font-serif font-black text-lg text-[#4A2C2A]">
              Arsip Buletin Kopi (Jun 2026)
            </h3>
          </div>
          
          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Cari berita / tajuk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FDF6E3] border border-[#4A2C2A]/30 rounded-sm py-1.5 pl-9 pr-4 font-sans text-xs focus:outline-none focus:border-[#C2873B] text-[#2B1E1D] font-medium"
            />
            <Search className="w-4 h-4 text-[#4A2C2A]/50 absolute left-3 top-2" />
          </div>
        </div>

        {/* Categories Horizontal Selector */}
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-[10px] font-sans font-black uppercase tracking-wider text-[#4A2C2A]/60 mr-2">
            Kategori:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider rounded-sm transition-all border ${
                selectedCategory === cat
                  ? "bg-[#4A2C2A] text-[#FDF6E3] border-[#4A2C2A]"
                  : "bg-[#FDF6E3] hover:bg-[#8BA88A]/10 text-[#2B1E1D]/80 border-[#4A2C2A]/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Date Selector Quick Grid */}
        <div className="mt-4 pt-4 border-t border-[#4A2C2A]/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-sans font-black uppercase tracking-wider text-[#4A2C2A]/60 flex items-center gap-1">
              <CalendarDays className="w-3.5 h-3.5 text-[#C2873B]" /> Pilih Tarikh Terbitan (Jun 2026):
            </span>
            {selectedDate !== "Semua" && (
              <button 
                onClick={() => setSelectedDate("Semua")}
                className="text-[10px] font-sans font-bold uppercase text-[#C2873B] hover:underline"
              >
                Tunjuk Semua Hari
              </button>
            )}
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#4A2C2A]/20">
            <button
              onClick={() => setSelectedDate("Semua")}
              className={`px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-sm border shrink-0 transition-all ${
                selectedDate === "Semua"
                  ? "bg-[#C2873B] text-white border-[#C2873B]"
                  : "bg-[#FDF6E3] hover:bg-[#8BA88A]/10 text-[#2B1E1D] border-[#4A2C2A]/15"
              }`}
            >
              Semua Tarikh
            </button>
            {availableDates.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-sm border shrink-0 transition-all ${
                  selectedDate === d
                    ? "bg-[#C2873B] text-white border-[#C2873B]"
                    : "bg-[#FDF6E3] hover:bg-[#8BA88A]/10 text-[#2B1E1D] border-[#4A2C2A]/15"
                }`}
              >
                {d.replace(" Jun 2026", "")} HB
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: News Feed (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          <div className="flex items-center gap-2">
            <div className="h-[1.5px] flex-1 bg-[#4A2C2A] opacity-30"></div>
            <h2 className="text-xs font-sans font-black uppercase tracking-widest text-[#4A2C2A] text-center whitespace-nowrap">
              {selectedDate === "Semua" ? "Utusan Utama & Arkid Harian" : `Terbitan Khas: ${selectedDate}`} ({filteredArticles.length} Berita)
            </h2>
            <div className="h-[1.5px] flex-1 bg-[#4A2C2A] opacity-30"></div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-[#FEF9E6] p-10 border border-[#4A2C2A]/15 text-center rounded-sm">
              <p className="font-serif italic text-lg text-[#2B1E1D]/70 mb-2">
                Tiada berita ditemui bagi carian atau tarikh tersebut.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); setSelectedDate("Semua"); }}
                className="font-sans text-xs uppercase font-bold text-[#C2873B] hover:underline"
              >
                Sifar Semula Tapisan
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              
              {/* Featured / Spotlight Card */}
              {featuredArticle && (
                <div className="border-b-2 border-[#4A2C2A]/10 pb-8">
                  <Link to={`/brief/${featuredArticle.slug}`} className="group block">
                    <div className="relative h-64 md:h-80 w-full mb-5 overflow-hidden rounded-sm border border-[#4A2C2A]/10 shadow-sm">
                      <img
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#C2873B] text-white px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest rounded-sm shadow-md">
                        {featuredArticle.date}
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8BA88A] block mb-2">
                      {featuredArticle.category} • {featuredArticle.readTimeMin} min bacaan
                    </span>
                    
                    <h3 className="font-serif text-3xl md:text-4xl font-black leading-tight mb-3 group-hover:text-[#C2873B] transition-colors text-balance">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="font-body text-base leading-relaxed text-[#2B1E1D]/80 mb-4 text-balance">
                      {featuredArticle.summary}
                    </p>
                    
                    <div className="flex items-center gap-1.5 font-display text-[10px] uppercase font-bold text-[#4A2C2A]/60">
                      <BookOpen className="w-3.5 h-3.5 text-[#C2873B]" />
                      <span>Baca artikel penuh & lihat pautan rasmi &rarr;</span>
                    </div>
                  </Link>
                </div>
              )}

              {/* General Grid Feed */}
              {listArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {listArticles.map((article) => (
                    <div key={article.id} className="bg-[#FEF9E6] border border-[#4A2C2A]/15 rounded-sm p-5 hover:shadow-md transition-all flex flex-col justify-between">
                      <Link to={`/brief/${article.slug}`} className="group block space-y-3">
                        <div className="relative h-40 w-full overflow-hidden rounded-sm border border-[#4A2C2A]/5">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 left-2 bg-[#4A2C2A]/90 text-[#FDF6E3] px-2 py-0.5 text-[9px] font-sans font-bold uppercase tracking-wider rounded-sm">
                            {article.date}
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#8BA88A] block mb-1">
                            {article.category} • {article.readTimeMin} min bacaan
                          </span>
                          <h4 className="font-serif text-lg font-bold leading-snug group-hover:text-[#C2873B] transition-colors text-balance line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="font-body text-xs leading-relaxed text-[#2B1E1D]/80 line-clamp-3 mt-1.5">
                            {article.summary}
                          </p>
                        </div>
                      </Link>

                      <div className="mt-4 pt-3 border-t border-[#4A2C2A]/10 flex items-center justify-between">
                        <Link to={`/brief/${article.slug}`} className="text-[10px] font-sans font-bold uppercase text-[#C2873B] hover:underline flex items-center gap-1">
                          Sembang Lanjut <BookOpen className="w-3 h-3" />
                        </Link>
                        {/* Direct subtle link to promote Winbox platforms if match query */}
                        <span className="text-[9px] font-mono text-[#2B1E1D]/50 bg-[#8BA88A]/10 px-1.5 py-0.5 rounded-sm">
                          Sponsor: Winbox
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Legacy Today in History section */}
          <div className="bg-[#FEF9E6] p-6 border border-[#4A2C2A]/20 shadow-sm relative rounded-sm">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#8BA88A] rounded-full opacity-25"></div>
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-5 h-5 text-[#C2873B]" />
              <h3 className="font-serif font-bold text-lg text-[#4A2C2A]">{todayInHistory.date}</h3>
            </div>
            <p className="font-body text-sm text-[#2B1E1D]/85 leading-relaxed">
              {todayInHistory.story}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar (col-span-4) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Market Mamak */}
          <div className="border-2 border-[#4A2C2A] p-5 flex flex-col justify-between bg-[#FDF6E3] relative rounded-sm shadow-sm">
            <h2 className="text-xs font-sans font-black uppercase tracking-widest mb-4 text-[#4A2C2A]">
              Market Mamak
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border-r border-[#4A2C2A]/20 pr-2">
                <p className="text-xs text-[#C2873B] font-bold font-sans">RINGGIT / USD</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-2xl font-bold font-sans">{marketMamak.ringgit.split(' ')[0]}</span>
                  {marketMamak.ringgitDirection === "down" ? (
                    <span className="text-xs text-red-600 font-sans flex items-center gap-0.5 font-bold">
                      <TrendingDown className="w-3.5 h-3.5" /> ↓
                    </span>
                  ) : (
                    <span className="text-xs text-green-600 font-sans flex items-center gap-0.5 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> ↑
                    </span>
                  )}
                </div>
              </div>
              <div className="pl-2">
                <p className="text-xs text-[#C2873B] font-bold font-sans">BURSA MALAYSIA</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-2xl font-bold font-sans">{marketMamak.bursa.split(' ')[2]}</span>
                  {marketMamak.bursaDirection === "up" ? (
                    <span className="text-xs text-green-600 font-sans flex items-center gap-0.5 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> ↑
                    </span>
                  ) : (
                    <span className="text-xs text-red-600 font-sans flex items-center gap-0.5 font-bold">
                      <TrendingDown className="w-3.5 h-3.5" /> ↓
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#4A2C2A]/10 text-xs italic font-serif text-[#2B1E1D]/80">
              "{marketMamak.meaning}"
            </div>
          </div>

          {/* Kopi Talk (Editorial) */}
          <div className="bg-[#4A2C2A] text-[#FDF6E3] p-5 rounded-sm shadow-md relative overflow-hidden">
            <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#C2873B] mb-3">
              {kopiTalk.title} (Editorial)
            </h3>
            <p className="font-serif italic text-sm leading-relaxed text-[#FDF6E3]/90 text-balance mb-4">
              "{kopiTalk.content}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C2873B] flex items-center justify-center font-bold text-xs text-[#4A2C2A]">
                UW
              </div>
              <div>
                <p className="text-xs font-bold font-sans">Uncle Wong</p>
                <p className="text-[10px] opacity-75 font-sans">Kopitiam Chief Philosopher</p>
              </div>
            </div>
          </div>

          {/* What's Happening Locally */}
          <div className="border border-[#4A2C2A]/20 bg-[#FEF9E6] p-5 rounded-sm">
            <h3 className="text-xs font-sans font-black uppercase tracking-widest text-[#4A2C2A] mb-3 border-b border-[#4A2C2A]/10 pb-1 flex items-center gap-1.5">
              <Ticket className="w-4 h-4 text-[#C2873B]" /> What's Happening Locally
            </h3>
            <ul className="space-y-2.5 font-sans">
              {events.map((event, index) => (
                <li key={index} className="flex gap-2 items-start text-xs font-medium text-[#2B1E1D]/85">
                  <span className="text-[#C2873B] mt-0.5">•</span>
                  <span>{event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsor Feature Showcase */}
          <div className="bg-[#8BA88A]/10 p-5 border border-[#8BA88A]/40 rounded-sm">
            <h2 className="text-xs font-sans font-black uppercase tracking-widest mb-3 text-[#4A2C2A] border-b border-[#8BA88A]/30 pb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#8BA88A]" /> Pilihan Hiburan Selamat
            </h2>
            <div className="space-y-3 font-sans text-xs">
              <p className="leading-relaxed text-[#2B1E1D]/90">
                Mencari kepuasan rekreasi yang diiktiraf di Malaysia? Alami platform <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-[#C2873B] font-bold underline hover:text-[#4A2C2A] transition-colors">winbox</a> yang membawakan pelbagai tajuk kasino langsung premium, ganjaran rebat tinggi harian, dan sistem perlindungan data terbaik di pasaran tempatan.
              </p>
              <div className="pt-2 border-t border-[#4A2C2A]/10 flex flex-col gap-1.5">
                <a 
                  href="https://winbox666.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#C2873B] hover:underline flex items-center gap-1"
                >
                  Portal Utama: winbox &rarr;
                </a>
                <a 
                  href="https://winbox666.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#C2873B] hover:underline flex items-center gap-1"
                >
                  Panduan Pendaftaran: winbox666 &rarr;
                </a>
              </div>
            </div>
          </div>

        </aside>
      </div>
    </motion.div>
  );
}
