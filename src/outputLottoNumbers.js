function outputLottoNumbers(purchaseAmount) {
    const purchaseCount = Math.floor(purchaseAmount / 1000);
  
    for (let i = 0; i < purchaseCount; i++) {
      const numbers = generateRandomNumbers();
      console.log(numbers);
    }
  }
  
  function generateRandomNumbers() {
    const numbers = [];
  
    while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
  
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
  
    return numbers.sort((a, b) => a - b);
  }
  
  export default outputLottoNumbers;
  