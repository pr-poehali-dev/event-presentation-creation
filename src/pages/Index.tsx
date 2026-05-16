import { useEffect, useState } from "react";

const IMG = {
  welcomeMusic: "https://cdn.poehali.dev/projects/edf5c775-beee-4f38-b9ab-f47003df921f/files/d6cc9f58-7a61-4c9a-8d99-f7d44780ec60.jpg",
  welcomeHall: "https://cdn.poehali.dev/projects/edf5c775-beee-4f38-b9ab-f47003df921f/files/20d17bb3-e944-4d01-98aa-9dd2f494dca5.jpg",
  bar: "https://cdn.poehali.dev/projects/edf5c775-beee-4f38-b9ab-f47003df921f/files/ea4bdb95-afff-45be-bfc2-ac8ea9476a30.jpg",
  photoLab: "https://cdn.poehali.dev/projects/edf5c775-beee-4f38-b9ab-f47003df921f/files/ceff269d-4135-4090-98a8-1bdeeb46190a.jpg",
  tree: "https://cdn.poehali.dev/projects/edf5c775-beee-4f38-b9ab-f47003df921f/files/bfa07521-f85e-4007-a6be-67e5c30bc23c.jpg",
};

const BG = "#e8d8b8";
const GOLD = "#a8884a";
const DARK = "#3a2a14";
const SOFT = "#5a4628";

