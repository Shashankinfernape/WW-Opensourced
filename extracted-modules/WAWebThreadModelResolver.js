__d("WAWebThreadModelResolver", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return e.aiThreads?.get(t) ?? e.viewRepliesThreads?.get(t) ?? null;
    }
    function l(t, n) {
        if (n != null) {
            return e(t, n) ?? t;
        }
        return t;
    }
    i.getThreadModel = e;
    i.resolveThreadOrChat = l;
}, 66);