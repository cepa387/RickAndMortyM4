
const validation = (data) => { // data = {username: ... , password: ...}
    let errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexNumber = /\d/;

    if(!regexEmail.test(data.username)){        //mail@mail.com
        errors.e1 = 'Ingrese un mail válido';
    }
    if(!data.username){
        errors.e2 = 'Debe ingresar un usuario';
    }
    if(data.username.length > 35){
        errors.e3 = 'Ingrese menos de 35 caracteres';
    }
    if(!regexNumber.test(data.password)){
       errors.p1 = 'Debe ingresar al menos un número';
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Longitud incorrecta';
    }
    return errors;
}

export default validation;