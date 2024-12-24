import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-20">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative inline-block">
                FRONTEND
                <motion.div
                  className="absolute -right-4 -top-4 w-8 h-8 border-2 border-gray-700 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </span>
              <br />
              <span className="font-serif italic">DEVELOPER</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0"
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
          <div className="relative flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              {/* Orbit animations */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full" />
              </motion.div>

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
                  <div
                    className="absolute inset-0 border border-white/10 rounded-full"
                    style={{ transform: `scale(${1 - i * 0.15})` }}
                  />
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
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
