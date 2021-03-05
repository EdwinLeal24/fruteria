import { useState } from "react"

import productos from './productos/productos'
import { AppLayout, Main, Section, Title, ListCard } from './styled/styled'

import Lista from './components/Lista';


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

  return (
    <AppLayout>
          <Title>🍎Fruteria🍏</Title>
      <Main>
        <Section>
            <ListCard>
              <Lista frutas={listaFrutas} añadir={añadir} />
            </ListCard>
        </Section>
      </Main>     
    </AppLayout>
  );
}

export default App;
