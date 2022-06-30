import Decimal from "decimal.js";

type NumberOrNull = number | null;

export const precisionAdd = function (
  values: number[],
  precision: NumberOrNull,
  stepPrecision?: NumberOrNull
): NumberOrNull {
  let result: number | Decimal | null = null;

  if (Array.isArray(values) && values.length) {
    result = new Decimal(0) as Decimal;

    if ((precision || precision === 0) && stepPrecision) {
      for (let v = 0; v < values.length; v++) {
        result = result
          .plus(new Decimal(values[v]).toDecimalPlaces(precision))
          .toDecimalPlaces(precision);
      }
    } else {
      for (let v = 0; v < values.length; v++) {
        result = result.plus(values[v]);
      }
    }
  }

  if (result) {
    result = result as Decimal;
    if (precision || precision === 0) {
      result = result.toDecimalPlaces(precision).toNumber();
    } else {
      result = result.toNumber();
    }
  }

  return result as NumberOrNull;
};

export const precisionSubtract = function (
  values: number[],
  precision: NumberOrNull,
  stepPrecision?: NumberOrNull
): NumberOrNull {
  let result: Decimal | number | null = null;

  if (Array.isArray(values) && values.length) {
    result = new Decimal(values[0]);

    if ((precision || precision === 0) && stepPrecision) {
      result = result.toDecimalPlaces(precision);

      for (let v = 1; v < values.length; v++) {
        result = result
          .minus(new Decimal(values[v]).toDecimalPlaces(precision))
          .toDecimalPlaces(precision);
      }
    } else {
      for (let v = 1; v < values.length; v++) {
        result = result.minus(values[v]);
      }
    }
  }

  if (result) {
    result = result as Decimal;
    if (precision || precision === 0) {
      result = result.toDecimalPlaces(precision).toNumber();
    } else {
      result = result.toNumber();
    }
  }

  return result as NumberOrNull;
};

export const precisionMultiply = function (
  values: number[],
  precision: NumberOrNull,
  stepPrecision?: NumberOrNull
): NumberOrNull {
  let result: number | Decimal | null = null;

  if (Array.isArray(values) && values.length) {
    result = new Decimal(1);

    if ((precision || precision === 0) && stepPrecision) {
      for (let v = 0; v < values.length; v++) {
        result = result
          .times(new Decimal(values[v]).toDecimalPlaces(precision))
          .toDecimalPlaces(precision);
      }
    } else {
      for (let v = 0; v < values.length; v++) {
        result = result.times(values[v]);
      }
    }
  }

  if (result) {
    result = result as Decimal;
    if (precision || precision === 0) {
      result = result.toDecimalPlaces(precision).toNumber();
    } else {
      result = result.toNumber();
    }
  }

  return result as NumberOrNull;
};

export const precisionDivide = function (
  values: number[],
  precision: NumberOrNull,
  stepPrecision?: NumberOrNull
): NumberOrNull {
  let result: number | Decimal | null = null;

  if (Array.isArray(values) && values.length) {
    result = new Decimal(values[0]);

    if ((precision || precision === 0) && stepPrecision) {
      result = result.toDecimalPlaces(precision);

      for (let v = 1; v < values.length; v++) {
        result = result
          .dividedBy(new Decimal(values[v]).toDecimalPlaces(precision))
          .toDecimalPlaces(precision);
      }
    } else {
      for (let v = 1; v < values.length; v++) {
        result = result.dividedBy(values[v]);
      }
    }
  }

  if (result) {
    result = result as Decimal;
    if (precision || precision === 0) {
      result = result.toDecimalPlaces(precision).toNumber();
    } else {
      result = result.toNumber();
    }
  }

  return result as NumberOrNull;
};

export const precisionDailyInterest = function (
  interestRate: number,
  outstandingPrincipal: number,
  daysInYear: number,
  precisionInterest: number,
  precisionCurrency: number
): number {
  return new Decimal(interestRate)
    .toDecimalPlaces(precisionInterest)
    .dividedBy(100)
    .dividedBy(daysInYear)
    .times(outstandingPrincipal)
    .toDecimalPlaces(precisionCurrency)
    .toNumber();
};

export const precisionLog = function (
  value: NumberOrNull,
  base: NumberOrNull,
  precision: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if (value && base && precision) {
    returnValue = new Decimal(value)
      .toDecimalPlaces(precision)
      .log(base)
      .toDecimalPlaces(precision)
      .toNumber();
  }

  return returnValue;
};

export const precisionPower = function (
  base: NumberOrNull,
  exponent: NumberOrNull,
  precision: NumberOrNull
) {
  let returnValue: NumberOrNull = null;

  if (
    (base || base === 0) &&
    (exponent || exponent === 0) &&
    (precision || precision === 0)
  ) {
    returnValue = new Decimal(base)
      .toPower(exponent)
      .toDecimalPlaces(precision)
      .toNumber();
  }

  return returnValue;
};

