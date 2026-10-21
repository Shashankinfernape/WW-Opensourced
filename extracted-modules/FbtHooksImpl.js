__d("FbtHooksImpl", [], function(t, n, r, o, a, i) {
    const e = {};
    const l = {
        getErrorListener: function(n) {
            return e.errorListener?.(n);
        },
        logImpression: function(n, r) {
            e.logImpression?.(n, r);
        },
        onTranslationOverride: function(n) {
            e.onTranslationOverride?.(n);
        },
        getFbsResult: function(n) {
            return e.getFbsResult(n);
        },
        getFbtResult: function(n) {
            return e.getFbtResult(n);
        },
        getTranslatedInput: function(n) {
            return e.getTranslatedInput?.(n) ?? n;
        },
        getViewerContext: function() {
            return e.getViewerContext();
        },
        register: function(n) {
            Object.assign(e, n);
        }
    };
    a.exports = l;
}, null);