/**
 * Title: Inboox Controller
 * Description: User inbox controller for auth
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

// login
function getInbox(req, res){
    res.render('inbox');
};

module.exports = {getInbox};