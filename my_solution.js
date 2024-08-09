snail = function(arr) {
  let res = arr[0]; //Задаем переменную результата, содержащую первый элемент исходного массива
  arr.shift(); //Удаляем этот элемент
  for (let i = arr.length; i > 0; i--) {
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i][arr[i].length - 1]); //Добавляем в результирующий массив последний элемент каждого подмассива
      arr[i].pop(); //Удаляем этот элемент из исходного массива
    }
    if (arr.length == 0) { 
      break;
    }
    for (let i = arr.length - 1; i > -1; i--) {
      res.push(arr[arr.length - 1][i]); //Добавляем в результат элементы последнего подмассива, в обратном порядке
    }
    arr.pop(); //Удаляем последнюю строку
    if (arr.length == 0) {
      break;
    }
    for (let i = arr.length - 1; i > -1; i--) {
      res.push(arr[i][0]); //Добавляем первые элементы каждого подмассива, снизу вверх
      arr[i].shift(); //И удаляем их из исходного массива
    }
    if (arr.length == 0) {
      break;
    }
    for (let i = 0; i < arr[0].length; i++) {
      res.push(arr[0][i]); //Добавляем элементы первого подмассива (строки), по порядку
    }
    arr.shift(); //Удаляем первую строку
  }
  return res;
}
