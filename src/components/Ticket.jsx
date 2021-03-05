import React from "react";
import { Card, Button, CardTitle } from 'reactstrap';

const Ticket = ({ listaFrutas, totalCompra, borrar }) => {

    const productos = [...listaFrutas].filter(el => el.unidad > 0).map((el, i) => (
        <Card className="p-2 m-1" body key={i} outline color="success">
            <h5>{el.nom}</h5>
            <p>{el.unidad}u * {el.preu}€ = {el.unidad * el.preu}€ </p>
            <Button className="p-1" onClick={() => borrar(el)} >Eliminar</Button>
        </Card>
    ))

    return (
        <div>
            {' '}
            <h5>Carrito 🛒</h5>
            {productos}
            <Card className="p-2" body outline color="secondary">
                <CardTitle className="m-0">Total: {totalCompra}€ </CardTitle>
            </Card>
        </div>
    )
}

export default Ticket;