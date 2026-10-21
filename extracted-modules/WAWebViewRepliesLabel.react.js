__d("WAWebViewRepliesLabel.react", [
    "fbt",
    "WAWebFlexBox.react",
    "WAWebFrontendMsgGetters",
    "WAWebIsInThreadsViewContext",
    "WAWebModalManager",
    "WAWebThreadsGating",
    "WAWebViewRepliesThreadsModal.react",
    "WDSIconIcPromptSuggestion.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsRootMessage",
    "useWAWebViewAllRepliesReplyCount",
    "useWAWebViewRepliesThreads"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useContext } = c;
    const p = {
        container: {
            color: "xo1mcw5",
            paddingTop: "x1tiyuxx",
            paddingBottom: "xa0aww2",
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        clickable: {
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function _(e) {
        const n = o("react-compiler-runtime").c(13);
        const e_msg = e.msg;
        let i;
        let l;
        if (n[0] !== e_msg) {
            l = e_msg.unsafe();
            i = o("WAWebFrontendMsgGetters").getChat(l);
            n[0] = e_msg;
            n[1] = i;
            n[2] = l;
        } else {
            i = n[1];
            l = n[2];
        }
        const c = i;
        r("useWAWebViewRepliesThreads")(c);
        const d = c?.viewRepliesThreads ?? null;
        const _ = r("useWAWebIsRootMessage")(l, d);
        const f = r("useWAWebViewAllRepliesReplyCount")(c, _);
        let g;
        if (n[3] !== c || n[4] !== _) {
            g = function() {
                if (c != null && _ != null) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebViewRepliesThreadsModal.react"), {
                        chat: c,
                        threadId: _
                    }));
                }
            };
            n[3] = c;
            n[4] = _;
            n[5] = g;
        } else {
            g = n[5];
        }
        const h = g;
        const y = useContext(r("WAWebIsInThreadsViewContext"));
        if (y || c == null || f < 2 || !o("WAWebThreadsGating").isViewRepliesEntryPointEnabled(c)) {
            return null;
        }
        let C;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                p.container,
                p.clickable
            ];
            n[6] = C;
        } else {
            C = n[6];
        }
        let b;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = u.jsx(r("WDSIconIcPromptSuggestion.react"), {
                height: 15,
                width: 15
            });
            n[7] = b;
        } else {
            b = n[7];
        }
        let v;
        if (n[8] !== f) {
            const Component = r("WDSText.react");
            v = <Component type="Body2Emphasized" colorName="contentActionEmphasized">{s._("_j{\"*\":\"{count} replies\",\"_1\":\"1 reply\"}", [
                s._plural(f, "count")
            ])}</Component>;
            n[8] = f;
            n[9] = v;
        } else {
            v = n[9];
        }
        let S;
        if (n[10] !== h || n[11] !== v) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            S = <Component xstyle={C} align="center" columnGap={4} onClick={h} role="button" tabIndex={0}>{b}{v}</Component>;
            n[10] = h;
            n[11] = v;
            n[12] = S;
        } else {
            S = n[12];
        }
        return S;
    }
    l.default = _;
}, 226);