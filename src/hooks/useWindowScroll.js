import React, { useEffect } from 'react'

const useWindowScroll = () => {
 useEffect(() => {
  window.addEventListener('scroll', e => console.log(e.scrollY))
 }, [])
 return {}
}

export default useWindowScroll
