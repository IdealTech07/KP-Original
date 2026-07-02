import { motion } from "motion/react";

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto py-12 bg-[#FEF9E6] p-6 md:p-10 border border-[#4A2C2A]/20 rounded-sm shadow-sm relative"
    >
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#8BA88A]"></div>
      
      <h1 className="font-serif text-3xl md:text-4xl font-black mb-8 text-[#4A2C2A] text-center">
        Our Kopitiam Story
      </h1>
      
      <div className="font-body text-base md:text-lg leading-relaxed text-[#2B1E1D] space-y-6">
        <p>
          Selamat datang to Kopi Press. Think of us as that corner table at your local kopitiam where the uncles gather every morning. 
        </p>
        <p>
          We know you're busy. You have traffic to beat, meetings to attend, and a dozen WhatsApp groups to mute. That's why we distill Malaysia's daily news into a quick, warm, 5-minute read. No fluff, no panic-inducing headlines—just what you need to know to start your day right.
        </p>
        <p>
          We cover the top stories, the business movements (simplified for the rest of us), a bit of history, and the weekend entertainment highlights. 
        </p>
        <p className="font-serif italic text-lg md:text-xl border-l-4 border-[#C2873B] pl-4 mt-8 text-balance">
          "Grab your kopi, read the brief, and go conquer your day."
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-[#4A2C2A]/20 text-center">
        <h2 className="font-display uppercase text-xs tracking-widest font-bold mb-4 text-[#4A2C2A]">Drop us a line</h2>
        <p className="font-body text-sm text-[#2B1E1D]/90 font-medium">hello@kopipress.com.my</p>
      </div>
    </motion.div>
  );
}
