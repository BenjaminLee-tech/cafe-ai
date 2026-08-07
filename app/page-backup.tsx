import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <Image
          src="/images/hero-cafe.jpg"
          alt="Cozy night cafe"
          fill
          className="object-cover -z-10"
        />

        <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold">
          ☕ CafeAI
        </h1>

        <nav className="space-x-8">
          <span>Features</span>
          <span>Templates</span>
          <span>Pricing</span>

          <button className="bg-amber-600 px-5 py-2 rounded-full">
            Start Creating
          </button>
        </nav>
      </header>


      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-24">

        <h2 className="text-6xl font-bold">
          Create Your Cafe Website
          <br />
          with AI
        </h2>


        <p className="text-xl text-gray-300 mt-6">
          Build a beautiful cafe website in minutes.
          <br />
          No coding required.
        </p>


        <button className="mt-10 bg-amber-600 px-10 py-4 rounded-full text-lg">
          Create Website Now
        </button>

      </section>


      {/* Style */}
      <section className="mt-32 text-center">

        <h3 className="text-3xl">
          🌙 Cozy Night Cafe Experience
        </h3>

        <p className="mt-4 text-gray-400">
          Dark style • Warm lights • Premium design
        </p>

      </section>


    </main>
  );
}