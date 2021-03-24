import {EPAY_PACKAGE_NAME} from "./utils/constants";
import i18n from "./i18n";
import schemas from "./schemas";
import pkg from "../package.json";
import epayCreateAuthorizedPayment from "./utils/createAuthorizedPayment";
import epayCapturePayment from "./utils/capturePayment";
export default async function register(app){
    await app.registerPlugin({
        label:"ePay Payments",
        name:EPAY_PACKAGE_NAME,
        version:pkg.version,
        i18n,
        graphQL:{
            schemas
        },
        paymentMethods:[{
            name:"epay_card",
            canRefund:true,
            displayName:"EPay Payment",
            functions:{
                createAuthorizedPayment:epayCreateAuthorizedPayment,
                createPayment:epayCapturePayment
            }
        }]
    });
}