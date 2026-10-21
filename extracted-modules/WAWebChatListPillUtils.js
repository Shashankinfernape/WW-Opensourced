__d("WAWebChatListPillUtils", [
    "WAWebLabelCollection",
    "WAWebSchemaLabel"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 5;
    const u = new Set([
        (e = o("WAWebSchemaLabel")).ListType.AI_HANDOFF,
        e.ListType.AI_RESPONDING
    ]);
    const c = new Set([
        e.ListType.CUSTOM,
        e.ListType.PREDEFINED
    ]);
    function d(e, t) {
        if (e == null) {
            return false;
        }
        return t && u.has(e) || c.has(e);
    }
    function m(e, t, n) {
        const r = p(e);
        const o = _(r, n);
        const { customLabels, staticLabels } = o;
        const visibleLabels = f(staticLabels, customLabels, t);
        const s = new Set(visibleLabels.map((e)=>e.id));
        const u = [].concat(customLabels).sort((e, t)=>e.orderIndex - t.orderIndex);
        const overflowedLabels = [].concat(staticLabels, u).filter((e)=>!s.has(e.id));
        return {
            overflowCount: overflowedLabels.length,
            overflowedLabels,
            visibleLabels
        };
    }
    function p(e) {
        const t = [];
        for (const n of e){
            const r = o("WAWebLabelCollection").LabelCollection.get(n);
            if (r != null && r.name != null) {
                t.push(r);
            }
        }
        return t;
    }
    function _(e, t) {
        const staticLabels = [];
        const customLabels = [];
        for (const o of e){
            if (d(o.type, t)) {
                if (o.type != null && u.has(o.type)) {
                    staticLabels.push(o);
                } else {
                    customLabels.push(o);
                }
            }
        }
        return {
            customLabels,
            staticLabels
        };
    }
    function f(staticLabels, customLabels, n) {
        const r = [];
        for (const o of staticLabels){
            if (r.length >= s) {
                break;
            }
            r.push(o);
        }
        if (n != null && r.length < s) {
            const a = customLabels.find((e)=>e.id === n);
            if (a != null) {
                r.push(a);
            }
        }
        const i = new Set(r.map((e)=>e.id));
        const l = customLabels.filter((e)=>!i.has(e.id)).sort((e, t)=>e.orderIndex - t.orderIndex);
        for (const u of l){
            if (r.length >= s) {
                break;
            }
            r.push(u);
        }
        return r;
    }
    l.isPillEligibleListType = d;
    l.selectVisiblePills = m;
}, 98);