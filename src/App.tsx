import { useState, useCallback, useMemo} from 'react'
import Compteur1 from './Compteur1'
import Compteur3 from './Compteur3'
import Compteur4 from './Compteur4'
import Compteur5 from './Compteur5'

function App() {
  const [cpt, setCpt] = useState(0)
  const [cptDeux, setCptDeux] = useState(0)
  const [cptExo5, septCptExo5] = useState (0)

  const handleClick = useCallback(() => {
    setCpt(cpt + 1)
  }, [cpt])

  const handleClickDeux = useCallback(() => {
    setCptDeux(cptDeux + 1)
  }, [cptDeux])

  const handleClickCinq = useCallback (() => {
    septCptExo5 (cptExo5 + 1)
  }, [cptExo5])

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
      <Compteur4 value= {cptDeux} />
      <Compteur4 value= {cptDeux} />
      <button onClick= {handleClickDeux}>Incrementer les deux</button>

      <h1>Exo 5</h1>
      <Compteur5 value= {cptExo5} />
      <Compteur5 value= {cptExo5} />
      <button onClick= {handleClickCinq}>Incrementer chq compteur</button>

    </>
  )
}

export default App
