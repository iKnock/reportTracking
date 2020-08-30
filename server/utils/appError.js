class AppExceptions {
    constructor(errorCode, message) {      
      this.message=message;
      this.errorCode = errorCode;
    }
  }
  
  module.exports = AppExceptions;