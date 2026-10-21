__d("WAWebMaybeGetAppendedViewRepliesThreadId", [
    "WAWebThreadUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e.threadIds?.filter(function(e) {
            return e.type !== o("WAWebThreadUtils").ThreadType.ViewAllReplies;
        });
    }
    l.maybeGetAppendedViewRepliesThreadId = e;
}, 98);