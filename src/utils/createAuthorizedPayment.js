import Random from "@reactioncommerce/random";
import { CreateEpayPayment} from "../resources/epay.services.js";
import PaymentSchema from "../resources/PaymentSchema.js";
import { EpayService } from "../services";
import { EPAY_PACKAGE_NAME } from "./constants.js";

const METHOD = "credit";
const PAYMENT_METHOD_NAME = "epay_card";

// NOTE: The "processor" value is lowercased and then prefixed to various payment Meteor method names,
// so for example, if this is "Example", the list refunds method is expected to be named "example/refund/list"
const PROCESSOR = "EPay";

/**
 * @summary As an example and for demos, this non-production payment method creates a payment
 *   without charging any credit card
 * @param {Object} context The request context
 * @param {Object} input Input necessary to create a payment
 * @returns {Object} The payment object in schema expected by the orders plugin
 */
export default async function exampleCreateAuthorizedPayment(context, input) {
  const {
    amount,
    billingAddress,
    shopId,
    paymentData: {
      cardNumber,
      cardExpiry,
      cardCVV
    }
  } = input;
  throw new Error("error de demo");
  try {
    let schema = new PaymentSchema({
      pan:cardNumber,
      expdate:cardExpiry,
      cvv2:cardCVV,
      messageType:'0200',
      auditNumber:'000001',
      posEntryMode:'012',
      pan:'4000000000000416',
      paymentgwIP:'190.149.69.135',
      merchantUser:'76B925EF7BEC821780B4B21479CE6482EA415896CF43006050B1DAD101669921',
      merchantPasswd:'91DB5B28DDE6FBC2B9951DFED4D97B82EFD622B411F1FC16B88B052232C7',
      terminalId:'77788881',
      merchant:'00575123'
    });
    await CreateEpayPayment(schema.toXml())
    return {
      _id: Random.id(),
      address: billingAddress,
      amount,
      createdAt: new Date(),
      data: {
        auditNumber:12345,
        referenceNumber:"12345",
        authorizationNumber:"12345",
        responseCode:"132564",
        gqlType: "EPayPaymentData" // GraphQL union resolver uses this
      },
      displayName: `Epay from ${billingAddress.fullName}`,
      method: METHOD,
      mode: "authorize",
      name: PAYMENT_METHOD_NAME,
      paymentPluginName: EPAY_PACKAGE_NAME,
      processor: PROCESSOR,
      riskLevel: "normal",
      shopId,
      status: "created",
      transactionId: Random.id(),
      transactions: []
    };
  } catch (error) {
    throw new Error("error");
  }
}
