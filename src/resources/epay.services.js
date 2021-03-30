import soapRequest from "easy-soap-request";
import {SERVICE_DOMAIN} from "../utils/constants.js";
async function CreateEpayPayment(xml){
    const url = 'https://epaytestvisanet.com.gt/paymentcommerce.asmx?WSDL';
    const headers ={
        'user-agent': 'EpayCharge',
        'Content-Type': 'application/soap+xml; charset=utf-8'
        // 'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
      };
  const { response } = await soapRequest({ url: url, headers: headers, xml: xml, timeout: 1000,method:'POST' }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log('XML headers: ',headers);
  console.log('XML body: ',body);
  console.log('XML statusCode: ',statusCode);
  return response;
}
export{
    CreateEpayPayment
}