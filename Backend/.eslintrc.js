module.exports ={
    env: {
        es2016 :true,
        node: true,
    },
    extends: ['eslint:recommended','plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parseroption: {
        ecmaVersion: 'es2016',
        sourceTypes: 'modeule',
    },
    plugins: ['@tyepscript-eslint'],
}