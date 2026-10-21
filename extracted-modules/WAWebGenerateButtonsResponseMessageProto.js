__d("WAWebGenerateButtonsResponseMessageProto", [
    "WAWebHsmGatingUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const r = o("WAWebHsmGatingUtils").shouldUseLegacyButtonsResponse() ? json.buttonsResponse : {
            selectedButtonId: json.selectedButtonId,
            selectedDisplayText: json.body,
            type: o("WAWebProtobufsE2E.pb").Message$ButtonsResponseMessage$Type.DISPLAY_TEXT
        };
        return {
            buttonsResponseMessage: babelHelpers.extends({}, r, {
                contextInfo
            })
        };
    }
    l.default = e;
}, 98);