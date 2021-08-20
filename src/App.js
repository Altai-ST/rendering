import { data } from "./data";
import React, {useState} from 'react'
import {User} from './components/User/index.jsx'
import './App.css'

function App() {

  const [age, setAge] = useState(1);
  const [country, setCountry] = useState(1);

  let renderAge =()=>{
    switch (age) {
      case 1:
      return(
        <div>
          <button className='btn1' onClick={()=> setCountry(1)}>Все младше 18</button>
          <button className='btn1' onClick={()=> setCountry(2)}>Kyrgyz</button>
          <button className='btn1' onClick={()=> setCountry(3)}>Foreigner</button>
          <div className='container'>{renderCountry()}</div>
        </div>
      )
      case 2:
        let arr = data.filter((el)=>{
          return el.age > 18 && el.age < 25
        })
        return arr.map((el, id)=>{
          return <User data={el} key={id}/>
        })
      
      case 3:
        let arr2 = data.filter((el)=>{
          return el.age > 24 
        })
        return arr2.map((el, id)=>{
          return <User data={el} key={id}/>
        })

      case 4:
        return data.map((el, id)=>{
          return <User data={el} key={id}/>
        })

      default:
        return ''
    }
  }
  
  let renderCountry =()=>{
    switch (country) {
      case 1:
        let arr5 = data.filter((el) => {
					return el.age < 18
				})
				return arr5.map((el, id) => {
					return <User data={el} key={id} />
				})

      case 2:
        let arr3 = data.filter((el)=>{
          return el.country === 'Kyrgyz' && el.age < 18
        })

        return arr3.map((el, id)=>{
          return <User data={el} key={id}/>
        })
    
        case 3:
          let arr4 = data.filter((el)=>{
            return el.country !== 'Kyrgyz' && el.age < 18
          })

          return arr4.map((el, id)=>{
            return <User data={el} key={id}/>
          })


      default:
        return ''
    }
  }

  return (
    <div className="App">
      <div className="btn-group">
        <button className='btn' onClick={() => setAge(1)}>младше 18</button>
        <button className='btn' onClick={() => setAge(2)}> от 18 до 24</button>
        <button className='btn' onClick={() => setAge(3)}> от 25 до 50</button>
        <button className='btn' onClick={() => setAge(4)}>Все пользователи</button>
      </div>
      <div className="container">{renderAge()}</div>
    </div>
  );
}

export default App;
