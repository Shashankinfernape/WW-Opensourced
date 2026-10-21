__d("WAWebOpenCoexCallingFirstTimeModalUtils", [
    "Promise",
    "WAWebCoexCallingConsumerFirstTimeModal.react",
    "WAWebCoexCallingFirstTimeAlertUtils",
    "WAWebCoexCallingSMBFirstTimeModal.react",
    "WAWebContactCollection",
    "WAWebModalManager",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebCoexCallingFirstTimeAlertUtils").shouldShowCoexCallingSMBFirstTimeAlert()) {
                return new (e || (e = n("Promise")))(function(e) {
                    const t = (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            yield o("WAWebCoexCallingFirstTimeAlertUtils").markCoexCallingSMBFirstTimeAlertShown();
                            e(true);
                        });
                        return function() {
                            return t.apply(this, arguments);
                        };
                    })();
                    const Component = r("WAWebCoexCallingSMBFirstTimeModal.react");
                    o("WAWebModalManager").ModalManager.open(<Component onConfirm={t}/>);
                });
            }
            return false;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()) {
                return false;
            }
            const a = o("WAWebContactCollection").ContactCollection.get(t);
            const i = a?.isHosted === true;
            if (!i) {
                return false;
            }
            const l = t.toString();
            if (o("WAWebCoexCallingFirstTimeAlertUtils").shouldShowCoexCallingConsumerFirstTimeAlert(l, i)) {
                return new (e || (e = n("Promise")))(function(e) {
                    const t = (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            yield o("WAWebCoexCallingFirstTimeAlertUtils").markCoexCallingConsumerFirstTimeAlertShownForThread(l);
                            e(true);
                        });
                        return function() {
                            return t.apply(this, arguments);
                        };
                    })();
                    const Component = r("WAWebCoexCallingConsumerFirstTimeModal.react");
                    o("WAWebModalManager").ModalManager.open(<Component onConfirm={t}/>);
                });
            }
            return false;
        });
        return p.apply(this, arguments);
    }
    l.maybeShowCoexCallingSMBFirstTimeModal = c;
    l.maybeShowCoexCallingConsumerFirstTimeModal = m;
}, 98);