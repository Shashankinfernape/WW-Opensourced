__d("WAWebMultiSelectBar.react", [
    "fbt",
    "$InternalEnum",
    "WAWebChatEphemerality",
    "WAWebCopyUtils",
    "WAWebEnvironment",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebKeepInChatMsgUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMultiSelectCount.react",
    "WAWebMultiSelectDelete.react",
    "WAWebMultiSelectDownload.react",
    "WAWebMultiSelectForward.react",
    "WAWebMultiSelectKeep.react",
    "WAWebMultiSelectStar.react",
    "WAWebNewsletterMsgLinkUtils",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcClose.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcLink.react",
    "WDSMenuBarItem.react",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useRef = c.useRef;
    const p = {
        paddingInlineStart15: {
            paddingInlineStart: "x1gx403c",
            $$css: true
        }
    };
    const _ = {
        multiControls: {
            position: "x10l6tqk",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            zIndex: "xfo81ep",
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            height: "x12659sl",
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        mediaGalleryTheme: {
            top: "x13vifvy",
            height: "x185czh",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        btnMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    const f = n("$InternalEnum")({
        CONVERSATION_PANEL: "conversation_panel",
        MEDIA: "media",
        DOCS: "docs",
        LINKS: "links",
        PRODUCTS: "products"
    });
    const g = n("$InternalEnum")({
        DEFAULT: "default",
        DELETE: "delete",
        FORWARD: "forward"
    });
    function h(t) {
        "use no forget";
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { selectedMessages, chat, toastPosition, onCancel, noSortOnForward, downloadButton } = i;
        const downloadButton_1 = downloadButton === undefined ? true : downloadButton;
        const { entryPoint, mode } = i;
        const R = mode === undefined ? g.DEFAULT : mode;
        const L = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const E = c_useRef(null);
        const k = r("useMergeRefs")(t_ref, E);
        const I = function() {
            const e = selectedMessages.getSelected();
            o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(e[0]);
        };
        const T = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield o("WAWebCopyUtils").copyMessagesToClipboard(D);
                if (e != null && e > 0) {
                    const t = s._("_j{\"*\":\"Copied {number_of_reactions} messages to clipboard\",\"_1\":\"Copied 1 message to clipboard\"}", [
                        s._plural(e, "number_of_reactions")
                    ]);
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                        msg: t
                    }));
                    onCancel();
                } else {
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't copy to clipboard")
                    }));
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        o("useWAWebListener").useListeners(selectedMessages.getSelected().map((e)=>({
                source: e,
                eventOrEvents: "change:star",
                callback: L
            })));
        o("useWAWebListener").useListener(selectedMessages, "all", L);
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, [
            "change:star",
            "change:kicState"
        ], function(e) {
            if (selectedMessages.isSelected(e)) {
                L();
            }
        });
        var D = i.selectedMessages.getSelected();
        const D_length = D.length;
        const $ = D_length === 1 && o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(D[0]);
        const Component = r("WDSMenuBarItem.react");
        const P = $ ? <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} icon={r("WDSIconIcLink.react")} onClick={I} title={s._("Copy link")} marginInlineXstyle={_.btnMargin}/> : null;
        const Component_1 = r("WDSMenuBarItem.react");
        const N = r("WAWebEnvironment").isWindows ? <Component_1 tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} icon={r("WDSIconIcContentCopy.react")} disabled={D.length === 0 || !D.every((e)=>o("WAWebCopyUtils").canCopyMessage(e))} title={s._("Copy")} onClick={T} marginInlineXstyle={_.btnMargin}/> : null;
        const Component_2 = r("WAWebMultiSelectForward.react");
        const M = <Component_2 noSortOnForward={noSortOnForward} onCancel={onCancel} selectedMessages={selectedMessages} onForwardModalOpen={function() {
            o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.forwardButtonTappedInForwardToolbar(selectedMessages.getSelected());
        }}/>;
        const Component_3 = r("WAWebMultiSelectDelete.react");
        const w = <Component_3 onCancel={onCancel} selectedMessages={selectedMessages} toastPosition={toastPosition}/>;
        const A = D_length > 0;
        let F = A;
        let O = false;
        let B = false;
        let W = false;
        D.forEach((e)=>{
            if (o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e)) {
                O = true;
            } else {
                B = true;
                F = false;
                if (o("WAWebKeepInChatMsgUtils").keepIsLockedForMe(e)) {
                    W = true;
                }
            }
        });
        let q;
        let U;
        const V = (O || W) && B;
        if (!V) {
            const H = F || !D_length && o("WAWebChatEphemerality").isEphemeralSettingOn(chat);
            if (H) {
                const Component = r("WAWebMultiSelectKeep.react");
                U = <Component selectedMessages={selectedMessages} onCancel={onCancel} entryPoint={entryPoint}/>;
            } else {
                const Component = r("WAWebMultiSelectStar.react");
                q = <Component selectedMessages={selectedMessages} onCancel={onCancel} toastPosition={toastPosition}/>;
            }
        }
        const Component_4 = r("WAWebMultiSelectDownload.react");
        const G = <Component_4 downloadButton={downloadButton_1} onCancel={onCancel} selectedMessages={selectedMessages} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR}/>;
        const z = i.theme === "mediaGallery";
        const j = [];
        switch(R){
            case g.DELETE:
                j.push(w);
                break;
            case g.FORWARD:
                j.push(M);
                break;
            case g.DEFAULT:
                j.push(P, N, q, U, w, M, G);
                break;
        }
        const K = R === g.DELETE ? s._("Cancel delete") : R === g.FORWARD ? s._("Cancel forward") : R === g.DEFAULT ? s._("Cancel selection") : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${R}`);
        })();
        const Component_5 = r("WDSMenuBarItem.react");
        const Q = <Component_5 title={K} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} icon={r("WDSIconIcClose.react")} testid="ic-close" onClick={i.onCancel} marginInlineXstyle={_.btnMargin}/>;
        return <div {...babelHelpers.extends({
            ref: k
        }, (u || (u = r("stylex"))).props(z && _.mediaGalleryTheme, _.multiControls, p.paddingInlineStart15, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), {
            children: [
                Q,
                d.jsx(r("WAWebMultiSelectCount.react"), {
                    selectedMsgsCount: D_length,
                    theme: i.theme
                }),
                j
            ]
        })}/>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.MultiSelectBarEntryPoint = f;
    l.MultiSelectMode = g;
    l.MultiSelectBar = h;
}, 226);