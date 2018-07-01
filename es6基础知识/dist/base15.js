'use strict';

/**
 * Promise 英文意思是承诺，可以理解为程序承诺某个异步操作后要执行某个任务
 * 它是异步操作的一种解决方案，解决了es5中出现的回调地狱的问题
 */
function dosomething(str) {
    return new Promise(function (resolve, reject) {
        var delay = void 0;
        if (str === '吃饭') {
            delay = 2000;
        } else if (str === '睡觉') {
            delay = 5000;
        } else {
            return reject(new Error('失败参数'));
        }
        setTimeout(function () {
            console.log(str + '\u9700\u8981' + delay + '\u6BEB\u79D2');
            resolve('成功参数');
        }, delay);
    });
}
/*
dosomething('吃饭')
.then(res => {
    console.log(res)//2秒后输出  吃饭需要2000毫秒 成功参数
})
.catch(error => {
    console.log(error) //因为参数是吃饭，promise的状态不会变为rejeted，不会执行这里
})
*/

dosomething('其他事').then(function (res) {
    console.log(res); //2秒后输出  吃饭需要2000毫秒 成功参数
}).catch(function (error) {
    console.log(error); //因为参数是吃饭，promise的状态不会变为rejeted，不会执行这里
});
