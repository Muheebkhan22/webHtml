const age = [1,2,4,60,44,39,65,12,47,33,17,18];
// age.forEach((n) => console.log(n))

// filter appllye
// const newage = age.filter((n) => n > 20 && n < 40)
// console.log(newage)

// map applye
// const newage = age.map(n => n+1)
// console.log(newage)

// every applye
// const t = age.every(() => 0)
// console.log(t)

// sort applye
// const newage = age.sort();
// console.log(newage)
// const newage = age.sort((a,b) => a-b)
// console.log(newage)

// total apply
// const v = age.sort((a,b) => a-b)
//         .filter((n) => n>10 && n<40)
//         .map((n) => n+2)
//         .reduce((p,c) => p+c,0)
//         console.log(v)

// reduce apply
// const v = age.reduce((p,c) => p+c , 0)
// console.log(v)

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Handle the response from the server
    console.log(this.responseText);
  }
};
xhttp.open("GET", "example.txt", true);
xhttp.send();
