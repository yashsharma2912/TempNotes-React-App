
import './App.css'
import 'remixicon/fonts/remixicon.css'
import Card from './compnents/card'
import Nav from './compnents/nav'

function App() {

  const data = [
    {
        Title:"Task 1",
        desc:"This is my frist notes where i am storing my all upcoming tasks  ",
        status : "pending",
        tagColor : "red"
    }, 
    {
      Title:"Task 2",
      desc:"Php is the server side scripting language i want to learn php with laravel and i great at react js ",
      
      status : "Solved",
      tagColor : "green"
    }
    ];

  return (
    <>
      <div className="fg">
      <Nav/>
      <div className="cardDis flex gap-10">
          {data.map((item,index) => (
            <Card data={item}/>
          ))}
      </div>
      </div>
      <div className="bg">
         <h1 className='font-bold'>TempNotes</h1>
      </div>
    </>
  )
}

export default App
