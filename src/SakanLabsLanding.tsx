import React, { useMemo, useRef, useState, useEffect } from "react";

/**
 * SakanLabs — Landing Page (Updated with 'Keahlian Spesifik')
 * React + Tailwind, single-file component used by App.tsx
 */

const brand = {
  dark: "#0F3136",
  teal: "#20464d",
  gold: "#e5a619",
  ink: "#0b1416",
  stone: "#5b6a6e",
  mist: "#edf3f4",
  bg: "#f8fbfb",
};

const nav = [
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#work" },
  { label: "Harga", href: "#pricing" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Kontak", href: "#contact" },
];

export default function SakanLabsLanding() {
  return (
    <div className="min-h-screen w-full text-slate-900" style={{ background: brand.bg }}>
      <Header />
      <Hero />
      <Trustbar />
      <Services />
      <Work />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-100">
      <Container className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3 group" aria-label="SakanLabs Home">
          {/* Logo utama */}
          <img
            src="/logopng.png"    // ganti sesuai path logo kamu
            alt="SakanLabs"
            width={172}                  // cegah layout shift
            height={40}
            className="block h-8 md:h-10 w-auto"  // ↑ atur tinggi logo (32–40px)
            loading="eager"
            decoding="async"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6281291535163?text=Halo%20SakanLabs%2C%20saya%20ingin%20buat%20website."
            className="inline-flex items-center rounded-xl border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Konsultasi Gratis
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
        <div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: brand.teal }}
          >
            Spesialis <span style={{ color: brand.gold }}>Aplikasi Web Custom</span>
            <br className="hidden sm:block" />
            untuk Operasional & Scale Bisnis
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-prose">
            Kami merancang dan membangun <strong>aplikasi web tailor-made</strong>—workflow, dashboard,
            integrasi API, hingga automasi dokumen. Kami juga melayani pembuatan{" "}
            <strong>website company profile</strong> bila dibutuhkan.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6281291535163?text=Halo%20SakanLabs%2C%20saya%20ingin%20diskusikan%20aplikasi%20web%20custom."
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white shadow-sm"
              style={{ background: brand.teal }}
            >
              Diskusikan Proyek
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Lihat Portofolio →
            </a>
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
            <li>✔️ Workflow kustom, role & approval</li>
            <li>✔️ Integrasi API (payment, ERP, WhatsApp, dll.)</li>
            <li>✔️ Dashboard KPI & laporan realtime</li>
            <li>✔️ Opsional: Website company profile & SEO dasar</li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <MockBrowser />
          </div>
          <div
            className="absolute -right-3 -bottom-3 h-24 w-24 rounded-2xl opacity-20"
            style={{ background: brand.gold }}
          />
        </div>
      </Container>
    </section>
  );
}


