__d("WAWebQuickActionGatingUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e === "status" || e === "chats") {
            return o("WAWebABProps").getABPropConfigValue("web_configurable_quick_actions_m1") === true;
        }
        if (e === "channels") {
            return o("WAWebABProps").getABPropConfigValue("web_configurable_quick_actions_m1_channels") === true;
        }
        if (e === "community_navigation") {
            return o("WAWebABProps").getABPropConfigValue("web_configurable_quick_actions_m1_communities") === true;
        }
        if (e === "calls") {
            return false;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.isQuickActionsEnabled = e;
}, 98);