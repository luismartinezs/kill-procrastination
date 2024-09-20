"use client";
import { useState, useEffect } from "react";
import { Textarea } from "@/common/components/textarea";

export function Brainstorm() {
  const [brainstorm, setBrainstorm] = useState<string>("");

  useEffect(() => {
    const storedBrainstorm = localStorage.getItem("brainstorm");
    if (storedBrainstorm) {
      setBrainstorm(storedBrainstorm);
    }
  }, []);

  const saveBrainstorm = (value: string) => {
    setBrainstorm(value);
    localStorage.setItem("brainstorm", value);
  };

  return (
    <div className="flex flex-col">
      <Textarea
        label="Brainstorm freely here"
        description="Write down here any random thoughts that you want to get out of your mind"
        id="brainstorm"
        value={brainstorm}
        onChange={(e) => saveBrainstorm(e.target.value)}
        rows={20}
      />
      <div className="flex justify-end">
        <button
          onClick={() => saveBrainstorm("")}
          className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors text-lg"
        >
          Clean up
        </button>
      </div>
    </div>
  );
}
