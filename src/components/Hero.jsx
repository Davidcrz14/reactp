import { motion } from 'framer-motion';
import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center mt-24">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid de puntos */}
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-20">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
          ))}
        </div>

        {/* Líneas decorativas animadas */}
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

      <div className="grid grid-cols-12 gap-8 mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-6"
        >
          {/* Círculo pequeño del perfil con animación */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="small-profile-circle"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Título principal modificado - quitando líneas moradas */}
          <motion.h1
            className="title text-white relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative">
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
            <span className="font-serif italic">
              DEVELOPER
            </span>
          </motion.h1>

          {/* Descripción con efecto de aparición */}
          <motion.p
            className="text-gray-300 mt-8 mb-12 max-w-lg leading-relaxed relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Soy estudiante de Ingeniería en Computación, apasionado por la tecnología y la programación.
            Disfruto trabajar en equipo y resolver problemas que afectan a la sociedad mediante el desarrollo
            de software que facilite la vida de los usuarios. Vivo en Oaxaca de Juárez, tengo 18 años y me
            gusta practicar deportes, dibujar y diseñar.
            <motion.div
              className="absolute -left-4 top-1/2 w-1 h-20 bg-gradient-to-b from-purple-500/20 to-transparent"
              animate={{
                height: ["0%", "100%"],
                y: [0, 20]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.p>

        </motion.div>

        <motion.div
          className="col-span-6 profile-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="profile-container relative">
            {/* Círculos decorativos animados */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`circular-design design-${i}`}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}

            {/* Puntos orbitando */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div
                className="decoration-dot absolute"
                style={{
                  top: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div
                className="decoration-dot absolute"
                style={{
                  bottom: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.6, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Semi círculo con animación */}
            <motion.div
              className="semi-circle"
              animate={{
                rotateX: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Línea decorativa */}
            <motion.div
              className="minus-symbol"
              animate={{
                width: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Imagen principal */}
            <motion.img
              src="/images/W.jpg"
              alt="Developer Profile"
              className="w-96 h-96 object-cover rounded-full border-4 border-white/10 shadow-lg relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Efecto de brillo detrás de la imagen */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
