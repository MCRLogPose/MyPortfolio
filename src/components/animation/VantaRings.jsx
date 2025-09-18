import { useEffect, useRef, useState } from "react";
import RINGS from "vanta/dist/vanta.rings.min.js";
import * as THREE from "three";

const VantaRings = ({ children, className }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE, // Requerido
          backgroundColor: 0x0f172a,
          color: 0x2d49be,
          backgroundAlpha: 1.0,
          amplitudeFactor: 2.0,
          minHeight: 20.0,
          minWidth: 20.0,
          scale: 1.0,
          scaleMobile: 1.0,
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
      {/* Overlay para contenido encima */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaRings;
