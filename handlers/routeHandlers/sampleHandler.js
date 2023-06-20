/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Ibtesum Reza Aninda
 * Date: 20.06.2023
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'this is sample url.',
    });
};

module.exports = handler;
