import React from 'react'

const Button = ({ link, word, w, h }) => {
 return (
  <>
   <Button as={link} w={w} h={h}>
    {word}
   </Button>
  </>
 )
}

export default Button
