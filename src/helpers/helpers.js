import * as math from 'mathjs'

export function parseObjectiveFunction(str = "", type){
  const equation = str.trim()
  const equationParsed = math.parse(equation)

  const typeFormated = getFormatedType(type);

  const operators = getOperators(equation)
  const coefficients = getCoefficients(equationParsed, operators)

  return {
    action: typeFormated,
    coefficients
  }
}

export function parseRestrictions(restrictions = []) {
  const restrictionsParsed = restrictions.map(restriction => [ restriction.coefficient, restriction.restriction, restriction.value ])
  return restrictionsParsed

}


const getFormatedType = (type) => type === 'maxZ' ? 'max' : 'min';

export const getcantVariables = (equationParsed) => {
  const arr_variables = equationParsed.filter(node => node.isSymbolNode).map(node => node.name);
  const cant_variables = arr_variables.length;
  return cant_variables;
}

const getCoefficients = (equationParsed, operators) => {
  let coefficients = equationParsed.filter(node => node.isConstantNode).map(node => node.value);
  coefficients = coefficients.map((coefficient, i) => operators[i] === '-' ? -coefficient : coefficient)
  return coefficients;
}

const getOperators = (equation) => {
  const operators = equation.split(/[\d\w]+/).filter(op => op !== '').map(op => op.trim());
  equation[0] !== '-' && operators.unshift('+')
  return operators;
}
