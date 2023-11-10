import * as math from 'mathjs'

export function parseObjectiveFunction(str = "", type){
  const equation = str.trim()
  const equationParsed = math.parse(equation)

  const typeFormated = getFormatedType(type);
  const n_variables = getcantVariables(equationParsed);
  const operators = getOperators(equation)
  const coefficients = getCoefficients(equationParsed, operators)
  const obj_func = obj_function_parse(typeFormated, coefficients)

  return { n_variables, obj_func };
}

const obj_function_parse = (type, coefficients) => {
  const arr = [type, coefficients]
  const arrJson = JSON.stringify(arr)
  return arrJson.replaceAll('[', '(').replaceAll(']', ')')
}

const restriction_parse = (separator) => {
  const arr = [separator]
  const arrJson = JSON.stringify(arr)
  return arrJson.replaceAll('[', '(').replaceAll(']', ')')
}

export function parseRestrictions(str = "") {
  const equation = str.trim()

  const {expression, separator}=separateEquation(equation)
  return expression[0]
  
}

const getFormatedType = (type) => type === 'maxZ' ? 'max' : 'min';

const getcantVariables = (equationParsed) => {
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

const obtainSeparator = (str) => {
  const matches = [">=","<=", ">", "<", "="].map(sig => str.includes(sig) && sig).filter(e => e!=false)[0]
  return matches || null
}

const separateEquation = (str) => {
  const separator = obtainSeparator(str)
  return separator ? {expression: str.split(separator), separator: separator} : null
}