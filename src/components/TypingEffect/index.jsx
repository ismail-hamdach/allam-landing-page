"use client";

import { useState, useEffect } from 'react';

export default function TypingEffect() {
  const textArray = [
    "Learn Arabic with AI-powered lessons.",
    "Personalized learning for your child.",
    "Master the language in a fun way!"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(350);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const fullText = textArray[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // Speed control
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to next string
      }

      // Adjust typing speed
      if (isDeleting) {
        setSpeed(50);
      } else {
        setSpeed(100);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, speed, currentTextIndex]);

  return (
    <div className="text-center mb-5">
    <h1 className="text-5xl font-bold text-primary dark:text-blue-400">
      {currentText}
      <span className="blinking-cursor"></span>
    </h1>
  </div>
  );
}
