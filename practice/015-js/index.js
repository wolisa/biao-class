// // alert ('电脑将在5s后关闭')

// var arr = [1, 2, 3];

// arr = ['a', 'b', 'c'];

// console.log(arr[2]);

// var a = [
//     'ls',
//     'sl',
// ]

// var ccc = {
//     name: 'ls',
//     home: 'china',
// }

// console.log(ccc.);

// var a = {
//     a1: [
//       'a', 'b', { v: 666 }
//     ]
//   }

//   var b = [
//     1, 3, 'a', {
//       b2: {
//         a: 1,
//         v: 7,
//         c: [{
//           z: 666
//         }]
//       }
//     }
//   ]

  
//   var c = {
//     a: {
//       u: 1,
//       d: {
//         o: {
//           z: { 1: 2, y: [1, 2] }
//         },
//         p: {
//           yo: [3, 5, 666]
//         }
//       }
//     }
//   }
  
//   var d = [
//     [1, 3, 'abc'],
//     [
//       'muhaha',
//       { d: 1, v: ['a', 'b', { z: 666 }] }
//     ]
//   ]
  
//   var e = {
//     a: [3, {
//       b: 1,
//       v: [1, 3, {
//         p: 666
//       }]
//     }, 9]
//   }


  /* 打印出“我叫王花花，我今年18岁了” */

// var person = {
//     name: '王花花',
//     age: 18,
//   }
  
//   var a = '我叫' + person.name + '，我今年' + person.age + '岁了';
//   console.log(a);
  
  /* 打印出“我叫李拴蛋，我老婆叫王花花，今年18岁了” */
  
  var person = {
    name: '李拴蛋',
    wife: {
      name: '王花花',
      age: 18
    }
  }
  
  var b = '我叫' + person.name + '，我老婆叫' + person.wife.name + '，今年' + person.wife.age + '岁了。';
  console.log(b);
//   /* 打印出“我叫李拴蛋，我老婆一共有1200块” */
  
//    person = {
//     name: '李拴蛋',
//     wife: {
//       name: '王花花',
//       age: 18,
//       huabei: 1000,
//       balance: 1200
//     },
//   }

//   var c ='我叫' + person.name + '，我老婆一共有' + person.wife.balance +'块。';
  
//   /* 打印出“我叫李拴蛋，我丈人有3个朋友” */
  
//    person = {
//     name: '李拴蛋',
//     wife: {
//       name: '王花花',
//       dad: {
//         friends: ['王一','王二','李三']
//       }
//     },
//   }

//   var d = '我叫' + person.name + ',我丈人有' + person.wife.dad.froends + '个朋友';
  
//   /* 打印出“我叫李拴蛋，我丈人的第一个朋友叫王一，第三个朋友叫李三” */
  
//    person = {
//     name: '李拴蛋',
//     wife: {
//       name: '王花花',
//       dad: {
//         friends: [{
//           name: '王一',
//           children: 1,
//           averageScore: 44
//         }, {
//           name: '王二',
//           children: 3,
//           averageScore: 98        
//         } ,{
//           name:'李三',
//           children: 5,
//           averageScore: 87        
//         }]
//       }
//     },
//   }
//   var e = '我叫' + person.name + '，我丈人的第一个朋友叫' + person.wife.dad.friends[0].name + '，第三个朋友叫' + person.wife.dad.friense[2].name;
//   /* 打印出“我叫李拴蛋，我丈人朋友们的孩子们的平均分是85.888888888” */
  
//    person = {
//     name: '李拴蛋',
//     wife: {
//       name: '王花花',
//       dad: {
//         friends: [{
//           name: '王一',
//           children: 1,
//           averageScore: 44
//         }, {
//           name: '王二',
//           children: 3,
//           averageScore: 98        
//         } ,{
//           name:'李三',
//           children: 5,
//           averageScore: 87        
//         }]
//       }
//     },
//   }
  
// //   var f = '我叫' + person.name + ;


//  console.log(b)