__d("WAWebWamStorage", [
    "WALogger",
    "WAWebWAWCStorage",
    "WAWebWamConstants",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = yield r("WAWebWAWCStorage").idb();
            return a.wam.add({
                key: e,
                buffer: n,
                channel: t
            }, e).catch((e)=>{
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "add failed: ",
                    "\n",
                    ""
                ], [
                    "add failed: ",
                    "\\n",
                    ""
                ])), String(e), r("getErrorSafe")(e).stack);
            });
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let a = 0;
            try {
                a = yield r("WAWebWAWCStorage").idb().then((r)=>r.wam.update(e, {
                        key: e,
                        buffer: n,
                        channel: t
                    }));
            } catch (e) {
                const i = r("getErrorSafe")(e);
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "update failed: ",
                    "\n",
                    ""
                ], [
                    "update failed: ",
                    "\\n",
                    ""
                ])), i, i.stack);
            }
            return a !== 0;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {};
            try {
                yield r("WAWebWAWCStorage").idb().then((n)=>n.wam.where("channel").equals(e).modify(function(e, n) {
                        t[e.key] = e.buffer;
                        delete n.value;
                    }));
            } catch (e) {
                const n = r("getErrorSafe")(e);
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "deleteAll failed: ",
                    "\n",
                    ""
                ], [
                    "deleteAll failed: ",
                    "\\n",
                    ""
                ])), n, n.stack);
            }
            return t;
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = -1;
            const a = 65536;
            try {
                const i = yield r("WAWebWAWCStorage").idb();
                yield i.transaction("rw", [
                    "wam_meta"
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = yield i.wam_meta.where("streamId").equals(e).count();
                    if (n === 0) {
                        yield i.wam_meta.add({
                            streamId: e,
                            seqNum: 1
                        });
                        t = 1;
                    } else {
                        yield i.wam_meta.where("streamId").equals(e).modify(function(e) {
                            t = e.seqNum + 1;
                            if (t >= a) {
                                t = 1;
                            }
                            e.seqNum = t;
                            return e;
                        });
                    }
                }));
            } catch (e) {
                const l = r("getErrorSafe")(e);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "getNextSequenceNumberForStream failed: ",
                    "\n",
                    ""
                ], [
                    "getNextSequenceNumberForStream failed: ",
                    "\\n",
                    ""
                ])), l, l.stack);
            }
            if (t === -1) {
                if (!r("gkx")("26258")) {
                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[wam] getNextSequenceNumberForStream failed"
                    ]))).sendLogs("getNextSequenceNumberForStreamFailed");
                }
                throw r("err")(`could not get seq number for streamId ${e}`);
            }
            return t;
        });
        return k.apply(this, arguments);
    }
    function I(t) {
        return r("WAWebWAWCStorage").idb().then((e)=>e.ps_meta.bulkDelete(t)).catch((t)=>{
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "removePsMeta failed: ",
                "\n",
                ""
            ], [
                "removePsMeta failed: ",
                "\\n",
                ""
            ])), String(t), r("getErrorSafe")(t).stack);
        });
    }
    function T() {
        return r("WAWebWAWCStorage").idb().then((e)=>e.ps_meta.toArray()).catch((e)=>{
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "getPsMeta failed: ",
                "\n",
                ""
            ], [
                "getPsMeta failed: ",
                "\\n",
                ""
            ])), String(e), r("getErrorSafe")(e).stack);
            return [];
        });
    }
    function D(e) {
        return r("WAWebWAWCStorage").idb().then((t)=>t.ps_meta.bulkPut(e)).catch((e)=>{
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "addPsMeta failed: ",
                "\n",
                ""
            ], [
                "addPsMeta failed: ",
                "\\n",
                ""
            ])), String(e), r("getErrorSafe")(e).stack);
        });
    }
    function x(e) {
        return r("WAWebWAWCStorage").idb().then((t)=>t.ps_meta.update(e.key, e)).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "updatePsMeta failed: ",
                "\n",
                ""
            ], [
                "updatePsMeta failed: ",
                "\\n",
                ""
            ])), String(e), r("getErrorSafe")(e).stack);
        });
    }
    function $() {
        return r("WAWebWAWCStorage").idb().then((e)=>e.ps_tokens.get("token")).catch((e)=>{
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "getPsToken failed: ",
                "\n",
                ""
            ], [
                "getPsToken failed: ",
                "\\n",
                ""
            ])), String(e), r("getErrorSafe")(e).stack);
        });
    }
    function P(e) {
        return r("WAWebWAWCStorage").idb().then((t)=>t.transaction("rw", [
                "ps_tokens"
            ], function() {
                return t.ps_tokens.put(e);
            })).catch((e)=>{
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "savePsToken failed: ",
                "\n",
                ""
            ], [
                "savePsToken failed: ",
                "\\n",
                ""
            ])), String(e), r("getErrorSafe")(e).stack);
        });
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield r("WAWebWAWCStorage").idb();
            return n.transaction("rw", [
                "core_wam",
                "core_wam_meta"
            ], function() {
                return n.core_wam.put(t).then(()=>n.core_wam_meta.put(e));
            });
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebWAWCStorage").idb();
            return t.core_wam.where("streamId").equals(e).modify({
                finished: true
            });
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebWAWCStorage").idb();
            return t.core_wam_meta.get({
                streamId: e
            });
        });
        return O.apply(this, arguments);
    }
    function B() {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("WAWebWAWCStorage").idb();
            return e.core_wam.toArray();
        });
        return W.apply(this, arguments);
    }
    function q() {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("WAWebWAWCStorage").idb();
            return e.transaction("rw", [
                "core_wam",
                "core_wam_meta"
            ], function() {
                return e.core_wam.clear().then(()=>e.core_wam_meta.clear());
            });
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebWAWCStorage").idb();
            return t.core_wam.delete(e);
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebWAWCStorage").idb();
            return t.transaction("rw", [
                "worker_wam_events"
            ], function() {
                return t.worker_wam_events.put(e);
            });
        });
        return z.apply(this, arguments);
    }
    function j() {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("WAWebWAWCStorage").idb();
            try {
                yield e.transaction("rw", [
                    "worker_wam_events"
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield e.worker_wam_events.limit(o("WAWebWamConstants").WAM_WORKER_DATA_BATCH_SIZE).modify(function(e, t) {
                        o("WAWebWamUtils").processWorkerWamDataRow(e);
                        delete t.value;
                    });
                }));
                const t = yield e.worker_wam_events.count();
                return t > 0;
            } catch (e) {
                const a = r("getErrorSafe")(e);
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "processWorkerWamData failed: ",
                    "\n",
                    ""
                ], [
                    "processWorkerWamData failed: ",
                    "\\n",
                    ""
                ])), a, a.stack);
                return false;
            }
        });
        return K.apply(this, arguments);
    }
    const Q = {
        add: C,
        update: v,
        deleteAll: R,
        getNextSequenceNumberForStream: E,
        addCoreWamBuffer: N,
        finishAllCoreWamBuffers: w,
        getCoreWamStartingSequenceNumber: F,
        getAllCoreWamBuffers: B,
        nukeAllCoreWamBuffers: q,
        removeWamBufferByKey: V,
        storeWorkerWamData: G,
        processWorkerWamData: j,
        removePsMeta: I,
        getPsMeta: T,
        addPsMeta: D,
        updatePsMeta: x,
        getPsToken: $,
        savePsToken: P
    };
    l.default = Q;
}, 98);