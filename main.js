let visits = localStorage.getItem('visits');
visits++;

localStorage.setItem('visits', visits);
console.log(`You have visited this page ${visits} times`);
