import React, { useEffect, useState } from "react";

function Pokemon(){
    const [data,setData]= useState([])
    function fetchData(){
        return fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
    }
    useEffect(()=>{
        fetchData().then((res)=> res.json()).then((res)=>setData(res.results)).catch((err)=> console.log(err))
    },[])
    console.log(data)
    return(
        <div>
             {
                data.map((element)=>(
                    <div>
                        <h2>{element.name}</h2>
                    </div>
                ))
             }
        </div>
    )
}
export default Pokemon