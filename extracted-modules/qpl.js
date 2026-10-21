__d("qpl", [
    "FBLogger",
    "QPLHasteSupportDataStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    const s = {
        _: function(n, o) {
            let t = e[o];
            if (t == null) {
                const a = r("QPLHasteSupportDataStorage").get(o);
                if (a == null) {
                    r("FBLogger")("staticresources").mustfix("Failed to find a Haste-supplied config for the QPL event identified by token `%s`.", o);
                    t = {
                        i: n
                    };
                } else {
                    t = babelHelpers.extends({
                        i: n
                    }, a);
                }
                e[o] = t;
            }
            return t;
        }
    };
    l.default = s;
}, 98);