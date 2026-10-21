__d("WAWebContactsDbLidMigrationUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebWid",
    "WAWebWidError",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash"
    ];
    const s = [
        "contactHash",
        "statusMute"
    ];
    const u = [
        "contactHash",
        "displayNameLID",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash",
        "statusMute"
    ];
    const c = [
        "contactHash",
        "id",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash",
        "statusMute"
    ];
    let d;
    let m;
    let p;
    function _(e) {
        return e.map((e)=>{
            try {
                const n = e !== "" && !r("WAWebWid").isStringLid(e) ? o("WAWebWidFactory").createWid(e) : null;
                const a = n != null && n.isUserNotPSA() ? o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(n))?.toString() : null;
                return a ?? e;
            } catch (t) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeReplacePhoneNumbersWithLatestLids: ",
                    ""
                ])), t).sendLogs("maybeReplacePhoneNumbersWithLatestLids");
                return e;
            }
        });
    }
    function f(t, n) {
        const { phoneNumber: r, phoneNumberCreatedAt: o, pnContactHash: a } = t;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, i, {
            id: n,
            contactHash: a
        });
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const n = new Map;
            e?.forEach(function(e) {
                n.set(e.id, e);
            });
            e?.forEach(function(e) {
                if (r("WAWebWid").isStringLid(e.id)) {
                    const { contactHash: a, id: i, phoneNumber: l, phoneNumberCreatedAt: s, pnContactHash: u, statusMute: d } = e;
                    const m = babelHelpers.objectWithoutPropertiesLoose(e, c);
                    t.set(e.id, e);
                    const p = o("WAWebApiContact").getPnIfLidIsLatestMapping(o("WAWebWidFactory").createUserLidOrThrow(i));
                    if (p != null) {
                        const f = p.toJid();
                        const g = n.get(f);
                        t.set(f, babelHelpers.extends({}, m, {
                            id: f,
                            contactHash: e.pnContactHash,
                            statusMute: g?.statusMute ?? false
                        }));
                    }
                }
            });
            e?.forEach(function(e) {
                return !r("WAWebWid").isStringLid(e.id) && !t.has(e.id) && t.set(e.id, e);
            });
            return Array.from(t.values());
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        const { contactHash: n, statusMute: r } = t;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, s);
        const i = e.toString();
        if (n != null) {
            return babelHelpers.extends({}, a, {
                contactHash: o("WAWebApiContact").getContactHash(i),
                pnContactHash: n,
                id: i
            });
        }
        return babelHelpers.extends({}, a, {
            id: i
        });
    }
    function C(e, t) {
        const { contactHash: n, displayNameLID: r, phoneNumber: o, phoneNumberCreatedAt: a, pnContactHash: i, statusMute: l } = t;
        const s = babelHelpers.objectWithoutPropertiesLoose(t, u);
        const c = e.toJid();
        if (i != null) {
            return babelHelpers.extends({}, s, {
                contactHash: i,
                id: c
            });
        }
        return babelHelpers.extends({}, s, {
            id: c
        });
    }
    function b(e, t) {
        try {
            const n = o("WAWebWidFactory").createUserWidOrThrow(e);
            if (n.isLid()) {
                const r = o("WAWebApiContact").getPnIfLidIsLatestMapping(n);
                if (r != null) {
                    return C(r, t);
                }
                return null;
            }
            const a = o("WAWebApiContact").getCurrentLid(n);
            if (a != null) {
                return y(a, t);
            }
            return null;
        } catch (t) {
            if (t instanceof o("WAWebWidError").InvalidWidError) {
                const i = `@${o("WAWebWidValidator").Domains.S_WHATSAPP_NET}`;
                if (e.endsWith(i)) {
                    const l = e.length - i.length;
                    if (l < 5 || l > 20) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "getAlternateRowUpdates failed: invalid PN length ",
                            ""
                        ])), t).sendLogs("getAlternateRowUpdates-incorrect-pn-length");
                        return null;
                    }
                }
            }
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to get alternate row updates ",
                ""
            ])), t).sendLogs("getAlternateRowUpdates");
        }
        return null;
    }
    l.maybeReplacePhoneNumbersWithLatestLids = _;
    l.removeLidOnlyCols = f;
    l.replacePnRowsWithLidData = g;
    l.createContactLidRowFromPnRow = y;
    l.getAlternateRowUpdates = b;
}, 98);