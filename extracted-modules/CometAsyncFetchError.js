__d("CometAsyncFetchError", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(errorMsg) {
        if (errorMsg == null) {
            return "";
        }
        if (typeof errorMsg === "string") {
            return errorMsg;
        }
        try {
            return String.fromCharCode.apply(null, new Uint16Array(errorMsg));
        } catch (e) {
            return "<error parsing ArrayBuffer>";
        }
    }
    const l = ((t)=>{
        function n(e, n, r, o, a) {
            let i;
            i = t.call(this, e) || this;
            i.errorMsg = e;
            i.errorCode = n;
            i.errorRawResponseHeaders = r;
            i.errorRawTransport = o;
            i.errorType = a;
            return i;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.toString = function() {
            const i = `${this.errorCode ?? ""}.${e(this.errorMsg)}.${this.errorRawResponseHeaders ?? ""}.${this.errorRawTransport ?? ""}.${this.errorType ?? ""}.${this.errorRawTransportStatus ?? ""}`;
            return `CometAyncFetchError: ${i}`;
        };
        return n;
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = l;
}, 66);