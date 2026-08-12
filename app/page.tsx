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
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    },

    Luxury: {
      borderRadius: "12px",
      fontFamily: "Georgia, serif",
      letterSpacing: "1px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
    },

    Vintage: {
      borderRadius: "8px",
      fontFamily: "Georgia, serif",
      letterSpacing: "0.5px",
      boxShadow: "0 12px 35px rgba(60,30,10,0.35)",
    },

    Minimal: {
      borderRadius: "4px",
      fontFamily: "Arial, sans-serif",
      letterSpacing: "0px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    },
  };

  const menuItems = [
    {
      name: "Espresso",
      price: "$4",
      icon: "☕",
      description: "Rich and bold espresso with a smooth finish.",
    },
    {
      name: "Signature Cake",
      price: "$6",
      icon: "🍰",
      description: "A freshly baked house specialty made with care.",
    },
    {
      name: "Croissant",
      price: "$5",
      icon: "🥐",
      description: "Buttery, flaky, and freshly baked every morning.",
    },
    {
      name: "Iced Latte",
      price: "$5",
      icon: "🥤",
      description: "Smooth espresso blended with chilled creamy milk.",
    },
  ];
  
  const currentStyle =
    styleSettings[style as keyof typeof styleSettings];

  const currentTheme = themeColors[color as keyof typeof themeColors];

  const styleDescription = {
    Modern:
      "Discover fresh coffee, contemporary flavors, and a welcoming modern atmosphere.",

    Luxury:
      "Experience handcrafted coffee and refined flavors in an elegant atmosphere.",

    Vintage:
      "Step into a warm, timeless café where classic flavors meet cozy charm.",

    Minimal:
      "Simple coffee. Fresh flavors. A quiet place to enjoy your day.",
  }[style];

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
                h-96
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

        <div className="max-w-6xl mx-auto">

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
        boxShadow: currentStyle.boxShadow,
      }}
      >

  {/* Website Header */}

  <div
    className="
      flex
      flex-col
      md:flex-row
      md:justify-between
      md:items-center
      gap-5
      border-b
    "
    style={{
      padding:
        style === "Luxury"
          ? "24px 30px"
          : style === "Vintage"
          ? "20px 26px"
          : style === "Minimal"
          ? "14px 20px"
          : "20px 24px",

      borderColor: currentTheme.accent,
    }}
  >

    {/* Cafe Brand */}

    <div className="text-center md:text-left">

      <h2
        className="font-bold"
        style={{
          fontSize:
            style === "Luxury"
              ? "30px"
              : style === "Vintage"
              ? "27px"
              : style === "Minimal"
              ? "21px"
              : "25px",

          letterSpacing:
            style === "Luxury"
              ? "1.5px"
              : currentStyle.letterSpacing,
        }}
      >
        {cafeName || "Moonlight Coffee"}
      </h2>

      <p
        className="text-sm mt-1"
        style={{
          color: currentTheme.text,
          opacity: 0.6,
        }}
      >
        {location || "Downtown"}
      </p>

    </div>


    {/* Navigation */}

    <div
      className="
        flex
        items-center
        justify-center
        gap-4
        md:gap-6
        text-sm
      "
    >

      <button
        className="transition-opacity hover:opacity-70"
        style={{
          color: currentTheme.text,
        }}
      >
        <a href="#home">Home</a>
      </button>

      <button
        className="transition-opacity hover:opacity-70"
        style={{
          color: currentTheme.text,
        }}
      >
        <a href="#menu">Menu</a>
      </button>

      <button
        className="transition-opacity hover:opacity-70"
        style={{
          color: currentTheme.text,
        }}
      >
        <a href="#about">About</a>
      </button>

    </div>


    {/* Reserve Button */}

  <button
    onClick={() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="
      px-6
      py-2.5
      font-bold
      transition-all
      duration-300
      hover:scale-105
      hover:brightness-110
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
      id="home"
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
        src="/images/cafe-interior.jpg"
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
          background:
            style === "Luxury"
              ? "linear-gradient(to bottom, rgba(0,0,0,0.20), rgba(0,0,0,0.72))"
              : style === "Vintage"
              ? "linear-gradient(to bottom, rgba(80,50,20,0.22), rgba(40,20,10,0.68))"
              : style === "Minimal"
              ? "linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(0,0,0,0.38))"
              : "linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.62))",
        }}
      >

      <div className="px-4 md:px-8">

      <h1
        className={`
          font-bold
          ${
            style === "Luxury"
              ? "text-4xl md:text-6xl"
              : style === "Vintage"
              ? "text-4xl md:text-5xl"
              : style === "Minimal"
              ? "text-3xl md:text-4xl"
              : "text-4xl md:text-5xl"
          }
        `}
        style={{
          letterSpacing: currentStyle.letterSpacing,
          color: currentTheme.text,
        }}
      >
        Welcome to {cafeName || "Moonlight Coffee"}
      </h1>

