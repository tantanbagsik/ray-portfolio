"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const MatrixLogo = () => {
  const [chars, setChars] = useState([]);
  
  const codeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]=+-_*&^%$#@!";

  useEffect(() => {
    const interval = setInterval(() => {
      const newChars = [];
      for (let i = 0; i < 8; i++) {
        newChars.push(codeChars[Math.floor(Math.random() * codeChars.length)]);
      }
      setChars(newChars);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href={"/"} className="relative group">
      <div className="flex items-center">
        <div className="relative perspective-500">
          <span 
            className="text-2xl md:text-5xl font-bold tracking-wider"
            style={{
              fontFamily: "'Courier New', monospace",
              textShadow: "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00",
              color: "#00ff00",
              transform: "rotateY(10deg) rotateX(5deg)",
              animation: "glow 2s ease-in-out infinite alternate"
            }}
          >
            {chars.map((char, i) => (
              <span 
                key={i}
                className="inline-block"
                style={{
                  animation: `flicker ${0.5 + Math.random() * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`
                }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
        <span className="ml-2 text-primary-500">_</span>
      </div>
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00; }
          to { text-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00; }
        }
        .perspective-500 {
          perspective: 500px;
        }
      `}</style>
    </Link>
  );
};

export default MatrixLogo;
