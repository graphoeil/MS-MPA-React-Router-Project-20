// Variables
const FIREBASE_DOMAIN = 'https://ms-react-router-20-default-rtdb.europe-west1.firebasedatabase.app';

// Get all quotes
export async function getAllQuotes() {
	const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch quotes.');
	}
	const transformedQuotes = [];
	// Firebase return a collection of objects
	for (const key in data){
		const quoteObj = { id:key, ...data[key] };
		transformedQuotes.push(quoteObj);
	}
	return transformedQuotes;
};

// Single quote
export async function getSingleQuote(quoteId) {
	const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
	const data = await response.json();
	if (!response.ok){
		throw new Error(data.message || 'Could not fetch quote.');
	}
	const loadedQuote = { id:quoteId, ...data };
	return loadedQuote;
};

// Add new quote
export async function addQuote(quoteData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
		method:'POST',
		body:JSON.stringify(quoteData),
		headers:{
			'Content-Type': 'application/json',
		}
	});
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message || 'Could not create quote.');
	}
	return null;
};

// Add new comment
export async function addComment(requestData) {
	const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
		method:'POST',
		body:JSON.stringify(requestData.commentData),
		headers:{
			'Content-Type': 'application/json',
		}
	});
	const data = await response.json();
	if (!response.ok){
		throw new Error(data.message || 'Could not add comment.');
	}
	return { commentId:data.name };
};

// Get all comments
export async function getAllComments(quoteId) {
	const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message || 'Could not get comments.');
	}
	const transformedComments = [];
	for (const key in data){
		const commentObj = { id:key, data:data[key] };
		transformedComments.push(commentObj);
	}
	return transformedComments;
};