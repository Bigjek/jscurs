/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++){
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var arr = [];
    for (var i = 0; i < array.length; i++){
        arr.push(fn(array[i], i, array));
    }
    return arr;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var result, count = 0;
    (initial) ? result = initial : result = array[0];
    if(!initial) count = 1;
    for (var i=count; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }
    return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var arr = [];
    for(var prop in obj){
        arr.push(prop);
    }
    return arr;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var arr = [];
    for(var prop in obj){
        arr.push(prop.toUpperCase());
    }
    return arr;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var arr = [], arrLength = array.length, fromStart = from || 0, toEnd = (to || to === 0) ? to : arrLength;
    if (fromStart > 0) {
        fromStart = fromStart;
    }else {
        fromStart = (arrLength + from) > 0 ? fromStart : 0;
    }
    if (toEnd < 0) {
        toEnd = arrLength + to ;
    }
    if (toEnd > arrLength) {
        toEnd = arrLength;
    }
    for (var i = fromStart; i < toEnd; i++) {
        arr.push(array[i]);
    }
    return arr;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        get(target, prop){
            return target[prop]*target[prop];
        }
    });
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
