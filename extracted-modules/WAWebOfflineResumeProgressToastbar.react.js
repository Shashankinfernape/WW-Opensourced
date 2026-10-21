__d("WAWebOfflineResumeProgressToastbar.react", [
    "fbt",
    "WAWebBox.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebOfflineHandler",
    "WAWebProgressBar.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        wrapper: {
            minHeight: "x122xwht",
            justifyContent: "xl56j7k",
            $$css: true
        },
        progressWrapper: {
            position: "x10l6tqk",
            width: "xh8yej3",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            display: "x78zum5",
            $$css: true
        },
        textWrapper: {
            textAlign: "x2b8uid",
            $$css: true
        },
        textTitle: {
            fontSize: "x1pg5gke",
            $$css: true
        },
        textProgress: {
            fontSize: "x1ncwhqj",
            $$css: true
        },
        progressBar: {
            backgroundColor: "x1280gxy",
            height: "x36qwtl",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(11);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = r("useWAWebEventTargetValue")(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", m, t);
        const a = n[0];
        const i = n[1];
        let wrapperXstyle;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            wrapperXstyle = [
                o("WDSPaddings.stylex").wdsPaddings.padding0,
                c.wrapper
            ];
            e[1] = wrapperXstyle;
        } else {
            wrapperXstyle = e[1];
        }
        let d;
        if (e[2] !== a) {
            const Component = r("WAWebBox.react");
            d = <Component xstyle={c.progressWrapper}>{u.jsx(r("WAWebProgressBar.react"), {
                value: a,
                xstyle: c.progressBar
            })}</Component>;
            e[2] = a;
            e[3] = d;
        } else {
            d = e[3];
        }
        let p;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            p = <Component xstyle={c.textTitle}>{s._("Syncing chats...")}</Component>;
            e[4] = p;
        } else {
            p = e[4];
        }
        let _;
        if (e[5] !== i || e[6] !== a) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            _ = <Component_1 xstyle={c.textWrapper}>{p}<Component xstyle={c.textProgress}>{s._("_j{\"*\":{\"*\":{\"*\":\"{processed-messages} of {total-messages} messages\",\"_1\":\"{processed-messages} of {total-messages} message\"}}}", [
                s._param("processed-messages", Math.floor(a / 100 * i), [
                    0
                ]),
                s._param("total-messages", i, [
                    0
                ]),
                s._plural(i)
            ])}</Component></Component_1>;
            e[5] = i;
            e[6] = a;
            e[7] = _;
        } else {
            _ = e[7];
        }
        let f;
        if (e[8] !== d || e[9] !== _) {
            const Component = r("WAWebToastbar.react");
            f = <Component wrapperXstyle={wrapperXstyle}>{d}{_}</Component>;
            e[8] = d;
            e[9] = _;
            e[10] = f;
        } else {
            f = e[10];
        }
        return f;
    }
    function m() {
        return [
            o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress(),
            o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineMessageCount()
        ];
    }
    l.default = d;
}, 226);