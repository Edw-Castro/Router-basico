import { EVENTS } from "./const"

export const navigate = (href) => {
    window.history.pushState({},'',href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)      
}

export function Link({ target, to, ...props}) {
    const handleClick = (event)=>{
        const isMainEvent = event.button === 0 // primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey 
        const isManageableEvent = target === undefined || target === '_self'
        
        if(isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to) // nav SPA
        }
    }
    return <a onClick={handleClick} target={target} {...props} />
}