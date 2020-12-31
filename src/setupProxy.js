//setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
	  '/kant_school_test_ws/hs/lkKantSport/v1/CoachSchedule',
	  // '/kant_school_ws/hs/lkKantSport/v1/CoachSchedule',
    createProxyMiddleware({
      target: 'https://1c1.kant.ru',
      changeOrigin: true,
    })
  );
};
// // https://1c1.kant.ru/kant_school_ws/hs/lkKantSport/v1/CoachSchedule
// //https://1c1.kant.ru/kant_school_test_ws/hs/lkKantSport/v1/CoachSchedule