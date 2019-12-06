## Why?
Boilerplate commerce store that can be used with BigCommerce GraphQl API, to quickly make a shopping experance.

## What does this application do?
The application is fetching products from a demo store and has complete checkout flow using BigCommerce checkout SDK.

## Contributing
George FitzGibbons, Patrick Williams, Ashley McKemie

### Running the project
To get started you will need to have a BigCommerce Store.

You will need to have +v10 node.

Once you have a store generate an GraphQl API key with full permissions
https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview

```
GraphQL Storefront API requests are authenticated with tokens sent via the HTTP Authorization header:

curl 'https://www.{bigcommerce_storefront_domain}.com/graphql'\
  # ...
  -H 'Authorization: Bearer {token}'\
  # ...
Creating a Token
JWT tokens for authenticating cross-origin requests to the Storefront API can be created using the Storefront API Token endpoint:

POST https://api.bigcommerce.com/stores/{store_hash}/v3/storefront/api-token

{
  "channel_id": 1,            // int (only ID 1 currently accepted)
  "expires_at": 1602288000,   // double utc unix timestamp (required)
  "allowed_cors_origins": [   // array (accepts 1 origin currently)
    "https://example.com"
  ]  
}
```

Create a `.env` file in the root directory and add the following with your secrets:

```dosini
BC_TOKEN
```

Now you're ready to go!

```bash
npm install
```

To run locally
```bash
npm run dev
```
