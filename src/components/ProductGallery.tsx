"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  function scrollTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl"
        aria-label={`${name} images`}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-square w-full shrink-0 snap-center bg-surface"
          >
            <Image
              src={src}
              alt={`${name} — view ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
