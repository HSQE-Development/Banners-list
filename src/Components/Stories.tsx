import React, { useEffect, useRef, useState } from "react";
import useLongPress from "../hooks/useLongPress";

export interface Story {
  content: React.ReactNode;
  duration?: number;
  propagatedClick?: boolean;
}

export interface Company {
  logo?: React.ReactNode;
  name?: string;
  slogan?: string;
  stories: Story[];
}

interface StoriesProps {
  companies: Company[];
  defaultDuration: number; // Duración por defecto para historias con duración indefinida
}

export default function Stories({ companies, defaultDuration }: StoriesProps) {
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0); // Empresa actual
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // Historia actual de la empresa
  const [progress, setProgress] = useState(0); // Progreso actual
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  const currentCompany = companies[currentCompanyIndex];
  const currentStories = currentCompany.stories;
  const currentStory = currentStories[currentStoryIndex];

  const handleNext = () => {
    setIsLoading(true);
    if (currentStoryIndex < currentStories.length - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    } else if (currentCompanyIndex < companies.length - 1) {
      setCurrentCompanyIndex((prevIndex) => prevIndex + 1);
      setCurrentStoryIndex(0);
    }
    setProgress(0);
  };

  const handlePrev = () => {
    setIsLoading(true);
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prevIndex) => prevIndex - 1);
    } else if (currentCompanyIndex > 0) {
      setCurrentCompanyIndex((prevCompanyIndex) => prevCompanyIndex - 1);
      setCurrentStoryIndex(
        companies[currentCompanyIndex - 1].stories.length - 1
      );
    }
    setProgress(0);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleLongPress = () => {};
  const handleRelease = () => {
    setIsPaused(false);
  };

  const pressing = useLongPress(handleLongPress, handleRelease, 3000);

  useEffect(() => {
    if (pressing) {
      setIsPaused(true);
    }
  }, [pressing]);

  useEffect(() => {
    if (!currentStory?.duration) return;
    //@ts-ignore
    let interval: NodeJS.Timeout;

    if (!isPaused && !isLoading) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress =
            prevProgress +
            (100 / (currentStory.duration ?? defaultDuration)) * 100;

          if (nextProgress >= 100) {
            handleNext();
            return 0;
          }
          return nextProgress;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [currentStoryIndex, currentCompanyIndex, isPaused, isLoading]);

  const handleClick = (event: React.MouseEvent) => {
    const screenWidth = window.innerWidth;
    const clickPosition = event.clientX;

    // Si el clic fue en la mitad derecha, avanzamos, si fue en la mitad izquierda, retrocedemos
    if (!currentStory.propagatedClick) {
      if (clickPosition > screenWidth / 2) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const renderContent = () => {
    const content = currentStory.content;
    if (
      React.isValidElement(content) &&
      content.type === "div" &&
      content.props.children?.type === "img"
    ) {
      return React.cloneElement(content, {
        //@ts-ignore
        children: React.cloneElement(content.props.children, {
          onLoad: handleImageLoad,
          style: {
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          },
        }),
      });
    }
    return content;
  };

  return (
    <div
      className="relative w-full h-full flex justify-center items-center transition bg-black"
      onClick={(e) => {
        if (!currentStory.propagatedClick) handleClick(e);
      }}
    >
      <div className="w-full lg:w-[60%] h-[93%] flex justify-center items-center text-white text-xl bg-gray-800 transition overflow-hidden  rounded-lg relative">
        <div
          className={`absolute h-20  top-0 z-20 w-full flex flex-col items-center justify-start gap-2 p-2 transition ${
            pressing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-full flex gap-1">
            {currentStories.map((_, index) => (
              <div
                className="w-full h-[1px] bg-zinc-500 rounded-3xl overflow-hidden"
                key={index}
              >
                <div
                  className="h-full bg-white"
                  style={{
                    width:
                      index === currentStoryIndex
                        ? `${progress}%`
                        : index < currentStoryIndex
                        ? "100%"
                        : "0%",
                    transition: "width 0.1s linear",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-center">
            {currentCompany.logo}
          </div>
        </div>
        <div
          className="relative z-10 w-full h-full flex justify-center items-center text-white"
          ref={ref}
        >
          {/* {currentStory.content} */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
