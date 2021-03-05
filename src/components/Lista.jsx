import React from "react";
import { Card, Button } from 'reactstrap';

const Lista = ({frutas, añadir}) => {

  const productos = frutas.map((el) => (
    <Card className="p-2 m-1" outline color="primary" body key={el.id} >
      <h5>{el.nom}</h5>
      <p>({el.preu}€/u)</p>
      <Button className="p-1" onClick={() => añadir(el)} >Añadir</Button>
    </Card>
  ))

  return (
    <>
      {productos}
    </>
  )
}

export default Lista;