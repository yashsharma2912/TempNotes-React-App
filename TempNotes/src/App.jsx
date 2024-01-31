
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Card from './compnents/card'
import Nav from './compnents/nav'

function App() {
  return (
    <>
      <div className="fg">
      <Nav/>
      <Card/>
      </div>
      <div className="bg">
         <h1 className='font-bold'>TempNotes</h1>
      </div>
    </>
  )
}

export default App
