import { useEffect } from 'react'

const useClick = (
  whereIsClicked: 'inside' | 'outside',
  el: HTMLElement | null,
  cb: () => void
) => {
  useEffect(() => {
    if (!el) return

    const handlers = {
      outside: (e: Event) => !el.contains(e.target as Node) && cb(),
      inside: (e: Event) => el.contains(e.target as Node) && cb(),
    }

    document.addEventListener('click', handlers[whereIsClicked])
    return () => {
      document.removeEventListener('click', handlers[whereIsClicked])
    }
  }, [el, cb, whereIsClicked])
}

export default useClick
