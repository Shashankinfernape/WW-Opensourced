__d("WAWebBrokerGlobalAppState", [
    "WAWebWamEnumWebcScenarioType"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = {
        [(s = o("WAWebWamEnumWebcScenarioType")).WEBC_SCENARIO_TYPE.IDLE]: 0,
        [s.WEBC_SCENARIO_TYPE.INITIAL_PAIRING]: 300000,
        [s.WEBC_SCENARIO_TYPE.OFFLINE_RESUME]: 120000,
        [s.WEBC_SCENARIO_TYPE.RECENT_HISTORY_SYNC]: 0,
        [s.WEBC_SCENARIO_TYPE.CHAT_NAVIGATION]: 0
    };
    let c;
    let d;
    const m = {
        isLogoutInProgress: false,
        takeOver: false,
        getCurrentScenario: function() {
            return d ?? o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE;
        },
        initOrUpdateTracking: function(t) {
            if (c != null && c !== 0) {
                self.clearTimeout(c);
            }
            d = t;
            if (d !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
                c = self.setTimeout(function() {
                    d = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE;
                    c = null;
                }, u[t]);
            }
        }
    };
    l.default = m;
}, 98);