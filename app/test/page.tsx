'use client';
import { useActionState } from 'react';
import doThing from '@/app/test/sactions';

export default function Page() {
	let [ state, dispatchAction, isPending ] = useActionState(doThing, 0);

	return (
		<form action={ dispatchAction }>
			<button>Submit</button>
			<p>{ state }</p>
		</form>
	)
}