__d("WAWebDBNoteDatabaseApi", [
    "WALogger",
    "WAWebSchemaNote",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaNote").getNoteTable().createOrReplace(e);
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebSchemaNote").getNoteTable().equals([
                "chatJid"
            ], e);
            return t;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaNote").getNoteTable().anyOf([
                "chatJid"
            ], e);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield c(t);
            if (n.length > 1) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getOnlyNoteByChatJid] >1 note for jid ",
                    ""
                ])), t);
            }
            if (n.length > 0) {
                return n[0];
            }
            return null;
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaNote").getNoteTable().bulkCreateOrMerge(e);
        });
        return h.apply(this, arguments);
    }
    l.addOrEditNote = s;
    l.getNotesByChatJid = c;
    l.getNotesByChatJids = m;
    l.getOnlyNoteByChatJid = _;
    l.bulkUpdateNotes = g;
}, 98);