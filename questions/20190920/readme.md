### 问题

给定下面的数组，请使用 [希尔排序](https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F) 算法使其按从小到大的顺序排列？

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
 * 插入排序
 * @param {Array} list 待排序数组
 */
function insertionSort (list) {
    const localList = list.splice(0);

    // 每次取出一个数据，和已排序的元素进行比较
    for (let i = 1; i < localList.length; i++) {
        let temp = localList[i];
        let j = i - 1;

        // 对已排序元素从后往前逐个取出
        // 如果取出的元素大于新元素
        while (localList[j] > temp) {

            // 则将取出的元素移到靠后的位置
            localList[j + 1] = localList[j];
            j--;
        }

        // 将新元素插入到其在当前已排序元素中
        // j + 1 位置就是对已排序元素比较完成之后确定的位置
        localList[j + 1] = temp;
    }

    return localList;
}


// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(insertionSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]


```

#### 时间复杂度
O(n x n)


#### 可视化链接
https://algorithm-visualizer.org/brute-force/shellsort


#### 测试链接
因为 leetcode 测试用例很多，所以在 leetcode 测试通过就行了:
https://leetcode-cn.com/problems/sort-an-array/