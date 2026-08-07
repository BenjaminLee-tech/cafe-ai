import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        <Image
          src="/images/hero-cafe - new.jpg"
          alt="Cafe interior"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>


        {/* Header */}
        <header className="relative z-10 flex justify-between items-center px-10 py-8">

          <h1 className="text-3xl font-bold">
            ☕ CafeAI
          </h1>


          <nav className="space-x-8">
            <span>Features</span>
            <span>Templates</span>
            <span>Pricing</span>

            <button className="bg-orange-500 px-6 py-3 rounded-full">
              Start Creating
            </button>

          </nav>

        </header>



        {/* Hero Text */}

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

          <h2 className="text-6xl font-bold">
            Create Your Cafe Website
            <br/>
            with AI
          </h2>


          <p className="text-xl text-gray-300 mt-6">
            Build a beautiful cafe website in minutes.
            <br/>
            No coding required.
          </p>


          <button className="mt-10 bg-orange-500 px-10 py-4 rounded-full text-lg">
            Create Website Now
          </button>

        </div>

      </section>



      {/* FEATURES */}

      <section className="py-24 px-10">

        <h2 className="text-4xl text-center font-bold mb-16">
          Powerful Cafe Design Tools
        </h2>



        <div className="grid md:grid-cols-3 gap-10">


          <Feature
            image="/images/coffee-cup.jpg"
            title="AI Coffee Branding"
            text="Generate beautiful cafe concepts automatically."
          />


          <Feature
            image="/images/cafe-interior.jpg"
            title="Interior Design"
            text="Create modern cafe spaces with AI."
          />


          <Feature
            image="/images/menu-board.jpg"
            title="Smart Menu Creation"
            text="Design professional menus instantly."
          />

        </div>

      </section>




      {/* GALLERY */}

      <section className="px-10 pb-24">


{/* DESIGN TOOLS */}
<section className="relative z-10 px-6 py-24 bg-black text-white">

  <div className="max-w-7xl mx-auto">

    {/* Section heading */}
    <div className="text-center mb-14">
      <p className="text-orange-400 font-semibold tracking-widest uppercase text-sm">
        Everything you need
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Powerful Cafe Design Tools
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
        Create a beautiful cafe website with AI-powered tools
        designed specifically for modern cafes.
      </p>
    </div>


    {/* Tool cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-300">

        <div className="relative h-64 overflow-hidden">
          <Image
            src="/images/cafe-interior.jpg"
            alt="AI Cafe Designer"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
        </div>

        <div className="p-7">
          <div className="text-3xl mb-4">☕</div>

          <h3 className="text-2xl font-bold">
            AI Cafe Designer
          </h3>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Generate a complete cafe website design from
            your business idea in seconds.
          </p>

          <button className="mt-6 text-orange-400 font-semibold hover:text-orange-300 transition">
            Explore Designer →
          </button>
        </div>

      </div>


      {/* Card 2 */}
      <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-300">

        <div className="relative h-64 overflow-hidden">
          <Image
            src="/images/color-palette.jpg"
            alt="Brand and Color Studio"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
        </div>

        <div className="p-7">
          <div className="text-3xl mb-4">🎨</div>

          <h3 className="text-2xl font-bold">
            Brand & Color Studio
          </h3>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Choose beautiful colors, styles and visual themes
            that match your cafe's personality.
          </p>

          <button className="mt-6 text-orange-400 font-semibold hover:text-orange-300 transition">
            Explore Studio →
          </button>
        </div>

      </div>


      {/* Card 3 */}
      <div className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-300">

        <div className="relative h-64 overflow-hidden">
          <Image
            src="/images/menu-board.jpg"
            alt="Smart Menu Builder"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
        </div>

        <div className="p-7">
          <div className="text-3xl mb-4">📋</div>

          <h3 className="text-2xl font-bold">
            Smart Menu Builder
          </h3>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Turn your coffee and food menu into a beautiful
            digital menu automatically.
          </p>

          <button className="mt-6 text-orange-400 font-semibold hover:text-orange-300 transition">
            Build Your Menu →
          </button>
        </div>

      </div>

    </div>

  </div>

</section>



        <div className="grid md:grid-cols-4 gap-6">


          <Gallery img="/images/dessert.jpg"/>
          <Gallery img="/images/cafe-team.jpg"/>
          <Gallery img="/images/color-palette.jpg"/>
          <Gallery img="/images/texture-wood.jpg"/>


        </div>


      </section>




      {/* FOOTER */}

      <footer className="border-t border-gray-700 py-10 text-center text-gray-400">

        ☕ CafeAI © 2026  
        <br/>
        AI Powered Cafe Website Creator

      </footer>


    </main>
  );
}




function Feature({
  image,
  title,
  text
}:{
  image:string;
  title:string;
  text:string;
}){


return (

<div className="bg-zinc-900 rounded-xl overflow-hidden">

<Image
src={image}
width={600}
height={400}
alt={title}
className="h-60 object-cover"
/>


<div className="p-6">

<h3 className="text-2xl font-bold">
{title}
</h3>


<p className="text-gray-400 mt-3">
{text}
</p>


</div>


</div>

)

}





function Gallery({
img
}:{
img:string
}){


return (

<div className="overflow-hidden rounded-xl">

<Image
src={img}
width={500}
height={500}
alt="Cafe gallery"
className="hover:scale-110 transition duration-500"
/>

</div>

)

}