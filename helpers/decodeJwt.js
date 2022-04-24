var decoded = jwt.verify(token, 'shhhhh');
console.log(decoded.foo)