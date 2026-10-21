__d("WAWebVoipBridgeInitHandlers", [
    "Promise",
    "WALogger",
    "WAWebEnvironment",
    "WAWebUnifiedSession",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReloadRecovery",
    "WAWebVoipRelayAllCallsAction",
    "WAWebVoipWebLoadable",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        initializeVoipWasm: function() {
            if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM load skipped on Windows Hybrid"
                ])));
                const t = function() {
                    return 0;
                };
                const a = new Proxy({}, {
                    get: function(n, r) {
                        if (!(r === "then" || r === "catch" || r === "finally")) {
                            return t;
                        }
                    }
                });
                return (s || (s = n("Promise"))).resolve(a);
            }
            if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
                throw r("err")("VoipWebBridgeApi: VoipWebWasm should not be loaded - voip download is not enabled");
            }
            return o("WAWebVoipWebLoadable").requireVoip();
        },
        prefetchVoipWasmLoaderModule: function() {
            if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() || !o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
                return (s || (s = n("Promise"))).resolve();
            }
            return o("WAWebVoipWebLoadable").prefetchVoipWasmLoaderModule();
        },
        startVoipInitReloadRecovery: function({ callId, canRing }) {
            return o("WAWebVoipInitReloadRecovery").startIncomingVoipInitReloadRecovery(callId, canRing);
        },
        finishVoipInitReloadRecovery: function({ callId }) {
            o("WAWebVoipInitReloadRecovery").finishIncomingVoipInitReloadRecovery(callId);
        },
        markVoipWasmArtifactUnavailable: function() {
            o("WAWebVoipInitReloadRecovery").markVoipWasmArtifactUnavailable();
        },
        markVoipChunkUnavailable: function() {
            o("WAWebVoipInitReloadRecovery").markVoipChunkUnavailable();
        },
        setRelayAllCallsToUserPrefs: function({ disallowAllP2p }) {
            return o("WAWebVoipRelayAllCallsAction").setRelayAllCallsToUserPrefs(disallowAllP2p);
        },
        getUnifiedSessionId: function() {
            return o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
        }
    };
    l.VoipBridgeInitHandlers = u;
}, 98);