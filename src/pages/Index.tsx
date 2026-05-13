import { useState } from "react";

const SKETCH_IMAGE = "https://cdn.poehali.dev/projects/edf5c775-beee-4f38-b9ab-f47003df921f/files/95d20013-34ce-4e85-823e-aff363e5e2d8.jpg";

const slides = [{ id: 1 }, { id: 2 }];

export default function Index() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-screen h-screen bg-[#f5f0e8] overflow-hidden flex flex-col select-none">
      {/* Slides container */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            current === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
          }`}
        >
          <Slide1 />
        </div>

        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            current === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <Slide2 sketchImage={SKETCH_IMAGE} />
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="h-14 flex items-center justify-between px-10 border-t border-[#c9b99a]/30 bg-[#f5f0e8]/80 backdrop-blur-sm">
        <span className="font-golos text-[10px] tracking-[0.25em] uppercase text-[#9e8c78]">
          {current + 1} / {slides.length}
        </span>

        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-1.5 bg-[#6b5c47]"
                  : "w-1.5 h-1.5 bg-[#c9b99a] hover:bg-[#9e8c78]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="font-golos text-[10px] tracking-[0.2em] uppercase text-[#9e8c78] disabled:opacity-30 hover:text-[#6b5c47] transition-colors"
          >
            ← назад
          </button>
          <button
            onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
            disabled={current === slides.length - 1}
            className="font-golos text-[10px] tracking-[0.2em] uppercase text-[#9e8c78] disabled:opacity-30 hover:text-[#6b5c47] transition-colors"
          >
            вперёд →
          </button>
        </div>
      </nav>
    </div>
  );
}

function Slide1() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-[#f5f0e8]">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Frame lines */}
      <div className="absolute top-12 left-12 right-12 h-px bg-[#c9b99a]/40" />
      <div className="absolute bottom-12 left-12 right-12 h-px bg-[#c9b99a]/40" />
      <div className="absolute top-12 bottom-12 left-12 w-px bg-[#c9b99a]/40" />
      <div className="absolute top-12 bottom-12 right-12 w-px bg-[#c9b99a]/40" />

      {/* Corners */}
      <div className="absolute top-12 left-12 w-6 h-6 border-t border-l border-[#9e8c78]/60" />
      <div className="absolute top-12 right-12 w-6 h-6 border-t border-r border-[#9e8c78]/60" />
      <div className="absolute bottom-12 left-12 w-6 h-6 border-b border-l border-[#9e8c78]/60" />
      <div className="absolute bottom-12 right-12 w-6 h-6 border-b border-r border-[#9e8c78]/60" />

      {/* Content */}
      <div className="text-center px-16 relative z-10">
        <p
          className="font-golos text-[10px] tracking-[0.4em] uppercase text-[#9e8c78] mb-10 opacity-0 animate-fade-up"
          style={{ animationFillMode: "forwards" }}
        >
          Концепция мероприятия
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div
            className="h-px bg-[#c9b99a] opacity-0 animate-line-expand"
            style={{ width: "60px", animationFillMode: "forwards" }}
          />
          <div
            className="w-1 h-1 rounded-full bg-[#9e8c78] opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          />
          <div
            className="h-px bg-[#c9b99a] opacity-0 animate-line-expand"
            style={{ width: "60px", animationFillMode: "forwards", animationDelay: "0.2s" }}
          />
        </div>

        <h1
          className="font-cormorant font-light text-[#3a2e24] leading-[1.1] mb-6 opacity-0 animate-fade-up-delay"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            letterSpacing: "-0.01em",
            animationFillMode: "forwards",
          }}
        >
          Между ты и она
        </h1>

        <p
          className="font-cormorant-light italic text-[#6b5c47] mb-12 opacity-0 animate-fade-up-slow"
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            letterSpacing: "0.04em",
            animationFillMode: "forwards",
          }}
        >
          Лабиринты женских миров
        </p>

        <div
          className="flex items-center justify-center gap-3 opacity-0 animate-fade-in-slow"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="font-cormorant text-[#c9b99a] text-xl">✦</span>
          <span className="font-cormorant italic text-[#9e8c78] text-sm tracking-widest">2025</span>
          <span className="font-cormorant text-[#c9b99a] text-xl">✦</span>
        </div>
      </div>

      {/* Watermark symbol */}
      <div
        className="absolute bottom-20 right-20 opacity-[0.04] pointer-events-none"
        style={{ fontSize: "180px", lineHeight: 1, fontFamily: "Georgia, serif", color: "#6b5c47" }}
      >
        ∞
      </div>
    </div>
  );
}

function Slide2({ sketchImage }: { sketchImage: string }) {
  return (
    <div className="w-full h-full relative flex overflow-hidden bg-[#f7f3ec]">
      {/* Left column */}
      <div className="flex-1 flex flex-col justify-center px-14 py-12 relative z-10">
        <p className="font-golos text-[9px] tracking-[0.4em] uppercase text-[#9e8c78] mb-8">
          Смыслы мероприятия
        </p>

        <h2
          className="font-cormorant font-light text-[#3a2e24] leading-[1.15] mb-8"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)" }}
        >
          Жанры во&nbsp;имя
          <br />
          <span className="italic">женского образа</span>
        </h2>

        <div className="w-12 h-px bg-[#c9b99a] mb-8" />

        <p className="font-golos text-[#5a4a3a] text-sm leading-[1.85] mb-8 max-w-[42ch]" style={{ fontWeight: 300 }}>
          Через музыку, кино и поэзию — вдохновляясь классикой — мы вписываем женщин зала
          в великие художественные образы. Каждый блок открывает известная личность:
          образы поэтов и уральских композиторов появляются на прозрачных экранах
          и голограммах.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {[
            { symbol: "♩", label: "Скрипка · Гитара · Клавиши", sub: "Женщина — инструмент" },
            { symbol: "◎", label: "Танго · Вальс", sub: "Женщина — танец" },
            { symbol: "◈", label: "Лирика · Веселье · Рок", sub: "Женщина — песня" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <span className="font-cormorant text-[#c9b99a] text-xl leading-none mt-0.5">{item.symbol}</span>
              <div>
                <p className="font-golos text-[#3a2e24] text-xs tracking-wide">{item.sub}</p>
                <p className="font-golos text-[#9e8c78] text-[10px] tracking-widest uppercase mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="border-l border-[#c9b99a] pl-5">
          <p
            className="font-cormorant italic text-[#6b5c47] leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}
          >
            «После известной личности выходит мужчина из зала — и произносит речь для своей женщины»
          </p>
        </blockquote>
      </div>

      {/* Right column — sketch */}
      <div className="w-[44%] relative flex-shrink-0 overflow-hidden">
        <div className="absolute left-0 top-12 bottom-12 w-px bg-[#c9b99a]/40 z-10" />

        <img
          src={sketchImage}
          alt="Эскиз сценографии с лабиринтами"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          style={{ filter: "sepia(20%) contrast(0.9) brightness(1.05)" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ec]/40 via-transparent to-transparent" />

        <div className="absolute bottom-10 right-8 text-right z-10">
          <p className="font-golos text-[8px] tracking-[0.3em] uppercase text-[#9e8c78]">Сценография</p>
          <p className="font-cormorant italic text-[#6b5c47] text-sm mt-1">Лабиринты пространства</p>
        </div>

        <div className="absolute top-12 right-12 w-6 h-6 border-t border-r border-[#9e8c78]/50 z-10" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b border-r border-[#9e8c78]/50 z-10" />
      </div>
    </div>
  );
}
