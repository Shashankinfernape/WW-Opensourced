__d("FbtErrorListenerWWW", [
    "FBLogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            this.$1 = e.hash;
            this.$2 = e.translation;
        }
        onStringSerializationError(t) {
            const n = "Context not logged.";
            const o = t?.constructor?.name || "";
            r("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, n, typeof t, o);
        }
        onStringMethodUsed(t) {
            r("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", t);
        }
        onMissingParameterError(t, n) {
            r("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Expected fbt parameter names (%s) to also contain `%s`. Hash="%s" Translation="%s"', t.join(", "), n, this.$1, this.$2);
        }
    }
    l.default = e;
}, 98);