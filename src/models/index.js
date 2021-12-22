import { getModel, modelToXml, resToJson } from "./epay.model.js";
import { getModel as getModel2 } from "./email.model.js";

export default {
  EpayModel: {
    getModel,
    modelToXml,
    resToJson,
  },
  EmailModel: {
    getModel: getModel2,
  },
};
