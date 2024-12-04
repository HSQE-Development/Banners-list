import { useEffect, useState } from "react";
import Vibrant from "node-vibrant";

interface ImageWithGradientProps {
  src: string; // URL o ruta de la imagen
}

const ImageWithGradient: React.FC<ImageWithGradientProps> = ({ src }) => {
  const [gradient, setGradient] = useState<string>("");
  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      Vibrant.from(img)
        .getPalette()
        .then((palette) => {
          if (palette.Vibrant && palette.DarkMuted) {
            // Creamos un degradado usando los colores Vibrant y DarkMuted
            const gradientStyle = `linear-gradient(to bottom, ${palette.Vibrant.hex}, ${palette.DarkMuted.hex})`;
            setGradient(gradientStyle);
          }
        })
        .catch((err) => {
          console.error("Error extracting colors:", err);
        });
    };
  }, [src]);

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center"
      style={{ background: gradient }}
    >
      <img
        src={src}
        alt="Imagen con degradado"
        className="hidden" // Ocultamos la imagen
      />
      <div className="w-3/4 h-3/4 flex items-center justify-center bg-white/70 p-4 rounded-lg shadow-lg">
        <h1 className="text-black text-2xl font-bold">Degradado Suave</h1>
      </div>
    </div>
  );
};

export default ImageWithGradient;
