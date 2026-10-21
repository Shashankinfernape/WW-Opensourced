__d("WAWebMsgAIProvenance", [], function(t, n, r, o, a, i) {
    function e(e) {
        return e != null && (e.createdWithGenAi === true || e.editedWithGenAi === true);
    }
    function l(t) {
        if (t == null) {
            return false;
        }
        return t.selfDisclosed === true || e(t.c2pa) || e(t.iptc);
    }
    function s(e) {
        if (e == null) {
            return null;
        }
        const t = {};
        if (e.createdWithGenAi != null) {
            t.createdWithGenAi = e.createdWithGenAi;
        }
        if (e.editedWithGenAi != null) {
            t.editedWithGenAi = e.editedWithGenAi;
        }
        return t;
    }
    function u(e) {
        if (e == null) {
            return null;
        }
        const t = s(e.c2PaMetadata);
        const n = s(e.iptcMetadata);
        if (t == null && n == null) {
            return null;
        }
        const r = {};
        if (t != null) {
            r.c2pa = t;
        }
        if (n != null) {
            r.iptc = n;
        }
        return r;
    }
    function c(e) {
        if (e == null) {
            return null;
        }
        const t = {};
        if (e.createdWithGenAi != null) {
            t.createdWithGenAi = e.createdWithGenAi;
        }
        if (e.editedWithGenAi != null) {
            t.editedWithGenAi = e.editedWithGenAi;
        }
        return t;
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        const t = c(e.c2pa);
        const n = c(e.iptc);
        if (t == null && n == null) {
            return null;
        }
        const r = {};
        if (t != null) {
            r.c2PaMetadata = t;
        }
        if (n != null) {
            r.iptcMetadata = n;
        }
        return r;
    }
    function m(e) {
        return babelHelpers.extends({}, e ?? {}, {
            selfDisclosed: true
        });
    }
    i.hasAIProvenanceSignal = l;
    i.aiProvenanceFromProto = u;
    i.aiProvenanceToProto = d;
    i.withSelfDisclosed = m;
}, 66);