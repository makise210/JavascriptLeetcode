/*2619. Array Prototype Last*/
/*
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
*/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
//為陣列原型添加一個擴充方法
Array.prototype.last = function() {
    if(this.length == 0){return -1;}
  //如果數組中沒有元素，則應返回 -1
    return this[this.length-1]
  //預設返回最後一個元素 

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
