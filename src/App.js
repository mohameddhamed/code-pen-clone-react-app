import React, {useState, useEffect} from 'react';
import Editor from './Editor';
import useLocalStorage from './useLocalStorage';

function App() {

  const [htmlValue,setHTMLValue] = useLocalStorage('','html');
  const [cssValue, setCSSValue] = useLocalStorage('','css');
  const [jsValue, setJSValue] = useLocalStorage('','js');
  const [srcDoc, setSrcDoc] = useState('')

  function handleHTMLChange({target}){
    setHTMLValue(target.value)
  }
  function handleCSSChange({target}){
    setCSSValue(target.value)
  }
  function handleJSChange({target}){
    setJSValue(target.value)
  }

  useEffect(() => {
    const timeout=setTimeout(()=>{

      setSrcDoc(
        `<html>
          <body>${htmlValue}</body>
          <style>${cssValue}</style>
          <script>${jsValue}</script>
        </html>`
      )
    
    },500)

    return ()=>clearTimeout(timeout)
   
  }, [htmlValue, cssValue,jsValue])
  
  return (
   <>
    <div className='pane top-pane'>
      <Editor
        title={"HTML"}
        value={htmlValue}
        handleChange={handleHTMLChange}
      />
      <Editor
        title={"CSS"}
        value={cssValue}
        handleChange={handleCSSChange}
      />
      <Editor
        title={"JS"}
        value={jsValue}
        handleChange={handleJSChange}
      />

    </div>
    <div className='pane'>
      <iframe
        srcDoc={srcDoc}
        title='output'
        sandbox='allow-scripts'
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
   </>
  );
}

export default App;
