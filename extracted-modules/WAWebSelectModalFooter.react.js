__d("WAWebSelectModalFooter.react", [
    "fbt",
    "WAWebChatModel",
    "WAWebContactModel",
    "WAWebEmojiText.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySelectModalFooter.react",
    "WAWebProductModel",
    "WAWebRound.react",
    "WAWebSelectModal.react",
    "WAWebStatusPostingUtils",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSIconIcArrowForward.react",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "compactMap",
    "react",
    "stylex",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebStatusPrivacySettingConfig"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useMemo, useRef, useState } = d;
    const g = {
        container: {
            zIndex: "x12xzxwr",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            $$css: true
        },
        footer: {
            zIndex: "xfo81ep",
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            width: "xh8yej3",
            paddingInlineEnd: "x15fo07t",
            paddingInlineStart: "xb0esv5",
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        footerWithSummary: {
            height: "x1x0gksc",
            $$css: true
        },
        footerWithoutSummary: {
            height: "xqtp20y",
            $$css: true
        },
        footerWithAccessory: {
            flexDirection: "xdt5ytf",
            alignItems: "x1qjc9v5",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        summaryText: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1jchvi3",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        btn: {
            position: "x10l6tqk",
            insetInlineEnd: "x145d82y",
            left: null,
            right: null,
            bottom: "x3h4tne",
            $$css: true
        },
        btnSend: {
            position: "x10l6tqk",
            insetInlineEnd: "x11dcrhx",
            left: null,
            right: null,
            $$css: true
        },
        btnWithAccessory: {
            insetInlineEnd: "x2fp4s7",
            left: null,
            right: null,
            $$css: true
        },
        hideFooter: {
            opacity: "xg01cxk",
            transform: "x1f85oc2",
            $$css: true
        },
        sendButtonRefresh: {
            color: "x1pse0pq",
            backgroundColor: "xfn3atn",
            $$css: true
        }
    };
    const h = {
        CONFIRM: "CONFIRM",
        NEXT: "NEXT",
        SEND: "SEND"
    };
    function y({ accessory, getSelectionSummary, getAnnouncementSummary, selections, additionalSelectedCount = 0, activeWithoutSelection, onForward, startActive, singleSelectionType = h.SEND, multipleSelectionType = h.SEND, shouldShowSelectionSummary = true, disclaimer, xstyle, sendButtonAriaLabel, listType, groupWid }) {
        const NRef = useRef(activeWithoutSelection === true || startActive === true);
        const M = r("useWAWebDebouncedCallback")(onForward, 1000, {
            leading: true
        });
        const w = useState([]);
        const A = w[0];
        const F = w[1];
        o("useWAWebListener").useListener(selections, "all", function() {
            F(selections.getSelected());
        });
        useEffect(function() {
            const e = selections.getSelected();
            F(e);
        }, []);
        const O = function() {
            M();
        };
        const B = useMemo(function() {
            return activeWithoutSelection === true || A.length > 0 || additionalSelectedCount > 0;
        }, [
            activeWithoutSelection,
            additionalSelectedCount,
            A
        ]);
        const W = sendButtonAriaLabel ?? s._("Send");
        useEffect(function() {
            if (!B) {
                NRef.current = false;
            }
        }, [
            B
        ]);
        let q;
        if (B) {
            const U = A.length + additionalSelectedCount === 1 ? singleSelectionType : multipleSelectionType;
            let V;
            let H;
            switch(U){
                case h.CONFIRM:
                    V = c.jsx(r("WDSIconIcCheck.react"), {
                        width: 24,
                        height: 24,
                        testid: "select-modal-confirm-icon"
                    });
                    H = s._("Confirm");
                    break;
                case h.NEXT:
                    V = c.jsx(r("WDSIconIcArrowForward.react"), {
                        directional: true
                    });
                    H = s._("Next");
                    break;
                case h.SEND:
                default:
                    V = c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
                        width: 30,
                        directional: true
                    });
                    H = W;
            }
            const Component = o("WAWebRound.react").Round;
            const G = <Component label={H} theme={shouldShowSelectionSummary ? o("WAWebRound.react").RoundTheme.Default : o("WAWebRound.react").RoundTheme.Large} xstyle={g.sendButtonRefresh} onClick={O}>{V}</Component>;
            if (disclaimer != null) {
                const Component = r("WAWebGroupHistorySelectModalFooter.react");
                const Component_1 = r("WDSText.react");
                const Component_2 = r("WAWebVelocityTransitionGroup");
                return <Component_2 transitionName="slide-up-down-footer">{listType === o("WAWebSelectModal.react").ListType.ParticipantManageModal && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(groupWid) ? <Component actionLabel={s._("_j{\"*\":\"Add members\",\"_1\":\"Add member\"}", [
                    s._plural(A.length + additionalSelectedCount)
                ])} onActionPress={O} disclaimer={disclaimer} memberCount={A.length} selectedContacts={A.filter((e)=>e instanceof r("WAWebContactModel"))}/> : <div className="xhtitgo x78zum5 x2lah0s x6s0dn4 x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1l1ennw"><p className="xvtqlqk x1yc453h x1mzt3pk" data-testid="select-modal-footer-disclaimer-wrapper"><Component_1 type="Body2" colorName="contentDeemphasized" testid="select-modal-footer-disclaimer">{disclaimer}</Component_1></p><div data-animate-btn>{G}</div></div>}</Component_2>;
            }
            const z = shouldShowSelectionSummary ? <C items={A} getSelectionSummary={getSelectionSummary} getAnnouncementSummary={getAnnouncementSummary}/> : null;
            const j = shouldShowSelectionSummary ? g.btnSend : g.btn;
            const K = <div {...babelHelpers.extends({
                "data-animate-btn": true
            }, (e || (e = r("stylex"))).props(j, accessory != null && g.btnWithAccessory, !NRef.current && g.hideFooter), {
                children: G
            })}/>;
            q = accessory != null ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.footer, g.footerWithAccessory, xstyle), {
                children: [
                    <div className="x1p57kb1 xyo0t3i">{accessory}</div>,
                    <div className="x1n2onr6 x78zum5 x6s0dn4 x1x0gksc x15fo07t">{z}{K}</div>
                ]
            })}/> : <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.footer, shouldShowSelectionSummary ? g.footerWithSummary : g.footerWithoutSummary, xstyle), {
                children: [
                    z,
                    K
                ]
            })}/>;
        }
        const Component = r("WAWebVelocityTransitionGroup");
        return <Component transitionName="slide-up-down-footer" xstyle={g.container}>{q}</Component>;
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C({ getAnnouncementSummary, getSelectionSummary, items }) {
        let t;
        const l = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig();
        const l_statusPostingPrivacyConfig = l.statusPostingPrivacyConfig;
        const d = r("compactMap")(items, function(e) {
            if (e instanceof o("WAWebChatModel").Chat) {
                if (e.id.isStatus()) {
                    if (l_statusPostingPrivacyConfig != null) {
                        return o("WAWebStatusPostingUtils").formatStatusSetting(l_statusPostingPrivacyConfig);
                    }
                    return null;
                }
                return e.formattedTitle;
            }
            if (e instanceof o("WAWebProductModel").Product) {
                return e.name;
            }
            return o("WAWebFrontendContactGetters").getFormattedShortNameWithNonBreakingSpaces(e) || o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e);
        });
        const m = [];
        for(let p = d.length - 1; p >= 0; p--){
            const Component = o("WAWebEmojiText.react").EmojiText;
            m.push(<Component key={p} className="x1rg5ohu x4gbaf0" text={d[p]}/>);
        }
        const _ = (t = r("WAWebFbtIntlList"))(m, t.CONJUNCTIONS.NONE, t.DELIMITERS.COMMA);
        const f = t(d, t.CONJUNCTIONS.NONE, t.DELIMITERS.COMMA);
        const h = s.isFbtInstance(f) ? f : null;
        const y = <span aria-live="polite" aria-label={getAnnouncementSummary?.(items)} title={h}>{getSelectionSummary == null ? _ : getSelectionSummary(items)}</span>;
        const Component = r("WAWebVelocityTransitionGroup");
        return <Component transitionName="pop" xstyle={g.summaryText}>{y}</Component>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.FooterType = h;
    l.SelectModalFooter = y;
}, 226);