export const precisionNegate = function (
  value: NumberOrNull,
  precision: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = value;

  if ((value || value === 0) && (precision || precision === 0)) {
    returnValue = precisionMultiply([value, -1], precision, precision);
  }

  return returnValue;
};

export const precisionAbsoluteValue = function (
  value: NumberOrNull,
  precision: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = value;

  if ((value || value === 0) && (precision || precision === 0)) {
    returnValue = new Decimal(value)
      .abs()
      .toDecimalPlaces(precision)
      .toNumber();
  }

  return returnValue;
};

export const precisionRound = function (
  value: NumberOrNull,
  precision: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if ((value || value === 0) && (precision || precision === 0)) {
    returnValue = new Decimal(value).toDecimalPlaces(precision).toNumber();
  }

  return returnValue;
};

export const precisionRoundUp = function (
  value: NumberOrNull,
  precision: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if ((value || value === 0) && (precision || precision === 0)) {
    // toDecimalPlaces 0 rounds up
    returnValue = new Decimal(value).toDecimalPlaces(precision, 0).toNumber();
  }

  return returnValue;
};

export const precisionRoundDown = function (
  value: NumberOrNull,
  precision: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if ((value || value === 0) && (precision || precision === 0)) {
    // toDecimalPlaces 1 rounds down
    returnValue = new Decimal(value).toDecimalPlaces(precision, 1).toNumber();
  }

  return returnValue;
};

export const precisionFloor = function (value: NumberOrNull): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if (value || value === 0) {
    returnValue = Math.floor(value);
  }

  return returnValue;
};

export const precisionCeiling = function (value: NumberOrNull): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if (value || value === 0) {
    returnValue = Math.ceil(value);
  }

  return returnValue;
};

export const precisionIntegerDivision = function (values: number[]) {
  let returnValue: NumberOrNull = null;

  if (Array.isArray(values) && values.length > 0) {
    let workingValue = new Decimal(values[0]);

    for (let v = 1; v < values.length; v++) {
      workingValue = workingValue.dividedBy(values[v]);
    }

    returnValue = workingValue.floor().toNumber();
  }

  return returnValue;
};

export const precisionNumberOfPeriods = function (
  periodPayment: NumberOrNull,
  outstandingPrincipal: NumberOrNull,
  periodsPerYear: NumberOrNull,
  interestRate: NumberOrNull,
  precisionInterest: NumberOrNull
): NumberOrNull {
  let returnValue: NumberOrNull = null;

  if (interestRate && periodsPerYear && precisionInterest) {
    let periodRate = precisionDivide(
      [interestRate, periodsPerYear, 100],
      precisionInterest,
      precisionInterest
    );

    if (periodRate) {
      let denominator = precisionAdd(
        [1, periodRate],
        precisionInterest,
        precisionInterest
      );

      denominator = precisionLog(denominator, 10, precisionInterest);

      if (denominator) {
        if (periodPayment && outstandingPrincipal && periodRate) {
          let step1 = precisionMultiply(
            [periodRate, outstandingPrincipal],
            precisionInterest,
            precisionInterest
          );

          if (step1) {
            let step2 = precisionDivide(
              [step1, periodPayment],
              precisionInterest,
              precisionInterest
            );

            if (step2) {
              let step3 = precisionSubtract(
                [1, step2],
                precisionInterest,
                precisionInterest
              );

              if (step3) {
                let step4 = precisionLog(step3, 10, precisionInterest);

                if (step4) {
                  let numerator = precisionNegate(step4, precisionInterest);

                  if (numerator) {
                    returnValue = precisionDivide(
                      [numerator, denominator],
                      precisionInterest,
                      precisionInterest
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return returnValue;
};

export const precisionAmoritize = function (
  amount: number,
  periodsPerYear: number,
  annualInterestRate: number,
  numberOfPeriods: number
): number {
  let payment: number = 0;

  // console.log(
  //   `amount: ${amount}, periodsPerYear: ${periodsPerYear}, annual interest rate: ${annualInterestRate}, number of periods: ${numberOfPeriods}`
  // );

  const periodicInterest: number = precisionDivide(
    [annualInterestRate, 100, periodsPerYear],
    12,
    12
  ) as number;

  const periodicInterestPower: number = precisionPower(
    precisionAdd([1, periodicInterest], 12, 12) as number,
    numberOfPeriods,
    12
  ) as number;

  const numerator: number = precisionMultiply(
    [periodicInterest, periodicInterestPower],
    12,
    12
  ) as number;

  const denominator: number = precisionSubtract(
    [periodicInterestPower, 1],
    12,
    12
  ) as number;

  const quotient: number = precisionDivide(
    [numerator, denominator],
    12,
    12
  ) as number;

  payment = precisionMultiply([amount, quotient], 12) as number;
  payment = new Decimal(payment)
    .toDecimalPlaces(2, Decimal.ROUND_CEIL)
    .toNumber();

  return payment;
};
