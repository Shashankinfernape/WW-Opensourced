__d("WAWebNonJidMentionUtils", [
    "WAWebNonJidMentionType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e == null) {
            return false;
        }
        const t = r("WAWebNonJidMentionType").MENTION_ALL;
        return (e & t) === t;
    }
    l.hasMentionAll = e;
}, 98);