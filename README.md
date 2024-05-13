# SSSF-Project

bookstore project for Server-side Scripting Frameworks course at Metropolia University of Applied Sciences

Server-side Scripting Frameworks Project - This project is about bookstore web application where the customer can check for various book in the store, find any book of their interests, check the amount of the book in the store, place order on the book and etc. Meanwhile, Admin on this web application can add more book to the store, check the stocks, add the book to the stocks, delete the book from the store, manage customers order and etc.

This bookstore project aim for the book lover who collect physical books like novel, comics, documentaries, and many more. With the ease of use by just clicking and search for any book in the store the customer can surf through stuff and find their favorite book with ease as well as place the order and safely wait for the order to proceed.

# Deployment

https://sssf-project-deploy.onrender.com/

# Getting Started

### installing

Clone the repository and install the dependencies:</br>
```
git clone https://github.com/teeraphp/SSSF-Project.git
```

frontend</br>
```
cd frontend
npm install
```
backend
```
cd backend
npm install
```

### configuring

Set up the necessary environment variables in a ```.env``` file in the project root:
```
MONGODB_URI=yourmongodbdatabase
JWT_SECRET=somethingsecret
PAYPAL_CLIENT_ID=sb
```

### Running the Application

Start the frontend server with:
```
cd frontend
npm run dev
```

start the backend server with:
```
cd backend
npm run dev
```

Access the application through your web browser at ```http://localhost:5173```.</br>
If products didn't appear, try ```http://localhost:4000/api/seed```, then go back to homepage and refresh again.</br>

### Graphql

For graphql, you'll need to run backend server,</br> then open ```http://localhost:4000/graphql``` to test the graphql functions.

# Main Functions

- surf through web app to find books/products
- view books/products in detail
- add or remove books/products from cart
- buy/place order
- pay by paypal
- check order detail

# Target Audience

- Booklover who read and buy a lot of books, they will find books more easily using this web application
- Anyone who is interested in books or want to try something new to read

# Test Instructions

Register and Login to the account.</br>
Find interesting book and click on it for more detail.</br>
add to cart and proceed to order section.</br>
fill in the informtaion through the order placement section.</br>
Try "test pay" button to see if the payment go through properly.</br>
after that, go back to homepage by clicking on the website name,</br>
and click on the username, then select the Order History button to see the order history.</br>

Next, try to change information in the profile by go to the profile page,</br>
then, log out and log in again using both old information and new information.</br>

# Future works

This version of TypeScript BookStore is enough to be working. However, there are still room for improvement.</br> For Example:</br>The Side tab which display category of the book and filter for each category as well as search bar can implemented. </br>"Todays deal", "Gifts" and "On Sale" Tab can be implemented. </br>More way of payment could be added.</br> and etc.

# Feedback

https://forms.gle/Awftnzh9VwQptmg77

# Feedback Responses

https://docs.google.com/spreadsheets/d/1I5iuwrC19G33_Kxq_5fXuM2QCV4IvykAS6PvF0OWiZ8/edit#gid=1079973492
