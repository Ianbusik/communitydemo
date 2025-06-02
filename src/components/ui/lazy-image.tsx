
import * as React from "react"
import { cn } from "@/lib/utils"

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  fallback?: string
}

export const LazyImage = React.forwardRef<HTMLImageElement, LazyImageProps>(
  ({ src, alt, className, fallback = "/placeholder.svg", ...props }, ref) => {
    const [imageSrc, setImageSrc] = React.useState(fallback)
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const imgRef = React.useRef<HTMLImageElement>(null)

    React.useImperativeHandle(ref, () => imgRef.current!)

    React.useEffect(() => {
      const img = imgRef.current
      if (!img) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src)
              observer.unobserve(img)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(img)

      return () => {
        observer.unobserve(img)
      }
    }, [src])

    const handleLoad = () => {
      setIsLoading(false)
      setIsError(false)
    }

    const handleError = () => {
      setIsLoading(false)
      setIsError(true)
      setImageSrc(fallback)
    }

    return (
      <div className={cn("relative", className)}>
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoading && "opacity-50",
            className
          )}
          {...props}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse rounded" />
        )}
      </div>
    )
  }
)

LazyImage.displayName = "LazyImage"
