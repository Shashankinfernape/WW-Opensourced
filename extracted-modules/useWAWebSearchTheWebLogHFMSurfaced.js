__d("useWAWebSearchTheWebLogHFMSurfaced", [
    "WAWebSearchTheWebEventLogger",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(5);
        const { messageType, stwEntryPoint, stwFormat, stwInteraction } = e;
        let s;
        if (t[0] !== messageType || t[1] !== stwEntryPoint || t[2] !== stwFormat || t[3] !== stwInteraction) {
            s = {
                onVisible: function() {
                    return o("WAWebSearchTheWebEventLogger").logSTWEvent({
                        stwEntryPoint,
                        stwInteraction,
                        stwFormat,
                        messageType
                    });
                }
            };
            t[0] = messageType;
            t[1] = stwEntryPoint;
            t[2] = stwFormat;
            t[3] = stwInteraction;
            t[4] = s;
        } else {
            s = t[4];
        }
        const u = r("useVisibility")(s);
        const c = u[0];
        return c;
    }
    l.useWAWebSearchTheWebLogHFMSurfaced = e;
}, 98);