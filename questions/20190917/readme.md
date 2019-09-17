### 问题

给定下面的数组，请使用 [计数排序] (https://zh.wikipedia.org/wiki/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F) 算法使其按从小到大的顺序排列？

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

```

#### 时间复杂度
O(n + k)


#### 可视化链接
https://algorithm-visualizer.org/divide-and-conquer/bucket-sort


#### 测试链接
因为 leetcode 测试用例很多，所以在 leetcode 测试通过就行了:
https://leetcode-cn.com/problems/sort-an-array/