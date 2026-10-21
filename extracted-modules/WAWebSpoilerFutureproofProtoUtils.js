__d("WAWebSpoilerFutureproofProtoUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "documentWithCaptionMessage"
    ];
    function l(t, n) {
        if (t.documentWithCaptionMessage != null) {
            const r = t.documentWithCaptionMessage;
            const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return babelHelpers.extends({}, o, {
                spoilerMessage: {
                    message: r.message
                }
            });
        }
        return {
            spoilerMessage: {
                message: t
            }
        };
    }
    i.createSpoilerFutureproofMessage = l;
}, 66);