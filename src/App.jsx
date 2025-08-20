import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './react-style.scss'

export default function App() {

const initObj = {
	prop1: 'Яблоко',
	prop2: 'Груша',
	prop3: 'Виноград',
}

	const [obj, setObj] = useState(initObj);
	
	return <div>
        <div id="block">А теперь <p><a href="" class="class">Тестируем SASS</a></p></div>
		{/* <input value={obj.prop1} onChange={event=>handleChange('prop1',event)}/><br />
        <input value={obj.prop2} /><br />
        <input value={obj.prop3} />
        <br />
		{obj.prop1}-{obj.prop2}-{obj.prop3} */}
	</div>;


}




