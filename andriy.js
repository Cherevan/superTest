const a = 10;
let b = 'Vsi hui:';
const obj = {
  ten: 100,
};
const arr = ['one', 2, 'hui', 56, obj.ten];
console.log(arr[4]);

arr.forEach(element => {
  console.log(element);
});

// console.log(typeof obj);
// console.log(`Ten: ${a}, Object: ${obj}`);
