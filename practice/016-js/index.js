// var sp = 190;

// if(sp < 186) {
//     alert('no');
// } else if(sp > 189) {
//     alert('nono');
// } else if(sp > 187) {
//     alert('mememe');
// } else if(sp == 186) {
//     console.log('liantong');
// }

// ======选中HTML中ID为age的元素==========
// var agee = document.querySelector('#age');

// ======当该元素发生改变时执行下面的函数======
// agee.addEventListener('change',function () {

// =======取到input中的值=============
// var age = agee.value;
// =======字符串转换为数值===========
//     age = parseInt(age);


//     if (!age) {
//         console.log('nonono');
//     }   else {
//         console.log('yeyeye');
//     }
// });

// var namea = document.querySelector('#name');

// namea.addEventListener('change',function() {
//     var name = namea.value.trim()
//     if (!name) {
//         console.log('请输入姓名');
//     }   else {
//         console.log(name + '，欢迎');
//     }
// })

var phonea = document.querySelector('#phone');
phonea.addEventListener('change', function () {
    var phone = phonea.value.trim();
    phone = parseInt(phone);

    if (!phone) {
        console.log('不对');
    }  else if (phone[0] !== 1) {
        console.log('手机号不对');
    } else if (phone.length !==11)
);

// var namea = document.querySelector('#name');
// namea.addEventListener('change', function() {
//     var name = namea.value.trim();

//     if (!name) {
//         console.log('请输入姓名')
//     } else {
//         console.log(name + '，你好')
//     }
// });

// var namea = document.querySelector('#name');
// namea.addEventListener('change', function () {
//     var name = namea.value.trim();
//     switch (name) {
//         case 'ls':
//             console.log('me');
//             break;
//         case 'dt':
//             console.log('sb')
//             break;
//         case 'aa':
//             console.log('nima')
//         case 'bb':
//             console.log('gdz')
//             break;
//     }
// });