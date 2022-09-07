// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  let numberDetector = ''
  if (number % 2 === 0) {
    numberDetector = 'Even'
  } else {
    numberDetector = 'Odd'
  }
  return numberDetector
}
