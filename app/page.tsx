const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Easy Care",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b0a?w=600",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f4] text-[#243b2a]">
      <div className="bg-[#244b35] px-4 py-2 text-center text-sm text-white">
        Free delivery on orders above ₹999 🌿
      </div>

      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-green-100 px-6 py-5 md:px-12">
        <a href="#" className="text-3xl font-bold tracking-tight">
          weeq<span className="text-[#78945b]">.</span>
        </a>

        <nav className="flex flex-wrap gap-5 text-sm font-medium">
          <a href="#home" className="hover:text-green-700">Home</a>
          <a href="#plants" className="hover:text-green-700">Shop Plants</a>
          <a href="#about" className="hover:text-green-700">About Us</a>
        </nav>

        <a
          href="#plants"
          className="rounded-full bg-[#244b35] px-5 py-3 text-sm text-white hover:bg-green-800"
        >
          Explore Plants →
        </a>
      </header>

      <section
        id="home"
        className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24"
      >
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#78945b]">
            Bring nature home
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-7xl">
            Make room for a little more green.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Discover beautiful indoor plants that make your home
            fresher, calmer, and happier.
          </p>

          <a
            href="#plants"
            className="mt-8 inline-block rounded-full bg-[#244b35] px-8 py-4 font-medium text-white transition hover:bg-green-800"
          >
            Shop Our Plants →
          </a>

          <p className="mt-5 text-sm text-gray-500">
            Carefully grown · Ready for your home · Made for plant lovers
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#e5eadc]">
          <img
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1000"
            alt="Lush green potted plants in a bright home"
            className="h-[350px] w-full object-cover md:h-[500px]"
          />
        </div>
      </section>

      <section id="plants" className="px-6 py-16 md:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#78945b]">
              Our favourites
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Find your new plant
            </h2>
          </div>
          <p className="text-gray-500">A little green goes a long way.</p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <article
              key={plant.id}
              className="overflow-hidden rounded-2xl border border-green-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-[#78945b]">{plant.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{plant.name}</h3>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-lg font-bold">₹{plant.price}</p>
                  <a
                    href="#about"
                    className="rounded-full border border-[#244b35] px-4 py-2 text-sm font-medium hover:bg-[#244b35] hover:text-white"
                  >
                    View plant
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-6 mb-16 rounded-3xl bg-[#e9eee2] px-6 py-12 text-center md:mx-12 md:px-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-[#78945b]">
          Grow something beautiful
        </p>
        <h2 className="mt-3 text-3xl font-bold">
          Your home deserves a little nature.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
          From easy-care greens to statement plants, discover your
          next favourite addition to your home.
        </p>
      </section>

      <footer className="bg-[#244b35] px-6 py-8 text-center text-sm text-white">
        <p className="text-2xl font-bold">weeq.</p>
        <p className="mt-2">Grow happy. Live green. © 2026 Weeq.</p>
      </footer>
    </main>
  );
}