let text = "124004193@sastra.ac.in";
let testPattern = /^[a-zA-Z0-9+=?_-][^.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(testPattern.test(text));