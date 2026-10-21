__d("WAWebHandleSuccess", [
    "Promise",
    "WABase64",
    "WACustomError",
    "WADeprecatedWapParser",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABPropsLocalStorage",
    "WAWebAbPropsSyncJob",
    "WAWebBackendEventBus",
    "WAWebCollectionHandlerActions",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebMediaHosts",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebQplFlowWrapper",
    "WAWebSyncdGetActionHandler",
    "WAWebUpdateClockSkewUtils",
    "WAWebUpdateMeLidUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "justknobx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = r("qpl")._(891431279, "3267");
    const p = n("cr:17219") == null ? undefined : n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebHandleSuccess);
    const _ = new (r("WADeprecatedWapParser"))("successParser", function(e) {
        e.assertTag("success");
        return {
            ts: e.attrTime("t"),
            companionEncStatic: e.maybeAttrString("companion_enc_static") || "NULL",
            lid: e.maybeAttrString("lid"),
            displayName: e.maybeAttrString("display_name"),
            abpropsRefreshId: e.maybeAttrInt("abprops"),
            groupAbpropsRefreshId: e.maybeAttrInt("group_abprops")
        };
    });
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WAWebPageLoadLogging").addPageLoadQplPoint("success_received");
            o("WAWebQplFlowWrapper").QPL.markerPoint(m, "SuccessReceived");
            const s = _.parse(t);
            if (s.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSuccess: failed to parse ",
                    ""
                ])), s.error);
                return (d || (d = n("Promise"))).reject(s.error);
            }
            const s_success = s.success;
            o("WAWebUpdateClockSkewUtils").updateClockSkew(s_success.ts);
            o("WAWebUpdateMeLidUtils").updateMeLid(s_success.lid != null ? o("WAWebWidFactory").createWid(s_success.lid) : null);
            if (s_success.displayName != null) {
                o("WAWebUserPrefsMeUser").setMeDisplayName(s_success.displayName);
            }
            o("WAWebSyncdGetActionHandler").setActionHandlers(o("WAWebCollectionHandlerActions").ActionHandlers);
            o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
                banned: false
            });
            o("WAWebPassiveModeManager").PassiveTaskManager.executePassiveTasks();
            o("WAWebUserPrefsGeneral").setOfflinePushDisabled(false);
            const u_companionEncStatic = s_success.companionEncStatic;
            o("WAWebDbEncryptionKey").DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(u_companionEncStatic);
            o("WAWebCryptoEncKeyHelper").generateFinalDbEncryptionAndFtsKeyForInvoker(u_companionEncStatic);
            if (r("WAWebEnvironment").isWindows && r("justknobx")._("5257")) {
                h(u_companionEncStatic);
            }
            p?.contacts?.initialize();
            const f = s_success.abpropsRefreshId ?? 0;
            const g = o("WAWebABPropsLocalStorage").getRefreshId();
            const y = r("justknobx")._("2086");
            const b = o("WAWebABPropsLocalStorage").getWebRefreshId();
            if (b !== y) {
                o("WAWebABPropsLocalStorage").setWebRefreshId(y);
            }
            if (f !== 0 && g !== f || y !== 0 && b !== y) {
                const v = o("WAWebABPropsLocalStorage").isABPropsAfterFirstSync();
                if (v) {
                    yield o("WAWebAbPropsSyncJob").syncABPropsTask({
                        localRefreshId: g !== f ? g : b,
                        shouldSendHash: false
                    });
                }
            }
            const S = s_success.groupAbpropsRefreshId ?? 0;
            const R = o("WAWebABPropsLocalStorage").getGroupAbPropsRefreshId();
            if (S !== 0 && S !== R) {
                o("WAWebABPropsLocalStorage").setGroupAbPropsEmergencyPushTimestamp(s_success.ts);
            }
            yield C(1000);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = p?.serverEncKeySaltBridge;
            if (t == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveServerEncKeySalt] bridge unavailable"
                ])));
                return;
            }
            const n = new TextEncoder;
            const r = o("WABase64").encodeB64(n.encode(e));
            yield t.setServerEncKeySalt(r);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAPromiseTimeout").promiseTimeout(o("WAWebMediaHosts").mediaHosts.forceRefresh(new AbortController().signal), e);
            } catch (error) {
                if (error instanceof o("WACustomError").TimeoutError) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "fetching mms4 hosts on startup exceeded timeout"
                    ]))).sendLogs("mms4-fetch-host-timeout", {
                        sampling: 0
                    });
                } else {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "fetching mms4 hosts on startup failed: ",
                        ""
                    ])), error).sendLogs("mms4-fetch-host-failed");
                }
            }
        });
        return b.apply(this, arguments);
    }
    l.default = f;
}, 98);