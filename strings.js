console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

var str1="JavaScript"
var str2=str1.concat(" is","awesome")
console.log(str2);
//Output: JavaScript is awesome

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces

var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;  