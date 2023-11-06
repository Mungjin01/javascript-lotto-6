class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }

    for (const number of numbers) {
      if (typeof number !== 'number' || number < 1 || number > 45) {
        throw new Error(`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다. (잘못된 번호: ${number})`);
      }

      if (number % 1 !== 0) {
        throw new Error(`[ERROR] 로또 번호는 정수여야 합니다. (잘못된 번호: ${number})`);
      }
    }
  }

  #sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

try {
  const validLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  console.log(validLotto); 
} catch (error) {
  console.error(error.message);
}

try {
  const invalidLotto1 = new Lotto([1, 2, 3, 4, 5]); 
} catch (error) {
  console.error(error.message);
}

try {
  const invalidLotto2 = new Lotto([1, 2, 3, 4, 5, 60]); 
} catch (error) {
  console.error(error.message);
}

try {
  const invalidLotto3 = new Lotto([1, 2, 3, 4, 5, 1.5]); 
} catch (error) {
  console.error(error.message);
}

try {
  const invalidLotto4 = new Lotto([1, 2, 3, 4, 5, 5]); 
} catch (error) {
  console.error(error.message);
}

export default Lotto;
