__d("WAWebMexLogging", [
    "WAWebMexEventV2WamEvent"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            this.$1 = false;
            this.$2 = "";
            this.$3 = "";
            this.$4 = -1;
            this.$5 = -1;
            this.$6 = -1;
            this.$7 = false;
            this.$8 = "";
            this.$9 = "";
            this.$1 = e;
        }
        const t = e.prototype;
        t.start = function() {
            this.$4 = Date.now();
        };
        t.stop = function() {
            this.$5 = Date.now();
            this.$6 = this.$5 - this.$4;
        };
        t.setQueryId = function(t) {
            if (t != null) {
                this.$3 = t;
            }
        };
        t.setOperationName = function(t) {
            if (t != null) {
                this.$2 = t;
            }
        };
        t.setHasData = function(t) {
            this.$7 = t;
        };
        t.setErrors = function(t) {
            if (t != null) {
                const e = this.parseErrorsAndCodes(t);
                this.$8 = e.errors;
                this.$9 = e.errorCodes;
            }
        };
        t.setExtensionErrors = function(t) {
            if (t != null) {
                const e = t.filter((e)=>e.extensions?.error_code != null).map((e)=>s(e.extensions.error_code, e.message));
                this.setErrors(e);
            }
        };
        t.logEvent = function() {
            const e = {
                mexEventV2DurationMs: this.$6,
                mexEventV2EndTime: this.$5,
                mexEventV2ErrorCodes: this.$9,
                mexEventV2Errors: this.$8,
                mexEventV2HasData: this.$7,
                mexEventV2IsMex: this.$1,
                mexEventV2OperationName: this.$2,
                mexEventV2QueryId: this.$3,
                mexEventV2StartTime: this.$4
            };
            new (o("WAWebMexEventV2WamEvent")).MexEventV2WamEvent(e).commit();
        };
        t.parseErrorsAndCodes = function(t) {
            const e = t.map((e)=>e.code);
            return {
                errors: JSON.stringify(t),
                errorCodes: JSON.stringify(e)
            };
        };
        return e;
    })();
    function s(e, t) {
        return {
            code: e,
            detail: t,
            type: "EXTENSION"
        };
    }
    function u(e, t) {
        return {
            code: e,
            detail: t,
            type: "CLIENT"
        };
    }
    function c(e, t) {
        return {
            code: e,
            detail: t,
            type: "TRANSPORT"
        };
    }
    l.MexPerfTracker = e;
    l.createLoggingClientError = u;
    l.createLoggingTransportError = c;
}, 98);