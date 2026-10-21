__d("WAWebStickersDetailsDrawerModal.react", [
    "fbt",
    "WAWebChatInfoActionButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlatListController",
    "WAWebInMemoryLottieStickerCache",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebStickerDetailsStickerPackInfo.react",
    "WAWebStickerOverlayAnimation.react",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebStickerPremiumStatus",
    "WAWebStickerUtils",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "WAWebWdsIcSendFilledIcon.react",
    "react",
    "useLazyRef",
    "useWAWebWaPlusBenefitJourneyViewOnMount"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useRef, useState } = d;
    const f = {
        controlsButton: {
            marginInlineStart: "xyqm7xq",
            marginInlineEnd: "x1ys307a",
            $$css: true
        }
    };
    function g(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const { onBack, onSend, sticker, stickerPack } = a;
        const enabled = stickerPack.premium > 0;
        r("useWAWebWaPlusBenefitJourneyViewOnMount")({
            benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
            surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_STORE,
            enabled,
            actionTarget: "sticker_preview"
        });
        const sticker_mediaData = sticker.mediaData;
        const C = sticker_mediaData.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
        const b = o("WAWebStickerUtils").getStickerFileType(sticker_mediaData.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE;
        const v = o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(sticker_mediaData.filehash, sticker_mediaData.mimetype, sticker_mediaData.stickerPremiumStatus);
        const S = useState(b && C);
        const R = S[0];
        const L = S[1];
        const E = useCallback(function(e, t) {
            if (v) {
                L(true);
            }
        }, [
            v
        ]);
        const k = useCallback(function() {
            L(false);
        }, []);
        const I = useState(null);
        const T = I[0];
        const D = I[1];
        const xRef = useRef();
        const $ = (sticker, n)=>{
            onSend(sticker, n === o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
        };
        const P = function() {
            const e = r("WAWebNewsletterCollection").getActive();
            if (e != null) {
                const t = e.newsletterMetadata;
                if (o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(t) && xRef.current && o("WAWebNewsletterGatingUtils").isWamoSubCreatorExperienceSupported()) {
                    const handleSelect = function(t) {
                        $(sticker, t);
                    };
                    D({
                        popupAnchorEl: xRef.current,
                        handleSelect
                    });
                    return;
                }
            }
            $(sticker);
        };
        const Component = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_1 = r("WAWebStickerPanelContentStickerItem.react");
        const Component_2 = r("WAWebStickerOverlayAnimation.react");
        const Component_3 = r("WAWebChatInfoActionButton.react");
        const Component_4 = r("WAWebNewsletterWamoSubMessageTypePopup.react");
        const Component_5 = r("WAWebDrawerSection.react");
        const Component_6 = r("WAWebDrawerBody.react");
        const Component_7 = r("WAWebDrawer.react");
        return <Component_7 key="sticker-details-modal" theme="sticker-store" ref={t_ref} testid="sticker-drawer-sticker-details"><Component title={s._("Sticker details")} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onBack={onBack} focusBackOrCancel/><Component_6 flatListControllers={[
            i.current
        ]}><Component_5 animation={false} theme="padding-no-margin"><div className="x78zum5 xl56j7k x1plvlek xryxfnj x1vjgj0v xya0cws x1c436fg xh8yej3"><Component_1 key={sticker.id} sticker={sticker} theme="stickerDetails" onClick={E}/>{R && <Component_2 mediaData={sticker_mediaData} onClose={k}/>}</div>{c.jsx(o("WAWebStickerDetailsStickerPackInfo.react").StickerDetailsStickerPackInfo, {
            isPremium: stickerPack.premium > 0,
            name: stickerPack.name,
            publisher: stickerPack.publisher,
            theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme.StickerStore
        })}<div className="x78zum5 xl56j7k x14ler8"><Component_3 ref={xRef} Icon={o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon} label={s._("Send to this chat")} testid="sticker-action send-button" xstyle={f.controlsButton} onClick={P}/></div>{T != null && <Component_4 handleSelect={T.handleSelect} popupAnchorEl={T.popupAnchorEl} onDismiss={function() {
            return D(null);
        }}/>}</Component_5></Component_6></Component_7>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.default = g;
}, 226);