import React, {useEffect, useState} from 'react'

export default function PageLoader({file}){
  const [html, setHtml] = useState('<div class="loading">Loading...</div>')

  useEffect(()=>{
    let mounted = true
    fetch(file).then(r=>r.text()).then(t=>{
      if(!mounted) return
      // extract body content if present
      const bodyMatch = t.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
      setHtml(bodyMatch ? bodyMatch[1] : t)
    }).catch(()=>{
      if(mounted) setHtml('<div class="error">Failed to load page.</div>')
    })
    return ()=> mounted = false
  },[file])

  return <div className="page-injected" dangerouslySetInnerHTML={{__html: html}} />
}
