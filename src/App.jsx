import { Navbar } from './components/layout/Navbar'
import { ItemListContainer } from './components/pages/ItemListContainer'


function App() {

  return (
    <div>
      <Navbar />
      <p></p>
      <ItemListContainer greetings={"Bienvenidos a RETRO SHIRTS"}></ItemListContainer>
    </div>
  )
}

export default App
