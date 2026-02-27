import { useState, useEffect } from 'react'

export function useCountUp(
  end,
  duration = 2000,
  trigger = true,
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let startTime = null
    let animationFrame

    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4)
    }

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentCount = Math.floor(easeOutQuart(progress) * end)
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, trigger])

  return count
}
