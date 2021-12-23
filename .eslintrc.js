/*
 * @Author: Y
 * @Date: 2021-09-06 16:40:46
 * @LastEditTime: 2021-12-23 22:34:24
 * @LastEditors: Y
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
