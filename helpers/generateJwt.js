var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');


//2 api create token ----input parameter phoneno----token generate----send in response----generateToken() function
//decode token ---------token will go input response phoneno ana chaida----------------->