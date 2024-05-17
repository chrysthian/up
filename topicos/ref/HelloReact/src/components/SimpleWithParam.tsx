import React, { ReactElement } from "react"
import "./SimpleWithParam.css"

// definição do objeto de parâmetro
interface params {
  name: string
  age?: number
}

const SimpleWithParam = (values: params): ReactElement => {
  if (values.age && values.age > 10) {
    return <h1 className="red"> {values.name} </h1>
  } else {
    return <h3 className="blue"> {values.name} </h3>
  }
  
}

export default SimpleWithParam
