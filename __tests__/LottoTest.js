import getWinningNumbers from './getWinningNumbers.js';

describe('getWinningNumbers 테스트', () => {
  test('오류 없는 입력', async () => {
    const originalReadLineAsync = global.Console.readLineAsync;
    global.Console.readLineAsync = jest.fn().mockResolvedValue('1,2,3,4,5,6');

    const winningNumbers = await getWinningNumbers();

    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);

    global.Console.readLineAsync = originalReadLineAsync;
  });

  test('숫자가 6개가 아닐 경우 예외를 던져야 함', async () => {
    const originalReadLineAsync = global.Console.readLineAsync;
    global.Console.readLineAsync = jest.fn().mockResolvedValue('1,2,3,4,5');

    try {
      await getWinningNumbers();
    } catch (error) {
      expect(error.message).toBe('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    global.Console.readLineAsync = originalReadLineAsync;
  });

  test('중복된 숫자가 있을 경우 예외를 던져야 한다', async () => {
    const originalReadLineAsync = global.Console.readLineAsync;
    global.Console.readLineAsync = jest.fn().mockResolvedValue('1,2,3,4,5,5');

    try {
      await getWinningNumbers();
    } catch (error) {
      expect(error.message).toBe('[ERROR] 로또 번호는 중복되지 않아야 한다');
    }

    global.Console.readLineAsync = originalReadLineAsync;
  });

  test('숫자가 1부터 45 범위를 벗어날 경우 예외를 던져야 한다', async () => {
    const originalReadLineAsync = global.Console.readLineAsync;
    global.Console.readLineAsync = jest.fn().mockResolvedValue('1,2,3,4,5,60'); // 60은 1부터 45 범위를 벗어남

    try {
      await getWinningNumbers();
    } catch (error) {
      expect(error.message).toBe('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 한다 (잘못된 번호: 60)');
    }

    global.Console.readLineAsync = originalReadLineAsync;
  });

  test('숫자가 정수가 아닐 경우 예외를 던져야 한다', async () => {
    const originalReadLineAsync = global.Console.readLineAsync;
    global.Console.readLineAsync = jest.fn().mockResolvedValue('1,2,3,4.5,5,6'); // 4.5는 정수가 아님

    try {
      await getWinningNumbers();
    } catch (error) {
      expect(error.message).toBe('[ERROR] 로또 번호는 정수여야 한다 (잘못된 번호: 4.5)');
    }

    global.Console.readLineAsync = originalReadLineAsync;
  });
});

