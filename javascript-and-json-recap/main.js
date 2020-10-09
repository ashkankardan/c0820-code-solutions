const booksArr = [
  {
    isbn: '11211223448',
    title: 'The Good Book',
    author: 'The Guy'
  },
  {
    isbn: '20048679949',
    title: 'The Better Book',
    author: 'The Better Guy'
  },
  {
    isbn: '11211223448',
    title: 'The Great Book',
    author: 'The Great Guy'
  }
];

console.log(typeof booksArr, booksArr);

const booksStr = JSON.stringify(booksArr);
console.log(typeof booksStr, booksStr);

const studentStr = '{ "id": 24844494, "name": "jeff" }';
console.log(typeof studentStr, studentStr);

const studentObj = JSON.parse(studentStr);
console.log(typeof studentObj, studentObj);
