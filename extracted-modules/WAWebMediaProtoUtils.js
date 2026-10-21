__d("WAWebMediaProtoUtils", [
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "$$unknownFieldCount",
        "annotations",
        "imageSourceType",
        "interactiveAnnotations",
        "scanLengths"
    ];
    const s = [
        "$$unknownFieldCount",
        "annotations",
        "interactiveAnnotations",
        "processedVideos"
    ];
    function u(t) {
        const { $$unknownFieldCount: n, annotations: o, imageSourceType: a, interactiveAnnotations: i, scanLengths: l } = t;
        const s = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return r("isEmptyObject")(s);
    }
    function c(e) {
        const { $$unknownFieldCount: t, annotations: n, interactiveAnnotations: o, processedVideos: a } = e;
        const i = babelHelpers.objectWithoutPropertiesLoose(e, s);
        return r("isEmptyObject")(i);
    }
    l.isEmptyImageMessage = u;
    l.isEmptyVideoMessage = c;
}, 98);