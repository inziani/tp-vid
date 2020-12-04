let userIput: unknown;
let userName: string;

userIput = 5;
if ( typeof userIput === 'string'){
  userName = userIput
}


function generateError(message: string, code:number): never{
  throw{ message:message, errorCode: code};
}

generateError('An error occurred', 500)