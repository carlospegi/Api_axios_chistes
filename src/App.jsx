/* Hacer una petición HTTP con Axios a la API descrita en la web https://api.chucknorris.io/ y crear un Componente React capaz de generar chistes aleatorios de Chuck Norris y mostrarlos.

Debe haber un botón que permita al usuario generar nuevos chistes.

También debe mostrarse un par de botones con Material UI que permitan votar (positivamente o negativamente un chiste).

Se debe mostrar el número de chistes te "han gustado" y cuántos "te han disgustado". */
import Button from '@mui/material/Button';

import { useState } from 'react';

import './App.css';
import getRandomChiste from './service/axios-Service';



function App() {
  const [chistes, setChistes] = useState([]);
  const [pos, setPos] = useState(0);
  const [neg, setNeg] = useState(0);

  const agregaChiste = () => {
    getRandomChiste()
      .then(
        (response) => {
          let datas = response.data.value

          setChistes([...chistes, datas])

          console.log(chistes);

        }
      ).catch((value) => {
        console.log('error:', value);
      })
  }

  const positivo=()=>{
    setPos(pos + 1)
  }

  const negativo=()=>{
      setNeg(neg + 1)
  }


  return (

    <>
      {

        chistes.map((chiste, index) => (
          <div className='add'  key={index} >
            <p>{chiste}</p>
            <Button  onClick={positivo}  sx={{ m: 2 }} size="small" variant="contained" color="success">
              Pos
            </Button>
            <Button  onClick={negativo}  sx={{ m: 2 }} size="small" variant="contained" color="error">
              Neg
            </Button>

          </div>
        ))


      }
      <div className='add'>
    
      <Button  sx={{ m: 1 }} size="small" variant="contained" color="secondary"   onClick={agregaChiste} >
              Agregar Chiste 
            </Button>
      </div>

      <div>
        <h3>Chistes que gustan : <span>{pos}</span> </h3>
        <h3>Chistes que no gustan <span>{neg}</span></h3>
      </div>

    </>
  );
}

export default App;
