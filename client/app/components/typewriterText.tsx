'use client';

import { useState, useEffect } from 'react';

const words = ['Style', 'Class', 'Grace', 'Look'];

export default function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex];

    // Determine speed based on action
    const typingSpeed = isDeleting ? 70 : 130;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Add next character
        setCurrentText(targetWord.substring(0, currentText.length + 1));

        // When word is fully typed, pause before deleting
        if (currentText === targetWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Remove character
        setCurrentText(targetWord.substring(0, currentText.length - 1));

        // When word is fully deleted, move to next word
        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <span className="inline-inline-flex items-center text-[#C89A3C]">
      <span>{currentText}</span>
      {/* Blinking Cursor Bar */}
      <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-[#C89A3C]" />
    </span>
  );
}