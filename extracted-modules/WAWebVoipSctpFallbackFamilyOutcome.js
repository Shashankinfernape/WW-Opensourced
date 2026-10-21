__d("WAWebVoipSctpFallbackFamilyOutcome", [
    "WALogger",
    "WAWebCoreActionsODS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return e.includes(":");
    }
    class u {
        constructor(){
            this.$1 = false;
            this.$2 = false;
            this.$3 = false;
            this.$4 = false;
        }
        markEnteredViaWtFallback() {
            this.$1 = true;
        }
        recordAttempt(t) {
            if (t !== "" && s(t)) {
                this.$3 = true;
            }
        }
        recordOpened(t) {
            if (t !== "") {
                if (s(t)) {
                    this.$4 = true;
                } else {
                    this.$2 = true;
                }
            }
        }
        isIpv4OnlyRecovery() {
            return this.$1 && this.$2 && this.$3 && !this.$4;
        }
    }
    let c = new u;
    function d() {
        c.markEnteredViaWtFallback();
    }
    function m(e) {
        c.recordAttempt(e);
    }
    function p(e) {
        c.recordOpened(e);
    }
    function _() {
        c = new u;
    }
    function f() {
        if (c.isIpv4OnlyRecovery()) {
            o("WAWebCoreActionsODS").logCallSctpFallbackIpv4OnlyIpv6Failed();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] WT fallback recovered on IPv4 only; every IPv6 relay failed"
            ])));
        }
    }
    l.markSctpEnteredViaWebTransportFallback = d;
    l.recordSctpFallbackFamilyAttempt = m;
    l.recordSctpFallbackFamilyOpened = p;
    l.resetSctpFallbackFamilyOutcome = _;
    l.reportSctpFallbackFamilyOutcome = f;
}, 98);