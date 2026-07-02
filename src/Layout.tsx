import { Outlet, Link } from "react-router-dom";
import { Coffee, MapPin } from "lucide-react";

export function Layout() {
  const getMalayDate = () => {
    const date = new Date();
    const days = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Mac", "April", "Mei", "Jun", 
      "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} ${monthName} ${year}`;
  };

  const currentDateMalay = getMalayDate();

  return (
    <div className="min-h-screen bg-[#F5EDE0] text-[#2B1E1D] font-serif flex flex-col justify-between relative md:border-[12px] border-[#4A2C2A] overflow-x-hidden">
      {/* Absolute dot overlay background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#4A2C2A 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

      {/* Newspaper Top Header */}
      <header className="border-b-2 border-[#4A2C2A] mx-4 md:mx-8 pt-8 pb-6 flex flex-col justify-center relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-2">
          <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#C2873B] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C2873B]" /> Kuala Lumpur • 28°C 🌤️
          </div>
          <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#2B1E1D]/60">
            Volume IV • Issue 142
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-baseline gap-4">
          <Link to="/" className="hover:opacity-90 transition-opacity flex items-center gap-3">
            <Coffee className="w-10 h-10 text-[#4A2C2A]" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#4A2C2A]" style={{ fontFamily: "'Georgia', serif" }}>
              KOPI PRESS
            </h1>
          </Link>
          <p className="text-lg md:text-xl italic text-[#4A2C2A] opacity-80">
            "Start your day with kopi and news."
          </p>
        </div>

        {/* Date badge anchored at bottom-right */}
        <div className="absolute -bottom-4 right-0 bg-[#4A2C2A] text-[#FDF6E3] px-4 py-1.5 text-xs md:text-sm font-sans font-bold uppercase tracking-widest shadow-md">
          {currentDateMalay}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 py-10 relative z-10 flex flex-col">
        <div className="flex-grow relative">
          {/* Subtle decorative coffee stains */}
          <div className="coffee-stain top-4 -right-16 opacity-30 select-none"></div>
          <div className="coffee-stain bottom-24 -left-16 opacity-20 transform -rotate-45 scale-75 select-none"></div>
          
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A2C2A] text-[#FDF6E3] py-5 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-wider relative z-10 gap-4 border-t border-[#4A2C2A]/20">
        <div>All content curated fresh every morning by the Kopi Press team.</div>
        <div className="flex gap-6 font-bold">
          <Link to="/" className="hover:text-[#C2873B] transition-colors">Utama (Home)</Link>
          <Link to="/about" className="hover:text-[#C2873B] transition-colors">Tentang Kami (About)</Link>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Hubungi kami di: hello@kopipress.com.my'); }} className="hover:text-[#C2873B] transition-colors">Hubungi (Contact)</a>
        </div>
        <div>&copy; {new Date().getFullYear()} KOPI PRESS MEDIA MALAYSIA</div>
      </footer>
    </div>
  );
}
