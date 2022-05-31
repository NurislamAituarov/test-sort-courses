// Создам функцию, которая принимает в качестве аргумента массив цен диапазон,
// внутри функций буду пробегаться по массиву всех курсов через метод filter и при каждой итерации
// проверять входит ли эти данные в интервал цен курса если проходят через условия возвращать этот элемент.
// Когда user не ввел диапазон цен я это учел что это бесконечность,
//  например { name: "Courses in Germany", prices: [500, null] } от 500 до бесконечности

let courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function selectCourses(range) {
  const filterArr = courses.filter((el) => {
    let price0 = el.prices[0] === null ? -Infinity : el.prices[0];
    let price1 = el.prices[1] === null ? Infinity : el.prices[1];

    if (
      range[0] !== null &&
      range[1] !== null &&
      range[1] >= price0 &&
      (range[0] <= price1 || range[1] <= price1)
    ) {
      return el;
    }
    if (range[0] === null && range[1] >= price0) {
      return el;
    }
    if (range[1] === null && (range[0] <= price1 || range[0] <= price1)) {
      return el;
    }
  });
  return filterArr.map((el) => el.name);
}

console.log(selectCourses(requiredRange1));
console.log(selectCourses(requiredRange2));
console.log(selectCourses(requiredRange3));

// Сортировка
function sortedCourses(courses) {
  return courses.sort((a, b) => {
    if (a.prices[0] === null && a.prices[1] === null) {
      return -1;
    }
    if (b.prices[0] === null) {
      return a.prices[0] - b.prices[1];
    }
    if (a.prices[0] === null) {
      return a.prices[1] - b.prices[0];
    }
    if (a.prices[0] !== null || b.prices[0] !== null) {
      return a.prices[0] - b.prices[0];
    }
  });
}

console.log(sortedCourses(courses));
