import { useEffect, useRef } from "react";

export function useInfiniteScroll(callback: () => void, isLoading: boolean) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading) callback();
      },
      { threshold: 1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [callback, isLoading]);

  return observerRef;
}
