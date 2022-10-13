import {
  EquifaxCreditReportParent,
  EquifaxCreditReport,
  EquifaxModelIdentifer,
} from "./equifax";

export class CreditReport {
  age: number;
  equifax: EquifaxCreditReportParent;
  fico8: number;
  hasBankruptices: boolean;
  vantage3: number;

  constructor(equifaxCreditReport: EquifaxCreditReportParent) {
    this.equifax = equifaxCreditReport;

    if (
      Array.isArray(
        equifaxCreditReport.consumers?.equifaxUSConsumerCreditReport
      )
    ) {
      for (
        let c = 0;
        c < this.equifax.consumers.equifaxUSConsumerCreditReport.length;
        c++
      ) {
        const creditReport: EquifaxCreditReport =
          this.equifax.consumers.equifaxUSConsumerCreditReport[c];

        this.age = creditReport.age;

        if (Array.isArray(creditReport.bankruptcies)) {
          this.hasBankruptices = creditReport.bankruptcies.length > 0;
        }

        if (Array.isArray(creditReport.models)) {
          for (let m = 0; m < creditReport.models.length; m++) {
            const model = creditReport.models[m];
            if (
              model.modelNumber ===
              parseInt(EquifaxModelIdentifer.FICO_8_NONFACTA)
            ) {
              if (model.score) {
                this.fico8 = model.score + 200; // TODO: Update
              }
            } else if (
              model.modelNumber ===
              parseInt(EquifaxModelIdentifer.VANTAGE_SCORE_3_ENGLISH)
            ) {
              if (model.score) {
                this.vantage3 = model.score + 200; // TODO: Update
              }
            }
          }
        }
      }
    }
  }
}
