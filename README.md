# Angular E-Commerce Store

An E-Commerce web application built with Angular. This project allows users to browse products, add them to a cart, view the cart, and proceed to the order summary. It includes a simple and intuitive UI, designed to showcase basic e-commerce functionality.

## Features

- **Product Listing**: View products with images, prices, and stock status.
- **Add to Cart**: Allows users to add products to the cart, with live updates to the cart count.
- **Cart Page**: Review products added to the cart with options to remove items or adjust quantities.
- **Order Summary**: Shows a summary of the selected products with total cost before checkout.

## Project Structure

```bash
angular-ecomm/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   ├── primary-button/
│   │   │   │   ├── primary-button.component.ts
│   │   ├── pages/
│   │   │   ├── products-list/
│   │   │   │   ├── product-card/
│   │   │   │   │   ├── product-card.component.ts
│   │   │   │   │   ├── product-card.component.html
│   │   │   ├── cart/
│   │   │   │   ├── cart.component.ts
│   │   │   │   ├── cart.component.html
│   │   │   ├── order-summary/
│   │   │   │   ├── order-summary.component.ts
│   │   │   │   ├── order-summary.component.html
│   │   ├── models/
│   │   │   ├── products.model.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── index.html
├── README.md
```

Clone the repository:
```bash
git clone https://github.com/Jigarsk/angular-ecomm.git
```

Navigate into the project directory:
```bash
cd angular-ecomm
```

Install dependencies:
```npm install```

Run the development server:
```bash 
ng serve
```


