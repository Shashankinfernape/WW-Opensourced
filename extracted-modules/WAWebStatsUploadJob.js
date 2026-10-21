__d("WAWebStatsUploadJob", [
    "Promise",
    "WALogger",
    "WASmaxStatsSendBufferRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(addElementValue, addT) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "fieldStatsUpload:sendSendBufferRPC start"
            ])));
            const a = yield o("WASmaxStatsSendBufferRPC").sendSendBufferRPC({
                addT,
                addElementValue
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "fieldStatsUpload:sendSendBufferRPC end"
            ])));
            let i;
            if (a.name === "SendBufferResponseSuccess") {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fieldStatsUpload:sendSendBufferRPC SendBufferResponseSuccess"
                ])));
                return (c || (c = n("Promise"))).resolve();
            }
            if (a.name === "SendBufferResponseErrorNoRetry") {
                i = a.value.errorSendBufferNoRetryError.value;
            } else {
                a.name;
                i = a.value.errorIQErrorServiceUnavailableMixin;
            }
            const l = i;
            const { code, text } = l;
            return {
                errorCode: parseInt(code, 10),
                errorText: text
            };
        });
        return m.apply(this, arguments);
    }
    l.default = d;
}, 98);