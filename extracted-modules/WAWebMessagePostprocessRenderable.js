__d("WAWebMessagePostprocessRenderable", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebContactSyncLogger",
    "WAWebMessagePostProcessBatcher",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { isOffline: t, latestPrivacyMode: r, messageOverwriteOption: a, msgInfo: i, msgs: l, shouldQueryContactInfo: s } = e;
            const c = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.PostProcessing);
            yield (u || (u = n("Promise"))).all(l.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                        chatId: e.id.remote,
                        msg: e,
                        messageOverwriteOption: a,
                        preserveOrder: true,
                        isOffline: t
                    });
                    o("WAWebMessagePostProcessBatcher").messagePostProcessBatcher.acceptMessage(e);
                    if (!t) {
                        o("WAWebMessagePostProcessBatcher").messagePostProcessBatcher.runActiveBatches();
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (s || r != null) {
                m(e);
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("updateUnattributedMessages", {
                messageInfo: i,
                messages: l
            });
            c?.();
        });
        return d.apply(this, arguments);
    }
    function m({ latestPrivacyMode: n, msgInfo: r, msgs: a, shouldQueryContactInfo: i }) {
        const l = r.chat;
        if (i) {
            o("WAWebBackendApi").frontendSendAndReceive("queryAndUpdateContactPropertiesOnNewChat", {
                contactInfoId: l.toString(),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PRIVACY_MODE_CHANGE
            }).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "query contact info on new chat failed"
                ])));
            });
        }
        if (!o("WAWebUserPrefsMeUser").isMeAccount(r.author) && n != null) {
            o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("updateBizPrivacyStatus", {
                msgIds: a.map((e)=>e.id),
                privacyMode: n
            }).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handlePrivacyModeChange] biz privacy update failed ",
                    ""
                ])), e);
            });
        }
    }
    l.postprocessRenderableMessages = c;
}, 98);