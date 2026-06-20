'use server';

export default async function doThing(prevState, actionPayload) {
	console.log('Thing done.');
	actionPayload = 'hello!'
	return actionPayload;
}