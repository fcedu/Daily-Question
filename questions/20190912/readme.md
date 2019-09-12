### 问题

给定下面的数组，请使用[冒泡排序](https://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F)算法使其按从小到大的顺序排列？

```javascript
const list = [1, 7, 9, 8, 3, 2, 10];
```

...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔
...🤔


### 丰橙解答

```javascript


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


```

#### 时间复杂度
O(log n x n)


#### 可视化链接
https://algorithm-visualizer.org/brute-force/bubble-sort


#### 测试链接
因为 leetcode 测试用例很多，所以在 leetcode 测试通过就行了:
https://leetcode-cn.com/problems/sort-an-array/