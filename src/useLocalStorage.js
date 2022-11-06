import React, { useState, useEffect } from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(initialValue,key) {
  
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(()=>{

    const item = localStorage.getItem(prefixedKey)
    if (item != null) return JSON.parse(item) 

    return initialValue

  })
  useEffect(() => {
    localStorage.setItem(prefixedKey,JSON.stringify(value))
    
  }, [prefixedKey,value])

  return [value,setValue]
  

}
