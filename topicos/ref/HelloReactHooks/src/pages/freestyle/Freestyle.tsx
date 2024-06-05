import React, { ReactElement, ReactNode, useEffect, useState } from "react"

const displayFlavors = (flavors: any) : ReactNode => {
  const result : any = []
  if(flavors){
    flavors.forEach((flavor: any) => {
      result.push(
       <h2 style={{ width: "200px", height: "200px", border: "1px solid black", borderRadius: "20px"}}>{flavor.name}</h2>
      )
    })
  }

  return result
}

const FreestylePage = (): ReactElement => {
  const [flavors, setFlavors] = useState([])
  const [flavorName, setFlavorName] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch("http://localhost:4000/api/flavors",
     { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      setFlavors(data)
    })
  }

  const submitData = async () => {
      const data = {
        id: "0bda72f4-9267-4d60-a1db-ffd56861eafe",
        name: flavorName,
      }

      await fetch("http://localhost:4000/api/flavors", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          fetchData()
        })
    }

  return (
    <React.Fragment>
      <h1>Título Legal</h1>
      {displayFlavors(flavors)}

      <h1>{flavorName}</h1>
      <input 
        type="text"
        value={flavorName}
        onChange={(e) => {setFlavorName(e.target.value)}}/>
      <button onClick={()=> {submitData()}}>Clique em mim!</button>
    </React.Fragment>
  )
}

export default FreestylePage
