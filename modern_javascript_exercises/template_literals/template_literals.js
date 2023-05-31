// Instructions can be found in template_literals.md

export const greeting = (name, dayOfTheWeek) =>
  // "Hello " + name + "! It is now " + dayOfTheWeek;
  //const string1 = "Hello ";
  //const string2 = "! It is now ";

  `Hello ${name}! It is now ${dayOfTheWeek}`;
