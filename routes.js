/**
 * Title: Routes
 * Description: Application Routes
 * Author: Ibtesum Reza Aninda
 * Date: 20.06.2023
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
