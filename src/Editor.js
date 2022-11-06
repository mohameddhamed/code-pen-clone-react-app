import React,{useState} from 'react'
import './App.css'

export default function Editor(props) {
  const {
    title,handleChange,value
  }=props
  
  const [collapsed, setCollapsed] = useState(false)
  function btnClick(){
    console.log(collapsed)
    setCollapsed(!collapsed)
  }
  return (
    <>
      <div className={`inline-div `}>
        <p align="center">
          {title}
          <span>   </span>
          <button onClick={btnClick}>oc</button>
        </p>
        <textarea 
        cols="53" rows="15" 
        className={`inline-txtarea ${collapsed ? 'collapsed' : ''}`}
        onChange={handleChange}
        value={value}
        >
        </textarea>
      </div>


    </>
  )
}
