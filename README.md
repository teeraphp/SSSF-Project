# SSSF-Project

bookstore project for Server-side Scripting Frameworks course at Metropolia University of Applied Sciences

Server-side Scripting Frameworks Project - This project is about bookstore web application where the customer can check for various book in the store, find any book of their interests, check the amount of the book in the store, place order on the book and etc. Meanwhile, Admin on this web application can add more book to the store, check the stocks, add the book to the stocks, delete the book from the store, manage customers order and etc.

This bookstore project aim for the book lover who collect physical books like novel, comics, documentaries, and many more. With the ease of use by just clicking and search for any book in the store the customer can surf through stuff and find their favorite book with ease as well as place the order and safely wait for the order to proceed.

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

Access the application through your web browser at ```http://localhost:5173```.

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

# Tests

To test the function, you can first surf through the web, try the dark/light mode button and check on each book by clicking on the book you interested. Next thing to test is to register/sign up an account and sign in using the account that just created. After that, you can test to change the profile by clicking on your account name on the top right and select "User Profile" then change the contents in it then check if it's working.

Next thing to be tested is the whole buying/ordering books function. You can put the book on to a cart by clicking on add to cart button for the book you like. Then proceed throughout the page and fill in the mandatory information and press "place order" button. After that the website will lead the user to the order detail page where the user can check the shipping and payment status. There will also be a pay by paypal button and credit card payment button on the right side which linked to the paypal. However, in this case just press on the test pay button is sufficient.

# Future works

This version of TypeScript BookStore is enough to be working. However, there are still room for improvement. For Example:</br>The Side tab which display category of the book and filter for each category can implemented. </br>"Todays deal", "Gifts" and "On Sale" Tab can be implemented. </br>More way of payment could be added.</br> and etc.

# Feedback

https://forms.gle/Awftnzh9VwQptmg77

# Feedback Responses

https://docs.google.com/spreadsheets/d/1I5iuwrC19G33_Kxq_5fXuM2QCV4IvykAS6PvF0OWiZ8/edit#gid=1079973492
