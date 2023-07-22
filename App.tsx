import Listing from './components/Listing'
import './App.css'
import data from './data/etsy.json'

const activeData = data.filter((el) => el.state === 'active')

function App() {

  return (
    <div className="App">
      <Listing data={activeData}/>
    </div>
  )
}

export default App
