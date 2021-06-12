/**
 * Title: All Users List
 * Description: All auth user list here
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

function getUsers(req, res, next){
    res.render('users');
};

module.exports = {getUsers};