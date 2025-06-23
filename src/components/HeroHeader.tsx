"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Typewriter component
export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  useEffect(() => {
    if (!currentText) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    textArray,
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

// Animated Gradient Text component
function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className,
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />
      {children}
    </div>
  );
}

// Scroll Progress Bar component
interface ScrollProgressBarProps {
  type?: "circle" | "bar";
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  color?: string;
  strokeSize?: number;
  showPercentage?: boolean;
}

export function ScrollProgressBar({
  type = "circle",
  position = "bottom-right",
  color = "hsl(var(--primary))",
  strokeSize = 2,
  showPercentage = false,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [percentage, setPercentage] = useState(0);

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });

  if (type === "bar") {
    return (
      <div
        className="fixed start-0 end-0 top-0 pointer-events-none z-50"
        style={{ height: `${strokeSize + 2}px` }}
      >
        <span
          className="bg-primary h-full w-full block"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn("fixed flex items-center justify-center z-50", {
        "top-4 end-4": position === "top-right",
        "bottom-4 end-4": position === "bottom-right",
        "top-4 start-4": position === "top-left",
        "bottom-4 start-4": position === "bottom-left",
      })}
    >
      {percentage > 0 && (
        <>
          <svg width="60" height="60" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeSize}
              className="opacity-20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              stroke={color}
              fill="none"
              strokeDashoffset="0"
              strokeWidth={strokeSize}
              style={{ pathLength: scrollYProgress }}
              className="rotate-[-90deg] origin-center"
            />
          </svg>
          {showPercentage && (
            <span className="text-xs absolute">{percentage}%</span>
          )}
        </>
      )}
    </div>
  );
}

// Main Hero Header component
interface HeroHeaderProps {
  className?: string;
}

export default function HeroHeader({ className }: HeroHeaderProps) {
  const containerRef = useRef<HTMLElement>(null);

  const scrollToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
        mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <section
        ref={containerRef}
        className={cn(
          "relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black",
          className,
        )}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          {/* Main gradient orbs */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl"
          />
          
          {/* Animated floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container flex justify-center flex-col items-center px-4 text-center space-y-8"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatedGradientText>
              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                MCP Server Architecture & Data Flow
              </span>
              <ChevronDown className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-y-0.5" />
            </AnimatedGradientText>
          </motion.div>

          {/* Main heading with typewriter */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-relaxed">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Building Intelligent{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                <Typewriter
                  text={["Agents", "Assistants", "Connections", "Solutions"]}
                  speed={150}
                  loop={true}
                  className="inline-block"
                />
              </span>
            </h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Securely connect your tools & resources to build truly effective personal assistants.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.button
            onClick={scrollToContent}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
);
} 