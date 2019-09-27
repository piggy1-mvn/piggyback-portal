import { authNetApiKey, authNetApiPass } from "../config/config"

const ApiContracts = require('authorizenet').APIContracts;
const ApiControllers = require('authorizenet').APIControllers;

export function paymentProcessor(cardNumber, expiryDate, cardCode, amount) {
    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(authNetApiKey);
    merchantAuthenticationType.setTransactionKey(authNetApiPass);

    const creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(cardNumber);
    creditCard.setExpirationDate(expiryDate);
    creditCard.setCardCode(cardCode);

    const paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);

    const transactionSetting1 = new ApiContracts.SettingType();
    transactionSetting1.setSettingName('duplicateWindow');
    transactionSetting1.setSettingValue('120');

    const transactionSetting2 = new ApiContracts.SettingType();
    transactionSetting2.setSettingName('recurringBilling');
    transactionSetting2.setSettingValue('false');

    const transactionSettingList = [];
    transactionSettingList.push(transactionSetting1);
    transactionSettingList.push(transactionSetting2);

    const transactionSettings = new ApiContracts.ArrayOfSetting();
    transactionSettings.setSetting(transactionSettingList);

    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(amount);
    transactionRequestType.setTransactionSettings(transactionSettings);

    const createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);

    console.log(JSON.stringify(createRequest.getJSON(), null, 2));

    const ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

    ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();
        var response = new ApiContracts.CreateTransactionResponse(apiResponse);

        console.log(JSON.stringify(response, null, 2));

        if (response.getMessages().getResultCode() === ApiContracts.MessageTypeEnum.OK) {
            if (response.getTransactionResponse().getMessages() != null) {
                console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
                console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                return true;
            }
            else {
                console.log('Failed Transaction.');
                if (response.getTransactionResponse().getErrors() != null) {
                    console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                    console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                }
                return false;
            }
        }
        else {
            console.log('Failed Transaction. ');
            if (response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {

                console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
            }
            else {
                console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
            }
            return false;
        }
    });

}
