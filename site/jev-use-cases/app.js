/* use-cases page: static cluster sections; count linked builds */
const count = document.querySelectorAll('.ugrid .rcard').length;
const el = document.getElementById('r-count');
if (el) el.textContent = count + ' representative builds linked';
