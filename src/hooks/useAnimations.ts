import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Hook that triggers animation when element enters viewport
 */
export function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}

/**
 * Hook for the typing animation effect
 */
export function useTypingAnimation(words: string[], speed = 100, pause = 2000): string {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      setText(prev => prev.slice(0, -1));
    } else {
      setText(currentWord.slice(0, text.length + 1));
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pause);
      return;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex(prev => (prev + 1) % words.length);
      return;
    }
  }, [text, wordIndex, isDeleting, words, pause]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, speed]);

  return text;
}
