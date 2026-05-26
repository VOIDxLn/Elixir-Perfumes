export default function PerfumeLandingPage() {
  const perfumes = [
    {
      name: 'Noir Essence',
      description: 'Notas amaderadas con un fondo cálido y sofisticado.',
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Velvet Bloom',
      description: 'Una mezcla floral elegante con un toque moderno.',
      image:
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Golden Aura',
      description: 'Fragancia fresca con esencia cítrica y lujo refinado.',
      image:
        'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1f1f1f] font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-[0.25em] uppercase">
            ÉLIXIR
          </h1>

          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            <a href="#inicio" className="hover:opacity-70 transition">
              Inicio
            </a>
            <a href="#coleccion" className="hover:opacity-70 transition">
              Colección
            </a>
            <a href="#sobre" className="hover:opacity-70 transition">
              Nosotros
            </a>
            <a href="#contacto" className="hover:opacity-70 transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1600&auto=format&fit=crop"
          alt="Perfume elegante"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-90">
            Lujo • Elegancia • Distinción
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            Fragancias que dejan huella.
          </h2>

          <p className="text-lg md:text-xl opacity-85 leading-relaxed mb-10">
            Descubre perfumes exclusivos diseñados para transmitir presencia,
            sofisticación y personalidad.
          </p>

          <button className="px-8 py-4 bg-white text-black rounded-full text-sm tracking-widest uppercase hover:bg-[#e7d7bf] transition duration-300 shadow-lg">
            Explorar colección
          </button>
        </div>
      </section>

      {/* Collection */}
      <section
        id="coleccion"
        className="max-w-7xl mx-auto px-6 py-28"
      >
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b7d6b] mb-4">
            Colección exclusiva
          </p>

          <h3 className="text-4xl md:text-5xl font-light mb-6">
            Diseñados para destacar
          </h3>

          <div className="w-24 h-[1px] bg-black/20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {perfumes.map((perfume, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition duration-500"
            >
              <div className="overflow-hidden h-[420px]">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-medium mb-3">
                  {perfume.name}
                </h4>

                <p className="text-[#666] leading-relaxed mb-6">
                  {perfume.description}
                </p>

                <button className="border border-black px-5 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-black hover:text-white transition duration-300">
                  Ver perfume
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="sobre"
        className="bg-[#ece5da] py-28 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury perfume"
              className="rounded-[2rem] shadow-2xl object-cover h-[650px] w-full"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#7a6c59] mb-5">
              Nuestra esencia
            </p>

            <h3 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              El arte detrás de cada fragancia.
            </h3>

            <p className="text-lg text-[#4d4d4d] leading-relaxed mb-6">
              En ÉLIXIR creemos que un perfume es más que un aroma: es una
              declaración de identidad. Cada fragancia está diseñada con
              ingredientes selectos y una composición equilibrada para crear
              experiencias memorables.
            </p>

            <p className="text-lg text-[#4d4d4d] leading-relaxed mb-10">
              Nuestra filosofía mezcla lujo contemporáneo con un diseño elegante
              y minimalista, creando piezas exclusivas para personas que buscan
              destacar con sutileza.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:opacity-85 transition">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-14 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-black/5">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b7d6b] mb-5">
            Exclusividad
          </p>

          <h3 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Encuentra la fragancia perfecta para ti.
          </h3>

          <p className="text-[#666] text-lg leading-relaxed mb-10">
            Explora una experiencia sensorial creada para transmitir lujo,
            presencia y sofisticación en cada detalle.
          </p>

          <button className="bg-[#1f1f1f] text-white px-10 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#3a3a3a] transition duration-300">
            Comprar ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacto"
        className="border-t border-black/10 py-10 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <h4 className="text-xl font-semibold tracking-[0.2em] uppercase">
            ÉLIXIR
          </h4>

          <p className="text-[#777] text-sm text-center md:text-right">
            © 2026 ÉLIXIR Perfumes — Elegancia en cada esencia.
          </p>
        </div>
      </footer>
    </div>
  );
}
