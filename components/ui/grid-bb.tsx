"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="flex items-center justify-center absolute md:top-10 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-70 px-4" />

      <Boxes />
      
    </div>
  );
}
