__d("WAWebPathfinderUnsamplingConfig", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = 1;
    const s = {
        rules: []
    };
    function u(t) {
        let n;
        try {
            n = JSON.parse(t);
        } catch (e) {
            return s;
        }
        if (n == null || typeof n !== "object") {
            return s;
        }
        const r = n;
        if (r.schema_version !== e) {
            return s;
        }
        const o = r.session_flag_rules;
        if (!Array.isArray(o)) {
            return s;
        }
        const a = [];
        for (const i of o){
            if (!(i == null || typeof i !== "object")) {
                const l = i;
                const { rule_id: u, trigger_screen_keys: c } = l;
                if (!(typeof u !== "string" || !Array.isArray(c))) {
                    const d = new Set;
                    for (const m of c){
                        if (typeof m === "string" && m !== "") {
                            d.add(m);
                        }
                    }
                    if (d.size > 0) {
                        a.push({
                            ruleId: u,
                            triggerScreenKeys: d
                        });
                    }
                }
            }
        }
        return {
            rules: a
        };
    }
    let c = null;
    function d() {
        if (c == null) {
            c = u(o("WAWebABProps").getABPropConfigValue("wa_web_pathfinder_unsampling_config"));
        }
        return c;
    }
    function m(e) {
        if (e == null) {
            return null;
        }
        for (const t of d().rules){
            if (t.triggerScreenKeys.has(e)) {
                return t.ruleId;
            }
        }
        return null;
    }
    l.parseUnsamplingConfig = u;
    l.getUnsamplingConfig = d;
    l.getUnsamplingRuleIdForScreen = m;
}, 98);