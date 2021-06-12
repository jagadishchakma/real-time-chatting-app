/**
 * Title: Router handler 
 * Description: Application all route handling uses sub router
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

const loginRouter = require("../routes/loginRouter");
const userRouter = require("../routes/userRouter");
const inboxRouter = require("../routes/inboxRouter");

function allRouter(app) {
    // login
    app.use('/', loginRouter);

    // user routers
    app.use('/users', userRouter);

    // inbox router
    app.use('/inbox', inboxRouter);
};

module.exports = allRouter;