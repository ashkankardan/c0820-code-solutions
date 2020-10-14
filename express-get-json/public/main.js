/* global $ */

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/grades',
  success: data => {
    // eslint-disable-next-line no-console
    console.log(data);
  },
  error: err => {
    console.error(err);
  }
});
