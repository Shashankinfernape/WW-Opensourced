__d("WAWebQueryBlockListJob", [
    "WALogger",
    "WASmaxPsaChatBlockGetRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WASmaxPsaChatBlockGetRPC").sendChatBlockGetRPC();
            let n;
            e: {
                const r = t;
                if ((typeof r === "object" && r !== null || typeof r === "function") && r.name === "ChatBlockGetResponseServerError" && (typeof r.value === "object" && r.value !== null || typeof r.value === "function") && (typeof r.value.errorChatBlockError === "object" && r.value.errorChatBlockError !== null || typeof r.value.errorChatBlockError === "function") && (typeof r.value.errorChatBlockError.value === "object" && r.value.errorChatBlockError.value !== null || typeof r.value.errorChatBlockError.value === "function") && "code" in r.value.errorChatBlockError.value && "text" in r.value.errorChatBlockError.value) {
                    const a = r.value.errorChatBlockError.value.code;
                    const i = r.value.errorChatBlockError.value.text;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getBlockingStatusForPSAUser: server response with ",
                        ", ",
                        ""
                    ])), a, i);
                    n = {
                        errorCode: Number(a),
                        errorText: i
                    };
                    break e;
                }
                if ((typeof r === "object" && r !== null || typeof r === "function") && r.name === "ChatBlockGetResponseSuccess" && (typeof r.value === "object" && r.value !== null || typeof r.value === "function") && "blockingStatus" in r.value) {
                    const l = r.value.blockingStatus;
                    n = l === "blocked";
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
            }
            return n;
        });
        return u.apply(this, arguments);
    }
    l.getBlockingStatusForPSAUser = s;
}, 98);