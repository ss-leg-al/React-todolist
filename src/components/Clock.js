import {useState,useEffect} from 'react'
import { MdHome } from 'react-icons/md';

function Clock(){
    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        const id=setInterval(()=>{
            setTime(new Date())
        },1000);
        return (()=>clearInterval(id))
    },[])


return(
    <div>
        {time.toLocaleTimeString()}
    </div>
)
}

export default Clock