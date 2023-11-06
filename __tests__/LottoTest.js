import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  describe('로또 클래스 예외 처리 테스트', () => {
    test('올바른 로또 번호로 인스턴스 생성', () => {
      const validLotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(validLotto).toBeInstanceOf(Lotto);
    });
  
    test('6개의 숫자가 아닌 경우 예외 발생', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5]);
      }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
    });
  
    test('1부터 45 범위의 숫자가 아닌 경우 예외 발생', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 70]);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다. (잘못된 번호: 70)');
    });
  
    test('소수가 포함된 경우 예외 발생', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 1.7]);
      }).toThrow('[ERROR] 로또 번호는 정수여야 합니다. (잘못된 번호: 1.7)');
    });
  
    test('중복된 숫자가 포함된 경우 예외 발생', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    });
  });

  describe('로또 클래스 오름차순 정렬 테스트', () => {
    test('로또 번호가 오름차순으로 정렬되어야 한다', () => {
      const lotto = new Lotto([5, 3, 6, 4, 1, 2]);
      expect(lotto.getNumbers()).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
