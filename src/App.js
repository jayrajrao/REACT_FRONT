
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './component/sattel/Home';
import About from './component/sattel/About';
import Gallery from './component/sattel/Gallery';
import Couple from './component/sattel/Couple';
import Contact from './component/Contact';
// import UseState from './component/component2/UseState';
// import UseEffect from './component/component2/UseEffect';
// import UseEffect1 from './component/component2/UseEffect1';
// import Bootstrap from './component/component2/Bootstrap';
// import ReUseComponent from './component/component2/ReUseComponent';

function App() {

  // const user=[
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   },
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   },
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   }
  //  ]
   
    // user.map((item,i)=>{
    //   <h1>{item.name}</h1>
    // })
   
  return (
   <>
  
<Routes>

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/couple" element={<Couple />} />
<Route path="/contact" element={<Contact />} />
{/* <Route path="/usest" element={<UseState />} />
<Route path="/useef" element={<UseEffect />} />
<Route path="/useef" element={<UseEffect1 />} />
<Route path="/boot" element={<Bootstrap />} />
<Route path="/reuse" element={<ReUseComponent />} /> */}
{/* {
    user.map((item,i)=>{
      <h1>{item.name}</h1>
    })
} */}
</Routes>

   </>
  );
}

export default App;
