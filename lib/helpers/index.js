'use strict';

module.exports = {
  collectFormErrors: require('./collect-form-errors'),
  createIdSiteSession: require('./create-id-site-session'),
  createSession: require('./create-session'),
  expandAccount: require('./expand-account'),
  getFormModel: require('./get-form-model'),
  getRequiredRegistrationFields: require('./get-required-registration-fields'),
  getUser: require('./get-user'),
  getAppModuleVersion: require('./get-app-module-version'),
  loginResponder: require('./login-responder'),
  prepAccountData: require('./prep-account-data'),
  render: require('./render'),
  sanitizeFormData: require('./sanitize-form-data'),
  setTempCookie: require('./set-temp-cookie'),
  validateAccount: require('./validate-account'),
  xsrfValidator: require('./xsrf-validator'),
  revokeToken: require('./revoke-token')
};