<p
  className="mt-4"
  style={{
    color: currentTheme.text,
    opacity: 0.8,
  }}
>
  {styleDescription}
</p>


      </div>

      </div>


      </div>

      {/* Menu */}

      <div
        id="menu"
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
        {style === "Luxury"
          ? "Signature Menu"
          : style === "Vintage"
          ? "Classic Favorites"
          : style === "Minimal"
          ? "Menu"
          : "Our Menu"}
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

            <p
              className="mt-2 opacity-70"
              style={{
                fontSize: style === "Minimal" ? "13px" : "14px",
              }}
            >
              {item.description}
            </p>

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

    {/* About */}

    <div
      id="about"
      style={{
        padding:
          style === "Luxury"
            ? "56px 40px"
            : style === "Vintage"
            ? "48px 32px"
            : style === "Minimal"
            ? "36px 24px"
            : "48px 32px",
      }}
    >
      <div
        className="
          grid
          md:grid-cols-2
          gap-8
          items-center
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
              color: currentTheme.accent,
            }}
          >
            About {cafeName || "Moonlight Coffee"}
          </h3>

          <p
            className="mt-4 leading-7"
            style={{
              opacity: 0.8,
              fontSize: style === "Minimal" ? "14px" : "16px",
            }}
          >
            A welcoming café created for people who appreciate quality coffee,
            handcrafted flavors, and memorable moments. We bring together
            thoughtful ingredients, comfortable surroundings, and a warm
            atmosphere.
          </p>

          <p
            className="mt-4 leading-7"
            style={{
              opacity: 0.7,
              fontSize: style === "Minimal" ? "13px" : "15px",
            }}
          >
            Located in {location || "Downtown"}, we welcome guests every day
            with freshly prepared coffee, pastries, and signature favorites.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/cafe-interior.jpg"
            alt="Cafe interior"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>


    {/* Gallery */}

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
        {style === "Luxury"
          ? "The Experience"
          : style === "Vintage"
          ? "Our Cafe"
          : style === "Minimal"
          ? "Gallery"
          : "Cafe Gallery"}
      </h3>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
        "
      >
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/cafe-preview.jpg"
            alt="Cafe"
            className="w-full h-56 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/cafe-interior.jpg"
            alt="Cafe interior"
            className="w-full h-56 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/menu-board.jpg"
            alt="Cafe menu"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
    </div>


    {/* Contact */}

    <div
      id="contact"
      style={{
        padding:
          style === "Luxury"
            ? "50px 40px"
            : style === "Vintage"
            ? "44px 32px"
            : style === "Minimal"
            ? "32px 24px"
            : "44px 32px",
      }}
    >
      <div
        className="rounded-2xl text-center"
        style={{
          backgroundColor: currentTheme.background,
          border: `1px solid ${currentTheme.accent}`,
          padding:
            style === "Luxury"
              ? "40px"
              : style === "Minimal"
              ? "24px"
              : "32px",
        }}
      >
        <h3
          className="font-bold"
          style={{
            fontSize:
              style === "Luxury"
                ? "34px"
                : style === "Vintage"
                ? "32px"
                : style === "Minimal"
                ? "26px"
                : "30px",
            color: currentTheme.accent,
          }}
        >
          Visit Us
        </h3>

        <p className="mt-4 opacity-80">
          {location || "Downtown"}
        </p>

        <p className="mt-2 opacity-70">
          Open Daily · 8:00 AM - 10:00 PM
        </p>

        <button
          className="mt-6 px-7 py-3 font-bold"
          style={{
            backgroundColor: currentTheme.accent,
            color: currentTheme.text,
            borderRadius: currentStyle.borderRadius,
          }}
        >
          Reserve a Table
        </button>
      </div>
    </div>


    {/* Footer */}

    <div
      className="text-center"
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
        {cafeName || "Moonlight Coffee"}
      </h4>

      <p className="mt-2">
        {location || "Downtown"}
      </p>

      <p className="mt-2">
        Open Daily · 8:00 AM - 10:00 PM
      </p>

      <p className="mt-4 text-sm opacity-80">
        © 2026 {cafeName || "Moonlight Coffee"} · Powered by CafeAI
      </p>
    </div>


      </div>

      )}

      {generated && (

        
    <div
      className="
        mt-10
        p-8
        border
        transition-all
        duration-500
      "
      style={{
        backgroundColor: currentTheme.background,
        borderColor: currentTheme.accent,
        color: currentTheme.text,

        borderRadius:
          style === "Luxury"
            ? "32px"
            : style === "Vintage"
            ? "18px"
            : style === "Minimal"
            ? "4px"
            : "16px",

        borderWidth:
          style === "Vintage"
            ? "3px"
            : style === "Luxury"
            ? "2px"
            : "1px",

        boxShadow:
          style === "Luxury"
            ? `0 25px 70px ${currentTheme.accent}88`
            : style === "Vintage"
            ? `0 15px 40px ${currentTheme.accent}55`
            : style === "Minimal"
            ? "none"
            : `0 10px 30px ${currentTheme.accent}44`,
      }}
    >

      <h3
        className="font-bold transition-all duration-500"
        style={{
          fontSize:
            style === "Luxury"
              ? "42px"
              : style === "Vintage"
              ? "38px"
              : style === "Minimal"
              ? "30px"
              : "36px",

          fontFamily:
            style === "Luxury"
              ? "Georgia, serif"
              : style === "Vintage"
              ? "Georgia, serif"
              : style === "Minimal"
              ? "Arial, sans-serif"
              : "Inter, Arial, sans-serif",

          letterSpacing:
            style === "Luxury"
              ? "3px"
              : style === "Vintage"
              ? "1px"
              : style === "Minimal"
              ? "0px"
              : "1px",

          textTransform:
            style === "Luxury"
              ? "uppercase"
              : "none",

          color: currentTheme.text,
        }}
      >
        {cafeName || "Your Cafe"}
      </h3>


    <div
      className="mt-4 space-y-2 transition-all duration-500"
      style={{
        fontFamily:
          style === "Luxury"
            ? "Georgia, serif"
            : style === "Vintage"
            ? "Georgia, serif"
            : style === "Minimal"
            ? "Arial, sans-serif"
            : "Inter, Arial, sans-serif",

        opacity:
          style === "Minimal"
            ? 0.75
            : 1,
      }}
    >
      <p
        style={{
          color: currentTheme.text,
          fontSize:
            style === "Luxury"
              ? "17px"
              : style === "Vintage"
              ? "16px"
              : style === "Minimal"
              ? "14px"
              : "15px",
        }}
      >
        AI generated style: <strong>{style}</strong>
      </p>

      <p
        style={{
          color: currentTheme.text,
          fontSize:
            style === "Minimal"
              ? "14px"
              : "15px",
        }}
      >
        Location: <strong>{location || "Global"}</strong>
      </p>

      <p
        style={{
          color: currentTheme.text,
          fontSize:
            style === "Minimal"
              ? "14px"
              : "15px",
        }}
      >
        Theme: <strong>{color}</strong>
      </p>
    </div>


      <div
        className="
          mt-6
          h-56
          flex
          flex-col
          items-center
          justify-center
          transition-all
          duration-500
        "
        style={{
          background:
            style === "Luxury"
              ? `linear-gradient(
                  135deg,
                  ${currentTheme.accent},
                  ${currentTheme.background}
                )`
              : style === "Vintage"
              ? `linear-gradient(
                  135deg,
                  ${currentTheme.background},
                  #6b4423
                )`
              : style === "Minimal"
              ? currentTheme.background
              : `linear-gradient(
                  135deg,
                  ${currentTheme.background},
                  ${currentTheme.accent}
                )`,

          borderRadius:
            style === "Luxury"
              ? "28px"
              : style === "Vintage"
              ? "18px"
              : style === "Minimal"
              ? "6px"
              : "16px",

          border:
            style === "Minimal"
              ? `1px solid ${currentTheme.accent}`
              : "none",
        }}
      >

      <span className="text-2xl">
        ☕ AI Website Ready
      </span>

      <button
        onClick={() => {
          setGenerated(false);
          setProgress(0);
          generateCafe();
        }}
        className="
          mt-4
          px-8
          py-3
          font-bold
          transition-all
          duration-300
          hover:scale-105
          hover:brightness-110
        "
        style={{
          backgroundColor:
            style === "Luxury"
              ? `${currentTheme.accent}22`
              : style === "Vintage"
              ? "#6b442333"
              : style === "Minimal"
              ? "transparent"
              : `${currentTheme.accent}18`,

          color: currentTheme.text,

          border:
            style === "Luxury"
              ? `1px solid ${currentTheme.accent}`
              : style === "Vintage"
              ? "2px solid #6b4423"
              : style === "Minimal"
              ? `1px solid ${currentTheme.accent}`
              : `1px solid ${currentTheme.accent}`,

          borderRadius:
            style === "Luxury"
              ? "30px"
              : style === "Vintage"
              ? "8px"
              : style === "Minimal"
              ? "4px"
              : "12px",
        }}
      >
        Regenerate Website
      </button>

      </div>


      </div>

      )}


      </div>

      </div>

      </section> 

    </main>
  );
}