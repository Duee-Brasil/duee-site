import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react'
import styled from 'styled-components'

const Viewport = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const Track = styled.div<{ $index: number }>`
  display: flex;
  width: 100%;
  transform: translate3d(${({ $index }) => `-${$index * 100}%`}, 0, 0);
  transition: transform 400ms ease;
`

const Slide = styled.div`
  width: 100%;
  min-width: 100%;
`

type SwipeableViewsProps = PropsWithChildren<{
  index: number
  onChangeIndex?: (nextIndex: number) => void
  autoPlay?: boolean
  interval?: number
}>

const SwipeableViews = ({
  index,
  onChangeIndex,
  autoPlay = false,
  interval = 5000,
  children,
}: SwipeableViewsProps) => {
  const slides = useMemo(
    () => React.Children.toArray(children) as ReactNode[],
    [children]
  )
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  useEffect(() => {
    if (!autoPlay || slides.length <= 1 || !onChangeIndex) {
      return
    }

    const id = window.setInterval(() => {
      const nextIndex = (index + 1) % slides.length
      onChangeIndex(nextIndex)
    }, interval)

    return () => window.clearInterval(id)
  }, [autoPlay, index, interval, onChangeIndex, slides.length])

  const goTo = (nextIndex: number) => {
    if (!onChangeIndex || slides.length <= 1) {
      return
    }
    const safeIndex = (nextIndex + slides.length) % slides.length
    onChangeIndex(safeIndex)
  }

  return (
    <Viewport
      onTouchEnd={(e) => {
        if (touchStartX === null) {
          return
        }
        const endX = e.changedTouches[0]?.clientX ?? touchStartX
        const delta = endX - touchStartX
        const threshold = 50

        if (delta > threshold) {
          goTo(index - 1)
        } else if (delta < -threshold) {
          goTo(index + 1)
        }

        setTouchStartX(null)
      }}
      onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
    >
      <Track $index={index}>
        {slides.map((slide, slideIndex) => (
          <Slide key={slideIndex}>{slide}</Slide>
        ))}
      </Track>
    </Viewport>
  )
}

export default SwipeableViews
