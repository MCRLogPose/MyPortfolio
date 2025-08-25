import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min.js";
import * as THREE from "three";

const VantaBackground = ({ children, className }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE, // <-- MUY importante
          backgroundColor: 0x0f172a,
          color1: 0x2d49be,
          color2: 0x83ff,
          birdSize: 1.2,
          speedLimit: 5,
          separation: 30.0,
          alignment: 30.0,
          cohesion: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className={`relative w-full min-h-screen h-auto ${className}`}
    >
      {/* Overlay para que los hijos queden visibles encima */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
