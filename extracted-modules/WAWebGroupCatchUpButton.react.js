__d("WAWebGroupCatchUpButton.react", [
    "fbt",
    "WAWebChatUnreadCount.react",
    "WAWebJumpToButtons.stylex",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSIconIcAlternateEmail.react",
    "fbs",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        padding10: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(15);
        const { handleJumpToMention, unreadMentionCount, xstyle } = e;
        let l;
        if (t[0] !== unreadMentionCount) {
            l = r("fbs")._("_j{\"*\":\"{count} \\u0040 messages\",\"_1\":\"1 \\u0040 message\"}", [
                r("fbs")._plural(unreadMentionCount, "count")
            ]);
            t[0] = unreadMentionCount;
            t[1] = l;
        } else {
            l = t[1];
        }
        const d = l;
        let m;
        if (t[2] !== xstyle) {
            m = [
                o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
                c.padding10,
                xstyle
            ];
            t[2] = xstyle;
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        let _;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Scroll to mentions");
            _ = u.jsx(r("WDSIconIcAlternateEmail.react"), {
                xstyle: o("WAWebJumpToButtons.stylex").styles.iconColor,
                width: 24,
                height: 24,
                testid: "mentions-refreshed"
            });
            t[4] = p;
            t[5] = _;
        } else {
            p = t[4];
            _ = t[5];
        }
        let f;
        if (t[6] !== d) {
            f = d.toString();
            t[6] = d;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== f || t[9] !== unreadMentionCount) {
            const Component = r("WAWebVelocityTransitionGroup");
            g = <Component transitionName="pop" xstyle={o("WAWebJumpToButtons.stylex").styles.unreadRefreshed}>{u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                count: unreadMentionCount,
                ariaLabel: f,
                theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
            })}</Component>;
            t[8] = f;
            t[9] = unreadMentionCount;
            t[10] = g;
        } else {
            g = t[10];
        }
        let h;
        if (t[11] !== handleJumpToMention || t[12] !== m || t[13] !== g) {
            const Component = r("WAWebUnstyledButton.react");
            h = <Component xstyle={m} dataTab={o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON} onClick={handleJumpToMention} aria-label={p}>{_}{g}</Component>;
            t[11] = handleJumpToMention;
            t[12] = m;
            t[13] = g;
            t[14] = h;
        } else {
            h = t[14];
        }
        return h;
    }
    l.default = d;
}, 226);