### 问题

给定下面的数组，请使用快速排序算法使其按从小到大的顺序排列？

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
 * 快速排序
 * @param {*} list 待排序数组
 */
function quickSort (list) {
    if (list.length < 2) { // 基线条件，当元素为空或一个时直接返回
        return list;
    } else {
        const pivot = list[0];
        
        let less = [];     // 对数据进行分区，所有小于 pivot 的放在 less 里面
        let greater = [];  // 所有大于 pivot 的放在 greater 里面

        for (let i = 1; i < list.length; i++) {
            const item = list[i];
            if (item <= pivot) {
                less.push(item);
            } else if (item > pivot) {
                greater.push(item);
            }
        }

        // 递归调用
        // 对两边分区再次分解
        return quickSort(less).concat(pivot, quickSort(greater));
    }
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(quickSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]



```

#### 时间复杂度
O(n log n)


#### 可视化链接
https://algorithm-visualizer.org/divide-and-conquer/quicksort


#### 测试链接
因为 leetcode 测试用例很多，所以在 leetcode 测试通过就行了:
https://leetcode-cn.com/problems/sort-an-array/


#### 扩展阅读
快速排序使用了分治的思想，参考文档: https://zh.wikipedia.org/wiki/分治法。
这种把问题缩小的思想起源于 欧几里得 算法，参考文档：https://zh.wikipedia.org/wiki/%E8%BC%BE%E8%BD%89%E7%9B%B8%E9%99%A4%E6%B3%95。