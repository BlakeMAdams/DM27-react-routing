const people = [
	{
		id: 1,
		name: 'Ansel Adams',
		image: 'http://shop.anseladams.com/v/vspfiles/photos/1715073-2T.jpg',
		description: 'Black and white nature'
	},
	{
		id: 2,
		name: 'Sally Mann',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sally_Mann.jpg/220px-Sally_Mann.jpg',
		description: 'Proving that moms can be good photographers'
	},
	{
		id: 3,
		name: 'Richard Avedon',
		image: 'https://maryckhayes.files.wordpress.com/2012/08/sfmoma_avedon_06_selfportrait.jpg?w=828',
		description: 'White background with famous people and sometimes bees'
	}

]

export function getPeople() {
	return people;
}

export function getPerson(id) {
	// for loop
	// .map
	// .filter
	

	let person = people.filter(e =>{
	// filter returns an array with element e in it
		if(e.id === id*1) {
		// returns e to return that matching element to the filter function
		return e;
		
		// filter funciton makes a new array with what was returned
		}
	})
	// returning out of the function the first index of that filtered array
	return person[0];
}
	