const {customersController} = require('./shop/customers/customers-controller');

exports.attachRoutes = (app) => {

    /**

    We want to build larger and "scalable" application,
    Beside using the Router - we need to properly put our logic.
    Hide DB calls behind services and make routes to access data.

    API that we will be making is a "Shop API"
    For selling some items;
    We will focus only on tree areas: items, customers and orders
    See the : db.json file to learn our simple data-model

        #1 TASK:
        See the example of customers and provide a path to
        /items
        /orders
        Using a router and proper naming convention inside new files: "controllers".

        #2 TASK:
        make GET method requests that will show proper data from the DB:
        (hide the DB calls behind the services)

     Example:
        /customers
        /customers/1
        /items
        /items/2
        /orders
        /orders/0

        #3 TASK:
        For main paths with Web Resources collection provide a filtering:

        e.g.  /customers?name=Michal

        #4 TASK:
        Make a route for relation: customer -> orders
        (Use some sample data)
        For all of his/her orders and for one order
        Propose how the routing should looks like.

        #5 TASK:
        Try to deal with asynchronous service - try using callbacks / promises

        #6 TASK:
        Add more functionality to the shop:
        e.g. adding an item, removing it and updating

        #7 TASK:
        Protect Customers with the authMiddleware. How to protect one route? How to protect all of them?
     * */
    
    app.use('/customers', customersController);

}
