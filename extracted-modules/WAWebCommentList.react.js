__d("WAWebCommentList.react", [
    "WAWebCommentRow.react",
    "WAWebMessageDateMarker.react",
    "WAWebMessageListDayOfMsg",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        for(var t = e.comments, isAlbumMsg = e.isAlbumMsg, o = [], a = false, i = t[0] ? r("WAWebMessageListDayOfMsg")(t[0]) : 0, l = 0; l < t.length; l++){
            const comment = t[l];
            const c = t[l + 1];
            let d;
            let m;
            if (!a) {
                o.push(s.jsx(r("WAWebMessageDateMarker.react"), {
                    timestamp: comment.t
                }, `msg-${comment.id.toString()}-date`));
            }
            if (c != null) {
                m = r("WAWebMessageListDayOfMsg")(c);
                d = m === i;
            } else {
                d = false;
                m = 0;
            }
            o.push(s.jsx(r("WAWebCommentRow.react"), {
                comment,
                isAlbumMsg
            }, comment.id.toString()));
            a = d;
            i = m;
        }
        return o;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);