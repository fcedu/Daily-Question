
/**
 * 计数排序
 * @param {Array} list 待排序数组
 */
function countingSort (list) {
    // 取到最小值，后面处理负数情况
    const min = Math.abs(Math.min(...list));

    // 遍历数据，以数组的值为索引存入 countList
    const countList = [];
    list.forEach((item) => {
        // 对所有的数据执行加上 min 的操作，使得负数情况也支持
        const countIndex = item + min;
        countList[countIndex] >= 1 ? countList[countIndex]++ : (countList[countIndex] = 1)
    });

    // 对结果进行拼接
    return countList.reduce((rs, count, index) => {
        let result = rs;
        if (count >= 1) {
            // 对值进行减 min 操作恢复其原始值，出现几次便构造几个
            result = result.concat(new Array(count).fill(index - min));
        }
        return result;
    }, []);
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(countingSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

