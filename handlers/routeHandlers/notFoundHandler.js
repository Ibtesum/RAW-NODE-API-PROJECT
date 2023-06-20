/**
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Ibtesum Reza Aninda
 * Date: 20.06.2023
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
