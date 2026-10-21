__d("MetaConfig", [
    "invariant",
    "ExecutionEnvironment",
    "MetaConfigMap",
    "MetaconfigWebExposureFalcoEvent",
    "ODS"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = {};
    const d = {
        _: function(identifier, a) {
            const t = r("MetaConfigMap").get(identifier);
            if (t == null) {
                s(0, 57910, identifier);
            }
            const { log_id, value } = t;
            if (a !== true && log_id != null && c[identifier] !== true) {
                if ((u || (u = r("ExecutionEnvironment"))).isInBrowser) {
                    (e || (e = o("ODS"))).bumpEntityKey(530, "metaconfig.web.exposure", "falco_logger");
                    r("MetaconfigWebExposureFalcoEvent").logImmediately(function() {
                        return {
                            identifier,
                            log_id
                        };
                    });
                }
                c[identifier] = true;
            }
            return value;
        }
    };
    l.default = d;
}, 98);