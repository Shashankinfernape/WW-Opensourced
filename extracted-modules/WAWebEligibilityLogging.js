__d("WAWebEligibilityLogging", [
    "WAWebABProps",
    "WAWebABPropsConfigs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "wa_web_app_lock_upsell"
    ];
    class s {
        constructor(){
            this.$1 = new Map;
        }
        init() {
            for (const t of e){
                this.$1.set(t, o("WAWebABProps").getABPropConfigValue(t));
            }
        }
        getValue(t) {
            return this.$1.get(t) ?? o("WAWebABPropsConfigs").ABPropConfigs[t][2];
        }
    }
    const u = new s;
    l.eligibilityLogger = u;
}, 98);