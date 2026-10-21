__d("WAWebOfflineResumeUtils", [
    "Promise",
    "WABackoffUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBlocklistMigration",
    "WAWebClearDanglingReceipts",
    "WAWebCoexV2MessageAckProjection",
    "WAWebDbEncryptionKey",
    "WAWebGetMessageCache",
    "WAWebLogoutReasonConstants",
    "WAWebMessageReceiptBatcher",
    "WAWebNetworkStatus",
    "WAWebOffdStorageUpdateOfflinePeerReceipts",
    "WAWebOfflineDeviceCache",
    "WAWebPageLoadLogging",
    "WAWebPruneExpiredMessagesWithAddOns",
    "WAWebPushNotificationsOfflineBbApi",
    "WAWebReloadReason",
    "WAWebSocketLogoutJob",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "cr:37442",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    let C;
    const b = n("cr:37442") ?? {};
    const b_reconcileMetaAiUnreadCounts = b.reconcileMetaAiUnreadCounts;
    const S = {
        MIN_MESSAGE: 20,
        LIMIT_WITH_MESSAGE: 50,
        MAX_STANZA: 200
    };
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebGetMessageCache").getMessageCache().createSnapshot();
            o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.createSnapshot();
            const e = [
                o("WAWebGetMessageCache").getMessageCache().checkpointQueueWait(),
                o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.checkpointQueue.wait()
            ];
            e.push(o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(), o("WAWebCoexV2MessageAckProjection").flushCoexV2OfflineMessageAckWork());
            yield (C || (C = n("Promise"))).all(e);
        });
        return L.apply(this, arguments);
    }
    function E() {
        if (r("WAWebNetworkStatus").online) {
            return o("WAPromiseLoop").promiseLoop((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                    const r = o("WAPromiseDelays").delayMs(o("WABackoffUtils").expBackoff(n, 120000, 1000, 0.1));
                    try {
                        yield o("WAWebClearDanglingReceipts").clearDanglingReceipts();
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][utils] runReceiptCleanUpLoop: done."
                        ])));
                        return e();
                    } catch (error) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][utils] runReceiptCleanUpLoop failed ",
                            ""
                        ])), error);
                        if (n > 3) {
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] runReceiptCleanUpLoop: gave up ",
                                " tries"
                            ])), n);
                            return e();
                        }
                        return r;
                    }
                });
                return function(t, n, r) {
                    return e.apply(this, arguments);
                };
            })());
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[offline-resume][utils] runReceiptCleanUpLoop: offline skip"
        ])));
        return (C || (C = n("Promise"))).resolve();
    }
    function k(e, t) {
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow: ",
            ""
        ])), e);
        o("WAWebReloadReason").recordReloadReason(e, t);
        window.location?.reload();
    }
    function I(e, t) {
        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "[offline-resume] restoreDataFromStorage failed for ",
            ""
        ])), e).catching(r("getErrorSafe")(t)).verbose().sendLogs(`offline-resume-fatal-error-${e}`, {
            sendLogsType: o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD
        });
        o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.WebFailOfflineResume);
        return true;
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                if (e.shouldUpdateReceipts === true) {
                    yield o("WAWebOffdStorageUpdateOfflinePeerReceipts").updatePeerReceipts();
                    try {
                        yield b_reconcileMetaAiUnreadCounts?.();
                    } catch (error) {
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] reconcileMetaAiUnreadCounts - ",
                            ""
                        ])), String(error));
                    }
                }
                yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("restoreChatsAndMessages");
                if (o("WAWebBlocklistMigration").applyBlocklistV2Rules()) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("restoreBlocklist");
                }
            } catch (error) {
                I("chats", error);
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("restoreDataFromStorage");
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] restoreDataFromStorage."
            ])));
            const t = o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("restoreProfilePictures").catch((e)=>{
                I("profile-pictures", e);
            });
            const r = o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("restoreGroupsAndContacts").catch((e)=>{
                I("groups-and-contacts", e);
            });
            yield (C || (C = n("Promise"))).all([
                T(e),
                r,
                t
            ]);
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("restoreDataFromStorage");
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.LoadMainScreen);
            try {
                yield o("WAWebPruneExpiredMessagesWithAddOns").pruneExpiredMessagesWithAddOns().catch((e)=>{
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] pruneExpiredMessagesWithAddOns failed"
                    ]))).catching(r("getErrorSafe")(e));
                    throw e;
                });
                if (n("cr:11133") != null && n("cr:11133")()) {
                    yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                    M();
                    yield x(e).catch((e)=>{
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] restoreDataFromStorage failed after entering MAIN"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("startup-restore-after-main-failed");
                        throw e;
                    });
                } else {
                    yield x(e);
                    M();
                }
                o("WAWebBackendEventBus").BackendEventBus.triggerOfflineProcessReady();
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] loadMainScreen complete"
                ])));
            } finally{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.LoadMainScreen);
            }
        });
        return N.apply(this, arguments);
    }
    function M() {
        o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady();
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logMainScreenLoadT();
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT();
    }
    function w(e, t) {
        return e + t > S.MAX_STANZA || e > S.MIN_MESSAGE && e + t > S.LIMIT_WITH_MESSAGE;
    }
    l.clearOfflineSnapShot = R;
    l.runReceiptCleanUpLoop = E;
    l.refreshWindow = k;
    l.loadMainScreen = P;
    l.exceedResumeWithOpenTabLimit = w;
}, 98);