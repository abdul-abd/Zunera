"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Phone } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  tags: string[];
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "turbine-3000",
    name: "AeroFlow Turbo 3000",
    description: "High-efficiency home & light-industry ventilator. Low noise, long life.",
    price: 34999,
    img: "/images/main.jpg",
    tags: ["Home", "Ceiling", "BLDC"],
  },
  {
    id: "venti-pro-xx",
    name: "VentiPro XX Industrial",
    description: "Heavy-duty axial turbine for factories and warehouses.",
    price: 129999,
    img: "/images/tur2.jpg",
    tags: ["Industrial", "Axial"],
  },
  {
    id: "eco-breeze",
    name: "EcoBreeze In-Wall",
    description: "Energy-saving ventilation module with smart controls.",
    price: 17999,
    img: "/images/tur5.jpg",
    tags: ["Home", "Smart"],
  },
];

const formatINR = (n: number) => {
  return n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
};

export default function AirTurbineShop({
  whatsappNumber = "919999999999",
}: {
  whatsappNumber?: string;
}) {
  const openWhatsApp = (
    message = "Hello, I need help with turbines and ventilators."
  ) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank");
  };

  const handleBuyNow = async (product: Product) => {
    alert(
      `Buy now clicked for ${product.name}.\nImplement Stripe/Payment flow on server.`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900 antialiased">
      <header className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <motion.h1
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent"
            >
              Zunera Air Ventilators & Turbines
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">
              Silent. Efficient. Durable. Delivering optimized airflow solutions
              for homes, offices and heavy industry.
            </p>

            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  openWhatsApp(
                    "Hello, I want a quote for bulk industrial turbines."
                  )
                }
                className="inline-flex items-center gap-3 bg-emerald-600 text-white font-medium px-5 py-3 rounded-2xl shadow-md"
              >
                <Phone size={18} />
                Quick Quote on WhatsApp
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.scrollTo({ top: 600, behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-2xl"
              >
                <ShoppingCart size={16} /> View Products
              </motion.button>
            </div>
          </div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
          >
            <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Image
                  src={SAMPLE_PRODUCTS[0].img}
                  alt={SAMPLE_PRODUCTS[0].name}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover"
                />
              </motion.div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">
                      {SAMPLE_PRODUCTS[0].name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {SAMPLE_PRODUCTS[0].description}
                    </div>
                  </div>
                  <div className="text-lg font-bold">
                    {formatINR(SAMPLE_PRODUCTS[0].price)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <main className="container mx-auto px-6 pb-24">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PRODUCTS.map((p) => (
              <motion.article
                key={p.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <div className="relative h-56">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 text-xs px-3 py-1 rounded-full">
                    {p.tags.join(" • ")}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {p.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        {formatINR(p.price)}
                      </div>
                      <div className="text-xs text-slate-400">Excl. GST</div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => handleBuyNow(p)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium"
                    >
                      <ShoppingCart size={16} /> Buy Now
                    </button>
                    <button
                      onClick={() =>
                        openWhatsApp(
                          `Hi, I want a quote for ${p.name} (${p.id}). Quantity:`
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200"
                    >
                      Contact via WhatsApp
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold">Why choose our turbines</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Precision-balanced rotors for low vibration and long life.</li>
              <li>• Energy-efficient motors with low running costs.</li>
              <li>• On-site installation and commissioning services.</li>
              <li>• Custom engineered solutions for large OEM clients.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h4 className="font-semibold">Get a tailored quote</h4>
            <p className="mt-2 text-sm text-slate-500">
              Share details and we&apos;ll respond on WhatsApp or email within 6
              business hours.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <input
                type="text"
                placeholder="Company / Name"
                className="border px-3 py-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone (so we can WhatsApp)"
                className="border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Project details & quantity"
                className="border px-3 py-2 rounded h-24"
              ></textarea>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hi, I need a tailored quote. Here are my details: "
                    )
                  }
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium"
                >
                  Send on WhatsApp
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border">
                  Request via Email
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed right-6 bottom-6 z-50">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            openWhatsApp("Hello — I need product & installation support.")
          }
          aria-label="WhatsApp support"
          className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-3xl shadow-2xl"
        >
          <Phone size={18} />
          <span className="hidden md:inline">WhatsApp Support</span>
        </motion.button>
      </div>

      <footer className="mt-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-xl font-bold">
              Zunera air ventilators & turbines Co.
            </div>
            <div className="mt-3 text-sm text-slate-300">
              Design, manufacture & service of industrial and domestic
              ventilation systems.
            </div>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>Products</li>
              <li>Case Studies</li>
              <li>Support & Installation</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <div className="mt-3 text-sm text-slate-300">
              Phone: +91 9019673295 /8445974216
            </div>
            <div className="text-sm text-slate-300">
              Email: zunera.airventilators.gmail.com
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 text-slate-500 text-sm py-4 text-center">
          © {new Date().getFullYear()} Zunera Co. All rights reserved. developed
          by  Abdul sattar shaikh
        </div>
      </footer>
    </div>
  );
}
