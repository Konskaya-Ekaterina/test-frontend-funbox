export default function changeWordForm(num, endings, cases = [2, 0, 1, 1, 1, 2]) {
  return endings[
      num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
      ];
}
