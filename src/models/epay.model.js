export default (shopperIP, auditNumber = "", email="", cardNumber = "", cardExpiry = "", amount = 0, cvv2 = "", cardName = "") => {
  let pan = cardNumber && cardNumber.replace(/ /g,"");
  let expvalues = cardExpiry && cardExpiry.split("/");
  let expdate =  `${expvalues[1]}${expvalues[0]}`;
  
  let metaPan = pan.replace( /\d(?=\d{4})/gm, 'x');
  const _epayModel = { shopperIP, pan, expdate, amount, cvv2, auditNumber, email, cardName, metadata:{
    pan: metaPan,
    cardName,
    amount,
    email
  } };
  return _epayModel;
};
