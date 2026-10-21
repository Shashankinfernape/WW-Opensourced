__d("MerlinImpressionManager", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "Enter",
        "Exit",
        "Update"
    ]);
    function l(t, n, itemId, o, a) {
        const i = {
            itemId,
            status: e.Enter,
            time: t
        };
        c(i, o, a);
        const l = {
            itemId,
            status: e.Exit,
            time: n
        };
        c(l, o, a);
    }
    function s(e, t) {
        if (t[e] == null) {
            return false;
        }
        const entries = t[e].entries;
        if (entries.length === 0) {
            return false;
        }
        const r = entries[entries.length - 1];
        return r.exit !== 0;
    }
    function u(t, n) {
        let r = {
            entries: [],
            itemId: n.itemId
        };
        switch(n.status){
            case e.Enter:
                r = d(t, n);
                break;
            case e.Exit:
                r = m(t, n);
                break;
            case e.Update:
                break;
        }
        return r;
    }
    function c(e, t, n) {
        const e_itemId = e.itemId;
        let o = t[e_itemId];
        if (o == null) {
            o = {
                entries: [],
                itemId: e_itemId
            };
        }
        t[e_itemId] = u(o, e);
        if (s(e_itemId, t)) {
            n(t[e_itemId].entries);
            delete t[e_itemId];
        }
    }
    function d(e, t) {
        const n = {
            enter: t.time,
            exit: 0
        };
        return babelHelpers.extends({}, e, {
            entries: e.entries.concat(n)
        });
    }
    function m(e, t) {
        const entries = [].concat(e.entries);
        const r = entries[entries.length - 1];
        if (r == null) {
            return e;
        }
        if (r.enter !== 0 && r.exit === 0) {
            const o = {
                enter: r.enter,
                exit: t.time
            };
            entries[entries.length - 1] = o;
        }
        return babelHelpers.extends({}, e, {
            entries
        });
    }
    i.MerlinImpressionStatus = e;
    i.logVisibilityTimestamps = l;
    i.mergeVPVData = u;
}, 66);