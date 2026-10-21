__d("WAWebSmb3pdAggregatedConversionSignalAction", [
    "WAJids",
    "WALogger",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebCtwa3pdAggregatedConversionWamEvent",
    "WAWebDataSharing3pdLidCollection",
    "WAWebLidMigrationUtils",
    "WAWebWamEnumCtwaDirectionFrom",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const ctwa3pdAggregatedSchemaVersion = 1;
    function c(t, ctwa3pdConversionType, ctwa3pdConversionSubtype, ctwaDirectionFrom) {
        const d = o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(t);
        if (!(d == null || !d.is3pdag) && o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(), o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion()) && !(t.accountLid == null || !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(t.accountLid.toString()))) {
            const m = r("WAWebConversionTupleCollection").get(t.id);
            const ctwaConversationDepth = m?.conversationDepth ?? 0;
            if (!(ctwaDirectionFrom === o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM.CUSTOMER && ctwaConversationDepth === 0)) {
                const _ = o("WAWebCTWAGatingUtils").get3pdPostDcDepthLimit();
                if (!(_ > 0 && ctwaConversationDepth > _) && o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()) {
                    const adId = m?.sourceId;
                    if (!(adId == null || adId === "")) {
                        const g = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(t);
                        const ctwaConversationRepeat = m?.conversationRepeat ?? 0;
                        const y = o("WAWebLidMigrationUtils").toPn(t.id);
                        if (y == null) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[ctwa] log3pdAggregatedConversionSignal: no PN for chat"
                            ]))).sendLogs("ctwa-3pd-aggregated-no-pn");
                            return;
                        }
                        const C = o("WAJids").toPhoneUserJid(y.user);
                        o("WAWebChatThreadLogging").getCtwa3pdAggregatedThreadIDHMAC(C).then((e)=>{
                            const t = {
                                adId,
                                threadIdHmac: e ?? undefined,
                                ctwa3pdConversionType,
                                ctwa3pdConversionSubtype,
                                ctwa3pdSurfaceType: "thread",
                                ctwaDirectionFrom,
                                ctwaConversationDepth,
                                ctwaConversationRepeat,
                                ctwa3pdAggregatedSchemaVersion,
                                ctwaSignals: g ?? undefined
                            };
                            new (o("WAWebCtwa3pdAggregatedConversionWamEvent")).Ctwa3pdAggregatedConversionWamEvent(t).commit();
                        }).catch((e)=>{
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[ctwa] log3pdAggregatedConversionSignal failed"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("ctwa-3pd-aggregated-conversion-failed");
                        });
                    }
                }
            }
        }
    }
    l.log3pdAggregatedConversionSignal = c;
}, 98);