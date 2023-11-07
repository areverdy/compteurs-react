import { useState, useCallback, useMemo} from 'react'
import Compteur1 from './Compteur1'
import Compteur3 from './Compteur3'
import Compteur4 from './Compteur4'
import Compteur5 from './Compteur5'

function App() {
  const [cpt, setCpt] = useState(0)

  const handleClick = useCallback(() => {
    setCpt(cpt + 1)
  }, [cpt])

  return (
    <>
      <h1>Exo 1 et 2</h1>
      <Compteur1 />
      <Compteur1 />

      <h1>Exo 3</h1>
      <Compteur3 value={cpt} />
      <Compteur3 value={cpt} />
      <button onClick= {handleClick}>Incrementer les deux</button>

      <h1>Exo 4</h1>
      <Compteur4 value= {cpt} />
      <Compteur4 value= {cpt} />
      <button onClick= {handleClick}>Incrementer les deux</button>

      <h1>Exo 5</h1>
      <Compteur5 value= {cpt} />
      <Compteur5 value= {cpt} />

    </>
  )
}

export default App
