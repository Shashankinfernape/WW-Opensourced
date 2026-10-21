__d("WAWebQueryLinkedAccountNonceJob", [
    "WASmaxBizLinkingGetAccountNonceRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WASmaxBizLinkingGetAccountNonceRPC").sendGetAccountNonceRPC({});
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "GetAccountNonceResponseSuccess") {
                return e.value.detailNonceElementValue;
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "GetAccountNonceResponseError") {
                return null;
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })();
        });
        return s.apply(this, arguments);
    }
    l.queryNonce = e;
}, 98);