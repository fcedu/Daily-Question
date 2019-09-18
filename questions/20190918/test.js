
/**
 * 基数排序(未考虑负数情况)
 * @param {Array}} list 待排序数组
 */
function radixSort (list) {
    let result = list.slice(0);
    const max = Math.max(...list);

    let digit = `${max}`.length; // 计算待排序数组中最大数的位数
    let start = 1;
    let buckets = [];

    while (digit > 0) {

        // 对待排序数据依次求余数，以 start 作为除数，每次循环对其增大十倍
        // 以余数为索引插入 buckets 中，达到相同位数的数字排序的效果
        // 每次循环因为余数的扩大，达到不同位数的数字排序的效果
        start *= 10;
        for (let i = 0; i < result.length; i++) {
            const index = result[i] % start;
            !buckets[index] && (buckets[index] = []);
            buckets[index].push(result[i]);
        }
        result = [];

        // 对每次排序结果进行合并
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] && (result = result.concat(buckets[i]));
        }
        buckets = [];
        
        digit --;
    }
    return result;
} 

// test
const list = [1, 7, 9, 8, 3, 2, 10];
console.log(radixSort(list)); // [ 1, 2, 3, 7, 8, 9, 10 ]

