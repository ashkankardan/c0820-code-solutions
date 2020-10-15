const name = document.querySelector('#name');
const course = document.querySelector('#course');
const grade = document.querySelector('#grade');
const btn = document.querySelector('#btn');

const submitForm = evt => {
  evt.preventDefault();
  const studentData = JSON.stringify({
    name: name.value,
    course: course.value,
    grade: grade.value
  });
  // eslint-disable-next-line no-undef
  $.ajax({
    contentType: 'application/json',
    method: 'post',
    url: 'http://localhost:3000/api/grades',
    data: studentData
  });
};

btn.addEventListener('click', submitForm);
