"use client";

import { useState } from "react";

export default function Home() {

  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [cafeName, setCafeName] = useState("");
  const [style, setStyle] = useState("Modern");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("Dark Brown");


  const generateCafe = () => {

    setLoading(true);
    setGenerated(false);
    setProgress(0);

    let value = 0;

    const timer = setInterval(() => {

      value += 10;

      setProgress(value);

      if(value >= 100){

        clearInterval(timer);

        setLoading(false);
        setGenerated(true);

      }

    },300);

  };

    const themeColors = {
    "Dark Brown": {
      background: "#2b1b14",
      text: "#ffffff",
      accent: "#f59e0b",
    },
    "Gold": {
      background: "#3b2a12",
      text: "#ffffff",
      accent: "#facc15",
    },
    "Black": {
      background: "#111111",
      text: "#ffffff",
      accent: "#f59e0b",
    },
    "Cream": {
      background: "#f5efe6",
      text: "#241a14",
      accent: "#8b5e34",
    },
  };

  const styleSettings = {
    Modern: {
      borderRadius: "24px",
      fontFamily: "Arial, sans-serif",
      letterSpacing: "0px",
    },

    Luxury: {
      borderRadius: "12px",
      fontFamily: "Georgia, serif",
      letterSpacing: "1px",
    },

    Vintage: {
      borderRadius: "8px",
      fontFamily: "Georgia, serif",
      letterSpacing: "0.5px",
    },

    Minimal: {
      borderRadius: "4px",
      fontFamily: "Arial, sans-serif",
      letterSpacing: "0px",
    },
  };

    const menuItems = [
    {
      name: "Espresso",
      price: "$4",
      icon: "☕",
    },
    {
      name: "Signature Cake",
      price: "$6",
      icon: "🍰",
    },
    {
      name: "Croissant",
      price: "$5",
      icon: "🥐",
    },
    {
      name: "Iced Latte",
      price: "$5",
      icon: "🥤",
    },
  ];
  
  const currentStyle =
  styleSettings[style as keyof typeof styleSettings];

  const currentTheme = themeColors[color as keyof typeof themeColors];  


  return (
    <main className="min-h-screen bg-[#0f0b08] text-white">


      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">

        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5c3b24,transparent_50%)]" />

        <div className="relative z-10 max-w-4xl">

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Cafe<span className="text-amber-400">AI</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            Create your dream cafe website with Artificial Intelligence.
          </p>

            <button
            onClick={generateCafe}
            className="
            mt-10
            px-10
            py-4
            rounded-full
            bg-amber-500
            text-black
            font-semibold
            text-lg
            hover:bg-amber-400
            transition
            "
            >
            Generate My Cafe Website
            </button>  


              {loading && (

              <div
              className="
              mt-8
              w-full
              max-w-md
              mx-auto
              rounded-2xl
              bg-black/50
              border
              border-amber-500/40
              p-6
              "
              >

              <h3 className="text-xl font-bold">
              ☕ CafeAI is creating...
              </h3>


              <p className="mt-4 text-gray-300">
              Analyzing cafe style...
              </p>


              <div
              className="
              mt-5
              h-3
              bg-gray-700
              rounded-full
              overflow-hidden
              "
              >

              <div
              className="
              h-full
              bg-amber-500
              transition-all
              duration-300
              "
              style={{
              width:`${progress}%`
              }}
              />

              </div>


              <p className="mt-3">
              {progress}% Complete
              </p>


              </div>

              )}
              

        </div>

      </section>


      {/* AI Preview Section */}
      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            AI Cafe Preview
          </h2>

          <div
            className="
            mt-12
            rounded-3xl
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            p-8
            "
          >

            <div
              className="
              h-72
              rounded-2xl
              bg-gradient-to-br
              from-amber-900
              to-black
              flex
              items-center
              justify-center
              "
            >

              <div
                className="
                h-80
                rounded-2xl
                overflow-hidden
                relative
                "
                >

                <img
                src="/images/cafe-preview.jpg"
                alt="Cafe Preview"
                className="
                w-full
                h-full
                object-cover
                "
                />


                <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                bg-black/60
                p-6
                "
                >

                <h3 className="text-3xl font-bold">
                {cafeName || "Moonlight Coffee"}
                </h3>

                <p className="text-gray-300 mt-2">
                AI Generated Premium Cafe
                </p>

                </div>

                </div>

                <div className="
                    mt-6
                    grid
                    md:grid-cols-3
                    gap-4
                    ">

                    <div className="
                    bg-black/40
                    rounded-xl
                    p-4
                    ">
                    ☕ Espresso
                    <br/>
                    $4
                    </div>


                    <div className="
                    bg-black/40
                    rounded-xl
                    p-4
                    ">
                    🍰 Signature Cake
                    <br/>
                    $6
                    </div>


                    <div className="
                    bg-black/40
                    rounded-xl
                    p-4
                    ">
                    🥐 Croissant
                    <br/>
                    $5
                    </div>


                    </div>

            </div>


            <div className="grid md:grid-cols-4 gap-4 mt-8">

              {[
                "Modern",
                "Luxury",
                "Vintage",
                "Minimal"
              ].map((style) => (

                <button
                  key={style}
                  className="
                  rounded-xl
                  bg-black/40
                  border
                  border-white/20
                  py-3
                  hover:bg-amber-500
                  hover:text-black
                  transition
                  "
                >
                  {style}
                </button>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Powerful Cafe Creation Tools
        </h2>


        <div
          className="
          max-w-5xl
          mx-auto
          grid
          md:grid-cols-4
          gap-6
          mt-12
          "
        >

          {[
            ["☕","AI Branding"],
            ["🎨","Smart Design"],
            ["📱","Responsive"],
            ["🌎","Global Templates"]
          ].map(([icon,title]) => (

            <div
              key={title}
              className="
              rounded-2xl
              bg-white/10
              border
              border-white/20
              p-6
              text-center
              "
            >

              <div className="text-4xl">
                {icon}
              </div>

              <h3 className="mt-4 font-semibold">
                {title}
              </h3>

            </div>

          ))}

        </div>

        </section>

        <section className="px-6 py-20">

        <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
        Create Your Cafe With AI
        </h2>


        <div className="
        mt-12
        bg-white/10
        border
        border-white/20
        rounded-3xl
        p-8
        ">

        <div className="grid md:grid-cols-2 gap-6">


        <input
        className="
        bg-black/40
        rounded-xl
        p-4
        border
        border-white/20
        "
        placeholder="Cafe Name"
        value={cafeName}
        onChange={(e)=>setCafeName(e.target.value)}
        />


        <input
        className="
        bg-black/40
        rounded-xl
        p-4
        border
        border-white/20
        "
        placeholder="Location"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        />


        <select
        className="
        bg-black/40
        rounded-xl
        p-4
        border
        border-white/20
        "
        onChange={(e)=>setStyle(e.target.value)}
        >

        <option>Modern</option>
        <option>Luxury</option>
        <option>Vintage</option>
        <option>Minimal</option>

        </select>


        <select
        className="
        bg-black/40
        rounded-xl
        p-4
        border
        border-white/20
        "
        onChange={(e)=>setColor(e.target.value)}
        >

        <option>Dark Brown</option>
        <option>Gold</option>
        <option>Black</option>
        <option>Cream</option>

        </select>


        </div>

          <button
      onClick={generateCafe}
      className="
      mt-8
      w-full
      py-4
      rounded-full
      bg-amber-500
      text-black
      font-bold
      "
      >
      Generate Website
      </button>


      {/* AI Loading Display */}

      {loading && (

      <div
      className="
      mt-10
      rounded-2xl
      bg-black/50
      p-8
      border
      border-amber-500/40
      "
      >

      <h3 className="text-2xl font-bold">
      ☕ CafeAI is creating your website...
      </h3>

      <p className="mt-4">
      Analyzing cafe style...
      </p>


      <div
      className="
      mt-6
      h-4
      bg-gray-700
      rounded-full
      overflow-hidden
      "
      >

      <div
      className="
      h-full
      bg-amber-500
      transition-all
      "
      style={{
      width:`${progress}%`
      }}
      />

      </div>


      <p className="mt-3">
      {progress}% Complete
      </p>


      </div>

      )}


      {/* Generated Result */}


      {generated && (

      <div
        className="
          mt-10
          overflow-hidden
          shadow-2xl
        "
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        borderRadius: currentStyle.borderRadius,
        fontFamily: currentStyle.fontFamily,
        letterSpacing: currentStyle.letterSpacing,
      }}
      >

      {/* Website Header */}

      <div
      className="
      p-6
      flex
      justify-between
      items-center
      border-b
      "
      >

      <h2 className="text-2xl font-bold">
      {cafeName || "Moonlight Coffee"}
      </h2>

      <p className="text-sm text-gray-500">
        {location || "Downtown"}
      </p>

      <button
        className="
          px-5
          py-2
          text-white
        "
        style={{
          backgroundColor: currentTheme.accent,
          color: currentTheme.text,
          borderRadius: currentStyle.borderRadius,
        }}
      >
        Reserve
      </button>


      </div>



      {/* Hero */}

      <div
      className="
      h-72
      relative
      "
      >

      <img
      src="/images/cafe-preview.jpg"
      alt="Generated Cafe"
      className="
      w-full
      h-full
      object-cover
      "
      />


      <div
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      text-center
      "
      style={{
        backgroundColor:
          style === "Luxury"
            ? "rgba(0,0,0,0.55)"
            : style === "Vintage"
            ? "rgba(0,0,0,0.48)"
            : style === "Minimal"
            ? "rgba(0,0,0,0.30)"
            : "rgba(0,0,0,0.40)",
      }}
      >

      <div>

      <h1
        className="text-5xl font-bold text-white"
        style={{
          fontSize: style === "Luxury" ? "56px" : "48px",
          letterSpacing: currentStyle.letterSpacing,
        }}
      >
        Welcome to {cafeName || "Moonlight Coffee"}
      </h1>

      <p
        className="mt-4 text-xl text-white"
        style={{
          letterSpacing: currentStyle.letterSpacing,
        }}
      >
        A memorable cafe experience in {location || "Downtown"}
      </p>


      </div>

      </div>


      </div>



      {/* Menu */}

      <div className="p-8">


      <h3
        className="font-bold"
        style={{
          fontSize:
            style === "Luxury"
              ? "36px"
              : style === "Vintage"
              ? "34px"
              : style === "Minimal"
              ? "28px"
              : "32px",
        }}
      >
        Our Menu
      </h3>


      <div
      className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-5
      mt-6
      "
      >

    {menuItems.map((item) => (
      <div
        key={item.name}
        className="rounded-xl border"
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
          borderColor: currentTheme.accent,
          padding:
            style === "Luxury"
              ? "24px"
              : style === "Vintage"
              ? "20px"
              : style === "Minimal"
              ? "14px"
              : "20px",
        }}
      >
        {item.icon} {item.name}
        <br />
        {item.price}
      </div>
    ))}


      </div>


      </div>



      {/* Footer */}

      <div
        className="
          text-center
        "
        style={{
          backgroundColor: currentTheme.accent,
          color: currentTheme.text,
          padding:
            style === "Luxury"
              ? "28px"
              : style === "Vintage"
              ? "24px"
              : style === "Minimal"
              ? "16px"
              : "24px",
        }}
      >

      Open Daily
      <br/>
      8:00 AM - 10:00 PM

      </div>


      </div>

      )}

      {generated && (

        
      <div
      className="
      mt-10
      rounded-2xl
      bg-black/50
      p-8
      border
      border-amber-500/40
      "
      >

      <h3 className="text-3xl font-bold">
      {cafeName || "Your Cafe"}
      </h3>


      <p className="mt-3 text-gray-300">
      AI generated style:
      {style}
      </p>


      <p className="text-gray-300">
      Location:
      {location || "Global"}
      </p>


      <p className="text-gray-300">
      Theme:
      {color}
      </p>


      <div className="
      mt-6
      h-40
      rounded-xl
      bg-gradient-to-br
      from-amber-800
      to-black
      flex
      items-center
      justify-center
      ">

      <span className="text-2xl">
      ☕ AI Website Ready
      </span>

      </div>


      </div>

      )}


      </div>

      </div>

      </section> 

    </main>
  );
}