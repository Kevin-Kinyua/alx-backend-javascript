function calculateNumber(type, a, b) {
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);
    
    if (type === 'SUM') {
      return rounded_a + rounded_b;
    }
    if (type === 'SUBTRACT') {
      return rounded_a - rounded_b;
    }
    if (type === 'DIVIDE') {
      if (rounded_b === 0) {
        return 'Error';
      }
      return rounded_a / rounded_b;
    }
  }
  
  module.exports = calculateNumber;

  //SWITCH CASE

// function calculateNumber(type, a, b) {
//   const roundedA = Math.round(a);
//   const roundedB = Math.round(b);

//   switch (type) {
//     case 'SUM':
//       return roundedA + roundedB;
//     case 'SUBTRACT':
//       return roundedA - roundedB;
//     case 'DIVIDE':
//       if (roundedB === 0) {
//         return 'Error';
//       }
//       return roundedA / roundedB;
//     default:
//       throw new Error('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
//   }
// }

// module.exports = calculateNumber;