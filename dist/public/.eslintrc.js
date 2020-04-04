module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
    },
    "rules": {
        "semi": ["error", "never"],
        "max-len": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-filename-extension": 0,
        "linebreak-style": [0, "error", "windows"], // todo: might need change for mac...
        "no-confusing-arrow": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
    },
};