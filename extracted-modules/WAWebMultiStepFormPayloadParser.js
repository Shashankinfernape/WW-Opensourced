__d("WAWebMultiStepFormPayloadParser", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = "a2ui_form";
    const l = "2";
    const s = n("$InternalEnum")({
        Form: "form",
        ChoicePicker: "ChoicePicker"
    });
    const u = n("$InternalEnum")({
        MutuallyExclusive: "mutuallyExclusive",
        MultipleSelection: "multipleSelection"
    });
    const c = 3;
    const d = 5;
    function m(e) {
        if (e == null || typeof e !== "object" || typeof e.id !== "string" || typeof e.title !== "string") {
            return null;
        }
        return {
            id: e.id,
            title: e.title
        };
    }
    function p(e) {
        if (typeof e === "string") {
            return e;
        }
        if (Array.isArray(e)) {
            const t = [];
            for (const n of e){
                if (typeof n !== "string") {
                    return null;
                }
                t.push(n);
            }
            return t;
        }
        return null;
    }
    function _(e, t) {
        if (t == null || typeof t !== "object" || !Array.isArray(t.children) || t.children.length === 0 || t.children.length > c) {
            return null;
        }
        const n = [];
        for (const r of t.children){
            if (typeof r !== "string") {
                return null;
            }
            n.push(r);
        }
        return {
            id: e,
            component: s.Form,
            children: n
        };
    }
    function f(e, t) {
        if (t == null || typeof t !== "object") {
            return null;
        }
        const r = t.label;
        if (typeof r !== "string" || typeof t.variant !== "string") {
            return null;
        }
        const o = u.cast(t.variant);
        if (o == null || !Array.isArray(t.options) || t.options.length === 0 || t.options.length > d) {
            return null;
        }
        const a = [];
        for (const i of t.options){
            const l = m(i);
            if (l == null) {
                return null;
            }
            a.push(l);
        }
        const c = {
            id: e,
            component: s.ChoicePicker,
            variant: o,
            label: r,
            options: a
        };
        const _ = t.allow_custom_answer ?? t.allow_custom;
        if (typeof _ === "boolean") {
            c.allow_custom_answer = _;
        }
        const f = p(t.default_id);
        if (f != null) {
            c.default_id = f;
        }
        return c;
    }
    function g(t) {
        try {
            const n = JSON.parse(t);
            const { payload: r, version: o } = n;
            if (o !== l || r == null || typeof r !== "object" || r.type !== e) {
                return null;
            }
            const a = r.data;
            if (a == null || typeof a !== "object") {
                return null;
            }
            const { components: i, root: u } = a;
            if (typeof u !== "string" || !Array.isArray(i) || i.length === 0) {
                return null;
            }
            const c = [];
            let d = null;
            const m = new Map;
            for (const p of i){
                if (p == null || typeof p !== "object" || typeof p.id !== "string") {
                    return null;
                }
                if (p.component === s.Form) {
                    const g = _(p.id, p);
                    if (g == null) {
                        return null;
                    }
                    c.push(g);
                    if (p.id === u) {
                        d = g.children;
                    }
                } else if (p.component === s.ChoicePicker) {
                    const h = f(p.id, p);
                    if (h == null) {
                        return null;
                    }
                    c.push(h);
                    m.set(p.id, h);
                } else {
                    return null;
                }
            }
            if (d == null) {
                return null;
            }
            const y = [];
            for (const C of d){
                const b = m.get(C);
                if (b != null) {
                    y.push(b);
                }
            }
            if (y.length === 0) {
                return null;
            }
            return {
                version: o,
                steps: y,
                payload: {
                    type: e,
                    data: {
                        root: u,
                        components: c
                    }
                }
            };
        } catch (e) {
            return null;
        }
    }
    i.A2UI_FORM_PAYLOAD_TYPE = e;
    i.A2UI_FORM_VERSION = l;
    i.A2UIComponentType = s;
    i.A2UIChoicePickerVariant = u;
    i.parseMultiStepFormPayload = g;
}, 66);