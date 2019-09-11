
/**
 *  合并函数
 * @param {Array} left 
 * @param {Array} right 
 */
function merge (left, right) { 
    const result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}

/**
 * 归并排序
 * @param {Array} list 待排序列表
 */
function mergeSort (list) {
    if (list.length <= 1) return list;

    // 对数组进行分组
    // 递归调用会一直对数据分组下去，直到每个组只有一个元素
    // 然后调用  merge 一步一步的进行两两合并操作，达到归并排序的效果
    const middle = Math.floor(list.length / 2);
    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(mergeSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

