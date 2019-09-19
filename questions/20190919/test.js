
/**
 * 插入排序
 * @param {Array} list 待排序数组
 */
function insertionSort (list) {
    const localList = list.splice(0);

    // 每次取出一个数据，和已排序的元素进行比较
    for (let i = 1; i < localList.length; i++) {
        let temp = localList[i];
        let j = i - 1;

        // 如果该元素大于待排序的元素
        while (localList[j] > temp) {

            // 则讲该元素移到靠后的位置
            localList[j + 1] = localList[j];
            j--;
        }

        // 将新元素插入到其在当前已排序元素中的位置
        localList[j + 1] = temp;
    }

    return localList;
}


// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(insertionSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

