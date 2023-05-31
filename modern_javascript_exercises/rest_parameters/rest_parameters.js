// Instructions can be found in rest_parameters.md

export function add(...args) {
  return args.reduce((sum, arg) => sum + arg, 0);
}

// add(1, 2, 3, 4, 5);

// module.exports = add;
