import Random from "@reactioncommerce/random";
import { EpayService } from "../services"
import PaymentSchema from "../resources/PaymentSchema.js";
import { EpayModel } from "../models";

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
      cardCVV,
      shopperIp
    }
  } = input;
  //const epayModel = EpayModel(shopperIp, "", cardNumber, cardExpiry, 0, cardCVV);
  //const resEpay = await EpayService(epayModel, 1);
  console.log(input);
  throw new Error("error de demo");
  return {
    _id: Random.id(),
    address: billingAddress,
    amount,
    createdAt: new Date(),
    data: {
      auditNumber:resEpay.,
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
}
