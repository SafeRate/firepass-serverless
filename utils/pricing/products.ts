import { Product } from "./quote";

export const products: Product[] = [
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 4.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: true,
    lenderName: "Elite",
    manufacturedHome: true,
    maxAmount: 647200,
    maxCltv: 95.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 125000,
    minCltv: 0.0,
    minCreditScore: 700,
    minDti: 0,
    minLock: 15,
    minTerm: 8,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 95.0,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 21,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.75,
                price: -4.744,
              },
              {
                rate: 4.625,
                price: -4.257,
              },
              {
                rate: 4.5,
                price: -3.727,
              },
              {
                rate: 4.375,
                price: -3.354,
              },
              {
                rate: 4.25,
                price: -2.983,
              },
              {
                rate: 4.125,
                price: -2.293,
              },
              {
                rate: 3.999,
                price: -1.905,
              },
              {
                rate: 3.875,
                price: -1.634,
              },
              {
                rate: 3.75,
                price: -1.096,
              },
              {
                rate: 3.625,
                price: -0.511,
              },
              {
                rate: 3.5,
                price: -0.052,
              },
              {
                rate: 3.375,
                price: 0.474,
              },
              {
                rate: 3.25,
                price: 1.119,
              },
              {
                rate: 3.125,
                price: 1.634,
              },
              {
                rate: 2.999,
                price: 2.295,
              },
              {
                rate: 2.875,
                price: 3.078,
              },
              {
                rate: 2.75,
                price: 3.78,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.75,
                price: -4.649,
              },
              {
                rate: 4.625,
                price: -4.162,
              },
              {
                rate: 4.5,
                price: -3.632,
              },
              {
                rate: 4.375,
                price: -3.259,
              },
              {
                rate: 4.25,
                price: -2.888,
              },
              {
                rate: 4.125,
                price: -2.198,
              },
              {
                rate: 3.999,
                price: -1.81,
              },
              {
                rate: 3.875,
                price: -1.539,
              },
              {
                rate: 3.75,
                price: -1.001,
              },
              {
                rate: 3.625,
                price: -0.416,
              },
              {
                rate: 3.5,
                price: 0.043,
              },
              {
                rate: 3.375,
                price: 0.569,
              },
              {
                rate: 3.25,
                price: 1.214,
              },
              {
                rate: 3.125,
                price: 1.729,
              },
              {
                rate: 2.999,
                price: 2.39,
              },
              {
                rate: 2.875,
                price: 3.173,
              },
              {
                rate: 2.75,
                price: 3.875,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.75,
                price: -4.479,
              },
              {
                rate: 4.625,
                price: -3.992,
              },
              {
                rate: 4.5,
                price: -3.462,
              },
              {
                rate: 4.375,
                price: -3.089,
              },
              {
                rate: 4.25,
                price: -2.718,
              },
              {
                rate: 4.125,
                price: -2.028,
              },
              {
                rate: 3.999,
                price: -1.64,
              },
              {
                rate: 3.875,
                price: -1.369,
              },
              {
                rate: 3.75,
                price: -0.831,
              },
              {
                rate: 3.625,
                price: -0.246,
              },
              {
                rate: 3.5,
                price: 0.213,
              },
              {
                rate: 3.375,
                price: 0.739,
              },
              {
                rate: 3.25,
                price: 1.384,
              },
              {
                rate: 3.125,
                price: 1.899,
              },
              {
                rate: 2.999,
                price: 2.56,
              },
              {
                rate: 2.875,
                price: 3.343,
              },
              {
                rate: 2.75,
                price: 4.045,
              },
            ],
          },
        ],
      },
      {
        minTerm: 16,
        maxTerm: 20,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.75,
                price: -5.442,
              },
              {
                rate: 4.625,
                price: -4.978,
              },
              {
                rate: 4.5,
                price: -4.229,
              },
              {
                rate: 4.375,
                price: -3.683,
              },
              {
                rate: 4.25,
                price: -3.314,
              },
              {
                rate: 4.125,
                price: -2.862,
              },
              {
                rate: 3.999,
                price: -2.68,
              },
              {
                rate: 3.875,
                price: -2.371,
              },
              {
                rate: 3.75,
                price: -1.949,
              },
              {
                rate: 3.625,
                price: -1.353,
              },
              {
                rate: 3.5,
                price: -1.176,
              },
              {
                rate: 3.375,
                price: -0.739,
              },
              {
                rate: 3.25,
                price: -0.196,
              },
              {
                rate: 3.125,
                price: 0.41,
              },
              {
                rate: 2.999,
                price: 1.261,
              },
              {
                rate: 2.875,
                price: 2.104,
              },
              {
                rate: 2.75,
                price: 2.84,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.75,
                price: -5.347,
              },
              {
                rate: 4.625,
                price: -4.883,
              },
              {
                rate: 4.5,
                price: -4.134,
              },
              {
                rate: 4.375,
                price: -3.588,
              },
              {
                rate: 4.25,
                price: -3.219,
              },
              {
                rate: 4.125,
                price: -2.767,
              },
              {
                rate: 3.999,
                price: -2.585,
              },
              {
                rate: 3.875,
                price: -2.276,
              },
              {
                rate: 3.75,
                price: -1.854,
              },
              {
                rate: 3.625,
                price: -1.258,
              },
              {
                rate: 3.5,
                price: -1.081,
              },
              {
                rate: 3.375,
                price: -0.644,
              },
              {
                rate: 3.25,
                price: -0.101,
              },
              {
                rate: 3.125,
                price: 0.505,
              },
              {
                rate: 2.999,
                price: 1.356,
              },
              {
                rate: 2.875,
                price: 2.199,
              },
              {
                rate: 2.75,
                price: 2.935,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.75,
                price: -5.177,
              },
              {
                rate: 4.625,
                price: -4.713,
              },
              {
                rate: 4.5,
                price: -3.964,
              },
              {
                rate: 4.375,
                price: -3.418,
              },
              {
                rate: 4.25,
                price: -3.049,
              },
              {
                rate: 4.125,
                price: -2.597,
              },
              {
                rate: 3.999,
                price: -2.415,
              },
              {
                rate: 3.875,
                price: -2.106,
              },
              {
                rate: 3.75,
                price: -1.684,
              },
              {
                rate: 3.625,
                price: -1.088,
              },
              {
                rate: 3.5,
                price: -0.911,
              },
              {
                rate: 3.375,
                price: -0.474,
              },
              {
                rate: 3.25,
                price: 0.069,
              },
              {
                rate: 3.125,
                price: 0.675,
              },
              {
                rate: 2.999,
                price: 1.526,
              },
              {
                rate: 2.875,
                price: 2.369,
              },
              {
                rate: 2.75,
                price: 3.105,
              },
            ],
          },
        ],
      },
      {
        minTerm: 11,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.0,
                price: -4.037,
              },
              {
                rate: 3.875,
                price: -3.744,
              },
              {
                rate: 3.75,
                price: -3.359,
              },
              {
                rate: 3.625,
                price: -3.057,
              },
              {
                rate: 3.5,
                price: -2.558,
              },
              {
                rate: 3.375,
                price: -2.378,
              },
              {
                rate: 3.25,
                price: -2.011,
              },
              {
                rate: 3.125,
                price: -1.591,
              },
              {
                rate: 3.0,
                price: -1.064,
              },
              {
                rate: 2.875,
                price: -0.518,
              },
              {
                rate: 2.75,
                price: -0.035,
              },
              {
                rate: 2.625,
                price: 0.433,
              },
              {
                rate: 2.5,
                price: 0.898,
              },
              {
                rate: 2.375,
                price: 1.303,
              },
              {
                rate: 2.25,
                price: 1.862,
              },
              {
                rate: 2.125,
                price: 2.367,
              },
              {
                rate: 2.0,
                price: 2.939,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.0,
                price: -3.942,
              },
              {
                rate: 3.875,
                price: -3.649,
              },
              {
                rate: 3.75,
                price: -3.264,
              },
              {
                rate: 3.625,
                price: -2.962,
              },
              {
                rate: 3.5,
                price: -2.463,
              },
              {
                rate: 3.375,
                price: -2.283,
              },
              {
                rate: 3.25,
                price: -1.916,
              },
              {
                rate: 3.125,
                price: -1.496,
              },
              {
                rate: 3.0,
                price: -0.969,
              },
              {
                rate: 2.875,
                price: -0.423,
              },
              {
                rate: 2.75,
                price: 0.06,
              },
              {
                rate: 2.625,
                price: 0.528,
              },
              {
                rate: 2.5,
                price: 0.993,
              },
              {
                rate: 2.375,
                price: 1.398,
              },
              {
                rate: 2.25,
                price: 1.957,
              },
              {
                rate: 2.125,
                price: 2.462,
              },
              {
                rate: 2.0,
                price: 3.034,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.0,
                price: -3.772,
              },
              {
                rate: 3.875,
                price: -3.479,
              },
              {
                rate: 3.75,
                price: -3.094,
              },
              {
                rate: 3.625,
                price: -2.792,
              },
              {
                rate: 3.5,
                price: -2.293,
              },
              {
                rate: 3.375,
                price: -2.113,
              },
              {
                rate: 3.25,
                price: -1.746,
              },
              {
                rate: 3.125,
                price: -1.326,
              },
              {
                rate: 3.0,
                price: -0.799,
              },
              {
                rate: 2.875,
                price: -0.253,
              },
              {
                rate: 2.75,
                price: 0.23,
              },
              {
                rate: 2.625,
                price: 0.698,
              },
              {
                rate: 2.5,
                price: 1.163,
              },
              {
                rate: 2.375,
                price: 1.568,
              },
              {
                rate: 2.25,
                price: 2.127,
              },
              {
                rate: 2.125,
                price: 2.632,
              },
              {
                rate: 2.0,
                price: 3.204,
              },
            ],
          },
        ],
      },
      {
        minTerm: 16,
        maxTerm: 20,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.0,
                price: -4.337,
              },
              {
                rate: 3.875,
                price: -4.035,
              },
              {
                rate: 3.75,
                price: -3.613,
              },
              {
                rate: 3.625,
                price: -3.266,
              },
              {
                rate: 3.5,
                price: -2.902,
              },
              {
                rate: 3.375,
                price: -2.74,
              },
              {
                rate: 3.25,
                price: -2.371,
              },
              {
                rate: 3.125,
                price: -1.89,
              },
              {
                rate: 3.0,
                price: -1.507,
              },
              {
                rate: 2.875,
                price: -1.213,
              },
              {
                rate: 2.75,
                price: -0.69,
              },
              {
                rate: 2.625,
                price: -0.392,
              },
              {
                rate: 2.5,
                price: 0.11,
              },
              {
                rate: 2.375,
                price: 0.331,
              },
              {
                rate: 2.25,
                price: 0.9,
              },
              {
                rate: 2.125,
                price: 1.397,
              },
              {
                rate: 2.0,
                price: 1.999,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.0,
                price: -4.242,
              },
              {
                rate: 3.875,
                price: -3.94,
              },
              {
                rate: 3.75,
                price: -3.518,
              },
              {
                rate: 3.625,
                price: -3.171,
              },
              {
                rate: 3.5,
                price: -2.807,
              },
              {
                rate: 3.375,
                price: -2.645,
              },
              {
                rate: 3.25,
                price: -2.276,
              },
              {
                rate: 3.125,
                price: -1.795,
              },
              {
                rate: 3.0,
                price: -1.412,
              },
              {
                rate: 2.875,
                price: -1.118,
              },
              {
                rate: 2.75,
                price: -0.595,
              },
              {
                rate: 2.625,
                price: -0.297,
              },
              {
                rate: 2.5,
                price: 0.205,
              },
              {
                rate: 2.375,
                price: 0.426,
              },
              {
                rate: 2.25,
                price: 0.995,
              },
              {
                rate: 2.125,
                price: 1.492,
              },
              {
                rate: 2.0,
                price: 2.094,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.0,
                price: -4.072,
              },
              {
                rate: 3.875,
                price: -3.77,
              },
              {
                rate: 3.75,
                price: -3.348,
              },
              {
                rate: 3.625,
                price: -3.001,
              },
              {
                rate: 3.5,
                price: -2.637,
              },
              {
                rate: 3.375,
                price: -2.475,
              },
              {
                rate: 3.25,
                price: -2.106,
              },
              {
                rate: 3.125,
                price: -1.625,
              },
              {
                rate: 3.0,
                price: -1.242,
              },
              {
                rate: 2.875,
                price: -0.948,
              },
              {
                rate: 2.75,
                price: -0.425,
              },
              {
                rate: 2.625,
                price: -0.127,
              },
              {
                rate: 2.5,
                price: 0.375,
              },
              {
                rate: 2.375,
                price: 0.596,
              },
              {
                rate: 2.25,
                price: 1.165,
              },
              {
                rate: 2.125,
                price: 1.662,
              },
              {
                rate: 2.0,
                price: 2.264,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "Conventional",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: true,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 4.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: true,
    lenderName: "Conforming",
    manufacturedHome: true,
    maxAmount: 647200,
    maxCltv: 95.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 25000,
    minCltv: 0.0,
    minCreditScore: 640,
    minDti: 0,
    minLock: 15,
    minTerm: 8,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 95.0,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 21,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.75,
                price: -4.414,
              },
              {
                rate: 4.625,
                price: -3.927,
              },
              {
                rate: 4.5,
                price: -3.397,
              },
              {
                rate: 4.375,
                price: -3.024,
              },
              {
                rate: 4.25,
                price: -2.653,
              },
              {
                rate: 4.125,
                price: -1.963,
              },
              {
                rate: 3.999,
                price: -1.575,
              },
              {
                rate: 3.875,
                price: -1.304,
              },
              {
                rate: 3.75,
                price: -0.766,
              },
              {
                rate: 3.625,
                price: -0.181,
              },
              {
                rate: 3.5,
                price: 0.278,
              },
              {
                rate: 3.375,
                price: 0.804,
              },
              {
                rate: 3.25,
                price: 1.449,
              },
              {
                rate: 3.125,
                price: 1.964,
              },
              {
                rate: 2.999,
                price: 2.625,
              },
              {
                rate: 2.875,
                price: 3.408,
              },
              {
                rate: 2.75,
                price: 4.11,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.75,
                price: -4.319,
              },
              {
                rate: 4.625,
                price: -3.832,
              },
              {
                rate: 4.5,
                price: -3.302,
              },
              {
                rate: 4.375,
                price: -2.929,
              },
              {
                rate: 4.25,
                price: -2.558,
              },
              {
                rate: 4.125,
                price: -1.868,
              },
              {
                rate: 3.999,
                price: -1.48,
              },
              {
                rate: 3.875,
                price: -1.209,
              },
              {
                rate: 3.75,
                price: -0.671,
              },
              {
                rate: 3.625,
                price: -0.086,
              },
              {
                rate: 3.5,
                price: 0.373,
              },
              {
                rate: 3.375,
                price: 0.899,
              },
              {
                rate: 3.25,
                price: 1.544,
              },
              {
                rate: 3.125,
                price: 2.059,
              },
              {
                rate: 2.999,
                price: 2.72,
              },
              {
                rate: 2.875,
                price: 3.503,
              },
              {
                rate: 2.75,
                price: 4.205,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.75,
                price: -4.149,
              },
              {
                rate: 4.625,
                price: -3.662,
              },
              {
                rate: 4.5,
                price: -3.132,
              },
              {
                rate: 4.375,
                price: -2.759,
              },
              {
                rate: 4.25,
                price: -2.388,
              },
              {
                rate: 4.125,
                price: -1.698,
              },
              {
                rate: 3.999,
                price: -1.31,
              },
              {
                rate: 3.875,
                price: -1.039,
              },
              {
                rate: 3.75,
                price: -0.501,
              },
              {
                rate: 3.625,
                price: 0.084,
              },
              {
                rate: 3.5,
                price: 0.543,
              },
              {
                rate: 3.375,
                price: 1.069,
              },
              {
                rate: 3.25,
                price: 1.714,
              },
              {
                rate: 3.125,
                price: 2.229,
              },
              {
                rate: 2.999,
                price: 2.89,
              },
              {
                rate: 2.875,
                price: 3.673,
              },
              {
                rate: 2.75,
                price: 4.375,
              },
            ],
          },
        ],
      },
      {
        minTerm: 16,
        maxTerm: 20,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.75,
                price: -5.112,
              },
              {
                rate: 4.625,
                price: -4.648,
              },
              {
                rate: 4.5,
                price: -3.899,
              },
              {
                rate: 4.375,
                price: -3.353,
              },
              {
                rate: 4.25,
                price: -2.984,
              },
              {
                rate: 4.125,
                price: -2.532,
              },
              {
                rate: 3.999,
                price: -2.35,
              },
              {
                rate: 3.875,
                price: -2.041,
              },
              {
                rate: 3.75,
                price: -1.619,
              },
              {
                rate: 3.625,
                price: -1.023,
              },
              {
                rate: 3.5,
                price: -0.846,
              },
              {
                rate: 3.375,
                price: -0.409,
              },
              {
                rate: 3.25,
                price: 0.134,
              },
              {
                rate: 3.125,
                price: 0.74,
              },
              {
                rate: 2.999,
                price: 1.591,
              },
              {
                rate: 2.875,
                price: 2.434,
              },
              {
                rate: 2.75,
                price: 3.17,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.75,
                price: -5.017,
              },
              {
                rate: 4.625,
                price: -4.553,
              },
              {
                rate: 4.5,
                price: -3.804,
              },
              {
                rate: 4.375,
                price: -3.258,
              },
              {
                rate: 4.25,
                price: -2.889,
              },
              {
                rate: 4.125,
                price: -2.437,
              },
              {
                rate: 3.999,
                price: -2.255,
              },
              {
                rate: 3.875,
                price: -1.946,
              },
              {
                rate: 3.75,
                price: -1.524,
              },
              {
                rate: 3.625,
                price: -0.928,
              },
              {
                rate: 3.5,
                price: -0.751,
              },
              {
                rate: 3.375,
                price: -0.314,
              },
              {
                rate: 3.25,
                price: 0.229,
              },
              {
                rate: 3.125,
                price: 0.835,
              },
              {
                rate: 2.999,
                price: 1.686,
              },
              {
                rate: 2.875,
                price: 2.529,
              },
              {
                rate: 2.75,
                price: 3.265,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.75,
                price: -4.847,
              },
              {
                rate: 4.625,
                price: -4.383,
              },
              {
                rate: 4.5,
                price: -3.634,
              },
              {
                rate: 4.375,
                price: -3.088,
              },
              {
                rate: 4.25,
                price: -2.719,
              },
              {
                rate: 4.125,
                price: -2.267,
              },
              {
                rate: 3.999,
                price: -2.085,
              },
              {
                rate: 3.875,
                price: -1.776,
              },
              {
                rate: 3.75,
                price: -1.354,
              },
              {
                rate: 3.625,
                price: -0.758,
              },
              {
                rate: 3.5,
                price: -0.581,
              },
              {
                rate: 3.375,
                price: -0.144,
              },
              {
                rate: 3.25,
                price: 0.399,
              },
              {
                rate: 3.125,
                price: 1.005,
              },
              {
                rate: 2.999,
                price: 1.856,
              },
              {
                rate: 2.875,
                price: 2.699,
              },
              {
                rate: 2.75,
                price: 3.435,
              },
            ],
          },
        ],
      },
      {
        minTerm: 11,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.0,
                price: -3.707,
              },
              {
                rate: 3.875,
                price: -3.414,
              },
              {
                rate: 3.75,
                price: -3.029,
              },
              {
                rate: 3.625,
                price: -2.727,
              },
              {
                rate: 3.5,
                price: -2.228,
              },
              {
                rate: 3.375,
                price: -2.048,
              },
              {
                rate: 3.25,
                price: -1.681,
              },
              {
                rate: 3.125,
                price: -1.261,
              },
              {
                rate: 3.0,
                price: -0.734,
              },
              {
                rate: 2.875,
                price: -0.188,
              },
              {
                rate: 2.75,
                price: 0.295,
              },
              {
                rate: 2.625,
                price: 0.763,
              },
              {
                rate: 2.5,
                price: 1.228,
              },
              {
                rate: 2.375,
                price: 1.633,
              },
              {
                rate: 2.25,
                price: 2.192,
              },
              {
                rate: 2.125,
                price: 2.697,
              },
              {
                rate: 2.0,
                price: 3.269,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.0,
                price: -3.612,
              },
              {
                rate: 3.875,
                price: -3.319,
              },
              {
                rate: 3.75,
                price: -2.934,
              },
              {
                rate: 3.625,
                price: -2.632,
              },
              {
                rate: 3.5,
                price: -2.133,
              },
              {
                rate: 3.375,
                price: -1.953,
              },
              {
                rate: 3.25,
                price: -1.586,
              },
              {
                rate: 3.125,
                price: -1.166,
              },
              {
                rate: 3.0,
                price: -0.639,
              },
              {
                rate: 2.875,
                price: -0.093,
              },
              {
                rate: 2.75,
                price: 0.39,
              },
              {
                rate: 2.625,
                price: 0.858,
              },
              {
                rate: 2.5,
                price: 1.323,
              },
              {
                rate: 2.375,
                price: 1.728,
              },
              {
                rate: 2.25,
                price: 2.287,
              },
              {
                rate: 2.125,
                price: 2.792,
              },
              {
                rate: 2.0,
                price: 3.364,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.0,
                price: -3.442,
              },
              {
                rate: 3.875,
                price: -3.149,
              },
              {
                rate: 3.75,
                price: -2.764,
              },
              {
                rate: 3.625,
                price: -2.462,
              },
              {
                rate: 3.5,
                price: -1.963,
              },
              {
                rate: 3.375,
                price: -1.783,
              },
              {
                rate: 3.25,
                price: -1.416,
              },
              {
                rate: 3.125,
                price: -0.996,
              },
              {
                rate: 3.0,
                price: -0.469,
              },
              {
                rate: 2.875,
                price: 0.077,
              },
              {
                rate: 2.75,
                price: 0.56,
              },
              {
                rate: 2.625,
                price: 1.028,
              },
              {
                rate: 2.5,
                price: 1.493,
              },
              {
                rate: 2.375,
                price: 1.898,
              },
              {
                rate: 2.25,
                price: 2.457,
              },
              {
                rate: 2.125,
                price: 2.962,
              },
              {
                rate: 2.0,
                price: 3.534,
              },
            ],
          },
        ],
      },
      {
        minTerm: 8,
        maxTerm: 10,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.0,
                price: -4.007,
              },
              {
                rate: 3.875,
                price: -3.705,
              },
              {
                rate: 3.75,
                price: -3.283,
              },
              {
                rate: 3.625,
                price: -2.936,
              },
              {
                rate: 3.5,
                price: -2.572,
              },
              {
                rate: 3.375,
                price: -2.41,
              },
              {
                rate: 3.25,
                price: -2.041,
              },
              {
                rate: 3.125,
                price: -1.56,
              },
              {
                rate: 3.0,
                price: -1.177,
              },
              {
                rate: 2.875,
                price: -0.883,
              },
              {
                rate: 2.75,
                price: -0.36,
              },
              {
                rate: 2.625,
                price: -0.062,
              },
              {
                rate: 2.5,
                price: 0.44,
              },
              {
                rate: 2.375,
                price: 0.661,
              },
              {
                rate: 2.25,
                price: 1.23,
              },
              {
                rate: 2.125,
                price: 1.727,
              },
              {
                rate: 2.0,
                price: 2.329,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.0,
                price: -3.912,
              },
              {
                rate: 3.875,
                price: -3.61,
              },
              {
                rate: 3.75,
                price: -3.188,
              },
              {
                rate: 3.625,
                price: -2.841,
              },
              {
                rate: 3.5,
                price: -2.477,
              },
              {
                rate: 3.375,
                price: -2.315,
              },
              {
                rate: 3.25,
                price: -1.946,
              },
              {
                rate: 3.125,
                price: -1.465,
              },
              {
                rate: 3.0,
                price: -1.082,
              },
              {
                rate: 2.875,
                price: -0.788,
              },
              {
                rate: 2.75,
                price: -0.265,
              },
              {
                rate: 2.625,
                price: 0.033,
              },
              {
                rate: 2.5,
                price: 0.535,
              },
              {
                rate: 2.375,
                price: 0.756,
              },
              {
                rate: 2.25,
                price: 1.325,
              },
              {
                rate: 2.125,
                price: 1.822,
              },
              {
                rate: 2.0,
                price: 2.424,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.0,
                price: -3.742,
              },
              {
                rate: 3.875,
                price: -3.44,
              },
              {
                rate: 3.75,
                price: -3.018,
              },
              {
                rate: 3.625,
                price: -2.671,
              },
              {
                rate: 3.5,
                price: -2.307,
              },
              {
                rate: 3.375,
                price: -2.145,
              },
              {
                rate: 3.25,
                price: -1.776,
              },
              {
                rate: 3.125,
                price: -1.295,
              },
              {
                rate: 3.0,
                price: -0.912,
              },
              {
                rate: 2.875,
                price: -0.618,
              },
              {
                rate: 2.75,
                price: -0.095,
              },
              {
                rate: 2.625,
                price: 0.203,
              },
              {
                rate: 2.5,
                price: 0.705,
              },
              {
                rate: 2.375,
                price: 0.926,
              },
              {
                rate: 2.25,
                price: 1.495,
              },
              {
                rate: 2.125,
                price: 1.992,
              },
              {
                rate: 2.0,
                price: 2.594,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "Conventional",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: true,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "ignore",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "ignore",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "ignore",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "ignore",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "ignore",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "ignore",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "660",
                  check: "gte",
                },
                {
                  value: "679",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 4.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanTerm",
              check: [
                {
                  value: "15",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "units",
              check: [
                {
                  value: "3",
                  check: "gte",
                },
                {
                  value: "4",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "76.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "subordinatedFinancing",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95",
                  check: "gt",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "97",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
    ],
    cashout: false,
    condo: true,
    investmentProperty: false,
    lenderName: "MI Buster",
    manufacturedHome: true,
    maxAmount: 647200,
    maxCltv: 90.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 200000,
    minCltv: 80.0,
    minCreditScore: 680,
    minDti: 0,
    minLock: 15,
    minTerm: 30,
    minLtv: 80.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 90.0,
    maxTerm: 30,
    maxUnits: 1,
    prices: [
      {
        minTerm: 30,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -2.18,
              },
              {
                rate: 4.0,
                price: -1.86,
              },
              {
                rate: 3.875,
                price: -1.425,
              },
              {
                rate: 3.75,
                price: -0.85,
              },
              {
                rate: 3.625,
                price: -0.265,
              },
              {
                rate: 3.5,
                price: 0.204,
              },
              {
                rate: 3.375,
                price: 0.673,
              },
              {
                rate: 3.25,
                price: 1.023,
              },
              {
                rate: 3.125,
                price: 1.977,
              },
              {
                rate: 3.0,
                price: 2.51,
              },
              {
                rate: 2.875,
                price: 3.21,
              },
              {
                rate: 2.75,
                price: 3.867,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -2.085,
              },
              {
                rate: 4.0,
                price: -1.765,
              },
              {
                rate: 3.875,
                price: -1.33,
              },
              {
                rate: 3.75,
                price: -0.755,
              },
              {
                rate: 3.625,
                price: -0.17,
              },
              {
                rate: 3.5,
                price: 0.299,
              },
              {
                rate: 3.375,
                price: 0.768,
              },
              {
                rate: 3.25,
                price: 1.118,
              },
              {
                rate: 3.125,
                price: 2.072,
              },
              {
                rate: 3.0,
                price: 2.605,
              },
              {
                rate: 2.875,
                price: 3.305,
              },
              {
                rate: 2.75,
                price: 3.962,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -1.915,
              },
              {
                rate: 4.0,
                price: -1.595,
              },
              {
                rate: 3.875,
                price: -1.16,
              },
              {
                rate: 3.75,
                price: -0.585,
              },
              {
                rate: 3.625,
                price: 0.0,
              },
              {
                rate: 3.5,
                price: 0.469,
              },
              {
                rate: 3.375,
                price: 0.938,
              },
              {
                rate: 3.25,
                price: 1.288,
              },
              {
                rate: 3.125,
                price: 2.242,
              },
              {
                rate: 3.0,
                price: 2.775,
              },
              {
                rate: 2.875,
                price: 3.475,
              },
              {
                rate: 2.75,
                price: 4.132,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "Conventional",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: true,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "620",
                  check: "gte",
                },
                {
                  value: "639",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "8",
                  check: "gte",
                },
                {
                  value: "14",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "16",
                  check: "gte",
                },
                {
                  value: "20",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: false,
    lenderName: "Elite Fixed Rate",
    manufacturedHome: true,
    maxAmount: 647200,
    maxCltv: 100.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 125000,
    minCltv: 0.0,
    minCreditScore: 640,
    minDti: 0,
    minLock: 15,
    minTerm: 8,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 100.0,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 16,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -4.137,
              },
              {
                rate: 4.0,
                price: -3.611,
              },
              {
                rate: 3.875,
                price: -3.173,
              },
              {
                rate: 3.75,
                price: -2.884,
              },
              {
                rate: 3.625,
                price: -2.535,
              },
              {
                rate: 3.5,
                price: -2.13,
              },
              {
                rate: 3.375,
                price: -1.608,
              },
              {
                rate: 3.25,
                price: -1.145,
              },
              {
                rate: 3.125,
                price: -1.025,
              },
              {
                rate: 3.0,
                price: -0.479,
              },
              {
                rate: 2.875,
                price: 0.081,
              },
              {
                rate: 2.75,
                price: 0.58,
              },
              {
                rate: 2.625,
                price: 1.106,
              },
              {
                rate: 2.5,
                price: 1.752,
              },
              {
                rate: 2.375,
                price: 2.357,
              },
              {
                rate: 2.25,
                price: 2.923,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -4.042,
              },
              {
                rate: 4.0,
                price: -3.516,
              },
              {
                rate: 3.875,
                price: -3.078,
              },
              {
                rate: 3.75,
                price: -2.789,
              },
              {
                rate: 3.625,
                price: -2.44,
              },
              {
                rate: 3.5,
                price: -2.035,
              },
              {
                rate: 3.375,
                price: -1.513,
              },
              {
                rate: 3.25,
                price: -1.05,
              },
              {
                rate: 3.125,
                price: -0.93,
              },
              {
                rate: 3.0,
                price: -0.384,
              },
              {
                rate: 2.875,
                price: 0.176,
              },
              {
                rate: 2.75,
                price: 0.675,
              },
              {
                rate: 2.625,
                price: 1.201,
              },
              {
                rate: 2.5,
                price: 1.847,
              },
              {
                rate: 2.375,
                price: 2.452,
              },
              {
                rate: 2.25,
                price: 3.018,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.872,
              },
              {
                rate: 4.0,
                price: -3.346,
              },
              {
                rate: 3.875,
                price: -2.908,
              },
              {
                rate: 3.75,
                price: -2.619,
              },
              {
                rate: 3.625,
                price: -2.27,
              },
              {
                rate: 3.5,
                price: -1.865,
              },
              {
                rate: 3.375,
                price: -1.343,
              },
              {
                rate: 3.25,
                price: -0.88,
              },
              {
                rate: 3.125,
                price: -0.76,
              },
              {
                rate: 3.0,
                price: -0.214,
              },
              {
                rate: 2.875,
                price: 0.346,
              },
              {
                rate: 2.75,
                price: 0.845,
              },
              {
                rate: 2.625,
                price: 1.371,
              },
              {
                rate: 2.5,
                price: 2.017,
              },
              {
                rate: 2.375,
                price: 2.622,
              },
              {
                rate: 2.25,
                price: 3.188,
              },
            ],
          },
        ],
      },
      {
        minTerm: 8,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -4.092,
              },
              {
                rate: 4.0,
                price: -3.74,
              },
              {
                rate: 3.875,
                price: -3.596,
              },
              {
                rate: 3.75,
                price: -3.518,
              },
              {
                rate: 3.625,
                price: -2.667,
              },
              {
                rate: 3.5,
                price: -2.602,
              },
              {
                rate: 3.375,
                price: -2.406,
              },
              {
                rate: 3.25,
                price: -2.14,
              },
              {
                rate: 3.125,
                price: -1.793,
              },
              {
                rate: 3.0,
                price: -1.439,
              },
              {
                rate: 2.875,
                price: -1.025,
              },
              {
                rate: 2.75,
                price: -0.622,
              },
              {
                rate: 2.625,
                price: 0.367,
              },
              {
                rate: 2.5,
                price: 0.852,
              },
              {
                rate: 2.375,
                price: 1.301,
              },
              {
                rate: 2.25,
                price: 1.714,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.997,
              },
              {
                rate: 4.0,
                price: -3.645,
              },
              {
                rate: 3.875,
                price: -3.501,
              },
              {
                rate: 3.75,
                price: -3.423,
              },
              {
                rate: 3.625,
                price: -2.572,
              },
              {
                rate: 3.5,
                price: -2.507,
              },
              {
                rate: 3.375,
                price: -2.311,
              },
              {
                rate: 3.25,
                price: -2.045,
              },
              {
                rate: 3.125,
                price: -1.698,
              },
              {
                rate: 3.0,
                price: -1.344,
              },
              {
                rate: 2.875,
                price: -0.93,
              },
              {
                rate: 2.75,
                price: -0.527,
              },
              {
                rate: 2.625,
                price: 0.462,
              },
              {
                rate: 2.5,
                price: 0.947,
              },
              {
                rate: 2.375,
                price: 1.396,
              },
              {
                rate: 2.25,
                price: 1.809,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.827,
              },
              {
                rate: 4.0,
                price: -3.475,
              },
              {
                rate: 3.875,
                price: -3.331,
              },
              {
                rate: 3.75,
                price: -3.253,
              },
              {
                rate: 3.625,
                price: -2.402,
              },
              {
                rate: 3.5,
                price: -2.337,
              },
              {
                rate: 3.375,
                price: -2.141,
              },
              {
                rate: 3.25,
                price: -1.875,
              },
              {
                rate: 3.125,
                price: -1.528,
              },
              {
                rate: 3.0,
                price: -1.174,
              },
              {
                rate: 2.875,
                price: -0.76,
              },
              {
                rate: 2.75,
                price: -0.357,
              },
              {
                rate: 2.625,
                price: 0.632,
              },
              {
                rate: 2.5,
                price: 1.117,
              },
              {
                rate: 2.375,
                price: 1.566,
              },
              {
                rate: 2.25,
                price: 1.979,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "VA",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: false,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "620",
                  check: "gte",
                },
                {
                  value: "639",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "8",
                  check: "gte",
                },
                {
                  value: "14",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "16",
                  check: "gte",
                },
                {
                  value: "20",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: false,
    lenderName: "Fixed Rate",
    manufacturedHome: true,
    maxAmount: 647200,
    maxCltv: 100.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 1,
    minCltv: 0.0,
    minCreditScore: 620,
    minDti: 0,
    minLock: 15,
    minTerm: 8,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 100.0,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 16,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -3.787,
              },
              {
                rate: 4.0,
                price: -3.261,
              },
              {
                rate: 3.875,
                price: -2.823,
              },
              {
                rate: 3.75,
                price: -2.534,
              },
              {
                rate: 3.625,
                price: -2.185,
              },
              {
                rate: 3.5,
                price: -1.78,
              },
              {
                rate: 3.375,
                price: -1.258,
              },
              {
                rate: 3.25,
                price: -0.795,
              },
              {
                rate: 3.125,
                price: -0.675,
              },
              {
                rate: 3.0,
                price: -0.129,
              },
              {
                rate: 2.875,
                price: 0.431,
              },
              {
                rate: 2.75,
                price: 0.93,
              },
              {
                rate: 2.625,
                price: 1.456,
              },
              {
                rate: 2.5,
                price: 2.102,
              },
              {
                rate: 2.375,
                price: 2.707,
              },
              {
                rate: 2.25,
                price: 3.273,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.692,
              },
              {
                rate: 4.0,
                price: -3.166,
              },
              {
                rate: 3.875,
                price: -2.728,
              },
              {
                rate: 3.75,
                price: -2.439,
              },
              {
                rate: 3.625,
                price: -2.09,
              },
              {
                rate: 3.5,
                price: -1.685,
              },
              {
                rate: 3.375,
                price: -1.163,
              },
              {
                rate: 3.25,
                price: -0.7,
              },
              {
                rate: 3.125,
                price: -0.58,
              },
              {
                rate: 3.0,
                price: -0.034,
              },
              {
                rate: 2.875,
                price: 0.526,
              },
              {
                rate: 2.75,
                price: 1.025,
              },
              {
                rate: 2.625,
                price: 1.551,
              },
              {
                rate: 2.5,
                price: 2.197,
              },
              {
                rate: 2.375,
                price: 2.802,
              },
              {
                rate: 2.25,
                price: 3.368,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.522,
              },
              {
                rate: 4.0,
                price: -2.996,
              },
              {
                rate: 3.875,
                price: -2.558,
              },
              {
                rate: 3.75,
                price: -2.269,
              },
              {
                rate: 3.625,
                price: -1.92,
              },
              {
                rate: 3.5,
                price: -1.515,
              },
              {
                rate: 3.375,
                price: -0.993,
              },
              {
                rate: 3.25,
                price: -0.53,
              },
              {
                rate: 3.125,
                price: -0.41,
              },
              {
                rate: 3.0,
                price: 0.136,
              },
              {
                rate: 2.875,
                price: 0.696,
              },
              {
                rate: 2.75,
                price: 1.195,
              },
              {
                rate: 2.625,
                price: 1.721,
              },
              {
                rate: 2.5,
                price: 2.367,
              },
              {
                rate: 2.375,
                price: 2.972,
              },
              {
                rate: 2.25,
                price: 3.538,
              },
            ],
          },
        ],
      },
      {
        minTerm: 8,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -3.742,
              },
              {
                rate: 4.0,
                price: -3.39,
              },
              {
                rate: 3.875,
                price: -3.246,
              },
              {
                rate: 3.75,
                price: -3.168,
              },
              {
                rate: 3.625,
                price: -2.317,
              },
              {
                rate: 3.5,
                price: -2.252,
              },
              {
                rate: 3.375,
                price: -2.066,
              },
              {
                rate: 3.25,
                price: -1.79,
              },
              {
                rate: 3.125,
                price: -1.463,
              },
              {
                rate: 3.0,
                price: -1.109,
              },
              {
                rate: 2.875,
                price: -0.675,
              },
              {
                rate: 2.75,
                price: -0.272,
              },
              {
                rate: 2.625,
                price: 0.717,
              },
              {
                rate: 2.5,
                price: 1.202,
              },
              {
                rate: 2.375,
                price: 1.651,
              },
              {
                rate: 2.25,
                price: 2.064,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.647,
              },
              {
                rate: 4.0,
                price: -3.295,
              },
              {
                rate: 3.875,
                price: -3.151,
              },
              {
                rate: 3.75,
                price: -3.073,
              },
              {
                rate: 3.625,
                price: -2.222,
              },
              {
                rate: 3.5,
                price: -2.157,
              },
              {
                rate: 3.375,
                price: -1.971,
              },
              {
                rate: 3.25,
                price: -1.695,
              },
              {
                rate: 3.125,
                price: -1.368,
              },
              {
                rate: 3.0,
                price: -1.014,
              },
              {
                rate: 2.875,
                price: -0.58,
              },
              {
                rate: 2.75,
                price: -0.177,
              },
              {
                rate: 2.625,
                price: 0.812,
              },
              {
                rate: 2.5,
                price: 1.297,
              },
              {
                rate: 2.375,
                price: 1.746,
              },
              {
                rate: 2.25,
                price: 2.159,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.477,
              },
              {
                rate: 4.0,
                price: -3.125,
              },
              {
                rate: 3.875,
                price: -2.981,
              },
              {
                rate: 3.75,
                price: -2.903,
              },
              {
                rate: 3.625,
                price: -2.052,
              },
              {
                rate: 3.5,
                price: -1.987,
              },
              {
                rate: 3.375,
                price: -1.801,
              },
              {
                rate: 3.25,
                price: -1.525,
              },
              {
                rate: 3.125,
                price: -1.198,
              },
              {
                rate: 3.0,
                price: -0.844,
              },
              {
                rate: 2.875,
                price: -0.41,
              },
              {
                rate: 2.75,
                price: -0.007,
              },
              {
                rate: 2.625,
                price: 0.982,
              },
              {
                rate: 2.5,
                price: 1.467,
              },
              {
                rate: 2.375,
                price: 1.916,
              },
              {
                rate: 2.25,
                price: 2.329,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "VA",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: false,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "620",
                  check: "gte",
                },
                {
                  value: "639",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "8",
                  check: "gte",
                },
                {
                  value: "14",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "16",
                  check: "gte",
                },
                {
                  value: "20",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: false,
    lenderName: "Elite Fixed Rate",
    manufacturedHome: true,
    maxAmount: 420680,
    maxCltv: 96.5,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 125000,
    minCltv: 0.0,
    minCreditScore: 640,
    minDti: 0,
    minLock: 15,
    minTerm: 8,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 96.5,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 16,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -3.627,
              },
              {
                rate: 4.0,
                price: -3.101,
              },
              {
                rate: 3.875,
                price: -2.663,
              },
              {
                rate: 3.75,
                price: -2.374,
              },
              {
                rate: 3.625,
                price: -2.025,
              },
              {
                rate: 3.5,
                price: -1.62,
              },
              {
                rate: 3.375,
                price: -1.098,
              },
              {
                rate: 3.25,
                price: -0.635,
              },
              {
                rate: 3.125,
                price: -0.515,
              },
              {
                rate: 3.0,
                price: 0.031,
              },
              {
                rate: 2.875,
                price: 0.591,
              },
              {
                rate: 2.75,
                price: 1.09,
              },
              {
                rate: 2.625,
                price: 1.616,
              },
              {
                rate: 2.5,
                price: 2.262,
              },
              {
                rate: 2.375,
                price: 2.867,
              },
              {
                rate: 2.25,
                price: 3.433,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.532,
              },
              {
                rate: 4.0,
                price: -3.006,
              },
              {
                rate: 3.875,
                price: -2.568,
              },
              {
                rate: 3.75,
                price: -2.279,
              },
              {
                rate: 3.625,
                price: -1.93,
              },
              {
                rate: 3.5,
                price: -1.525,
              },
              {
                rate: 3.375,
                price: -1.003,
              },
              {
                rate: 3.25,
                price: -0.54,
              },
              {
                rate: 3.125,
                price: -0.42,
              },
              {
                rate: 3.0,
                price: 0.126,
              },
              {
                rate: 2.875,
                price: 0.686,
              },
              {
                rate: 2.75,
                price: 1.185,
              },
              {
                rate: 2.625,
                price: 1.711,
              },
              {
                rate: 2.5,
                price: 2.357,
              },
              {
                rate: 2.375,
                price: 2.962,
              },
              {
                rate: 2.25,
                price: 3.528,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.362,
              },
              {
                rate: 4.0,
                price: -2.836,
              },
              {
                rate: 3.875,
                price: -2.398,
              },
              {
                rate: 3.75,
                price: -2.109,
              },
              {
                rate: 3.625,
                price: -1.76,
              },
              {
                rate: 3.5,
                price: -1.355,
              },
              {
                rate: 3.375,
                price: -0.833,
              },
              {
                rate: 3.25,
                price: -0.37,
              },
              {
                rate: 3.125,
                price: -0.25,
              },
              {
                rate: 3.0,
                price: 0.296,
              },
              {
                rate: 2.875,
                price: 0.856,
              },
              {
                rate: 2.75,
                price: 1.355,
              },
              {
                rate: 2.625,
                price: 1.881,
              },
              {
                rate: 2.5,
                price: 2.527,
              },
              {
                rate: 2.375,
                price: 3.132,
              },
              {
                rate: 2.25,
                price: 3.698,
              },
            ],
          },
        ],
      },
      {
        minTerm: 8,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -3.582,
              },
              {
                rate: 4.0,
                price: -3.23,
              },
              {
                rate: 3.875,
                price: -3.086,
              },
              {
                rate: 3.75,
                price: -3.008,
              },
              {
                rate: 3.625,
                price: -2.157,
              },
              {
                rate: 3.5,
                price: -2.092,
              },
              {
                rate: 3.375,
                price: -1.896,
              },
              {
                rate: 3.25,
                price: -1.63,
              },
              {
                rate: 3.125,
                price: -1.263,
              },
              {
                rate: 3.0,
                price: -0.909,
              },
              {
                rate: 2.875,
                price: -0.495,
              },
              {
                rate: 2.75,
                price: -0.092,
              },
              {
                rate: 2.625,
                price: 0.897,
              },
              {
                rate: 2.5,
                price: 1.362,
              },
              {
                rate: 2.375,
                price: 1.811,
              },
              {
                rate: 2.25,
                price: 2.224,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.487,
              },
              {
                rate: 4.0,
                price: -3.135,
              },
              {
                rate: 3.875,
                price: -2.991,
              },
              {
                rate: 3.75,
                price: -2.913,
              },
              {
                rate: 3.625,
                price: -2.062,
              },
              {
                rate: 3.5,
                price: -1.997,
              },
              {
                rate: 3.375,
                price: -1.801,
              },
              {
                rate: 3.25,
                price: -1.535,
              },
              {
                rate: 3.125,
                price: -1.168,
              },
              {
                rate: 3.0,
                price: -0.814,
              },
              {
                rate: 2.875,
                price: -0.4,
              },
              {
                rate: 2.75,
                price: 0.003,
              },
              {
                rate: 2.625,
                price: 0.992,
              },
              {
                rate: 2.5,
                price: 1.457,
              },
              {
                rate: 2.375,
                price: 1.906,
              },
              {
                rate: 2.25,
                price: 2.319,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.317,
              },
              {
                rate: 4.0,
                price: -2.965,
              },
              {
                rate: 3.875,
                price: -2.821,
              },
              {
                rate: 3.75,
                price: -2.743,
              },
              {
                rate: 3.625,
                price: -1.892,
              },
              {
                rate: 3.5,
                price: -1.827,
              },
              {
                rate: 3.375,
                price: -1.631,
              },
              {
                rate: 3.25,
                price: -1.365,
              },
              {
                rate: 3.125,
                price: -0.998,
              },
              {
                rate: 3.0,
                price: -0.644,
              },
              {
                rate: 2.875,
                price: -0.23,
              },
              {
                rate: 2.75,
                price: 0.173,
              },
              {
                rate: 2.625,
                price: 1.162,
              },
              {
                rate: 2.5,
                price: 1.627,
              },
              {
                rate: 2.375,
                price: 2.076,
              },
              {
                rate: 2.25,
                price: 2.489,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "FHA",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: false,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "lt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "60000",
                  check: "gte",
                },
                {
                  value: "74999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanAmount",
              check: [
                {
                  value: "75000",
                  check: "gte",
                },
                {
                  value: "99999",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "640",
                  check: "gte",
                },
                {
                  value: "659",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "creditScore",
              check: [
                {
                  value: "620",
                  check: "gte",
                },
                {
                  value: "639",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "8",
                  check: "gte",
                },
                {
                  value: "14",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "loanTerm",
              check: [
                {
                  value: "16",
                  check: "gte",
                },
                {
                  value: "20",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "manufacturedHome",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: false,
    lenderName: "Fixed Rate",
    manufacturedHome: true,
    maxAmount: 420680,
    maxCltv: 96.5,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 1,
    minCltv: 0.0,
    minCreditScore: 620,
    minDti: 0,
    minLock: 15,
    minTerm: 8,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 96.5,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 16,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -3.277,
              },
              {
                rate: 4.0,
                price: -2.751,
              },
              {
                rate: 3.875,
                price: -2.313,
              },
              {
                rate: 3.75,
                price: -2.024,
              },
              {
                rate: 3.625,
                price: -1.675,
              },
              {
                rate: 3.5,
                price: -1.27,
              },
              {
                rate: 3.375,
                price: -0.748,
              },
              {
                rate: 3.25,
                price: -0.285,
              },
              {
                rate: 3.125,
                price: -0.165,
              },
              {
                rate: 3.0,
                price: 0.381,
              },
              {
                rate: 2.875,
                price: 0.941,
              },
              {
                rate: 2.75,
                price: 1.44,
              },
              {
                rate: 2.625,
                price: 1.966,
              },
              {
                rate: 2.5,
                price: 2.612,
              },
              {
                rate: 2.375,
                price: 3.217,
              },
              {
                rate: 2.25,
                price: 3.783,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.182,
              },
              {
                rate: 4.0,
                price: -2.656,
              },
              {
                rate: 3.875,
                price: -2.218,
              },
              {
                rate: 3.75,
                price: -1.929,
              },
              {
                rate: 3.625,
                price: -1.58,
              },
              {
                rate: 3.5,
                price: -1.175,
              },
              {
                rate: 3.375,
                price: -0.653,
              },
              {
                rate: 3.25,
                price: -0.19,
              },
              {
                rate: 3.125,
                price: -0.07,
              },
              {
                rate: 3.0,
                price: 0.476,
              },
              {
                rate: 2.875,
                price: 1.036,
              },
              {
                rate: 2.75,
                price: 1.535,
              },
              {
                rate: 2.625,
                price: 2.061,
              },
              {
                rate: 2.5,
                price: 2.707,
              },
              {
                rate: 2.375,
                price: 3.312,
              },
              {
                rate: 2.25,
                price: 3.878,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -3.012,
              },
              {
                rate: 4.0,
                price: -2.486,
              },
              {
                rate: 3.875,
                price: -2.048,
              },
              {
                rate: 3.75,
                price: -1.759,
              },
              {
                rate: 3.625,
                price: -1.41,
              },
              {
                rate: 3.5,
                price: -1.005,
              },
              {
                rate: 3.375,
                price: -0.483,
              },
              {
                rate: 3.25,
                price: -0.02,
              },
              {
                rate: 3.125,
                price: 0.1,
              },
              {
                rate: 3.0,
                price: 0.646,
              },
              {
                rate: 2.875,
                price: 1.206,
              },
              {
                rate: 2.75,
                price: 1.705,
              },
              {
                rate: 2.625,
                price: 2.231,
              },
              {
                rate: 2.5,
                price: 2.877,
              },
              {
                rate: 2.375,
                price: 3.482,
              },
              {
                rate: 2.25,
                price: 4.048,
              },
            ],
          },
        ],
      },
      {
        minTerm: 8,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.125,
                price: -3.232,
              },
              {
                rate: 4.0,
                price: -2.88,
              },
              {
                rate: 3.875,
                price: -2.736,
              },
              {
                rate: 3.75,
                price: -2.658,
              },
              {
                rate: 3.625,
                price: -1.807,
              },
              {
                rate: 3.5,
                price: -1.742,
              },
              {
                rate: 3.375,
                price: -1.546,
              },
              {
                rate: 3.25,
                price: -1.28,
              },
              {
                rate: 3.125,
                price: -0.913,
              },
              {
                rate: 3.0,
                price: -0.559,
              },
              {
                rate: 2.875,
                price: -0.145,
              },
              {
                rate: 2.75,
                price: 0.258,
              },
              {
                rate: 2.625,
                price: 1.247,
              },
              {
                rate: 2.5,
                price: 1.712,
              },
              {
                rate: 2.375,
                price: 2.161,
              },
              {
                rate: 2.25,
                price: 2.574,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.125,
                price: -3.137,
              },
              {
                rate: 4.0,
                price: -2.785,
              },
              {
                rate: 3.875,
                price: -2.641,
              },
              {
                rate: 3.75,
                price: -2.563,
              },
              {
                rate: 3.625,
                price: -1.712,
              },
              {
                rate: 3.5,
                price: -1.647,
              },
              {
                rate: 3.375,
                price: -1.451,
              },
              {
                rate: 3.25,
                price: -1.185,
              },
              {
                rate: 3.125,
                price: -0.818,
              },
              {
                rate: 3.0,
                price: -0.464,
              },
              {
                rate: 2.875,
                price: -0.05,
              },
              {
                rate: 2.75,
                price: 0.353,
              },
              {
                rate: 2.625,
                price: 1.342,
              },
              {
                rate: 2.5,
                price: 1.807,
              },
              {
                rate: 2.375,
                price: 2.256,
              },
              {
                rate: 2.25,
                price: 2.669,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.125,
                price: -2.967,
              },
              {
                rate: 4.0,
                price: -2.615,
              },
              {
                rate: 3.875,
                price: -2.471,
              },
              {
                rate: 3.75,
                price: -2.393,
              },
              {
                rate: 3.625,
                price: -1.542,
              },
              {
                rate: 3.5,
                price: -1.477,
              },
              {
                rate: 3.375,
                price: -1.281,
              },
              {
                rate: 3.25,
                price: -1.015,
              },
              {
                rate: 3.125,
                price: -0.648,
              },
              {
                rate: 3.0,
                price: -0.294,
              },
              {
                rate: 2.875,
                price: 0.12,
              },
              {
                rate: 2.75,
                price: 0.523,
              },
              {
                rate: 2.625,
                price: 1.512,
              },
              {
                rate: 2.5,
                price: 1.977,
              },
              {
                rate: 2.375,
                price: 2.426,
              },
              {
                rate: 2.25,
                price: 2.839,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "FHA",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: false,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.225,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.225,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.85,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.85,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "90",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "90.01",
                  check: "gte",
                },
                {
                  value: "95",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.7,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 4.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "95.01",
                  check: "gte",
                },
                {
                  value: "96.5",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanAmount",
              check: [
                {
                  value: "1500000",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: true,
    lenderName: "Prime Jumbo Max 30-Year",
    manufacturedHome: false,
    maxAmount: 2000000,
    maxCltv: 96.5,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 647201,
    minCltv: 0.0,
    minCreditScore: 720,
    minDti: 0,
    minLock: 15,
    minTerm: 30,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 96.5,
    maxTerm: 30,
    maxUnits: 4,
    prices: [
      {
        minTerm: 30,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 5.125,
                price: -2.498,
              },
              {
                rate: 5.0,
                price: -2.098,
              },
              {
                rate: 4.875,
                price: -1.698,
              },
              {
                rate: 4.75,
                price: -1.298,
              },
              {
                rate: 4.625,
                price: -1.27,
              },
              {
                rate: 4.5,
                price: -1.263,
              },
              {
                rate: 4.375,
                price: -1.236,
              },
              {
                rate: 4.25,
                price: -1.048,
              },
              {
                rate: 4.125,
                price: -0.652,
              },
              {
                rate: 4.0,
                price: -0.256,
              },
              {
                rate: 3.875,
                price: 0.258,
              },
              {
                rate: 3.75,
                price: 0.772,
              },
              {
                rate: 3.625,
                price: 1.41,
              },
              {
                rate: 3.5,
                price: 2.048,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 5.125,
                price: -2.403,
              },
              {
                rate: 5.0,
                price: -2.003,
              },
              {
                rate: 4.875,
                price: -1.603,
              },
              {
                rate: 4.75,
                price: -1.203,
              },
              {
                rate: 4.625,
                price: -1.175,
              },
              {
                rate: 4.5,
                price: -1.168,
              },
              {
                rate: 4.375,
                price: -1.141,
              },
              {
                rate: 4.25,
                price: -0.953,
              },
              {
                rate: 4.125,
                price: -0.557,
              },
              {
                rate: 4.0,
                price: -0.161,
              },
              {
                rate: 3.875,
                price: 0.353,
              },
              {
                rate: 3.75,
                price: 0.867,
              },
              {
                rate: 3.625,
                price: 1.505,
              },
              {
                rate: 3.5,
                price: 2.143,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 5.125,
                price: -2.233,
              },
              {
                rate: 5.0,
                price: -1.833,
              },
              {
                rate: 4.875,
                price: -1.433,
              },
              {
                rate: 4.75,
                price: -1.033,
              },
              {
                rate: 4.625,
                price: -1.005,
              },
              {
                rate: 4.5,
                price: -0.998,
              },
              {
                rate: 4.375,
                price: -0.971,
              },
              {
                rate: 4.25,
                price: -0.783,
              },
              {
                rate: 4.125,
                price: -0.387,
              },
              {
                rate: 4.0,
                price: 0.009,
              },
              {
                rate: 3.875,
                price: 0.523,
              },
              {
                rate: 3.75,
                price: 1.037,
              },
              {
                rate: 3.625,
                price: 1.675,
              },
              {
                rate: 3.5,
                price: 2.313,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "Jumbo",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: true,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.05,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.3,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.05,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.05,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.15,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.3,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.45,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.05,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.05,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.4,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.7,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.3,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.15,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.225,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.85,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.2,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "800",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "799",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.6,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.1,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 2.85,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 3.35,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "units",
              check: [
                {
                  value: "2",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "condo",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "selfEmployed",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: true,
    lenderName: "Prime Jumbo 30-Year (Released)",
    manufacturedHome: false,
    maxAmount: 3000000,
    maxCltv: 90.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 647201,
    minCltv: 0.0,
    minCreditScore: 680,
    minDti: 0,
    minLock: 15,
    minTerm: 30,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 90.0,
    maxTerm: 30,
    maxUnits: 2,
    prices: [
      {
        minTerm: 30,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.75,
                price: -1.688,
              },
              {
                rate: 4.625,
                price: -1.446,
              },
              {
                rate: 4.5,
                price: -1.227,
              },
              {
                rate: 4.375,
                price: -0.932,
              },
              {
                rate: 4.25,
                price: -0.648,
              },
              {
                rate: 4.125,
                price: -0.272,
              },
              {
                rate: 4.0,
                price: 0.071,
              },
              {
                rate: 3.875,
                price: 0.549,
              },
              {
                rate: 3.75,
                price: 1.056,
              },
              {
                rate: 3.625,
                price: 1.459,
              },
              {
                rate: 3.5,
                price: 1.84,
              },
              {
                rate: 3.375,
                price: 2.349,
              },
              {
                rate: 3.25,
                price: 2.967,
              },
              {
                rate: 3.125,
                price: 3.718,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.75,
                price: -1.593,
              },
              {
                rate: 4.625,
                price: -1.351,
              },
              {
                rate: 4.5,
                price: -1.132,
              },
              {
                rate: 4.375,
                price: -0.837,
              },
              {
                rate: 4.25,
                price: -0.553,
              },
              {
                rate: 4.125,
                price: -0.177,
              },
              {
                rate: 4.0,
                price: 0.166,
              },
              {
                rate: 3.875,
                price: 0.644,
              },
              {
                rate: 3.75,
                price: 1.151,
              },
              {
                rate: 3.625,
                price: 1.554,
              },
              {
                rate: 3.5,
                price: 1.935,
              },
              {
                rate: 3.375,
                price: 2.444,
              },
              {
                rate: 3.25,
                price: 3.062,
              },
              {
                rate: 3.125,
                price: 3.813,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.75,
                price: -1.423,
              },
              {
                rate: 4.625,
                price: -1.181,
              },
              {
                rate: 4.5,
                price: -0.962,
              },
              {
                rate: 4.375,
                price: -0.667,
              },
              {
                rate: 4.25,
                price: -0.383,
              },
              {
                rate: 4.125,
                price: -0.007,
              },
              {
                rate: 4.0,
                price: 0.336,
              },
              {
                rate: 3.875,
                price: 0.814,
              },
              {
                rate: 3.75,
                price: 1.321,
              },
              {
                rate: 3.625,
                price: 1.724,
              },
              {
                rate: 3.5,
                price: 2.105,
              },
              {
                rate: 3.375,
                price: 2.614,
              },
              {
                rate: 3.25,
                price: 3.232,
              },
              {
                rate: 3.125,
                price: 3.983,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "Jumbo",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: true,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
  {
    adjustments: [
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "55.01",
                  check: "gte",
                },
                {
                  value: "60",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "60.01",
                  check: "gte",
                },
                {
                  value: "65",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "65.01",
                  check: "gte",
                },
                {
                  value: "70",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "70.01",
                  check: "gte",
                },
                {
                  value: "75",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: -0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "75.01",
                  check: "gte",
                },
                {
                  value: "80",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.25,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.875,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "80.01",
                  check: "gte",
                },
                {
                  value: "85",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "780",
                  check: "gte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.125,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "760",
                  check: "gte",
                },
                {
                  value: "779",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "740",
                  check: "gte",
                },
                {
                  value: "759",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.5,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "720",
                  check: "gte",
                },
                {
                  value: "739",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "700",
                  check: "gte",
                },
                {
                  value: "719",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "creditScore",
              check: [
                {
                  value: "680",
                  check: "gte",
                },
                {
                  value: "699",
                  check: "lte",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "loanToValue",
              check: [
                {
                  value: "80",
                  check: "gt",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.0,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "investmentProperty",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: null,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "secondaryResidence",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.75,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "cashout",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 1.625,
      },
      {
        condition: {
          conditions: [
            {
              field: "combinedLoanToValue",
              check: [
                {
                  value: "85.01",
                  check: "gte",
                },
                {
                  value: "89.99",
                  check: "lte",
                },
              ],
            },
            {
              field: "rateTermOnly",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
            {
              field: "refinance",
              check: [
                {
                  value: "true",
                  check: "eq",
                },
              ],
            },
          ],
          join: "and",
        },
        value: 0.375,
      },
    ],
    cashout: true,
    condo: true,
    investmentProperty: true,
    lenderName: "Prime Jumbo",
    manufacturedHome: false,
    maxAmount: 3000000,
    maxCltv: 90.0,
    maxCreditScore: 10000,
    maxDti: 43,
    minAmount: 647201,
    minCltv: 0.0,
    minCreditScore: 680,
    minDti: 0,
    minLock: 15,
    minTerm: 15,
    minLtv: 0.0,
    minUnits: 1,
    maxLock: 45,
    maxLtv: 90.0,
    maxTerm: 30,
    maxUnits: 2,
    prices: [
      {
        minTerm: 30,
        maxTerm: 30,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 4.875,
                price: -0.459,
              },
              {
                rate: 4.75,
                price: -0.431,
              },
              {
                rate: 4.625,
                price: -0.405,
              },
              {
                rate: 4.5,
                price: -0.335,
              },
              {
                rate: 4.375,
                price: -0.227,
              },
              {
                rate: 4.25,
                price: -0.071,
              },
              {
                rate: 4.125,
                price: 0.152,
              },
              {
                rate: 4.0,
                price: 0.523,
              },
              {
                rate: 3.875,
                price: 0.922,
              },
              {
                rate: 3.75,
                price: 1.581,
              },
              {
                rate: 3.625,
                price: 2.268,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 4.875,
                price: -0.364,
              },
              {
                rate: 4.75,
                price: -0.336,
              },
              {
                rate: 4.625,
                price: -0.31,
              },
              {
                rate: 4.5,
                price: -0.24,
              },
              {
                rate: 4.375,
                price: -0.132,
              },
              {
                rate: 4.25,
                price: 0.024,
              },
              {
                rate: 4.125,
                price: 0.247,
              },
              {
                rate: 4.0,
                price: 0.618,
              },
              {
                rate: 3.875,
                price: 1.017,
              },
              {
                rate: 3.75,
                price: 1.676,
              },
              {
                rate: 3.625,
                price: 2.363,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 4.875,
                price: -0.194,
              },
              {
                rate: 4.75,
                price: -0.166,
              },
              {
                rate: 4.625,
                price: -0.14,
              },
              {
                rate: 4.5,
                price: -0.07,
              },
              {
                rate: 4.375,
                price: 0.038,
              },
              {
                rate: 4.25,
                price: 0.194,
              },
              {
                rate: 4.125,
                price: 0.417,
              },
              {
                rate: 4.0,
                price: 0.788,
              },
              {
                rate: 3.875,
                price: 1.187,
              },
              {
                rate: 3.75,
                price: 1.846,
              },
              {
                rate: 3.625,
                price: 2.533,
              },
            ],
          },
        ],
      },
      {
        minTerm: 15,
        maxTerm: 15,
        locks: [
          {
            lock: 15,
            prices: [
              {
                rate: 3.75,
                price: 0.314,
              },
              {
                rate: 3.625,
                price: 0.483,
              },
              {
                rate: 3.5,
                price: 0.694,
              },
              {
                rate: 3.375,
                price: 0.935,
              },
              {
                rate: 3.25,
                price: 1.211,
              },
              {
                rate: 3.125,
                price: 1.488,
              },
              {
                rate: 2.999,
                price: 1.858,
              },
              {
                rate: 2.875,
                price: 2.146,
              },
              {
                rate: 2.75,
                price: 2.512,
              },
              {
                rate: 2.625,
                price: 2.935,
              },
              {
                rate: 2.5,
                price: 3.435,
              },
            ],
          },
          {
            lock: 30,
            prices: [
              {
                rate: 3.75,
                price: 0.409,
              },
              {
                rate: 3.625,
                price: 0.578,
              },
              {
                rate: 3.5,
                price: 0.789,
              },
              {
                rate: 3.375,
                price: 1.03,
              },
              {
                rate: 3.25,
                price: 1.306,
              },
              {
                rate: 3.125,
                price: 1.583,
              },
              {
                rate: 2.999,
                price: 1.953,
              },
              {
                rate: 2.875,
                price: 2.241,
              },
              {
                rate: 2.75,
                price: 2.607,
              },
              {
                rate: 2.625,
                price: 3.03,
              },
              {
                rate: 2.5,
                price: 3.53,
              },
            ],
          },
          {
            lock: 45,
            prices: [
              {
                rate: 3.75,
                price: 0.579,
              },
              {
                rate: 3.625,
                price: 0.748,
              },
              {
                rate: 3.5,
                price: 0.959,
              },
              {
                rate: 3.375,
                price: 1.2,
              },
              {
                rate: 3.25,
                price: 1.476,
              },
              {
                rate: 3.125,
                price: 1.753,
              },
              {
                rate: 2.999,
                price: 2.123,
              },
              {
                rate: 2.875,
                price: 2.411,
              },
              {
                rate: 2.75,
                price: 2.777,
              },
              {
                rate: 2.625,
                price: 3.2,
              },
              {
                rate: 2.5,
                price: 3.7,
              },
            ],
          },
        ],
      },
    ],
    primaryResidence: true,
    productType: "Jumbo",
    purchase: true,
    rateTermOnly: true,
    refinance: true,
    secondaryResidence: true,
    singleFamilyHome: true,
    subordinatedFinancing: true,
    townhome: true,
  },
];
