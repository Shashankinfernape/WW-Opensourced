__d("WAWapJid", [
    "$InternalEnum",
    "WAJids"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        JID: 0,
        JID_U: 1,
        JID_AD: 1,
        JID_FB: 3,
        JID_INTEROP: 4
    };
    const s = n("$InternalEnum")({
        WHATSAPP: 0,
        LID: 1,
        HOSTED: 128,
        HOSTED_LID: 129
    });
    const u = (()=>{
        function t(e) {
            this.$1 = e;
        }
        t.createAD = function(r, o, a) {
            return new t({
                type: e.JID_AD,
                user: r,
                device: a ?? 0,
                agent: o ?? 0,
                domainType: s.WHATSAPP
            });
        };
        t.createJidU = function(r, o, a) {
            return new t({
                type: e.JID_U,
                user: r,
                device: a ?? 0,
                domainType: o ?? s.WHATSAPP
            });
        };
        t.createFbJid = function(r, o) {
            const n = o ?? 0;
            return new t({
                type: e.JID_FB,
                user: r,
                device: n
            });
        };
        t.createInteropJid = function(r, o, a) {
            const n = o ?? 0;
            return new t({
                type: e.JID_INTEROP,
                user: r,
                device: n,
                integrator: a
            });
        };
        t.create = function(r, o) {
            return new t({
                type: e.JID,
                user: r,
                server: o
            });
        };
        const n = t.prototype;
        n.toString = function() {
            if (this.$1.type === e.JID_AD || this.$1.type === e.JID_U) {
                const t = this.$1;
                const { device: n, domainType: r, user: a } = t;
                let i = "";
                if (r === s.WHATSAPP) {
                    i = o("WAJids").WA_USER_JID_SUFFIX;
                } else if (r === s.HOSTED) {
                    i = o("WAJids").HOSTED_SUFFIX;
                } else if (r === s.HOSTED_LID) {
                    i = o("WAJids").HOSTED_LID_SUFFIX;
                } else {
                    i = o("WAJids").LID_SUFFIX;
                }
                if (n === 0) {
                    return `${a}@${i}`;
                }
                return `${a}:${n}@${i}`;
            } else if (this.$1.type === e.JID_FB) {
                const l = this.$1;
                const { device: u, user: c } = l;
                const d = o("WAJids").MSGR_USER_JID_SUFFIX;
                return `${c}:${u}@${d}`;
            } else if (this.$1.type === e.JID_INTEROP) {
                const m = this.$1;
                const { device: p, integrator: _, user: f } = m;
                const g = o("WAJids").INTEROP_USER_JID_SUFFIX;
                return `${_}-${f}:${p}@${g}`;
            } else {
                this.$1.type;
                const h = this.$1;
                const { server: y, user: C } = h;
                if (C != null) {
                    return `${C}@${y}`;
                }
                return y;
            }
        };
        n.getInnerJid = function() {
            return this.$1;
        };
        return t;
    })();
    l.WAP_JID_SUBTYPE = e;
    l.DomainType = s;
    l.WapJid = u;
}, 98);