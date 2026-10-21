__d("WAWebSendStickerAction", [
    "fbt",
    "WALogger",
    "WAWebAuraGating",
    "WAWebBizBotTosUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebMedia",
    "WAWebMediaOpaqueData",
    "WAWebModalManager",
    "WAWebRecentStickerCollection",
    "WAWebSendMsgResultAction",
    "WAWebSoundStickerUtils",
    "WAWebStateUtils",
    "WAWebStickerPremiumStatus",
    "WAWebStickerSendWamEvent",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "stickerSendOrigin"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const c = o("WAWebStateUtils").unproxy(e);
            yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(c);
            if (!r("WAWebAuraGating").canUsePremiumSticker(t.mediaData?.stickerPremiumStatus)) {
                o("WAWebCmd").Cmd.closeExpressionPanels();
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.openAlert(<Component title={s._("This is a premium sticker")} onOK={function() {
                    return o("WAWebModalManager").ModalManager.closeAlert();
                }}>{s._("View this sticker on your phone to learn how to access and use it.")}</Component>);
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
                };
            }
            const m = t.mediaData?.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
            const actionTarget = t.mediaData?.filehash;
            if (m && actionTarget != null && actionTarget !== "") {
                try {
                    const f = new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
                        benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
                        surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_TRAY
                    });
                    f.logSelect({
                        success: true,
                        actionTarget
                    });
                    f.logApply({
                        success: true,
                        actionTarget
                    });
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "stickers:wpbuj telemetry failed during send"
                    ]))).catching(error instanceof Error ? error : r("err")(String(error))).sendLogs("wpbuj-sticker-send-telemetry-failed");
                }
            }
            return _(c, t, n);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            let i;
            o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue([
                n
            ]);
            if (n.mediaData && n.mediaData.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
                n.mediaData.mediaBlob.retain();
            }
            const a_stickerSendOrigin = a.stickerSendOrigin;
            const u = babelHelpers.objectWithoutPropertiesLoose(a, e);
            const c = yield o("WAWebMedia").prepSticker(n).sendToChat({
                chat: t,
                options: babelHelpers.extends({}, u, {
                    stickerAudio: o("WAWebSoundStickerUtils").getSendableStickerAudio(n.stickerAudio, t.id)
                })
            });
            const d = {
                stickerSendOrigin: a_stickerSendOrigin,
                stickerIsAi: !!n.mediaData.isAiSticker,
                stickerIsAnimated: !!n.mediaData.isAnimated,
                stickerIsFirstParty: !!n.mediaData.isFirstParty,
                stickerIsFromStickerMaker: !!n.mediaData.isFromStickerMaker,
                stickerIsLottie: !!((i = n.mediaData) != null && i.isLottie),
                stickerIsPremium: n.mediaData?.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM
            };
            const m = new (o("WAWebStickerSendWamEvent")).StickerSendWamEvent(d);
            const p = o("WAWebWebpMetadata").getStickerMakerSourceType(n.mediaData.stickerMakerSourceType);
            if (p != null) {
                m.stickerMakerSourceType = p;
            }
            m.commit();
            return c;
        });
        return f.apply(this, arguments);
    }
    l.sendStickerToChat = m;
}, 226);