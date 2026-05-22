import Link from "next/link";

export default function AtamaPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center gap-10 p-8">
      <div className="text-center mb-4">
        <p className="text-[10px] tracking-[0.28em] uppercase text-white/30 mb-3">Design Review</p>
        <h1 className="text-2xl font-bold text-white tracking-tight">Header — A/B</h1>
        <p className="text-[13px] text-white/40 mt-2">Escolha uma variante para visualizar</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-lg">
        <Link
          href="/review/a"
          className="flex-1 group border border-white/10 rounded-2xl p-7 hover:border-white/25 hover:bg-white/5 transition-all"
        >
          <p className="text-[9px] tracking-[0.22em] uppercase text-white/30 mb-2">Variante</p>
          <p className="text-3xl font-black text-white mb-3">A</p>
          <p className="text-[12px] text-white/50 leading-relaxed">Header sólido acima do carousel. Design atual.</p>
        </Link>

        <Link
          href="/review/b"
          className="flex-1 group border border-white/10 rounded-2xl p-7 hover:border-white/25 hover:bg-white/5 transition-all"
        >
          <p className="text-[9px] tracking-[0.22em] uppercase text-white/30 mb-2">Variante</p>
          <p className="text-3xl font-black text-white mb-3">B</p>
          <p className="text-[12px] text-white/50 leading-relaxed">Header transparente flutuando sobre o carousel. Logo e actions em branco.</p>
        </Link>
      </div>
    </div>
  );
}
