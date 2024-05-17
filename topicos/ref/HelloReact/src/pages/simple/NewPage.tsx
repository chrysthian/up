import React, { ReactElement } from "react"
import Card from "../../components/Card"
import SimpleWithChildren from "../../components/SimpleWithChildren"
import Simple from "../../components/Simple"

const NewPage = (): ReactElement => {
  return (
    <div className="card-container">
      <Card name={"age 10"} age={10} />
      <Card name={"age 20"} age={20} />
      <SimpleWithChildren>
        <Simple />
      </SimpleWithChildren>
    </div>
  )
}

export default NewPage
