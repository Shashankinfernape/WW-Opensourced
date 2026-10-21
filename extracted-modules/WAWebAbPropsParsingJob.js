__d("WAWebAbPropsParsingJob", [
    "WAWebABPropsConfigs"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = new Map;
        e.forEach(({ configCode: t, configExpoKey: r, configValue: o })=>{
            n.set(t, {
                configValue: o,
                configExpoKey: r
            });
        });
        const r = new Map;
        Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).map((e)=>{
            const a = o("WAWebABPropsConfigs").ABPropConfigs[e][0];
            const i = n.get(a);
            if (!(i == null && t)) {
                const l = i?.configValue;
                const s = i?.configExpoKey;
                r.set(a, {
                    configValue: l,
                    configExpoKey: s == null ? null : s.toString()
                });
            }
        });
        return r;
    }
    l.parseABProps = e;
}, 98);