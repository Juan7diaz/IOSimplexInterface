import * as math from 'mathjs'

export function parseObjectiveFunction(str = "", type){
  const equation = str.trim()
  const equationParsed = math.parse(equation)

  const typeFormated = getFormatedType(type);
  const n_variables = getcantVariables(equationParsed);
  const operators = getOperators(equation)
  const coefficients = getCoefficients(equationParsed, operators)
  const obj_funct = JSON.stringify([typeFormated, coefficients]).replaceAll('[', '(').replaceAll(']', ')')

  return { n_variables, obj_funct };
}

export function parseRestrictions(restrictions = []) {
  const arrRestrictions = restrictions.map(restriction => {
    const res = separateEquation(restriction.trim())
    const rightPart = parseInt(res.expression[1].trim())
    const separator = res.separator
    const leftPart = res.expression[0].trim()
    const equationParsed = math.parse(leftPart)
    const coeffRightPart = coefficientsRightPart(equationParsed, leftPart)
    const allDataArr = [ coeffRightPart, separator, rightPart ]
    const arrToString = JSON.stringify(allDataArr).replaceAll('[', '(').replaceAll(']', ')')
    return arrToString
  })

  let str = ""
  const cantRestriction = arrRestrictions.length
  arrRestrictions.forEach((restrictions, i) => {
    if(i === cantRestriction - 1) return str += restrictions
    str += restrictions + ','
  })

  return '[' + str + ']'

}

const coefficientsRightPart = (equationParsed, leftPart) => {
  const coefficients = getCoefficients(equationParsed, getOperators(leftPart))
  let variables = equationParsed.filter(node => node.isSymbolNode).map(node => node.name);
  const subIvariables = variables.map(variable => variable.replaceAll('x', ''))
  const cantdVariables = Math.max(...subIvariables)

  let coefficientsFormated = []
  for(let i = 1; i <= cantdVariables; i++){
    if(variables.includes("x"+i)){
      const index = variables.indexOf("x"+i)
      coefficientsFormated.push(coefficients[index])
    }else{
      coefficientsFormated.push(0)
    }
  }

  return coefficientsFormated
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
  const matches = [">=","<=", "="].map(sig => str.includes(sig) && sig).filter(e => e!=false)[0]
  return matches || null
}

const separateEquation = (str) => {
  const separator = obtainSeparator(str)
  return separator ? {expression: str.split(separator), separator: separator} : null
}