function Trustbar() {
  const clients = [
    { name: "BPKH Limited", logo: "/bpkhlimited.png" },
    { name: "Kemendikbud RI", logo: "/kemendikbud.png" },
    { name: "Jamkrindo", logo: "/jamkrindo.png" },
    { name: "KJRI Jeddah", logo: "/kjri-jeddah.png" },
    { name: "Baharkam", logo: "/baharkam.png" },
    { name: "Shanum", logo: "/shanumlogo.png" },
    { name: "Amicof", logo: "/Amicof.png" },
    { name: "Kipas Kipas", logo: "/kipaskipas.png" },
  ];

  return (
    <section className="py-8 border-y border-slate-100 bg-white">
      <Container className="flex flex-wrap items-center gap-8 justify-center">
        {clients.map((client) => (
          <div 
            key={client.name} 
            className="group relative flex items-center justify-center"
            title={client.name}
          >
            <img 
              src={client.logo} 
              alt={client.name}
              className="h-8 md:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {client.name}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

function Services() {
  const items = [
    { title: "Company Profile", desc: "Bangun citra profesional, cepat online, mudah dikelola." },
    { title: "Toko Online", desc: "Siap jualan dengan sistem pembayaran & katalog." },
    { title: "Portal/Blog", desc: "Cepat, SEO-friendly, arsitektur konten rapi." },
    { title: "Custom App", desc: "Sistem informasi, dashboard, integrasi API." },
  ];

  const niches = [
  {
    title: "Solusi Travel & Umrah",
    desc: "Booking engine, paket dinamis (hotel+visa+transport), integrasi API harga hotel, katalog paket, admin operasional.",
    bullets: [
      "Booking calendar & availability",
      "Integrasi payment & invoice",
      "WhatsApp order flow",
      "Scraper/connector API",
    ],
  },
  {
    title: "ERP & Supply-Chain",
    desc: "Dokumen, HR/Payroll, Finance, Inventory & PO, approval flow—cocok untuk distribusi barang",
    bullets: [
      "Workflow dokumen & e-approval",
      "Stock, PO, SO, GRN",
      "Dashboard KPI",
      "Multi-cabang & multi-user",
    ],
  },
  {
    title: "Klinik Spesialis",
    desc: "Sistem klinik: pendaftaran & janji temu, rekam medis ringkas (SOAP), antrian, kasir & invoice; siap multi-cabang.",
    bullets: [
      "Appointment & pendaftaran online",
      "Rekam medis ringkas (SOAP)",
      "Antrian & reminder WhatsApp",
      "Kasir, invoice & laporan",
    ],
  },
];


  return (
    <section id="services" className="py-16 md:py-24">
      <Container>
        <HeaderSection kicker="Layanan" title="Solusi yang Kami Tawarkan" subtitle="Paket hemat sampai custom build—semua tetap clean, cepat, dan aman." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg mb-4" style={{ background: brand.mist }} />
              <h3 className="font-semibold text-lg" style={{ color: brand.teal }}>{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Niche highlights */}
        <div className="mt-16">
          <HeaderSection kicker="Keahlian Spesifik" title="Fokus Industri Kami" subtitle="Kami generalis, tapi berpengalaman mendalam di dua domain ini." />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {niches.map((n) => (
              <div key={n.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: brand.teal }}>{n.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-prose">{n.desc}</p>
                  </div>
                  <div className="h-10 w-10 rounded-lg" style={{ background: brand.mist }} />
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  {n.bullets.map((b) => (<li key={b}>✔️ {b}</li>))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <a
                    href={`https://wa.me/6281291535163?text=Halo%20SakanLabs%2C%20saya%20butuh%20${encodeURIComponent(n.title)}.`}
                    className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    Konsultasi →
                  </a>
                  <a href="#work" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">Lihat Contoh</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type Project = {
  title: string;
  type: string;
  summary: string;
  tags?: string[];
  image?: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Musafirin.co — Travel & Umrah Platform",
    type: "Custom App / TravelTech",
    summary: "Katalog hotel+visa+transport, order via WA, admin operasional.",
    image: "/projects/musafirin.png",   // taruh file di /public/projects/
    href: "https://musafirin.co",
    tags: ["Booking", "Pricing API", "WA Order"]
  },
   {
    title: "Shanum Aesthetic",
    type: "Clinic Management System",
    summary: "Sistem manajemen klinik: pendaftaran, janji temu, rekam medis, antrian, kasir, invoice, laporan.",
    image: "/projects/shanum.png",
    href: "#", 
    tags: ["Clinic Management System", "Pendaftaran", "Janji Temu", "Rekam Medis", "Antrian", "Kasir", "Invoice", "Laporan"]
  },
    {
    title: "BPKH — ERP Modular",
    type: "ERP / Supply-Chain",
    summary: "Sales, Inventory, HR/Payroll, Finance, approval workflow.",
    image: "/projects/bpkherp.png",
    href: "#", // ganti jika ada
    tags: ["ERP", "Approval", "KPI"]
  },
  {
    title: "Badal Umroh Landing Page",
    type: "React Vite",
    summary: "Landing Page Produk Badal Umroh",
    image: "/projects/badalmakkah.png",
    href: "https://badalmakkah.com", // ganti ke link demo/case study
    tags: ["Company Profile", "Badal Umroh", "Landing Page"]
  },
];


const GAP = 24; // tailwind gap-6

function Work() {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const [index, setIndex] = useState(0);         // index kartu pertama yang tampil
  const [visible, setVisible] = useState(3);     // kartu yang muat di viewport (md+)
  const [cardW, setCardW] = useState(0);

  const isCarousel = projects.length > 3;

  // ukur lebar kartu & hitung berapa yang muat (responsif)
  useEffect(() => {
    const measure = () => {
      const w = cardRef.current?.offsetWidth ?? 0;
      const containerW = railRef.current?.offsetWidth ?? 0;
      // jumlah kartu tampak = (lebar rail + gap) / (lebar kartu + gap)
      const v = w ? Math.max(1, Math.floor((containerW + GAP) / (w + GAP))) : 1;
      setCardW(w);
      setVisible(v);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, projects.length - visible);

  // jaga index tetap valid saat resize
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const scrollToIndex = (i: number) => {
    if (!railRef.current || !cardW) return;
    const next = Math.max(0, Math.min(i, maxIndex));
    railRef.current.scrollTo({
      left: next * (cardW + GAP),
      behavior: "smooth",
    });
    setIndex(next);
  };

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <Container>
        <HeaderSection
          kicker="Portofolio"
          title="Cuplikan Pekerjaan"
          subtitle="Contoh proyek nyata yang kami kerjakan."
        />

        {/* ≤ 3: tetap grid seperti semula */}
        {!isCarousel && (
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href || "#"}
                className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow"
                target={p.href?.startsWith("http") ? "_blank" : undefined}
                rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
                <div className="p-4">
                  <div className="font-semibold" style={{ color: brand.teal }}>
                    {p.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{p.type}</div>
                  <p className="text-sm text-slate-600 mt-2">{p.summary}</p>
                  {p.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] rounded-full border border-slate-200 px-2 py-0.5 text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* > 3: jadi carousel dengan arrows */}
        {isCarousel && (
          <div className="mt-10 relative">
            {/* rail */}
            <div
              ref={railRef}
              className="no-scrollbar overflow-x-auto md:overflow-x-hidden"
            >
              <div className="flex gap-6 pr-3">
                {projects.map((p, i) => (
                  <a
                    key={p.title}
                    ref={i === 0 ? cardRef : undefined}
                    href={p.href || "#"}
                    className="group shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow"
                    target={p.href?.startsWith("http") ? "_blank" : undefined}
                    rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="aspect-video bg-slate-100 overflow-hidden">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full" />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="font-semibold" style={{ color: brand.teal }}>
                        {p.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{p.type}</div>
                      <p className="text-sm text-slate-600 mt-2">{p.summary}</p>
                      {p.tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] rounded-full border border-slate-200 px-2 py-0.5 text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* arrows (md+) */}
            <button
              aria-label="Sebelumnya"
              onClick={() => scrollToIndex(index - 1)}
              className={`hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border bg-white shadow-sm hover:bg-slate-50 ${
                canPrev ? "" : "opacity-40 pointer-events-none"
              }`}
              style={{ color: brand.stone }}
            >
              {/* icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="m14 7l-5 5l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              aria-label="Berikutnya"
              onClick={() => scrollToIndex(index + 1)}
              className={`hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full border bg-white shadow-sm hover:bg-slate-50 ${
                canNext ? "" : "opacity-40 pointer-events-none"
              }`}
              style={{ color: brand.stone }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="m10 17l5-5l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}



function Process() {
  const steps = [
    { t: "1. Konsultasi", d: "Pahami tujuan bisnis & kebutuhan fitur." },
    { t: "2. Arsitektur Konten", d: "Sitemap, copy kerangka, dan SEO dasar." },
    { t: "3. Desain UI", d: "Tampilan clean dengan aksen warna brand." },
    { t: "4. Development", d: "Implementasi performa tinggi & akses admin." },
    { t: "5. Launch & Training", d: "Deploy, setting domain, dan panduan singkat." },
  ];
  return (
    <section className="py-16 md:py-24">
      <Container>
        <HeaderSection kicker="Proses" title="Alur Kerja Ringkas" subtitle="Transparan, cepat, dan terukur dari awal sampai go-live." />
        <ol className="mt-10 grid md:grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <li key={s.t} className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="text-sm text-slate-500">{s.t}</div>
              <div className="mt-1 text-sm text-slate-600">{s.d}</div>
              <div className="mt-4 h-1 rounded-full" style={{ background: idx === 0 ? brand.gold : brand.mist }} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Lite",
      price: "Rp 800rb+",
      bullets: ["2+ halaman", "Gratis domain+hosting (opsi)", "Desain rapi", "7 hari"],
      href: "https://wa.me/6281291535163?text=Saya%20ingin%20Paket%20Lite",
      featured: false,
    },
    {
      name: "Professional",
      price: "Rp 3.5jt+",
      bullets: ["6+ halaman", "Maint. opsional", "Desain premium", "10 hari"],
      href: "https://wa.me/6281291535163?text=Saya%20ingin%20Paket%20Professional",
      featured: true,
    },
    {
      name: "Advanced",
      price: "Rp 9.5jt+",
      bullets: ["Full custom app", "Integrasi API", "UI/UX khusus", "Timeline fleksibel"],
      href: "https://wa.me/6281291535163?text=Saya%20ingin%20Paket%20Advanced",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <Container>
        <HeaderSection kicker="Harga" title="Paket Transparan" subtitle="Pilih sesuai kebutuhan, upgrade kapan saja." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 shadow-sm ${t.featured ? "border-slate-900" : "border-slate-200"} bg-white`}
            >
              <div className="text-sm text-slate-500">{t.name}</div>
              <div className="mt-1 text-2xl font-bold" style={{ color: brand.teal }}>{t.price}</div>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                {t.bullets.map((b) => (
                  <li key={b}>✔️ {b}</li>
                ))}
              </ul>
              <a
                href={t.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Hendri", role: "Staf Ahli Kemendikbud RI", quote: "Layanan cepat dan profesional. Sudah repeat order." },
    { name: "Fahrul", role: "Staf KJRI Jeddah", quote: "Responsif dan membantu, melebihi ekspektasi!" },
    { name: "Nabil", role: "Komisioner Zahir International", quote: "Cepat & berkualitas. Selalu bisa diandalkan." },
  ];
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <Container>
        <HeaderSection kicker="Testimoni" title="Apa Kata Klien" subtitle="Dipercaya institusi & brand di Indonesia dan Saudi." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium" style={{ color: brand.teal }}>{t.name}</div>
              <div className="text-xs text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm text-slate-500">Siap mulai?</div>
            <h3 className="text-2xl font-bold tracking-tight" style={{ color: brand.teal }}>Gratis Konsultasi & Audit Website</h3>
            <p className="mt-1 text-slate-600 text-sm">Kirimkan link bisnis Anda—kami beri rekomendasi struktur & fitur yang tepat.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/6281291535163?text=Halo%20SakanLabs%2C%20tolong%20audit%20website%20saya."
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Chat via WhatsApp
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">Kirim Brief</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container className="py-12 grid md:grid-cols-4 gap-10">
        <div>
         <div className="flex items-center gap-3">
            <img
              src="/logopng.png"     // ganti path sesuai file kamu
              alt="SakanLabs"
              width={192}                 // bantu cegah layout shift
              height={48}
              className="block h-12 md:h-22 w-auto"  // ⬅️ perbesar: ~40–48px tinggi
              loading="eager"
              decoding="async"
            />
          </div>
          <p className="mt-4 text-sm text-slate-600 max-w-xs">Jasa pembuatan website & aplikasi web untuk UKM, brand, dan institusi. Fokus clean design, performa, dan konversi.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Navigasi</div>
          <ul className="space-y-2 text-sm text-slate-600">
            {nav.map((n) => (
              <li key={n.href}><a className="hover:text-slate-900" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Kontak</div>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>Email: ahmad.fajar@sakanlabs.com</li>
            <li>WhatsApp: +62 812-9153-5163</li>
            <li>Jakarta & Jeddah</li>
          </ul>
        </div>
        <div id="contact">
          <div className="font-semibold mb-3">Kirim Pesan</div>
          <form onSubmit={(e)=>e.preventDefault()} className="grid gap-3">
            <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="Nama"/>
            <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="Email"/>
            <textarea className="rounded-xl border border-slate-300 px-3 py-2 text-sm" placeholder="Pesan" rows={3}/>
            <button className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm">Kirim</button>
          </form>
        </div>
      </Container>
      <Container className="py-6 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} SakanLabs Innovations</span>
        <a href="https://wa.me/6281291535163" className="hover:text-slate-700">WhatsApp</a>
      </Container>
    </footer>
  );
}

function HeaderSection({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-medium tracking-wide" style={{ color: brand.gold }}>{kicker}</div>
      <h2 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight" style={{ color: brand.teal }}>{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function MockBrowser() {
  return (
    <div className="h-full w-full">
      <div className="h-10 w-full bg-slate-50 border-b border-slate-200 flex items-center gap-2 px-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-3 text-xs text-slate-500">sakanlabs.com</div>
      </div>
      <div className="p-6 grid gap-4">
        <div className="h-8 w-3/4 rounded-lg bg-slate-100" />
        <div className="h-4 w-2/3 rounded-lg bg-slate-100" />
        <div className="h-48 rounded-xl bg-slate-100" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 rounded-xl bg-slate-100" />
          <div className="h-24 rounded-xl bg-slate-100" />
          <div className="h-24 rounded-xl bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
