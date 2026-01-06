"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ children, onClick, href, className }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={`yellow-button ${className ?? ""}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`yellow-button ${className ?? ""}`}>
      {children}
    </button>
  );
}
