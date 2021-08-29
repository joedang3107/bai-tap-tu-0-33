// Bài tập 21-33

// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// let total = numbers.reduce(function(acc, current) {
//     return acc += current
// }, 0)
// console.log(total);

// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// let maxNumber = Math.max.apply(Math, numbers)
// console.log(maxNumber);

// tìm số lớn nhất, nhỏ nhất
// max = -Infinity, min = +Infinity;
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }

// }
// console.log(max);
// console.log(min);
// console.log(numbers.length);

// tìm số trung bình của mảng

// let total = numbers.reduce(function (acc, current) {
//   return (acc += current);
// }, 0);
// let average = total / numbers.length;
// console.log(average);

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 9

// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 10];

// let counts = {};

// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   counts[num] = counts[num] ? counts[num] +1 : 1;
// }
// console.log(counts);
// // lấy ra các số
// console.log(Object.keys(counts));
// // log ra số lần xuất hiện
// console.log(counts[2], counts[3], counts[4], counts[5], counts[6], counts[7], counts[8], counts[9], counts[10]);

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

// let numbers = [1, 2, 3, 2, 3, 4, 6, 7, 11, 13, 17];

// let findPrimes = numbers.filter(prime);
// console.log(findPrimes);

// function prime(number) {
//   let check = true;
//   if (number == 1) {
//     check = false;
//   }
//   if (number == 2) {
//     check = true;
//   }
//   for (let index = 2; index < number; index++) {
//     if (number % index == 0) {
//       check = false;
//     }
//   }
//   if (check == true) {
//     return number;
//   }
// }

// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]

// let numbers = [1, 2, 3, 2, 3, 4, 6, 7];

// let powerNumbers = numbers.map(function (number) {
//     return number * number
// })
// console.log(powerNumbers);

// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần tử có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]

// var numbers = [4, 7, 9, 15, 6, 2],
//   k = 8;

// var closest = numbers.reduce(function(prev, curr) {
//     if (Math.abs(curr - k) < Math.abs(prev - k)) {
//         return curr
//     }
//     else if (Math.abs(curr - k) == Math.abs(prev - k)) {
//         return [prev, curr]
//     }
//     else {
//         return prev
//     }
// });

// console.log(closest);

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.

let students = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Thuy",
  },
  {
    id: "T3HXX2",
    firstName: "HA",
    lastName: "Do Thi Thu",
  },
  {
    id: "T3HXX5",
    firstName: "MInh",
    lastName: "NguyEn NhAt",
  },
];

// Output: [ {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     }]

// sửa firstName thành chuẩn với ký tự đầu viết hoa và sau viết thường
function capitalizeFirstLetter(students) {
  students.charAt(0).toUpperCase() + students.slice(1).toLowerCase()
} 

let fixNames = students.map((student) => {
    student.firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1).toLowerCase()
    student.lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1).toLowerCase()
    return student
})
console.log(fixNames);

let nameHasLetterA = fixNames.filter((student) => {
  if (student.firstName.includes('a') || student.firstName.includes('A') && student.firstName.length > 3) {
      return student
  }
})
console.log(nameHasLetterA);

// sửa lastname về chuẩn với ký tự đầu viết hoa và sau viết thường

// let splitStrs = students.map(function (student) {
//     return student.lastName.toLowerCase().split(' ')
// })

// // console.log(splitStrs);

// let adjustLastNames = splitStrs.map(function (splitStr) {
//     // console.log(splitStr);
//     for (var i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
//     }
//     return splitStr.join(' ')
// })
// console.log(adjustLastNames);


// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.

// students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]

// Output: [{
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//  }]

// Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.

// let lastNameDo = students.filter((student) => {
//     if (student.lastName.includes('Do') || student.lastName.includes('DO')) {
//         return student
//     }
// })

// console.log(lastNameDo);

// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).

// let students = [
//   {
//     id: "T3HXX1",
//     firstName: "Ngan",
//     lastName: "Duong Thuy",
//   },
//   {
//     id: "T3HXX2",
//     firstName: "Ha",
//     lastName: "Do Thi Thu",
//   },
//   {
//     id: "T3HXX5",
//     firstName: "Minh",
//     lastName: "Nguyen Nhat",
//   },
// ];

// // Output: students = [
// //     {
// //         id: "T3HXX2",
// //         firstName: "Ha",
// //         lastName: "Do Thi Thu"
// //     },
// //     {
// //         id: "T3HXX5",
// //         firstName: "Minh",
// //         lastName: "Nguyen Nhat"
// //     },
// //     {
// //         id: "T3HXX1",
// //         firstName: "Ngan",
// //         lastName: "Duong Thuy"
// //     }
// // ]

// let arrangeNames = students.sort((a, b) => {
//   let nameA = a.firstName.toLowerCase();
//   let nameB = b.firstName.toLowerCase();
//   if (nameA > nameB) {
//     return 1;
//   }
//   if (nameA < nameB) {
//     return -1;
//   }
//   else {
//       return 0;
//   }
// });
// console.log(arrangeNames);

// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], output: -1

// let numbers = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];

// function print2largest(numbers, arr_size) {

//   // There should be atleast two elements
//   if (arr_size < 2) {
//     console.log(" Invalid Input ");
//     return;
//   }

//   // sort the array
//   numbers.sort();

//   // start from second last element
//   // as the largest element is at last
//   for (i = arr_size - 2; i >= 0; i--) {
//     // if the element is not
//     // equal to largest element
//     if (numbers[i] != numbers[arr_size - 1]) {
//       console.log("The second largest number is " + numbers[i]);
//       return;
//     }
//   }
//   console.log("There is no second largest number");
// }

// let n = numbers.length;
// print2largest(numbers, n);

// 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let sum = 26;

// function find3Numbers(numbers, arr_size, sum)
// {
// 	// Fix the first element as A[i]
// 	for (let i = 0; i < arr_size - 2; i++)
// 	{

// 		// Fix the second element as A[j]
// 		for (let j = i + 1; j < arr_size - 1 ; j++)
// 		{

// 			// Now look for the third number
// 			for (let k = j + 1; k < arr_size; k++)
// 			{

// 				if (numbers[i] + numbers[j] + numbers[k] == sum)
// 				{
// 					console.log("Triplet is " + numbers[i] +
// 						", " + numbers[j] + ", " + numbers[k]);
//                         // debugger
// 					return true;
// 				}
// 			}
// 		}
// 	}
//     console.log('NO');
// 	// If we reach here, then no triplet was found
// 	return false;
// }

// 	let arr_size = numbers.length;
// 	find3Numbers(numbers, arr_size, sum);

// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]

// let numbers = [1, 3, 6, 9, 11, 20];
// let k = 13;

// numbers.push(k)
// let sortNumbers = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(sortNumbers);

// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]

// let numbers = [31, 3, 15, 6, 9, 26, 20];

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i ++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1]; // hoán đổi vị trí
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// bubbleSort(numbers);
// console.log(numbers);

// Phần Strings, Functions (Chú ý: 11 - 17 đưa tất cả chức năng vào hàm(function))

// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3

// let myString = " Hello  world";

// function blankSpace(string) {
//   let a = string.match(/ /g);
//   console.log(a.length);
// }
// blankSpace(myString)

// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”

// let myString = '	Hello world   '

// function removeSpace (string) {
//   a = string.replace(/ /gi,'')
//   b = a.trim()
//   console.log(b);
// }
// removeSpace(myString)

// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”

// let myString = "This is a beautiful day";

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   console.log(newString);
// }
// reverseString(myString);

// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2

// let s1 = "This is a beautiful day";
// let s2 = "is";

// let splitStr = s1.split(" ");
// function findPosition() {
//   if (splitStr.includes(s2)) {
//     a = splitStr.indexOf(s2);
//     console.log(a);
//   }
// }
// findPosition()

// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”

// let myName = 'NguyeN THI tho tHu hA'
// let splitStr = myName.split(' ')
// function standardized() {
//   for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase()

//   }
//   let a = splitStr.join(' ')
//   console.log(a);
// }
// standardized()
// 16. Viết chương trình lấy  id name của fb.
// VD: “https://www.facebook.com/ngothucdat”, output: “ngothucdat”

// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7

// let arr = [2, 15, 4, 19, 9, 11];

// function findMax(arr) {
//   if (arr.length === 0) {
//     return -1;
//   }

//   let max = arr[0];
//   let maxIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       maxIndex = i;
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }

// findMax(arr);

// 18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
// VD1:  s1: “This is a beautiful day, is it?”, s2: “is”
// 	findPosition(s2, s1) => 5
// VD2:  s1: “This is a beautiful day, is it?”, s2: “isa”
// 	findPosition(s2, s1) => -1
// VD2:  s1: “hi hi hi hi hi”, s2: “hi”
// 	findPosition(s2, s1) => 9

// let myString = "This is a beautiful day, is it?";
// let myString2 = "is";
// let splitStr = myString.split(" ");
// let arr_size = splitStr.length;

// function findPosition(splitStr) {

//   for (let i = 0; i < arr_size; i++) {
//     if (splitStr[i] == myString2 && i == arr_size - 2) {
//       console.log(i);
//     }
//   }

// }
// findPosition(splitStr);

// 19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
// VD: total(9) => output: 45

// function sum(n) {
//   if (n < 1) {
//     return 0;
//   } else {
//     return n + sum(n - 1)
//   }
// }

// console.log(sum(9));
// 20. [Ignore] Viết 1 hàm chuẩn hóa so sánh của một string, và trả về Xâu chuẩn. Xâu chuẩn là sâu không tồn tại các dấu cách(space) và tab and enter trong value(value là giá trị trong "{value}")
// VD: `computer =            " ngan 98    " AND class = "  REACTJS2002 "`
// Output: `computer = "ngan 98" AND class = "REACTJS2002"`
