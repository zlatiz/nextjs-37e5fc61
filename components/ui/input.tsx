"use client";
import React from "react";

interface InputProps {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  type?: string;
}

export default function Input({ value, onChange, placeholder, type = 'text' }: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      type={type}
      className="border p-2 rounded"
    />
  );
}
