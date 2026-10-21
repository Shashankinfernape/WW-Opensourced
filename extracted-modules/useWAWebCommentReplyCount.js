__d("useWAWebCommentReplyCount", [
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                "add",
                "remove",
                "change:replyCount"
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        let a;
        if (t[1] !== e) {
            a = function() {
                let t = 0;
                for (const n of e){
                    t = t + (n.replyCount ?? 0);
                }
                return t;
            };
            t[1] = e;
            t[2] = a;
        } else {
            a = t[2];
        }
        return r("useWAWebEventTargetValue")(e, n, a);
    }
    l.useWAWebCommentReplyCount = e;
}, 98);