import Decimal from "decimal.js";
import unitRoot from "../math/unitRoot";
import { MortgageInsuranceDurationType } from "./mortgageInsurance";
import { Quote, QuoteResult } from "./quote";

export type CashflowResult = {
  aprFirst: number;
  aprSecond: number;
  cashflow: number[];
  cashflowFees: number[];
  cashflowFeesFinance: number[];
  cashflowFeesOrigination: number[];
  cashflowInterestFirst: number[];
  cashflowInterestSecond: number[];
  cashflowInterestTotal: number[];
  cashflowMortgageInsurance: number[];
  cashflowPandIFirst: number[];
  cashflowPandISecond: number[];
  cashflowPandITotal: number[];
  cashflowPrincipalFirst: number[];
  cashflowPrincipalSecond: number[];
  cashflowPrincipalTotal: number[];
  combinedLoanToValue: number[];
  loanToValue: number[];
  period: number[];
  principalEndingFirst: number[];
  principalEndingSecond: number[];
  principalStartingFirst: number[];
  principalStartingSecond: number[];
  totalFees: number;
  totalFeesFinance: number;
  totalFeesOrigination: number;
  totalInterest: number;
  totalInterestFirst: number;
  totalInterestSecond: number;
  totalMortgageInsurance: number;
  totalPandI: number;
  totalPandIFirst: number;
  totalPandISecond: number;
  totalPrincipal: number;
  totalPrincipalFirst: number;
  totalPrincipalSecond: number;
  year: number[];
};

