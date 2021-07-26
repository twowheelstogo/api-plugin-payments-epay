import Random from "@reactioncommerce/random";
import { EpayService } from "../services/index.js";
import { EpayModel } from "../models/index.js";
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
  const model = EpayModel("190.56.108.46", "0", cardNumber, cardExpiry, amount, cardCVV);
  console.log(model);
  const res = await EpayService(model, 1);
  return {
    _id: Random.id(),
    address: billingAddress,
    amount,
    createdAt: new Date(),
    data: {
      ...res,
      gqlType: "EPayPaymentData" // GraphQL union resolver uses this
    },
    displayName: `Pago con tarjeta`,
    method: METHOD,
    mode: "authorize",
    name: PAYMENT_METHOD_NAME,
    paymentPluginName: EPAY_PACKAGE_NAME,
    processor: PROCESSOR,
    riskLevel: "normal",
    shopId,
    status: "created",
    transactionId: res.auditNumber,
    transactions: []
  };
}
