class ResponseMessage {
    constructor(responseCode, responseMessage, responseData) {
        this.responseCode = responseCode;
        this.responseMessage = responseMessage;
        this.responseData = responseData;
    }

    getResponseCode() {
        return this.responseCode;
    }    

    getMessage() {
        return this.responseMessage;
    }

    getResponseData() {
        return this.responseData;
    }

    getResponseMessage() {
        return {
            responseCode: this.responseCode,
            responseMessage: this.responseMessage,
            responseData: this.responseData            
        };
    }
}

module.exports = ResponseMessage;