__d("WAWebGenerateListMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        return {
            listMessage: babelHelpers.extends({}, json.list, {
                contextInfo
            })
        };
    }
    i.default = e;
}, 66);