__d("WAWebConsumerTransparencyModalDialog.react", [
    "fbt",
    "WAWebCTWAGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaConsumerDisclosureWamEvent",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebWamEnumDisclosureAction",
    "WAWebWamEnumDisclosureType",
    "WDSIconIcSecurity.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSIllustrationWdsPictoMetaDataChevron.react",
    "WDSMargins.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        marginTop36: {
            marginTop: "xseo6mj",
            $$css: true
        }
    };
    const m = {
        fullWidth: {
            width: "xh8yej3",
            $$css: true
        },
        bulletIconColorNew: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function p() {
        o("WAWebModalManager").ModalManager.open(<F3Component/>);
    }
    function _() {
        const e = o("react-compiler-runtime").c(14);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
                testid: "single-chevron-in-circle",
                height: 24,
                width: 24,
                xstyle: m.bulletIconColorNew
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        const a = t;
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = u.jsx(r("WDSIconIcVisibilityOff.react"), {
                height: 24,
                width: 24,
                xstyle: m.bulletIconColorNew
            });
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = i;
        let c;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = u.jsx(r("WDSIllustrationWdsPictoMetaDataChevron.react"), {
                testid: "wds-picto-meta-data-chevron"
            });
            e[2] = c;
        } else {
            c = e[2];
        }
        const p = c;
        let _;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("This icon means Meta receives limited info, like the number and types of interactions with a business chat");
            e[3] = _;
        } else {
            _ = e[3];
        }
        const f = _;
        let g;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI();
            e[4] = g;
        } else {
            g = e[4];
        }
        const h = g;
        let y;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy();
            e[5] = y;
        } else {
            y = e[5];
        }
        const C = y;
        let b;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            b = <Component justify="center" xstyle={[
                m.fullWidth,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ]}>{p}</Component>;
            e[6] = b;
        } else {
            b = e[6];
        }
        let v;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            v = <Component type="Headline2" colorName="contentDefault" testid="ctwa-consumer-transparency-title" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop12}>{C ? s._("About chats that start from ads on Meta") : s._("About chats that start from Facebook or Instagram ads")}</Component>;
            e[7] = v;
        } else {
            v = e[7];
        }
        let S;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebExternalLink.react").ExternalLink;
            const Component_2 = r("WDSText.react");
            S = <Component_2 type="Body1" colorName="contentDefault" testid="ctwa-consumer-transparency-description" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop16}>{C ? s._("When you start a chat with a business after interacting with their ad on Meta, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}", [
                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getConsumerTransparencyHCAUrl()}>{s._("Learn more")}</Component>)
            ]) : s._("When you start a chat with a business after interacting with their ad on Facebook or Instagram, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}", [
                s._implicitParam("=m2", <Component_1 href={o("WAWebFaqUrl").getConsumerTransparencyHCAUrl()}>{s._("Learn more")}</Component_1>)
            ])}</Component_2>;
            e[8] = S;
        } else {
            S = e[8];
        }
        let R;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("WhatsApp never shares your message content or calls");
            e[9] = R;
        } else {
            R = e[9];
        }
        let L;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            L = <Component_1 justify="center" align="center" xstyle={d.marginTop36}>{l}<Component type="Body3" colorName="contentDefault" testid="ctwa-consumer-transparency-message-privacy" xstyle={o("WDSMargins.stylex").wdsMargins.marginStart24}>{R}{h && "."}</Component></Component_1>;
            e[10] = L;
        } else {
            L = e[10];
        }
        let E;
        if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            E = <Component_1 justify="center" align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20}>{a}<Component type="Body3" colorName="contentDefault" testid="ctwa-consumer-transparency-data-sharing" xstyle={o("WDSMargins.stylex").wdsMargins.marginStart24}>{f}{h && "."}</Component></Component_1>;
            e[11] = E;
        } else {
            E = e[11];
        }
        let k;
        if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
            k = u.jsx(r("WDSIconIcSecurity.react"), {
                height: 24,
                width: 24,
                xstyle: m.bulletIconColorNew
            });
            e[12] = k;
        } else {
            k = e[12];
        }
        let I;
        if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            I = <Component_2>{b}{v}{S}{L}{E}<Component_1 justify="center" align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20}>{k}<Component type="Body3" colorName="contentDefault" testid="ctwa-consumer-transparency-blocking" xstyle={o("WDSMargins.stylex").wdsMargins.marginStart24}>{s._("You can always stop chatting with a business or block them")}{h && <>. {s._("After you block a business, Meta will no longer receive limited info.")}</>}</Component></Component_1></Component_2>;
            e[13] = I;
        } else {
            I = e[13];
        }
        return I;
    }
    function F3Component() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        e_useEffect(g, t);
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = s._("Close");
            e[1] = n;
        } else {
            n = e[1];
        }
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            r = <Component testid="ctwa-consumer-transparency-modal-dialog" type={o("WAWebModal.react").ModalTheme.UpdatedDataSharing} onOK={o("WAWebModalManager").closeModalManager} okText={n} onOverlayClick={o("WAWebModalManager").closeModalManager}><_/></Component>;
            e[2] = r;
        } else {
            r = e[2];
        }
        return r;
    }
    function g() {
        new (o("WAWebCtwaConsumerDisclosureWamEvent")).CtwaConsumerDisclosureWamEvent({
            ctwaConsumerDisclosureVersion: 1,
            disclosureAction: o("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION.SCREEN_VIEW,
            disclosureType: o("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE.INFO
        }).commit();
    }
    l.showConsumerTransparencyModalDialog = p;
    l.ConsumerTransparencyModalDialog = F3Component;
}, 226);