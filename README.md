## Why?
Boilerplate commerce store that can be used with BigCommerce GraphQl API, to quickly make a shopping experance.

## What does this application do?
The application is fetching products from a demo store and has complete checkout flow using BigCommerce checkout SDK.

## Contributing
George FitzGibbons, Patrick Williams, Ashley McKemie

### Running the project
To get started you will need to have a BigCommerce Store.

You will need to have +v10 node.

Once you have a store generate an API key with full permissions

https://support.bigcommerce.com/s/article/Store-API-Accounts

Create a `.env` file in the root directory and add the following with your secrets:

```dosini
BC_TOKEN
BC_KEY
```

Now you're ready to go!

```bash
npm install
```

To run locally
```bash
npm run dev
```
