import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CafeBg from "../assets/cafe.jpg";
import ForManko from "../assets/manko.png";

function Home() {
  const storyRef = useRef(null);
  const menuRef = useRef(null);
  const findUsRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [menuInView, setMenuInView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const storyObserver = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, observerOptions);

    const menuObserver = new IntersectionObserver(([entry]) => {
      setMenuInView(entry.isIntersecting);
    }, observerOptions);

    if (storyRef.current) storyObserver.observe(storyRef.current);
    if (menuRef.current) menuObserver.observe(menuRef.current);

    return () => {
      if (storyRef.current) storyObserver.unobserve(storyRef.current);
      if (menuRef.current) menuObserver.unobserve(menuRef.current);
    };
  }, []);

  const smoothScrollTo = (ref) => {
    if (ref.current) {
      const offset = 90; // Adjusted for navbar height
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${CafeBg})` }}
      >
        <div className="bg-black/80 min-h-screen">
          {/* Navbar */}
          <section
            className={`border-b shadow-lg sticky top-0 z-50 transition-all duration-300 ${
              isScrolled ? "bg-black/90 py-3" : "bg-black/80 py-4"
            }`}
          >
            <nav className="container items-center flex justify-between mx-auto px-6 text-white">
              <div className="ml-4 md:ml-16">
                <img
                  src={ForManko}
                  alt="Manko"
                  className={`transition-all duration-300 ${
                    isScrolled ? "w-16 h-16" : "w-20 h-20"
                  } rounded shadow cursor-pointer`}
                  onClick={scrollToTop}
                />
              </div>

              <div className="hidden md:flex gap-5">
                <button
                  onClick={scrollToTop}
                  className="hover:text-yellow-300 text-sm font-bold uppercase transition-colors duration-300"
                >
                  home
                </button>
                <button
                  onClick={() => smoothScrollTo(storyRef)}
                  className="hover:text-yellow-300 text-sm font-bold uppercase transition-colors duration-300"
                >
                  our story
                </button>
                <button
                  onClick={() => smoothScrollTo(findUsRef)}
                  className="hover:text-yellow-300 text-sm font-bold uppercase transition-colors duration-300"
                >
                  find us
                </button>
              </div>

              <div className="mr-4 md:mr-0">
                <a
                  href="tel:+917012463882"
                  className="text-white text-sm font-bold uppercase hover:text-yellow-300 transition-colors duration-300"
                >
                  contact us : +91-7012463882
                </a>
              </div>
            </nav>
          </section>

          {/* Welcome Section */}
          <section className="flex flex-col items-center justify-center h-[500px] text-white text-center mb-[50px] px-4">
            <h1 className="text-3xl md:text-5xl font-bold uppercase mb-2 animate-fadeIn">
              Welcome to man.ko resto cafe
            </h1>
            <p className="text-md md:text-lg animate-fadeIn delay-100">
              We have the best dishes in Kottayam
            </p>
            <button
              onClick={() => smoothScrollTo(menuRef)}
              className="mt-8 px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full transition-all duration-300 animate-fadeIn delay-200"
            >
              View Our Menu
            </button>
          </section>

          {/* Our Story Section */}
          <section
            ref={storyRef}
            className="w-full py-20 px-6 bg-[rgba(0,0,0,0.4)] shadow-lg text-white text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2
                className={`text-3xl md:text-4xl font-semibold uppercase mb-2 transition-all duration-700 ease-in-out ${
                  inView
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Our Story <span className="text-sm lowercase">as</span>
              </h2>

              <div className="flex justify-center transition-all duration-700 ease-in-out delay-100">
                <img
                  src={ForManko}
                  alt="Manko"
                  className="w-16 h-16 rounded-full shadow"
                />
              </div>

              <p
                className={`text-base md:text-lg leading-relaxed text-justify mt-6 transition-all duration-700 ease-in-out delay-150 ${
                  inView
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                Our journey begins in the heart of Erayilkadavu, Kottayam, where
                a humble granary, built in 1954, once supported the local
                farming community. Surrounded by vibrant paddy fields, this
                structure stood as a beacon of resilience and tradition,
                safeguarding the harvests that sustained countless livelihoods.
                Over nearly seven decades, it silently witnessed the changing
                seasons and the hardworking spirit of the people. Today, we've
                transformed this historic space into Man.ko Restocafe, a warm,
                modern café where history meets innovation. Here, every corner
                echoes stories of the past while creating a vibrant space for
                new memories and connections.
              </p>
            </div>
          </section>

          {/* Menu Section */}
          <section
            ref={menuRef}
            className="w-full py-20 px-6 bg-[rgba(17,24,39,0.4)] text-white text-center shadow-lg"
          >
            <div
              className={`max-w-5xl mx-auto transition-all duration-500 ease-in-out ${
                menuInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold uppercase mb-12 tracking-wide">
                Our Menu
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Crunch Corner */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Crunch Corner
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-200">
                    <li>Chicken Strips</li>
                    <li>Masala Fries</li>
                    <li>French Fries</li>
                    <li>Nuggets</li>
                    <li>Fried Momos</li>
                    <li>Schezwan Momos</li>
                    <li>Normal Momos (Veg / Non-Veg)</li>
                  </ul>
                </div>

                {/* Fried Chicken */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Fried Chicken
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-200">
                    <li>2 to 8 Pieces Options</li>
                    <li>Classic and Masala Variants</li>
                  </ul>
                </div>

                {/* Loaded Fries */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Loaded Fries
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-200">
                    <li>Regular & Large Loaded Fries</li>
                    <li>Spicy Loaded Fries 🌶</li>
                    <li>Paneer Loaded Fries</li>
                  </ul>
                </div>

                {/* Madhooth Specials */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Madhooth Specials
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-200">
                    <li>Shawaya Chicken (Quarter / Half / Full)</li>
                    <li>Chicken Madhooth</li>
                    <li>Madhooth Rice</li>
                  </ul>
                </div>

                {/* Cafe Classics - Shakes */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    MAN.KO SPECIAL SHAKES
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>ABUDHA (Mango, Dates, Shamam)</li>
                    <li>PERSIA (Apple, Dates, Papaya)</li>
                    <li>AMBROSIA (Avocado, Dates, Shamam, Papaya)</li>
                    <li>AVODATE FUSION (Avocado, Dates, Dragon Fruit)</li>
                    <li>MARIA (Apple, Papaya, Guava)</li>
                    <li>GOLDEN GLOW (Papaya, Shamam)</li>
                    <li>PERSONALIZE YOUR SHAKE (Choose up to 3 fruits)</li>
                  </ul>
                </div>

                {/* Health Drinks */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    HEALTH DRINKS
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>ABC (Apple, Beetroot, Carrot)</li>
                    <li>ACC (Apple, Citrus, Carrot)</li>
                    <li>ACP (Apple, Carrot, Papaya)</li>
                    <li>HIMALAYA (Papaya, Dates, Carrot)</li>
                  </ul>
                  <p className="mt-4 text-sm italic text-gray-400">
                    All our fruitshakes are made with real fruits and fresh milk
                    – nothing else.
                  </p>
                </div>

                {/* Cozy & Cool Fruit Shakes */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    COZY & COOL FRUIT SHAKES
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>STRAWBERRY</li>
                    <li>BUTTER</li>
                    <li>KIWI</li>
                    <li>DRAGON</li>
                    <li>MANKO</li>
                    <li>APPLE</li>
                    <li>CHIKKU</li>
                    <li>PINEAPPLE PERK</li>
                    <li>PAPAYA</li>
                  </ul>
                </div>

                {/* Pure Juices */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    PURE JUICES
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>PINEAPPLE</li>
                    <li>ORANGE (CITRUS)</li>
                    <li>ORANGE</li>
                    <li>GRAPE</li>
                    <li>WATERMELON</li>
                    <li>PAPAYA</li>
                  </ul>
                </div>

                {/* Fresh Juices */}
                <div className="mb-12 text-left bg-black/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    FRESH JUICES
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>PINE-MINT LIME</li>
                    <li>PINEAPPLE LIME</li>
                    <li>MINT LIME</li>
                    <li>FRESH LIME</li>
                  </ul>
                  <p className="mt-4 text-sm italic text-gray-400">
                    (No Water Added. 100% Fruit.)
                  </p>
                </div>
              </div>

              <p className="mt-10 italic text-sm text-gray-400 text-center">
                * All items are freshly prepared upon order — thank you for your
                patience!
              </p>
            </div>
          </section>

          {/* Find Us Section */}
          <section
            ref={findUsRef}
            className="w-full py-20 px-6 bg-[rgba(0,0,0,0.8)] text-white text-center shadow-lg"
          >
            <div className="max-w-3xl mx-auto transition-all duration-700 ease-in-out">
              <h2 className="text-3xl md:text-4xl font-semibold uppercase mb-6 tracking-wide">
                Find Us
              </h2>

              <div className="text-base md:text-lg space-y-4 text-gray-200 mb-8">
                <p>
                  📍 <span className="font-medium">Location:</span> Erayilkadavu
                  Bypass, Kottayam, Kerala
                </p>
                <p>
                  📞 <span className="font-medium">Call Us:</span>{" "}
                  <a
                    href="tel:+917012463882"
                    className="underline hover:text-gray-100 transition-colors duration-300"
                  >
                    +91-70124 63882
                  </a>
                </p>
                <p>
                  🕒 <span className="font-medium">Opening Hours:</span> 11:00
                  AM - 11:00 PM (Daily)
                </p>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  title="Man.ko Cafe Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31435.39758164253!2d76.517734!3d9.591667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xbe2b01f7e082c4b!2sErayilkadavu%2C%20Kottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-64 md:h-96 border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-12">
                <button
                  onClick={scrollToTop}
                  className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full transition-all duration-300"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
