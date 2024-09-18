import { useEffect } from "react"
import { Link } from "../Link"

export default function SearchPage  ({routeParams}) {
    useEffect(() => {
      document.title = `Has buscado ${routeParams.query}`
    }, [])
    
    return (
    <div>
        <h2>
            Has buscado <span style={{color:"red"}}>{routeParams.query}</span>
        </h2>
        <Link to="/">Ir al inicio</Link>
    </div>
  )
}
