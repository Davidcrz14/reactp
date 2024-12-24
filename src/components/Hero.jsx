import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-20">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
          ))}
        </div>

        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <svg className="w-full h-full">
            <path
              d="M0,200 Q400,50 800,300"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Text Content */}
          <div className="col-span-6 flex flex-col justify-center">
            <motion.h1
              className="text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block">FRONTEND</span>
              <span className="font-serif italic">DEVELOPER</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Soy estudiante de Ingeniería en Computación, apasionado por la tecnología y la programación.
              Disfruto trabajar en equipo y resolver problemas que afectan a la sociedad mediante el desarrollo
              de software que facilite la vida de los usuarios. Vivo en Oaxaca de Juárez, tengo 18 años y me
              gusta practicar deportes, dibujar y diseñar.
            </motion.p>
          </div>

          {/* Profile Image */}
          <div className="col-span-6 flex items-center justify-center relative">
            <div className="relative w-[500px] h-[500px]">
              {/* Decorative circles */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className={`absolute inset-0 border border-white/10 rounded-full`}
                    style={{ transform: `scale(${1 - i * 0.15})` }} />
                </motion.div>
              ))}

              {/* Profile image */}
              <motion.div
                className="relative z-10 w-full h-full rounded-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src="/images/W.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
