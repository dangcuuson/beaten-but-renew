import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
// import { sharedTWThemeExtend } from "../config/sharedTWThemeConfig";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // https://github.com/dcastil/tailwind-merge/issues/297
      // so that tw can resolve text-color and text-fontsize correctly
      //   "font-size": Object.keys(sharedTWThemeExtend.fontSize || {}).map(
      //     (key) => `text-${key}`
      //   ),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
