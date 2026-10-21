__d("WAWebCommentGroupBy", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const n = new Map;
        for (const r of e){
            const a = r.parentMsgKey.toString();
            const i = n.get(a) ?? 0;
            n.set(a, i + 1);
        }
        for (const l of t){
            const u = l.parentMsgKey.toString();
            const c = n.get(u) ?? 0;
            n.set(u, c - 1);
        }
        return n;
    }
    i.commentCountByParents = e;
}, 66);