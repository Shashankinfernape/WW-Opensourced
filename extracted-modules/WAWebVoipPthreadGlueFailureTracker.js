__d("WAWebVoipPthreadGlueFailureTracker", [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipPthreadWorkerFields",
    "WAWebVoipWasmArtifactSkewErrors",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
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
    let C = null;
    const b = new Set;
    let v = null;
    let S = false;
    const R = new Set;
    const L = new Set;
    const E = 0.1;
    function k(e) {
        if (e.kind === "build_mismatch") {
            return r("err")(`${o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN} source=${e.source} expected=${e.expectedBuildSha} actual=${String(e.actualBuildSha)}`);
        }
        return r("err")(`${o("WAWebVoipWasmArtifactSkewErrors").PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN}: ${e.error}`);
    }
    function I(t) {
        const n = k(t);
        if (C != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] repeated failure after latch: ",
                ""
            ])), n.message);
            return;
        }
        if (t.kind === "build_mismatch") {
            C = n;
        }
        if (t.kind === "pinned_load_failed") {
            if (t.cause !== "timed_out") {
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailed();
            }
            w();
            F(t.workerID);
        } else {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] pthread refused its glue; failing waiters now instead of at timeout"
            ]))).catching(n).sendLogs("voip-pthread-glue-refused");
        }
        const r = T(t);
        D(t, n);
        if (t.kind === "pinned_load_failed") {
            const a = B(t.workerID);
            x(n, a === "bound" && r ? "bootstrap" : a, t.cause === "timed_out");
        }
    }
    function T(e) {
        if (e.kind !== "pinned_load_failed" || e.workerID == null) {
            return false;
        }
        for (const t of b){
            if (t.ownsThread && t.workerID === e.workerID) {
                return true;
            }
        }
        return false;
    }
    function D(e, t) {
        let n = 0;
        for (const r of Array.from(b)){
            const a = $(e, r);
            if (a != null) {
                if (a === "no_worker_id") {
                    n++;
                }
                b.delete(r);
                try {
                    r.reject(t);
                } catch (error) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [pthread-glue] listener threw: ",
                        ""
                    ])), String(error));
                }
            }
        }
        if (n > 0) {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueBootstrapWaitFailedUnmatched();
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] failed ",
                " bootstrap wait(s) without a worker match (failure worker=",
                ")"
            ])), n, String(e.workerID));
        }
    }
    function x(e, t, n) {
        if (t === "unused" || t === "bootstrap") {
            if (t === "bootstrap") {
                o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBootstrap();
            }
            const r = P(t, n);
            const a = n ? "did not load its glue in time" : "refused its glue";
            if (R.has(r)) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [pthread-glue] ",
                    " pthread worker ",
                    "; page unpinned: ",
                    ""
                ])), t, a, e.message);
                return;
            }
            R.add(r);
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] ",
                " pthread worker ",
                "; page unpinned"
            ])), t, a).catching(e).tags("non-sad").sendLogs(r, {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                sampling: E
            });
            return;
        }
        if (t === "bound") {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedBound();
        } else {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGluePinnedLoadFailedUnattributed();
        }
        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [pthread-glue] pthread refused its glue (worker ",
            "); failing waiters now instead of at timeout"
        ])), t).catching(e).sendLogs("voip-pthread-glue-refused");
    }
    function $(e, t) {
        if (e.kind === "build_mismatch") {
            return "build_mismatch";
        }
        if (t.scope !== "pthread_bootstrap") {
            return null;
        }
        const e_workerID = e.workerID;
        if (e_workerID == null || t.workerID == null) {
            return "no_worker_id";
        }
        if (e_workerID === t.workerID) {
            return "worker_match";
        }
        return null;
    }
    function P(e, t) {
        const n = e === "bootstrap" ? "voip-pthread-glue-refused-recovered-bootstrap" : "voip-pthread-glue-refused-recovered";
        if (t) {
            return `${n}-timeout`;
        }
        return n;
    }
    function N() {
        return C;
    }
    function M(e) {
        v = {
            unpin: function() {
                Reflect.set(e, "pinWorkerGlue", false);
            },
            terminateWorker: function(n) {
                return W(e.PThread, n);
            }
        };
        if (S) {
            v.unpin();
        }
    }
    function w() {
        let e;
        if (!S) {
            S = true;
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueRuntimeUnpinned();
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] pinned worker glue unavailable; later pthreads load the unpinned bundle"
            ])));
            if ((e = v) != null) {
                e.unpin();
            }
        }
    }
    function A() {
        return S;
    }
    function F(workerID) {
        if (workerID != null) {
            L.add(workerID);
        }
    }
    function O(e) {
        return e != null && L.has(e);
    }
    function B(workerID) {
        const t = v;
        if (t == null || typeof workerID !== "number") {
            return "unknown";
        }
        let n;
        try {
            n = t.terminateWorker(workerID);
        } catch (error) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] failed to terminate pthread worker ",
                ": ",
                ""
            ])), workerID, String(error));
            return "unknown";
        }
        if (n === "unused") {
            o("WAWebCoreActionsODS").logCallVoipInitWasmArtifactWorkerGlueStuckWorkerTerminated();
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [pthread-glue] terminated pthread worker ",
                " that refused its glue"
            ])), workerID);
        }
        return n;
    }
    function W(PThread, t) {
        const n = function(n) {
            return o("WAWebVoipPthreadWorkerFields").getPthreadWorkerID(n) === t;
        };
        const r = PThread.unusedWorkers.findIndex(n);
        if (r < 0) {
            if (PThread.runningWorkers.some(n)) {
                return "bound";
            }
            return "unknown";
        }
        PThread.unusedWorkers[r].close();
        PThread.unusedWorkers.splice(r, 1);
        return "unused";
    }
    function q() {
        return C != null;
    }
    function U(e, scope, a) {
        const i = C;
        if (i != null) {
            e.then(r("WAWebNoop"), (e)=>{
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [pthread-glue] suppressed late rejection after latch: ",
                    ""
                ])), String(e));
            });
            return (y || (y = n("Promise"))).reject(i);
        }
        return new (y || (y = n("Promise")))(function(n, r) {
            const o = {
                reject: r,
                scope,
                workerID: a?.workerID,
                ownsThread: a?.ownsThread === true
            };
            b.add(o);
            e.then((e)=>{
                b.delete(o);
                n(e);
            }, (e)=>{
                b.delete(o);
                r(e);
            });
        });
    }
    function V() {
        C = null;
        b.clear();
        v = null;
        S = false;
        R.clear();
        L.clear();
    }
    l.recordPthreadGlueFailure = I;
    l.getLatchedPthreadGlueFailure = N;
    l.attachPthreadGlueFailureModule = M;
    l.markPinnedWorkerGlueUnpinnedForPage = w;
    l.isPinnedWorkerGlueUnpinnedForPage = A;
    l.hasPinnedGlueFailedForWorker = O;
    l.hasTerminalPthreadGlueFailure = q;
    l.failFastOnPthreadGlueFailure = U;
    l.resetPthreadGlueFailureTracker = V;
}, 98);