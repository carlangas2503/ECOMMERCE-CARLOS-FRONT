'use client'
import { useState } from "react"
import Render from "../../components/render input/Render"

function Home() {
    const [iniText, setIniText] = useState('')
    const changeIni = (eve:any)=>{
        setIniText(eve.target.value);    
    }
    return(
        <div>
            <input type="text" value={iniText} onChange={()=>changeIni(event)} />
            <Render iniText={iniText}/>
        </div>
    )
}
export default Home