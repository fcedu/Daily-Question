
/**
 * 快速排序
 * @param {*} list 待排序数组
 */
function quickSort (list) {
    if (list.length < 2) { // 基线条件，当元素为空或一个时直接返回
        return list;
    } else {
        const pivot = list[0];
        
        let less = []; // 分区，所有最小的放在 less 里面
        let greater = []; // 分区，所有最大的放在 greater 里面

        for (let i = 1; i < list.length; i++) {
            const item = list[i];
            if (item <= pivot) {
                less.push(item);
            } else if (item > pivot) {
                greater.push(item);
            }
        }

        // 递归调用
        return quickSort(less).concat(pivot, quickSort(greater));
    }
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(quickSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

