/**
 * Created by user on 1/12/14.
 */


var controller = require('../app_server/controllers/main');

module.exports = function(app){
    app.get("/", controller.index);
}