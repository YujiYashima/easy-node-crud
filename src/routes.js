const AdminBroExpress = require('@admin-bro/express');
const adminBroOptions = require('./adminBroSettings.js');

const router = AdminBroExpress.buildRouter(adminBroOptions);

module.exports = router;