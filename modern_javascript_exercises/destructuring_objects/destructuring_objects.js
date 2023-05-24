// Instructions can be found in destructuring_objects.md

export function introduction(person) {
  // const name = person.name;
  // const city = person.city;
  // const pet = person.pet;

  const introMap = {
    name: 'Hello my name is ',
    city: ' and I live in ',
    pet: ' with '
  }

  return Object.entries(person).reduce((a, [key, value]) => a + introMap[key] + value, '');

  //return "Hello my name is " + name + " and I live in " + city + " with " + pet;
}
