import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
   
  const [notes, setNotes] = useState([1, 2, 3]);

    function changeHandler(index, event) {
        setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
    }

    function getSum(arr) {
        let sum = 0;
        for (const elem of arr) {
            sum += +elem;
        }
        return sum;
    }

    const result = notes.map((note, index) => {
        return <input
            key={index}
            value={note}
            onChange={event => changeHandler(index, event)}
        />;
    });

    const arr1 = [0, 1, 2, 3, 4, 5];

    
const index1 = 5;
const arr2 = [ ...arr1.slice(0, index1), 'Habr', ...arr1.slice(index1 + 1) ]
// [ 0, 1, 2, "Habr", 4, 5 ]



    return <div>
     <p>{arr2}</p>
        {result}
        {getSum(notes)}
    </div>;

}


