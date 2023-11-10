import * as math from 'mathjs'


export function parseObjectiveFunction(str = "", type){
  const equation = str.trim()

  const parsed = math.parse(equation)

  const variables = parsed.filter(node => node.isSymbolNode).map(node => node.name);

  let coefficients = parsed.filter(node => node.isConstantNode).map(node => node.value);

  const operators = equation.split(/[\d\w]+/).filter(op => op !== '').map(op => op.trim());

  equation[0] !== '-' && operators.unshift('+')

  coefficients = coefficients.map((coefficient, i) => operators[i] === '-' ? -coefficient : coefficient)

  return {
    type,
    equation,
    variables,
    coefficients,
    operators
  };

}