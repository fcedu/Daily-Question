/**
 * 希尔排序
 * @param {Array} list 
 */
function shellSort (list) {

    // 简单的使用 希尔增量 作为增量序列
    for (let gap = list.length >> 1; gap > 0; gap >>= 1) {

        // 使用 gap 对数据进行分组
        // 对组内数据进行排序
        // 当 gap 回归到 1 时，其实就是 插入排序了，完成插入排序也就完成整个排序操作
        for (let i = gap; i < list.length; i++) {
            let temp = list[i];
            let j;
            for (j = i - gap; j >= 0 && list[j] > temp; j -= gap) {
                list[j + gap] = list[j];
            }
            list[j + gap] = temp;
        }
    }

    return list;
}


// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(shellSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

