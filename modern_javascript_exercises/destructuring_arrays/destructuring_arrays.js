// Instructions can be found in destructuring_arrays.md

export function sequence(order) {
  // const first = order[0];
  // const second = order[1];
  // const third = order[2];

  // return first + ", " + second + ", " + third;
  // let response = "";

  // for (let i = 0; i < order.length; i++) {
  //   response += order[i] + ', ';
  // }

  const response = order.reduce((finalStr, item) => finalStr + item + ', ', '');

  return response.slice(0, response.length - 2);
}
