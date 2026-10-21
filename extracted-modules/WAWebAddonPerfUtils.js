__d("WAWebAddonPerfUtils", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebQplFlowWrapper",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891434079, "3254");
    const s = r("qpl")._(891434096, "3255");
    const u = r("qpl")._(891428956, "3256");
    const c = n("$InternalEnum")({
        BulkUpsert: "bulk_upsert",
        BulkRemoveByParents: "bulk_remove_by_parents",
        BulkGetByParentMsgKeys: "bulk_get_by_parent_msg_keys",
        BulkGetByChatWid: "bulk_get_by_chat_wid",
        BulkGetParentMsgs: "bulk_get_parent_msgs"
    });
    const d = n("$InternalEnum").Mirrored([
        "Incoming",
        "Outgoing",
        "UI"
    ]);
    function m(e) {
        if (e < 10001) {
            return 10000;
        }
        if (e < 30001) {
            return 30000;
        }
        if (e < 500001) {
            return 50000;
        }
        if (e < 1000001) {
            return 100000;
        }
        if (e < 3000001) {
            return 300000;
        }
        if (e < 5000001) {
            return 500000;
        }
        if (e < 8000001) {
            return 800000;
        }
        return 1000000;
    }
    const p = {
        date: 0,
        values: new Map
    };
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = p;
            const n = new Date().setHours(0, 0, 0, 0);
            if (t.date === n) {
                const r = t.values.get(e);
                if (r == null) {
                    const a = m((yield o("WAWebAddonDBTable").addonInternalDBTable.getTableSize(e)));
                    t.values.set(e, a);
                    return a;
                }
                return r;
            }
            t.date = n;
            t.values.clear();
            const i = m((yield o("WAWebAddonDBTable").addonInternalDBTable.getTableSize(e)));
            t.values.set(e, i);
            return i;
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = "messages";
            const t = p;
            const n = new Date().setHours(0, 0, 0, 0);
            if (t.date === n) {
                const r = t.values.get(e);
                if (r == null) {
                    const a = m((yield o("WAWebSchemaMessage").getMessageTable().count()));
                    t.values.set(e, a);
                    return a;
                }
                return r;
            }
            t.date = n;
            t.values.clear();
            const i = m((yield o("WAWebSchemaMessage").getMessageTable().count()));
            t.values.set(e, i);
            return i;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return {
                string: {
                    request_type: c.getName(e.type),
                    table_mode: o("WAWebAddonConstants").AddonTableMode.getName(e.mode)
                },
                int: {
                    request_size: e.size,
                    table_size: yield _(e.mode)
                }
            };
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return {
                string: {
                    request_type: c.getName(e.type),
                    table_mode: "messages"
                },
                int: {
                    request_size: e.size,
                    table_size: yield g()
                }
            };
        });
        return v.apply(this, arguments);
    }
    function S() {
        return o("WAWebABProps").getABPropConfigValue("addon_infra_enable_perf_logging");
    }
    function R(e) {
        const t = Math.random();
        return t <= e / 100;
    }
    function L(e, t) {
        switch(e){
            case d.Incoming:
                if (t === o("WAWebAddonConstants").AddonTableMode.Reaction) {
                    return R(3);
                }
                return R(10);
            case d.Outgoing:
                return R(25);
            case d.UI:
                return R(1);
        }
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            if (S() && L(t, n)) {
                const annotations = yield a();
                let l;
                switch(t){
                    case d.Incoming:
                        l = s;
                        break;
                    case d.Outgoing:
                        l = u;
                        break;
                    case d.UI:
                        l = e;
                        break;
                }
                const c = o("WAWebQplFlowWrapper").QPL.markerStart(r("nullthrows")(l), {
                    annotations
                });
                return {
                    success: function() {
                        return c.end(2);
                    },
                    fail: function() {
                        return c.end(3);
                    }
                };
            }
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return E(e, t.mode, function() {
                return y(t);
            });
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return E(e, o("WAWebAddonConstants").AddonTableMode.None, function() {
                return b(t);
            });
        });
        return x.apply(this, arguments);
    }
    l.AnnotationRequestType = c;
    l.AddonQplMarkerType = d;
    l.getCachedTableSize = _;
    l.createAddonQplMarker = I;
    l.createMessagesQplMarker = D;
}, 98);