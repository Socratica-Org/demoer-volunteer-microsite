import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";

const Ticket: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ticketRef.current) return;
    const rect = ticketRef.current.getBoundingClientRect();
    const isOver =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    setIsHovering(isOver);
    if (!isOver) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const gleamStyle = useMemo(
    () => ({
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 35%)`,
      opacity: isHovering ? 1 : 0,
      transition: "opacity 0.3s ease-out",
      mixBlendMode: "screen" as const,
      pointerEvents: "none" as const,
    }),
    [mousePosition, isHovering],
  );

  return (
    <div
      ref={ticketRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Image
        src="/images/final-ticket.png"
        width={1089}
        height={389}
        alt="ticket"
        className="shadow-2xl w-full"
        priority
      />
      <div style={gleamStyle} />
    </div>
  );
};

export default Ticket;
