module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    "react-native-reanimated/plugin",

    // 👇 OBLIGATORIO PARA SDK 53
    ["@babel/plugin-transform-react-jsx", {
      "runtime": "automatic"
    }]
  ]
};
