
/**
 * 冒泡排序
 * @param {Array} list 待排序数组
 */
function bubbleSort (list) {

    // 每次比较两个数字
    // 如果他们的顺序不是按从小到大排列就交换
    // 直到遍历完成
	for (let i = 0; i < list.length - 1; i++) {
		for (let j = 0; j < list.length - 1 - i; j++) {
			if (list[j] > list[j + 1]) {
				const temp = list[j];
				list[j] = list[j + 1];
				list[j + 1] = temp;
            }
        }
    }

	return list;
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(bubbleSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

