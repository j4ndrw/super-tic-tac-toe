import { EdgeType } from "../types";

function assertNumValid(
  num: number
): asserts num is 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 {
  if (num < 0 || num > 8)
    throw new Error("The tile index must be a number between 0 and 8");
}

export const numToEdgeType = (num: number): EdgeType => {
  assertNumValid(num);

  switch (num) {
    case 0:
      return "top-left";
    case 1:
      return "top-mid";
    case 2:
      return "top-right";
    case 3:
      return "left";
    case 4:
      return "mid";
    case 5:
      return "right";
    case 6:
      return "bottom-left";
    case 7:
      return "bottom-mid";
    case 8:
      return "bottom-right";
  }
};
