module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 1, // This enables CSS nesting among other features
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
