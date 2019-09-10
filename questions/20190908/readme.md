### 问题

给定下面的数组，请使用[二分查找](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95)算法查找出 5 的索引？

```javascript
const list = [1, 2, 3, 4, 5]
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
 * 二分查找
 * @param {Array} list  待查找的有序数组
 * @param {Number} item 待查找的数据
 */
function binarySearch (list, item) {
    let low = 0;                 // 记录查找部分的起始位置
    let high = list.length - 1;  // 记录查找部分的结束位置

    // 只要查找部分还有元素
    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // 查找部分中间元素的索引
        const guess = list[mid];                  // 猜测的值

        // 找到了待查找的元素
        if (guess === item) {
            return mid;
        }

        // 如果猜测的值大了，则继续查找开始位置到中间位置减 1的部分
        if (guess > item) {
            high = mid - 1;
        // 如果猜测的值小了，则继续查找中间位置加 1 的部分到结束位置的部分
        } else {
            low = mid + 1;
        }
    }

    // 没有找到
    return -1;
}

// test
const list = [1, 2, 3, 4, 5];
console.log(binarySearch(list, 5)); // 4
console.log(binarySearch(list, 6)); // -1


```

#### 时间复杂度

O(log n)

#### 可视化链接
https://algorithm-visualizer.org/branch-and-bound/binary-search

#### 测试链接
因为 leetcode 测试用例很多，所以在 leetcode 测试通过就行了:
https://leetcode-cn.com/problems/binary-search/solution/
