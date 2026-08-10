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
      value += 2;

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setProgress(100);
        setLoading(false);
        setGenerated(true);
      }
    }, 60);
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
              transition-all
              duration-300
              "
              style={{
                width: `${progress}%`,
                backgroundColor: currentTheme.accent,
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
              bg-white/10
              backdrop-blur-lg
              border
              border-white/20
              p-8
              transition-all
              duration-500
            "
            style={{
              borderRadius: currentStyle.borderRadius,
              fontFamily: currentStyle.fontFamily,
              letterSpacing: currentStyle.letterSpacing,
            }}
          >

            {/* Cafe Preview */}
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
                text-center
                transition-all
                duration-500
              "
            >

              <div>
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
                  Moonlight Coffee
                </h3>

                <p className="mt-2 text-gray-300">
                  AI Generated Premium Cafe
                </p>
              </div>

            </div>

            {/* Menu */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">

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
              <div
                className="text-4xl mb-3"
                style={{
                  color: currentTheme.accent,
                }}
              >
                {item.icon}
              </div>

              <h4
                className="font-bold"
                style={{
                  fontSize:
                    style === "Luxury"
                      ? "22px"
                      : style === "Vintage"
                      ? "20px"
                      : style === "Minimal"
                      ? "18px"
                      : "20px",
                }}
              >
                {item.name}
              </h4>

              <div
                className="mt-4 font-bold"
                style={{
                  color: currentTheme.accent,
                }}
              >
                {item.price}
              </div>
              </div>

              ))}

            </div>

            {/* Style Buttons */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">

              {[
                "Modern",
                "Luxury",
                "Vintage",
                "Minimal",
              ].map((styleName) => (

            <button
              key={styleName}
              onClick={() => setStyle(styleName)}
              className="
                p-4
                rounded-xl
                border
                font-bold
                transition-all
                duration-300
              "
              style={{
                backgroundColor:
                  style === styleName
                    ? currentTheme.accent
                    : currentTheme.background,

                color:
                  style === styleName
                    ? currentTheme.text
                    : currentTheme.text,

                borderColor: currentTheme.accent,

                opacity:
                  style === styleName
                    ? 1
                    : 0.7,
              }}
            >
              {styleName}
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
        
            <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-4 gap-4">

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="font-bold">AI Branding</h3>
              <p className="text-sm text-gray-400 mt-2">
                Generate a beautiful cafe identity with AI.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold">Smart Design</h3>
              <p className="text-sm text-gray-400 mt-2">
                Choose a style that matches your cafe.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold">Responsive</h3>
              <p className="text-sm text-gray-400 mt-2">
                Create websites that work on every device.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🌎</div>
              <h3 className="font-bold">Global Templates</h3>
              <p className="text-sm text-gray-400 mt-2">
                Build cafe websites for customers anywhere.
              </p>
            </div>

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
            font-bold
          "
          style={{
            backgroundColor: currentTheme.accent,
            color: currentTheme.text,
          }}
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
        "
        style={{
          borderColor: currentTheme.accent,
        }}
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
          flex
          justify-between
          items-center
          border-b
        "
        style={{
          padding:
            style === "Luxury"
              ? "24px"
              : style === "Vintage"
              ? "20px"
              : style === "Minimal"
              ? "14px"
              : "20px",

          borderColor: currentTheme.accent,
        }}
      >

      <h2
        className="font-bold"
        style={{
          fontSize:
            style === "Luxury"
              ? "28px"
              : style === "Vintage"
              ? "26px"
              : style === "Minimal"
              ? "20px"
              : "24px",
        }}
      >
        {cafeName || "Moonlight Coffee"}
      </h2>

      <p
        className="text-sm"
        style={{
          color: currentTheme.text,
          opacity: 0.6,
        }}
      >
        {location || "Downtown"}
      </p>

      <button
        className="
          font-bold
        "
        style={{
          backgroundColor: currentTheme.accent,
          color: currentTheme.text,
          borderRadius: currentStyle.borderRadius,
          padding:
            style === "Luxury"
              ? "12px 24px"
              : style === "Vintage"
              ? "10px 22px"
              : style === "Minimal"
              ? "8px 18px"
              : "10px 20px",
        }}
      >
        Reserve
      </button>


      </div>



      {/* Hero */}

      <div
        className="
          relative
        "
        style={{
          height:
            style === "Luxury"
              ? "360px"
              : style === "Vintage"
              ? "340px"
              : style === "Minimal"
              ? "280px"
              : "320px",
        }}
      >

      <img
        src="/images/cafe-preview.jpg"
        alt="Generated Cafe"
        className="
          w-full
          h-full
          object-cover
        "
        style={{
          filter:
            style === "Luxury"
              ? "brightness(0.75) contrast(1.1)"
              : style === "Vintage"
              ? "sepia(0.18) contrast(1.05)"
              : style === "Minimal"
              ? "brightness(1.05) contrast(0.95)"
              : "none",
        }}
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
        className="text-5xl font-bold"
        style={{
        fontSize:
          style === "Luxury"
            ? "56px"
            : style === "Vintage"
            ? "52px"
            : style === "Minimal"
            ? "42px"
            : "48px",
          letterSpacing: currentStyle.letterSpacing,
          color: currentTheme.text,
        }}
      >
        Welcome to {cafeName || "Moonlight Coffee"}
      </h1>

      <p
        className="mt-4"
        style={{
          fontSize:
            style === "Luxury"
              ? "20px"
              : style === "Vintage"
              ? "19px"
              : style === "Minimal"
              ? "16px"
              : "18px",

          letterSpacing: currentStyle.letterSpacing,
          color: currentTheme.text,
        }}
      >
        A memorable cafe experience in {location || "Downtown"}
      </p>


      </div>

      </div>


      </div>

      {/* Menu */}

      <div
        style={{
          padding:
            style === "Luxury"
              ? "40px"
              : style === "Vintage"
              ? "32px"
              : style === "Minimal"
              ? "24px"
              : "32px",
        }}
      >

      <h3
        className="font-bold mb-6"
        style={{
          fontSize:
            style === "Luxury"
              ? "36px"
              : style === "Vintage"
              ? "34px"
              : style === "Minimal"
              ? "28px"
              : "32px",

          color: currentTheme.accent,
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
            <div
              className="text-4xl mb-3"
              style={{
                color: currentTheme.accent,
              }}
            >
              {item.icon}
            </div>

            <h4
              className="font-bold"
              style={{
                fontSize:
                  style === "Luxury"
                    ? "22px"
                    : style === "Vintage"
                    ? "20px"
                    : style === "Minimal"
                    ? "18px"
                    : "20px",
              }}
            >
              {item.name}
            </h4>

            <div
              className="mt-4 font-bold"
              style={{
                color: currentTheme.accent,
              }}
            >
              {item.price}
            </div>
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