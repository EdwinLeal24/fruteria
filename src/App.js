import { useState } from "react"

import productos from './productos/productos'
import { AppLayout, Main, Section, Title, ListCard, TicketCard } from './styled/styled'

import Lista from './components/Lista';
import Ticket from './components/Ticket';

function App() {

  const [listaFrutas, setListaFrutas] = useState(productos);
  const [total, setTotal] = useState(0);

  const añadir = (x) => {
    setTotal(total + x.preu);
    const nuevaLista = listaFrutas.map(el => {
      if (el.id === x.id) {
        el.unidad = el.unidad + 1;
      }
      return el;
    });
    setListaFrutas(nuevaLista);
  }

  const eliminar = (x) => {
    setTotal(total - x.preu * x.unidad);
    const nuevaLista = listaFrutas.map(el => {
      if (el.id === x.id) {
        el.unidad = 0;
      }
      return el;
    });
    setListaFrutas(nuevaLista)
  }

  return (
    <AppLayout>
          <Title>🍎 Fruteria 🍏</Title>
      <Main>
        <Section>
            <ListCard>
              <Lista frutas={listaFrutas} añadir={añadir} />
            </ListCard>
            <TicketCard>
              <Ticket listaFrutas={listaFrutas} totalCompra={total} borrar={eliminar} />
          </TicketCard> 
        </Section>
      </Main>     
    </AppLayout>
  );
}

export default App;
