var plugin = {},
    common = require('../../../api/utils/common.js'),
    plugins = require('../../pluginManager.js');

(function(plugin) {
    //write api call
    plugins.register("/i", function(ob) {
        //get request parameters
        var params = ob.params;

        //check if it has data we need
        if (params.qstring.user_details) {
            //if it is string, but we expect json, lets parse it
            if (typeof params.qstring.ourplugin == "string") {
                try {
                    params.qstring.ourplugin = JSON.parse(params.qstring.ourplugin);
                } catch (SyntaxError) {
                    console.log('Parse JSON failed');
                    //we are not doing anything with request
                    return false;
                }
                //start doing something with request

                //and tell core we are working on it, by returning true
                return true;
            }

            //we did not have data we were interested in
            return false;
        }
    });
}(plugin));

module.exports = plugin;