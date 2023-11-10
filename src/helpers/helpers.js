import * as math from 'mathjs'


export function parseObjectiveFunction(str, type){
  const equation = str
  const parsed = math.parse(str)

  const variables = parsed.filter(node => node.isSymbolNode).map(node => node.name);
  const coefficients = parsed.filter(node => node.isConstantNode).map(node => node.value);
  const operators = str.split(/[\d\w]+/).filter(op => op !== '');

  return {
    type,
    equation,
    variables,
    coefficients,
    operators
  };

}