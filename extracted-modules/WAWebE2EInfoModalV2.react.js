__d("WAWebE2EInfoModalV2.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebDailyAggregatedStats",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebLottieAnimationLoadable",
    "WAWebModalManager",
    "WAWebPrivacyCheckupAnimationData",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebPrivacyNarrativeE2ESummary.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        containerE2eInfoModal: {
            marginTop: "x1anpbxc",
            marginInlineEnd: "x1wcu8vx",
            marginBottom: "xyorhqc",
            marginInlineStart: "x1ult018",
            $$css: true
        },
        textAlignCenter: {
            textAlign: "x2b8uid",
            $$css: true
        },
        animation: {
            height: "x1wkxgih",
            $$css: true
        }
    };
    function M1Component({ children, highlightSurface, url }) {
        e_useEffect(function() {
            if (highlightSurface != null) {
                o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(highlightSurface, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_APPEAR);
            }
        }, []);
        const i = function() {
            o("WAWebExternalLink.react").openExternalLink(url);
            if (highlightSurface != null) {
                o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(highlightSurface, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_SELECT);
            }
            o("WAWebModalManager").ModalManager.close();
        };
        const l = r("WAWebFbtCommon")("OK");
        const d = s._("Learn more");
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "e2e-info-v2"
        }} testid="highlight-e2e-message-modal" onOK={o("WAWebModalManager").closeModalManager} okText={l} onCancel={i} cancelText={d}>{children}</Component>;
    }
    M1Component.displayName = `${M1Component.name} [from ${i.id}]`;
    function p(e) {
        const t = o("react-compiler-runtime").c(6);
        const { highlightSurface, url } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Your status and chats are private");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("End-to-end encryption keeps your statuses and personal messages between you and the people you choose. Not even WhatsApp can see them. This includes your:");
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l;
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
                xstyle: d.containerE2eInfoModal,
                icon: <F2/>,
                title: i,
                subTitle: c,
                textAlignment: d.textAlignCenter
            });
            t[2] = p;
        } else {
            p = t[2];
        }
        let _;
        if (t[3] !== highlightSurface || t[4] !== url) {
            _ = <M1Component url={url} highlightSurface={highlightSurface}>{p}</M1Component>;
            t[3] = highlightSurface;
            t[4] = url;
            t[5] = _;
        } else {
            _ = t[5];
        }
        return _;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(15);
        const { chat, highlightSurface, url } = e;
        let i;
        if (t[0] !== chat) {
            i = chat != null && o("WAWebContactGetters").getIsMe(chat.contact);
            t[0] = chat;
            t[1] = i;
        } else {
            i = t[1];
        }
        const isMessageYourselfChat = i;
        let c;
        if (isMessageYourselfChat) {
            let p;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                p = s._("Your chat is private");
                t[2] = p;
            } else {
                p = t[2];
            }
            c = p;
        } else {
            let _;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                _ = s._("Your chats and calls are private");
                t[3] = _;
            } else {
                _ = t[3];
            }
            c = _;
        }
        let g;
        if (t[4] !== isMessageYourselfChat) {
            g = isMessageYourselfChat ? s._("End-to-end encryption keeps the personal messages that you send to yourself private. No one else, not even WhatsApp, can read, listen to, or share them. This includes your:") : s._("End-to-end encryption keeps your personal messages and calls between you and the people you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them. This includes your:");
            t[4] = isMessageYourselfChat;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = <F2/>;
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] !== isMessageYourselfChat || t[8] !== h || t[9] !== c) {
            C = u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
                icon: y,
                xstyle: d.containerE2eInfoModal,
                title: c,
                subTitle: h,
                textAlignment: d.textAlignCenter,
                isMessageYourselfChat
            });
            t[7] = isMessageYourselfChat;
            t[8] = h;
            t[9] = c;
            t[10] = C;
        } else {
            C = t[10];
        }
        let b;
        if (t[11] !== highlightSurface || t[12] !== C || t[13] !== url) {
            b = <M1Component url={url} highlightSurface={highlightSurface}>{C}</M1Component>;
            t[11] = highlightSurface;
            t[12] = C;
            t[13] = url;
            t[14] = b;
        } else {
            b = t[14];
        }
        return b;
    }
    function F2() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
                loop: false,
                autoplay: true,
                data: r("WAWebPrivacyCheckupAnimationData"),
                xstyle: d.animation
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.E2eInfoModalStatus = p;
    l.E2eInfoModalV2 = _;
}, 226);