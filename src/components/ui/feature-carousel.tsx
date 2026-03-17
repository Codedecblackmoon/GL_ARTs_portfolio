import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';
import { cn } from '../../lib/utils';

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  images: { src: string; alt: string }[];
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    React.useEffect(() => {
      const timer = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn('relative w-full min-h-screen overflow-hidden bg-background', className)}
        {...props}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          {/* Header Section */}
          {/* <div className="text-center mb-12 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {subtitle}
            </p>
          </div> */}

          {/* Main Showcase Section */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Carousel Wrapper */}
            <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-in-out rounded-2xl overflow-hidden shadow-lg"
                    style={{
                      transform: `translateX(${pos * 60}%) scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})`,
                      zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                      opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-[300px] md:w-[400px] h-[350px] md:h-[450px] object-cover rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';