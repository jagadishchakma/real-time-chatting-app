/**
 * Title: Default error handler
 * Description: Application default error handling
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

function defaultErrorHandler(app){
    // 404 not found error handle
    app.use((req, res, next) => {
        res.render('404');
    });

    // codeing error
    app.use((err, req, res, next) => {
        if(err.message){
            res.render('error', {
                error: err.message,
            });
        }else{
            res.render('error', {
                error: 'Something went wrong',
            });
        }
    });
};

module.exports = defaultErrorHandler;