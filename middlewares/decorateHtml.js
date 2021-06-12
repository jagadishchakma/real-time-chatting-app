/**
 * Title: Decoration html page title
 * Description: Decoration Html render page variable
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

function decorationHtml(pageTitle){
    return (req, res, next) => {
        res.locals.title = pageTitle + " - " + process.env.APP_NAME;
        next();
    };
};

module.exports = decorationHtml;