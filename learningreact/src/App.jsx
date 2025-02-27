import './App.css'
import Title from './components/Title'
import Product from './components/Product.jsx'
import Hello from './components/Hello.jsx'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import Form from './components/Form.jsx'

// function Description(){
//   return(
//     <>
//     <p>This is {"Bhino"}</p>
//     </>
//   )
// }

// let name = "Bhino";
// // let arr = [<li>"Good"</li>, <li>"very good"</li> , <li>"Excellent"</li> ];
// let arr = ["Good", "very good", "Excellent" ];
// let obj = {
//   a:"HI",
//   b:"Hello"
// }
function App() {

  return (
    <>
  <Form />
    </>
  )
}
{/* <div className='h-[250px] flex gap-3 bg-zinc-700 p-5 font-sans'>
<Card productName={"Cooker"} specs={["Fast","Reliable"]} price={10000} discount={500}></Card>
<Card productName={"Printer"} specs={["Good","Durable"]} price={15000} discount={900}></Card>
<Card productName={"Moniter"} specs={["HD","35 Inches"]} price={25000} discount={1500}></Card>
</div> */}
    // {/* <Title/>
    // <Description/> */}
    // {/* <Product title={name} other={arr} obj={obj}/> */}
    // {/* <Product title={name}  obj={obj}/>
    // <button>I am Bhino{2*2}</button> */}
    // {/* <Product price={7000}/>
    // <Product price={4000}/> */}
    // {/* <Product price={5000}/> */}
    //   {/* <Hello username={"Bhino"} text={"text-amber-500"}/>
    //   <Hello username={"Anota"} text={"text-green-500"}/>
    //   <Hello username={"Kashi"} text={"text-blue-500"}/> */}
export default App
