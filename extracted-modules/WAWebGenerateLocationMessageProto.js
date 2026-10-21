__d("WAWebGenerateLocationMessageProto", [
    "WATypeUtils",
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        let r = {};
        if (json.loc && o("WATypeUtils").isString(json.loc)) {
            const a = json.loc.split("\n");
            r = {
                name: a[0],
                address: a[1],
                url: json.clientUrl
            };
        }
        return {
            locationMessage: babelHelpers.extends({}, r, {
                degreesLatitude: parseFloat(json.lat) || undefined,
                degreesLongitude: parseFloat(json.lng) || undefined,
                jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(json.body),
                contextInfo
            })
        };
    }
    l.default = e;
}, 98);