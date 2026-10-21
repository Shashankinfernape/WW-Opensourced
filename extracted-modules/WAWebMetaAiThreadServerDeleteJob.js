__d("WAWebMetaAiThreadServerDeleteJob", [
    "JSResourceForInteraction",
    "WALogger",
    "WAPersistedJobManager",
    "WATimeUtils",
    "WAWebDefinePersistedJob",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("JSResourceForInteraction")("WAWebMetaAiThreadServerDeleteJobImpl").__setRef("WAWebMetaAiThreadServerDeleteJob");
    const u = "metaAiThreadServerDelete";
    const c = {
        algo: {
            type: "exponential",
            first: o("WATimeUtils").MINUTE_MILLISECONDS
        }
    };
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
            const n = yield s.load();
            return n.enqueueMetaAiThreadServerDelete(e, t);
        });
        return m.apply(this, arguments);
    }
    const p = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("deleteOnServer", function(e) {
        return _(e);
    }).end();
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield r("WAWebNetworkStatus").waitIfOffline();
            const t = yield h();
            if (t == null) {
                g();
                return;
            }
            yield t.deleteOnServer(e);
        });
        return f.apply(this, arguments);
    }
    function g() {
        throw new (o("WAPersistedJobManager")).RetryOnBackoff(c);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                return yield s.load();
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-thread-server-delete] module-load-failed class=",
                    ""
                ])), C(t)).sendLogs("meta-ai-thread-server-delete-module-load-failed");
                return null;
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        try {
            if (!(e instanceof Error)) {
                return "NonError";
            }
            const t = e.name;
            if (t === "ChunkLoadError") {
                return "ChunkLoadError";
            }
            return "OtherError";
        } catch (e) {
            return "Unreadable";
        }
    }
    l.JOB_TYPE = u;
    l.enqueueMetaAiThreadServerDelete = d;
    l.metaAiThreadServerDeleteJob = p;
    l.retryOnBackoff = g;
}, 98);