'use client'
import { useState, useEffect } from "react";

export default function Page() {
	let [state, setState] = useState(0);

	useEffect(() => {
		localStorage.setItem('Number', `${Number(state)}`);
	})

	return <>
		<p>{ state }</p>
		<button onClick={ () => setState(prev => prev + 1)}>Click Me!</button>
		<p>{ localStorage.getItem('Number') }</p>
	</>
}