export const precisionCashflow = function (
  quoteResult: QuoteResult,
  useSavingsRate: boolean
): CashflowResult {
  let cashflowResult: CashflowResult = {
    aprFirst: 0,
    aprSecond: 0,
    cashflow: [],
    cashflowFees: [],
    cashflowFeesFinance: [],
    cashflowFeesOrigination: [],
    cashflowInterestFirst: [],
    cashflowInterestSecond: [],
    cashflowInterestTotal: [],
    cashflowMortgageInsurance: [],
    cashflowPandIFirst: [],
    cashflowPandISecond: [],
    cashflowPandITotal: [],
    cashflowPrincipalFirst: [],
    cashflowPrincipalSecond: [],
    cashflowPrincipalTotal: [],
    combinedLoanToValue: [],
    loanToValue: [],
    period: [],
    principalEndingFirst: [],
    principalEndingSecond: [],
    principalStartingFirst: [],
    principalStartingSecond: [],
    totalFees: 0,
    totalFeesFinance: 0,
    totalFeesOrigination: 0,
    totalInterest: 0,
    totalInterestFirst: 0,
    totalInterestSecond: 0,
    totalMortgageInsurance: 0,
    totalPandI: 0,
    totalPandIFirst: 0,
    totalPandISecond: 0,
    totalPrincipal: 0,
    totalPrincipalFirst: 0,
    totalPrincipalSecond: 0,
    year: [],
  };

  let totalFees: number = 0,
    totalFeesFinance: number = 0,
    totalFeesOrigination: number = 0,
    totalInterest: number = 0,
    totalInterestFirst: number = 0,
    totalInterestSecond: number = 0,
    totalMortgageInsurance: number = 0,
    totalPandI: number = 0,
    totalPandIFirst: number = 0,
    totalPandISecond: number = 0,
    totalPrincipal: number = 0,
    totalPrincipalFirst: number = 0,
    totalPrincipalSecond: number = 0;

  let keyRate,
    keyPaymentPeriodic,
    keyPaymentUpfront = 0;

  if (useSavingsRate) {
    keyRate = quoteResult.safeRateSavingsRate;
    keyPaymentPeriodic = quoteResult.safeRateSavingsPaymentPeriodic;
    keyPaymentUpfront = quoteResult.safeRateSavingsPaymentUpfront;
  } else {
    keyRate = quoteResult.offerRate;
    keyPaymentPeriodic = quoteResult.offerPaymentPeriodic;
    keyPaymentUpfront = quoteResult.offerPaymentUpfront;
  }

  let hasMortgageInsurance: boolean = quoteResult.mortgageInsurance !== null;
  let hasMortgageInsurancePeriodic: boolean = false;
  let hasMortgageInsuranceUpfront: boolean = false;
  let hasMorgageInsurancePeriodicExpired: boolean = true;

  if (hasMortgageInsurance) {
    if (quoteResult.mortgageInsurance?.periodicRate) {
      hasMortgageInsurancePeriodic =
        quoteResult.mortgageInsurance.periodicRate > 0;

      hasMorgageInsurancePeriodicExpired = !hasMortgageInsurancePeriodic;
    }

    if (quoteResult.mortgageInsurance?.upfrontRate) {
      hasMortgageInsuranceUpfront =
        quoteResult.mortgageInsurance.upfrontRate > 0;
    }
  }

  let hasSubordinate: boolean = quoteResult.subordinate !== null;

  let firstLienAmount: number = quoteResult.loanAmount;
  const firstLienPeriodicRate: number = new Decimal(keyRate)
    .dividedBy(100)
    .dividedBy(12)
    .toDecimalPlaces(12)
    .toNumber();
  const firstLienPayment: number = keyPaymentPeriodic;

  let secondLienAmount: number = quoteResult.subordinate?.loanAmount
    ? quoteResult.subordinate?.loanAmount
    : 0;
  const secondLienPeriodicRate: number = quoteResult.subordinate?.rate
    ? new Decimal(quoteResult.subordinate.rate)
        .dividedBy(100)
        .dividedBy(12)
        .toDecimalPlaces(12)
        .toNumber()
    : 0;
  const secondLienPayment: number = quoteResult.subordinate?.periodicPayment
    ? quoteResult.subordinate?.periodicPayment
    : 0;

  let mortgageInsurancePeriodicAmount: number = quoteResult.mortgageInsurance
    ?.periodicAmount
    ? quoteResult.mortgageInsurance?.periodicAmount
    : 0;

  let term: number = new Decimal(quoteResult.loanTerm).times(12).toNumber();
  for (let t = 0; t <= term; t++) {
    let cashflow: number = 0,
      cashflowFees: number = 0,
      cashflowFeesFinance: number = 0,
      cashflowFeesOrigination: number = 0,
      cashflowInterestFirst: number = 0,
      cashflowInterestSecond: number = 0,
      cashflowInterestTotal: number = 0,
      cashflowMortgageInsurance: number = 0,
      cashflowPandIFirst: number = 0,
      cashflowPandISecond: number = 0,
      cashflowPandITotal: number = 0,
      cashflowPrincipalFirst: number = 0,
      cashflowPrincipalSecond: number = 0,
      cashflowPrincipalTotal: number = 0,
      combinedLoanToValue: number = 0,
      loanToValue: number = 0,
      principalEndingFirst: number = 0,
      principalEndingSecond: number = 0,
      principalStartingFirst: number = 0,
      principalStartingSecond: number = 0,
      year: number = 0;

    const period: number = t;
    year = new Decimal(period).dividedBy(12).toDecimalPlaces(3).toNumber();

    loanToValue = new Decimal(firstLienAmount)
      .dividedBy(quoteResult.propertyValue)
      .times(100)
      .toDecimalPlaces(2)
      .toNumber();
    combinedLoanToValue = new Decimal(firstLienAmount)
      .plus(secondLienAmount)
      .dividedBy(quoteResult.propertyValue)
      .times(100)
      .toDecimalPlaces(2)
      .toNumber();

    if (t === 0) {
      if (hasMortgageInsurance && hasMortgageInsuranceUpfront) {
        cashflowMortgageInsurance = quoteResult.mortgageInsurance?.upfrontAmount
          ? quoteResult.mortgageInsurance?.upfrontAmount
          : 0;
      }

      let feesFinance = quoteResult.points ? quoteResult.points : 0;

      if (keyPaymentUpfront) {
        feesFinance = new Decimal(keyPaymentUpfront)
          .times(-1) // Negate because - indicates customer is spenidng money and is a positive outlay.
          .toDecimalPlaces(2)
          .plus(feesFinance)
          .toNumber();
      }

      if (feesFinance !== 0) {
        cashflowFeesFinance = feesFinance;
      }
    } else {
      if (
        hasMortgageInsurance &&
        hasMortgageInsurancePeriodic &&
        hasMorgageInsurancePeriodicExpired === false
      ) {
        // Check that the mortgage insurance has not expired
        if (
          quoteResult.mortgageInsurance?.durationType ===
          MortgageInsuranceDurationType.loanToValue
        ) {
          if (loanToValue < quoteResult.mortgageInsurance.duration) {
            hasMorgageInsurancePeriodicExpired = true;
          }
        } else if (
          quoteResult.mortgageInsurance?.durationType ===
          MortgageInsuranceDurationType.years
        ) {
          if (year > quoteResult.mortgageInsurance.duration)
            hasMorgageInsurancePeriodicExpired = true;
        }

        if (hasMorgageInsurancePeriodicExpired === false) {
          if (t % quoteResult.periodsPerYear === 1 && t !== 1) {
            mortgageInsurancePeriodicAmount = new Decimal(
              quoteResult.mortgageInsurance?.periodicRate
                ? quoteResult.mortgageInsurance?.periodicRate
                : 0
            )
              .dividedBy(100)
              .times(firstLienAmount)
              .dividedBy(12)
              .toDecimalPlaces(2)
              .toNumber();
          }

          cashflowMortgageInsurance = mortgageInsurancePeriodicAmount;
        }
      }

      principalStartingFirst = firstLienAmount;
      cashflowInterestFirst = new Decimal(firstLienAmount)
        .times(firstLienPeriodicRate)
        .toDecimalPlaces(2)
        .toNumber();
      cashflowPrincipalFirst = new Decimal(firstLienPayment)
        .minus(cashflowInterestFirst)
        .toDecimalPlaces(2)
        .toNumber();
      if (cashflowPrincipalFirst > firstLienAmount) {
        cashflowPrincipalFirst = firstLienAmount;
        cashflowPandIFirst = new Decimal(cashflowPrincipalFirst)
          .plus(cashflowInterestFirst)
          .toDecimalPlaces(2)
          .toNumber();
      } else {
        cashflowPandIFirst = firstLienPayment;
      }
      principalEndingFirst = new Decimal(firstLienAmount)
        .minus(cashflowPrincipalFirst)
        .toDecimalPlaces(2)
        .toNumber();
      firstLienAmount = principalEndingFirst;

      if (
        hasSubordinate &&
        secondLienAmount > 0 &&
        secondLienPeriodicRate > 0 &&
        secondLienPayment > 0
      ) {
        principalStartingSecond = secondLienAmount;
        cashflowInterestSecond = new Decimal(secondLienAmount)
          .times(secondLienPeriodicRate)
          .toDecimalPlaces(2)
          .toNumber();
        cashflowPrincipalSecond = new Decimal(secondLienPayment)
          .minus(cashflowInterestSecond)
          .toDecimalPlaces(2)
          .toNumber();
        if (cashflowPrincipalSecond > secondLienAmount) {
          cashflowPrincipalSecond = secondLienAmount;
          cashflowPandISecond = new Decimal(cashflowPrincipalSecond)
            .plus(cashflowInterestSecond)
            .toDecimalPlaces(2)
            .toNumber();
        } else {
          cashflowPandISecond = secondLienPayment;
        }
        principalEndingSecond = new Decimal(secondLienAmount)
          .minus(cashflowPrincipalSecond)
          .toDecimalPlaces(2)
          .toNumber();
        secondLienAmount = principalEndingSecond;
      }
    }

    cashflowFees = new Decimal(cashflowFeesFinance)
      .plus(cashflowFeesOrigination)
      .toDecimalPlaces(2)
      .toNumber();

    cashflowInterestTotal = new Decimal(cashflowInterestFirst)
      .plus(cashflowInterestSecond)
      .toDecimalPlaces(2)
      .toNumber();

    cashflowPrincipalTotal = new Decimal(cashflowPrincipalFirst)
      .plus(cashflowPrincipalSecond)
      .toDecimalPlaces(2)
      .toNumber();

    cashflowPandITotal = new Decimal(cashflowPandIFirst)
      .plus(cashflowPandISecond)
      .toDecimalPlaces(2)
      .toNumber();

    cashflow = new Decimal(cashflowFees)
      .plus(cashflowPandITotal)
      .plus(cashflowMortgageInsurance)
      .toDecimalPlaces(2)
      .toNumber();

    cashflowResult.cashflow.push(cashflow);
    cashflowResult.cashflowFees.push(cashflowFees);
    cashflowResult.cashflowInterestFirst.push(cashflowInterestFirst);
    cashflowResult.cashflowInterestSecond.push(cashflowInterestSecond);
    cashflowResult.cashflowInterestTotal.push(cashflowInterestTotal);
    cashflowResult.cashflowMortgageInsurance.push(cashflowMortgageInsurance);
    cashflowResult.cashflowPandIFirst.push(cashflowPandIFirst);
    cashflowResult.cashflowPandISecond.push(cashflowPandISecond);
    cashflowResult.cashflowPandITotal.push(cashflowPandITotal);
    cashflowResult.cashflowPrincipalFirst.push(cashflowPrincipalFirst);
    cashflowResult.cashflowPrincipalSecond.push(cashflowPrincipalSecond);
    cashflowResult.cashflowPrincipalTotal.push(cashflowPrincipalTotal);
    cashflowResult.combinedLoanToValue.push(combinedLoanToValue);
    cashflowResult.loanToValue.push(loanToValue);
    cashflowResult.period.push(period);
    cashflowResult.principalEndingFirst.push(principalEndingFirst);
    cashflowResult.principalEndingSecond.push(principalEndingSecond);
    cashflowResult.principalStartingFirst.push(principalStartingFirst);
    cashflowResult.principalStartingSecond.push(principalStartingSecond);
    cashflowResult.year.push(year);

    totalFees = new Decimal(totalFees)
      .plus(cashflowFees)
      .toDecimalPlaces(2)
      .toNumber();
    totalFeesFinance = new Decimal(totalFeesFinance)
      .plus(cashflowFeesFinance)
      .toDecimalPlaces(2)
      .toNumber();
    totalFeesOrigination = new Decimal(totalFeesOrigination)
      .plus(cashflowFeesOrigination)
      .toDecimalPlaces(2)
      .toNumber();
    totalInterest = new Decimal(totalInterest)
      .plus(cashflowInterestTotal)
      .toDecimalPlaces(2)
      .toNumber();
    totalInterestFirst = new Decimal(totalInterestFirst)
      .plus(cashflowInterestFirst)
      .toDecimalPlaces(2)
      .toNumber();
    totalInterestSecond = new Decimal(totalInterestSecond)
      .plus(cashflowInterestSecond)
      .toDecimalPlaces(2)
      .toNumber();
    totalMortgageInsurance = new Decimal(totalMortgageInsurance)
      .plus(cashflowMortgageInsurance)
      .toDecimalPlaces(2)
      .toNumber();
    totalPandI = new Decimal(totalPandI)
      .plus(cashflowPandITotal)
      .toDecimalPlaces(2)
      .toNumber();
    totalPandIFirst = new Decimal(totalPandIFirst)
      .plus(cashflowPandIFirst)
      .toDecimalPlaces(2)
      .toNumber();
    totalPandISecond = new Decimal(totalPandISecond)
      .plus(cashflowPandISecond)
      .toDecimalPlaces(2)
      .toNumber();
    totalPrincipal = new Decimal(totalPrincipal)
      .plus(cashflowPrincipalTotal)
      .toDecimalPlaces(2)
      .toNumber();
    totalPrincipalFirst = new Decimal(totalPrincipalFirst)
      .plus(cashflowPrincipalFirst)
      .toDecimalPlaces(2)
      .toNumber();
    totalPrincipalSecond = new Decimal(totalPrincipalSecond)
      .plus(cashflowPrincipalSecond)
      .toDecimalPlaces(2)
      .toNumber();
  }

  cashflowResult.totalFees = totalFees;
  cashflowResult.totalFeesFinance = totalFeesFinance;
  cashflowResult.totalFeesOrigination = totalFeesOrigination;
  cashflowResult.totalInterest = totalInterest;
  cashflowResult.totalInterestFirst = totalInterestFirst;
  cashflowResult.totalInterestSecond = totalInterestSecond;
  cashflowResult.totalMortgageInsurance = totalMortgageInsurance;
  cashflowResult.totalPandI = totalPandI;
  cashflowResult.totalPandIFirst = totalPandIFirst;
  cashflowResult.totalPandISecond = totalPandISecond;
  cashflowResult.totalPrincipal = totalPrincipal;
  cashflowResult.totalPrincipalFirst = totalPrincipalFirst;
  cashflowResult.totalPrincipalSecond = totalPrincipalSecond;

  let cashflowFirst: number[] = [...cashflowResult.cashflowPandIFirst];
  cashflowFirst[0] = new Decimal(cashflowFirst[0])
    .minus(quoteResult.loanAmount)
    .toDecimalPlaces(2)
    .toNumber();

  const discountFirstCashFlows = function (interestRate) {
    const discountBase = new Decimal(interestRate)
      .dividedBy(100)
      .dividedBy(12)
      .plus(1)
      .toDecimalPlaces(12)
      .toNumber();
    var presentValue = 0.0;

    for (let i = 0; i < cashflowFirst.length; i++) {
      presentValue = new Decimal(presentValue)
        .plus(
          new Decimal(cashflowFirst[i])
            .plus(cashflowResult.cashflowMortgageInsurance[i])
            .plus(cashflowResult.cashflowFees[i])
            .dividedBy(new Decimal(discountBase).toPower(i))
        )
        .toDecimalPlaces(2)
        .toNumber();
    }

    return presentValue;
  };

  let aprFirst: number = unitRoot(
    discountFirstCashFlows,
    0,
    new Decimal(keyRate).times(2).toDecimalPlaces(6).toNumber(),
    0.000011,
    1000
  );

  aprFirst = new Decimal(aprFirst).toDecimalPlaces(4).toNumber();
  cashflowResult.aprFirst = aprFirst;

  if (hasSubordinate) {
    let cashflowSecond: number[] = [...cashflowResult.cashflowPandISecond];
    cashflowSecond[0] = new Decimal(cashflowSecond[0])
      .minus(quoteResult.subordinate?.loanAmount as number)
      .toDecimalPlaces(2)
      .toNumber();

    const discountSecondCashFlows = function (interestRate) {
      const discountBase = new Decimal(interestRate)
        .dividedBy(100)
        .dividedBy(12)
        .plus(1)
        .toDecimalPlaces(12)
        .toNumber();
      var presentValue = 0.0;

      for (let i = 0; i < cashflowSecond.length; i++) {
        presentValue = new Decimal(presentValue)
          .plus(
            new Decimal(cashflowSecond[i]).dividedBy(
              new Decimal(discountBase).toPower(i)
            )
          )
          .toDecimalPlaces(2)
          .toNumber();
      }

      return presentValue;
    };

    let aprSecond: number = unitRoot(
      discountSecondCashFlows,
      0,
      new Decimal(keyRate).times(2).toDecimalPlaces(6).toNumber(),
      0.000011,
      1000
    );

    aprSecond = new Decimal(aprSecond).toDecimalPlaces(4).toNumber();
    cashflowResult.aprSecond = aprSecond;
  } else {
    cashflowResult.aprSecond = 0;
  }

  return cashflowResult;
};
