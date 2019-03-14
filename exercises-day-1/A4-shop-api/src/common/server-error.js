exports.serverError = (message = '', status = 404) => {

    const error = new Error(message);
    error.status = status;
    return error;
}  
