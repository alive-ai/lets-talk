var lang = require('../index');
console.log( lang.lexer('Hey, hello world ! How are you ?') );
console.log( lang.lexer('j\'ai six ans') );
console.log( lang.lexer('anti-poison') );
console.log( lang.lexer('a=x+3 and x=56') );
console.log( lang.lexer('a=x - 3 and x=56') );
console.log( lang.lexer('click on this link : http://my.website.com/page.html and tell my what you thing about it') );