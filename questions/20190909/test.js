
/**
 * 查找列表最小值索引
 * @param {Array} list 待查找的列表
 */
function findSmallest (list) {
    let smallest = list[0];
    let smallestIndex = 0;

    // 遍历查找，根据判断情况不断更新最小值及其索引
    for (let i = 0; i < list.length; i++) {
        if (list[i] < smallest) {
            smallest = list[i];
            smallestIndex = i;
        }
    }

    // 最后返回当前查找列表的最小值的索引
    return smallestIndex;
}

/**
 * 选择排序算法（升序）
 * @param {Array} list 待排序的列表
 */
function selectionSort (list) {
    let newList = [];

    // 每次遍历找出其中的最小值的索引从待排序列表中删除，并塞到新的列表
    // 遍历完成新的列表便是从小到大排序好的列表
    for (let i = list.length - 1; i >= 0; i--) {
        const smallestIndex = findSmallest(list);
        newList.push(list.splice(smallestIndex, 1)[0])
    }

    return newList;
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(selectionSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

const listTwo = [2, 3, 1, 1, 1, 1, 1];
console.log(selectionSort(listTwo)); // [ 1, 1, 1, 1, 1, 2, 3 ]