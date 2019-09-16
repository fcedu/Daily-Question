
/**
 * 桶排序
 * @param {Array} list 待排序的数组
 * @param {Number} num 桶的个数
 */
function bucketSort(list, num = 1) {
    const max = Math.max(...list);
    const min = Math.min(...list);

    // 每个桶放置的数字的范围
    const bucketsSize = Math.ceil((max - min) / num) || 1;
    // 创建一个二维数组放置元素，一维为桶的索引，二维为桶
    const buckets = Array.from(Array(num)).map(() => Array().fill(0));

    for (let i = 0; i < list.length; i++) {

        // 计算元素应该放置在哪个桶
        let index = ~~((list[i] - min) / bucketsSize)
        index = index >= num ? num - 1 : index;
        buckets[index].push(list[i]);

        // 对桶内元素进行排序
        let j = buckets[index].length - 1;
        while (j >= 0) {
            if (buckets[index][j] < buckets[index][j - 1]) {
                [buckets[index][j], buckets[index][j - 1]] = [buckets[index][j - 1], buckets[index][j]];
            }
            j--;
        }
    }

    // 拼接所有桶的结果并返回
    return [].concat.apply([], buckets);
}

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(bucketSort(list, 4)); // [ 1, 2, 3, 7, 8, 9, 10 ]

