__d("WAWebApiBusinessProfile", [
    "invariant",
    "Promise",
    "WALogger",
    "WAWebBotTypes",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBusinessProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaBusinessProfile").getBusinessProfileTable().get(e);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebWidFactory").createWid(e);
            if (!t.isLid()) {
                s(0, 86986);
            }
            const n = yield p(e);
            if (n == null) {
                const r = o("WAWebLidMigrationUtils").toPn(t);
                if (r != null) {
                    const a = r.toString();
                    const i = yield p(a);
                    if (i != null) {
                        return babelHelpers.extends({}, i, {
                            id: e
                        });
                    }
                }
            }
            return n;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebWidFactory").createWid(e);
            const n = o("WAWebLidMigrationUtils").toLid(t);
            if (n != null) {
                const r = yield p(n.toString());
                if (r != null) {
                    return babelHelpers.extends({}, r, {
                        id: e
                    });
                }
            }
            return p(e);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebWidFactory").createWid(e).isLid()) {
                return f(e);
            }
            return h(e);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield p(e);
            if (t) {
                return I(t);
            }
            return null;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = T(e);
            yield o("WAWebSchemaBusinessProfile").getBusinessProfileTable().createOrMerge(t.id, t);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.id;
            const r = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t);
            return (m || (m = n("Promise"))).all(r.map((t)=>R(babelHelpers.extends({}, e, {
                    id: t
                }))));
        });
        return k.apply(this, arguments);
    }
    function I(t) {
        const n = t.commandsDescription;
        const r = o("WAWebWidFactory").createWid(t.id);
        const a = o("WAWebBotTypes").BizBotAutomatedType.cast(t.automatedType);
        const i = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(t.welcomeMsgProtocolMode);
        let l;
        if (t.prompts != null) {
            try {
                l = JSON.parse(t.prompts);
                if (!Array.isArray(l)) {
                    l = null;
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "businessProfileFromDbRow: prompts are not an array"
                    ]))).sendLogs("businessProfileFromDbRow: prompts are not an array");
                }
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "businessProfileFromDbRow: prompts parsing failed"
                ]))).sendLogs("businessProfileFromDbRow: prompts parsing failed");
            }
        }
        let s;
        if (t.commands != null) {
            try {
                s = JSON.parse(t.commands);
                if (!Array.isArray(s)) {
                    s = null;
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "businessProfileFromDbRow: commands are not an array"
                    ]))).sendLogs("businessProfileFromDbRow: commands are not an array");
                }
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "businessProfileFromDbRow: commands parsing failed"
                ]))).sendLogs("businessProfileFromDbRow: commands parsing failed");
            }
        }
        return {
            id: r,
            automatedType: a,
            welcomeMsgProtocolMode: i,
            prompts: l,
            commands: s,
            commandsDescription: n
        };
    }
    function T(e) {
        const t = e.commandsDescription;
        const n = e.id.toString();
        let r;
        if (e.automatedType) {
            r = e.automatedType;
        }
        let o;
        if (e.welcomeMsgProtocolMode) {
            o = e.welcomeMsgProtocolMode;
        }
        const a = e.prompts ? JSON.stringify(e.prompts) : void 0;
        const i = e.commands ? JSON.stringify(e.commands) : void 0;
        return {
            id: n,
            automatedType: r,
            welcomeMsgProtocolMode: o,
            prompts: a,
            commandsDescription: t,
            commands: i
        };
    }
    l.getBusinessProfileRow = p;
    l.getBusinessProfileRowLidAware = C;
    l.getBusinessProfileRecord = v;
    l.createOrMergeBusinessProfileRecordLidAware = E;
    l.businessProfileFromDbRow = I;
}, 98);