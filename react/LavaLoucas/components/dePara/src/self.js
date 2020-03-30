import categoria from '../public/categoria.json'
    
    const dict= (cat,term) => (categoria[cat]||categoria.default)[ term.replace(/\{|\}/g,'') ] || ""
    const translate=(cat,text)=>{
        return text && (text.match(/\{[^}]+}/g)||[]).reduce( (prev,t) => { return prev.replace(t,dict(cat,t) ) }  , text      )
    }
    
export default translate