// ===========================================
// API ROOT PATH CONFIGURATION
// ===========================================

var localAPIroot;
var publicAPIroot = 'http://fecmorgan-env-1.nwc3hnppvt.us-east-1.elasticbeanstalk.com/';
// If localAPIroot is defined, app will localAPIroot, else it will use the publicAPIroot.
// localAPIroot = 'http://localhost:8080/'

var apiRoot = localAPIroot ? localAPIroot : publicAPIroot;

export default apiRoot;
