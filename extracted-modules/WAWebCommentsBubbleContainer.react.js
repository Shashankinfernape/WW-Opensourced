__d("WAWebCommentsBubbleContainer.react", [
    "fbt",
    "WAWebAddOnBubble.react",
    "WAWebAddOnBubblesContainerConditions",
    "WAWebCmd",
    "WAWebCommentFrontendUtils",
    "WAWebCommentsModal.react",
    "WAWebFlexBox.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebStateUtils",
    "WDSIconIcReply.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCommentReplyCount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        paddingInlineStart1: {
            paddingInlineStart: "x18pi947",
            $$css: true
        },
        paddingInlineEnd3: {
            paddingInlineEnd: "x1im30kd",
            $$css: true
        }
    };
    const d = {
        container: {
            fontSize: "x1f6kntn",
            color: "xhslqc4",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_msgIds = e.msgIds;
        const a = o("WAWebAddOnBubblesContainerConditions").useHasCommentsBubble(e_msgIds);
        let i;
        if (t[0] !== e_msgIds) {
            i = p(e_msgIds);
            t[0] = e_msgIds;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        const m = o("useWAWebCommentReplyCount").useWAWebCommentReplyCount(l);
        if (!a) {
            return null;
        }
        let _;
        if (t[2] !== e_msgIds) {
            _ = function() {
                const parentMsgs = [];
                for (const t of e_msgIds){
                    const a = o("WAWebMsgCollection").MsgCollection.get(t);
                    if (a) {
                        parentMsgs.push(a);
                    }
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebCommentsModal.react"), {
                    parentMsgs
                }));
            };
            t[2] = e_msgIds;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const f = _;
        let g;
        if (t[4] !== l || t[5] !== f) {
            g = function() {
                if (o("WAWebCommentFrontendUtils").isAlbumMessageContainer(l)) {
                    return o("WAWebCmd").Cmd.openMediaViewerForAlbumMedia(o("WAWebStateUtils").unproxy(l[0]));
                }
                return f();
            };
            t[4] = l;
            t[5] = f;
            t[6] = g;
        } else {
            g = t[6];
        }
        const h = g;
        let y;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            y = u.jsx(r("WDSIconIcReply.react"), {
                testid: "reply-refreshed",
                width: 20,
                height: 20,
                displayInline: true,
                directional: true
            });
            t[7] = y;
        } else {
            y = t[7];
        }
        const C = y;
        let b;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                d.container,
                c.paddingInlineStart1,
                c.paddingInlineEnd3
            ];
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] !== m) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            const Component_1 = r("WAWebAddOnBubble.react");
            v = <Component_1><Component xstyle={b} align="center" columnGap={2} justify="center">{C}{s._("_j{\"*\":\"{count} replies\",\"_1\":\"1 reply\"}", [
                s._plural(m, "count")
            ])}</Component></Component_1>;
            t[9] = m;
            t[10] = v;
        } else {
            v = t[10];
        }
        let S;
        if (t[11] !== h || t[12] !== v) {
            S = <button onClick={h}>{v}</button>;
            t[11] = h;
            t[12] = v;
            t[13] = S;
        } else {
            S = t[13];
        }
        return S;
    }
    function p(e) {
        const t = [];
        for (const n of e){
            const r = o("WAWebMsgCollection").MsgCollection.get(n);
            if (r != null) {
                t.push(r);
            }
        }
        return t;
    }
    l.default = m;
}, 226);