export default function Index() {
  const [current, setCurrent] = useState(0);
  const total = 9;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") setCurrent((p) => Math.min(total - 1, p + 1));
      if (e.key === "ArrowLeft") setCurrent((p) => Math.max(0, p - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9];

  return (
    <div className="w-screen h-screen bg-[#2a2218] flex items-center justify-center overflow-hidden">
      <div
        className="relative shadow-2xl cursor-pointer"
        style={{
          aspectRatio: "16 / 9",
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          backgroundColor: BG,
        }}
        onClick={() => setCurrent((p) => (p + 1) % total)}
      >
        {slides.map((Slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: current === i ? 1 : 0, pointerEvents: current === i ? "auto" : "none" }}
          >
            <Slide />
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideFrame({ children, title, subtitle }: { children: React.ReactNode; title?: string; subtitle?: string }) {
  return (
    <div
      className="w-full h-full relative flex flex-col"
      style={{ backgroundColor: BG, color: DARK, fontFamily: "'Manrope', 'Inter', sans-serif" }}
    >
      <div className="absolute inset-[1.8%] border pointer-events-none" style={{ borderColor: `${GOLD}55` }} />
      <div className="absolute inset-[2.6%] border pointer-events-none" style={{ borderColor: `${GOLD}30` }} />

      <div className="absolute top-[3%] left-[3%] w-5 h-5 border-t-2 border-l-2" style={{ borderColor: GOLD }} />
      <div className="absolute top-[3%] right-[3%] w-5 h-5 border-t-2 border-r-2" style={{ borderColor: GOLD }} />
      <div className="absolute bottom-[3%] left-[3%] w-5 h-5 border-b-2 border-l-2" style={{ borderColor: GOLD }} />
      <div className="absolute bottom-[3%] right-[3%] w-5 h-5 border-b-2 border-r-2" style={{ borderColor: GOLD }} />

      {title && (
        <div className="pt-[4%] px-[6%] flex flex-col items-center">
          <p
            className="uppercase tracking-[0.5em]"
            style={{ fontSize: "20px", color: GOLD, fontWeight: 700 }}
          >
            {title}
          </p>
          {subtitle && (
            <p className="mt-2" style={{ fontSize: "20px", color: SOFT, fontWeight: 400 }}>
              {subtitle}
            </p>
          )}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16" style={{ backgroundColor: GOLD }} />
            <span style={{ color: GOLD }}>◆</span>
            <div className="h-px w-16" style={{ backgroundColor: GOLD }} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-h-0">{children}</div>
    </div>
  );
}

function Slide1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col items-center justify-center px-[8%] text-center">
        <p
          className="uppercase tracking-[0.6em] mb-8"
          style={{ fontSize: "20px", color: GOLD, fontWeight: 700 }}
        >
          Концепция дня рождения
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-24" style={{ backgroundColor: GOLD }} />
          <span style={{ color: GOLD, fontSize: "28px" }}>❖</span>
          <div className="h-px w-24" style={{ backgroundColor: GOLD }} />
        </div>

        <h1
          className="leading-[1.05] mb-8"
          style={{
            fontSize: "clamp(48px, 8vw, 110px)",
            fontWeight: 300,
            color: DARK,
            letterSpacing: "-0.02em",
          }}
        >
          Гостиная
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 200, color: SOFT }}>времени</span>
        </h1>

        <div className="flex items-center gap-4 mt-4">
          <div className="h-px w-16" style={{ backgroundColor: GOLD }} />
          <p style={{ fontSize: "20px", color: SOFT, fontWeight: 500, letterSpacing: "0.2em" }}>
            формат вечера
          </p>
          <div className="h-px w-16" style={{ backgroundColor: GOLD }} />
        </div>
      </div>
    </SlideFrame>
  );
}

function Slide2() {
  return (
    <SlideFrame title="Смыслы">
      <div className="flex-1 px-[7%] pt-5 pb-[5%] overflow-hidden">
        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.5,
            color: DARK,
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          Мы делаем не стандартный юбилей, а тёплую домашнюю гостиную, где исполняется мечта именинника.
          В центре — большой стол, во главе которого он. Вокруг — его семья, дети, самые близкие люди.
          Ему не нужно развлекать гостей — он просто наблюдает, как все собираются, общаются, смеются,
          как подрастают дети, и чувствует, что всем комфортно и кайфово. Пространство гостиной оформлено
          как уютный дом. Картины не просто висят — они становятся частью сюжета: в нужные моменты вечера
          они оживают как театральный перформанс. За стеклом может появиться актёр, тень, видеовставка
          или живая сцена — так мы рассказываем истории из жизни именинника, шутим, трогаем за душу.
          А над всем этим, во главе стола, размещается фамильный герб — он подчёркивает статус хозяина
          и объединяет все детали в единую картину. В итоге получается не просто день рождения, а ритуал
          собирания времени: старые часы на стене отсчитывают не минуты, а эпохи, потёртое кресло хранит
          тепло локтей, рамки с выцветшими снимками вдруг оживают голосами друзей, а большой стол становится
          сценой, где прошлое, настоящее и будущее сливаются в одну долгую, душевную беседу.
          Именно это мы и предлагаем — честно, душевно, с выдумкой и без пафоса.
        </p>
      </div>
    </SlideFrame>
  );
}

function PersonCard({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const dims = size === "lg" ? { w: 180, h: 220 } : { w: 145, h: 180 };
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center mb-3"
        style={{
          width: dims.w,
          height: dims.h,
          backgroundColor: "#d8c498",
          border: `1px solid ${GOLD}`,
          boxShadow: `0 4px 18px ${GOLD}22`,
        }}
      >
        <div className="absolute inset-2 border" style={{ borderColor: `${GOLD}55` }} />
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.55">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
        </svg>
        <p
          className="absolute bottom-3 left-0 right-0 text-center uppercase tracking-[0.25em]"
          style={{ fontSize: "10px", color: SOFT, fontWeight: 500 }}
        >
          фото
        </p>
      </div>
      <p
        className="text-center"
        style={{ fontSize: "20px", color: DARK, fontWeight: 600 }}
      >
        {name}
      </p>
    </div>
  );
}

function HostsSlide({ title, names }: { title: string; names: string[] }) {
  return (
    <SlideFrame title={title}>
      <div className="flex-1 flex items-center justify-center px-[5%] pb-[4%]">
        <div className="flex flex-wrap items-end justify-center gap-x-10 gap-y-8">
          {names.map((n) => (
            <PersonCard key={n} name={n} size={names.length <= 3 ? "lg" : "md"} />
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

function Slide3() {
  return <HostsSlide title="Ведущие" names={["Артем Демихов", "Лянка Грыу", "Александр Шпуньгин"]} />;
}

function Slide4() {
  return (
    <HostsSlide
      title="Ведущий"
      names={["Артем Маслов", "Анна Банщикова", "Алексей Удодов", "Лариса Гузеева", "Владислав Сапунов"]}
    />
  );
}

function Slide5() {
  return <HostsSlide title="Артисты" names={["Лолита", "Хор Турецкого"]} />;
}

function Slide6() {
  return <HostsSlide title="Артисты" names={["Ваенга", "Юрий Антонов", "Александр Серов", "Браво"]} />;
}

function Slide7() {
  return (
    <HostsSlide
      title="Артисты"
      names={["Александр Маршал", "Игорь Николаев", "Пелагея", "Сосо Павлиашвили"]}
    />
  );
}

function Slide8() {
  return (
    <SlideFrame title="Welcome" subtitle="встреча и атмосфера">
      <div className="flex-1 px-[6%] pt-4 pb-[4%] flex gap-8 min-h-0">
        <div className="flex-1 flex flex-col justify-center">
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.55,
              color: DARK,
              fontWeight: 400,
            }}
          >
            Двери открываются — и гостей встречают хостес, тёплым жестом протягивая карточку
            с именем сектора, где их ждёт место. Воздух полон ароматами лёгких закусок, мягкого
            света и предвкушения. Незаметно работают фотографы и видеографы — каждый взгляд,
            каждый смех уходит в SDE-фильм об имениннике. У камина играет живая гитара
            Алексина А.В. — или звучит голос Ксении Аксютик, финалистки 14-го «Голоса».
            Где-то в углу замирает медведь, конь или олень — будто хранители этого вечера.
            Хочется остановиться, сесть в кресло и просто слушать.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
            {[
              { icon: "♪", label: "Живая музыка" },
              { icon: "✦", label: "Хостес и сектора" },
              { icon: "◎", label: "SDE-съёмка" },
            ].map((it) => (
              <div key={it.label} className="flex items-center gap-2">
                <span style={{ color: GOLD, fontSize: "22px" }}>{it.icon}</span>
                <p style={{ fontSize: "20px", color: SOFT, fontWeight: 500 }}>{it.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[36%]">
          <div className="relative flex-1 overflow-hidden" style={{ border: `1px solid ${GOLD}` }}>
            <img src={IMG.welcomeHall} alt="welcome" className="w-full h-full object-cover" />
          </div>
          <div className="relative flex-1 overflow-hidden" style={{ border: `1px solid ${GOLD}` }}>
            <img src={IMG.welcomeMusic} alt="музыка" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

function Slide9() {
  return (
    <SlideFrame title="Welcome" subtitle="зоны вечера">
      <div className="flex-1 px-[6%] pt-4 pb-[4%] flex gap-8 min-h-0">
        <div className="w-[42%] flex flex-col gap-4">
          {[
            { src: IMG.bar, label: "Бар настоек" },
            { src: IMG.photoLab, label: "Фотолаборатория «Шипр»" },
            { src: IMG.tree, label: "Семейное древо" },
          ].map((it) => (
            <div key={it.label} className="relative flex-1 overflow-hidden" style={{ border: `1px solid ${GOLD}` }}>
              <img src={it.src} alt={it.label} className="w-full h-full object-cover" />
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-1.5"
                style={{ backgroundColor: `${DARK}cc` }}
              >
                <p
                  className="uppercase tracking-[0.2em]"
                  style={{ fontSize: "11px", color: "#f0e2c2", fontWeight: 600 }}
                >
                  {it.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p style={{ fontSize: "20px", lineHeight: 1.55, color: DARK, fontWeight: 400 }}>
            В углу зала загадочно поблёскивает медный аппарат — будто алхимическая лаборатория:
            здесь идёт <span style={{ color: GOLD, fontWeight: 600 }}>дегустация авторских настоек</span>,
            и каждый бокал хранит свою историю. Чуть дальше живёт фотолаборатория «Шипр» — старые
            камеры, тёплый свет, ретушь сепии: гости уносят с собой кадры, будто из семейного альбома
            прошлого века.
          </p>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1" style={{ backgroundColor: GOLD }} />
            <span style={{ color: GOLD, fontSize: "18px" }}>❖</span>
            <div className="h-px flex-1" style={{ backgroundColor: GOLD }} />
          </div>

          <p style={{ fontSize: "20px", lineHeight: 1.55, color: DARK, fontWeight: 400 }}>
            А в центре — <span style={{ color: GOLD, fontWeight: 600 }}>семейно-дружеское древо</span>:
            заранее подготовленный макет, на ветви которого каждый гость вклеивает свою фотографию,
            угадывая своё место в кроне. К концу вечера именинник получает живую картину —
            портрет всех, кто рядом, собранный руками самых близких.
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}
