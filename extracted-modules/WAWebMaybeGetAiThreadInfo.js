__d("WAWebMaybeGetAiThreadInfo", [
    "WAWebAiThreadTypeUtils",
    "WAWebThreadUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (t.type === o("WAWebThreadUtils").ThreadType.AiThread) {
            const r = e.aiThreads?.get(t);
            if (r == null) {
                return o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(undefined, o("WAWebAiThreadTypeUtils").AiThreadType.Default);
            }
            const { aiThreadType, title } = r;
            return o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(title, aiThreadType);
        }
    }
    l.maybeGetAiThreadInfo = e;
}, 98);