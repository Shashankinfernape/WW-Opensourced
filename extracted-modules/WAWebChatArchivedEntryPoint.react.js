__d("WAWebChatArchivedEntryPoint.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchivedFlowLoadable",
    "WAWebChatFolderOpenWamEvent",
    "WAWebChatUnreadCount.react",
    "WAWebChatlistPanelDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebTabOrder",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcArchive.react",
    "react",
    "react-compiler-runtime",
    "useWAWebArchivedChatsActivityIndicator"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        iconMentions: {
            display: "x1rg5ohu",
            width: "xw4jnvo",
            height: "x1qx5ct2",
            color: "x1r8hjv8",
            marginInlineEnd: "xnnr8r",
            $$css: true
        }
    };
    function d() {
        const e = o("react-compiler-runtime").c(21);
        const t = o("useWAWebArchivedChatsActivityIndicator").useArchivedChatsActivityIndicator();
        const { showUnreadMentionIcon, unreadCount } = t;
        const i = unreadCount !== 0 && !showUnreadMentionIcon;
        let l;
        if (e[0] !== i || e[1] !== unreadCount) {
            l = i ? <div className="x1rg5ohu xnnr8r">{u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                count: unreadCount,
                theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.Transparent
            })}</div> : null;
            e[0] = i;
            e[1] = unreadCount;
            e[2] = l;
        } else {
            l = e[2];
        }
        const d = l;
        let m;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = u.jsx(r("WDSIconIcArchive.react"), {});
            e[3] = m;
        } else {
            m = e[3];
        }
        const p = m;
        let _;
        if (e[4] !== showUnreadMentionIcon) {
            _ = showUnreadMentionIcon ? <div key="icon-mentions" className="x1rg5ohu xw4jnvo x1qx5ct2 x1r8hjv8 xnnr8r">{u.jsx(r("WDSIconIcAlternateEmail.react"), {
                xstyle: c.iconMentions,
                height: 20,
                testid: "mentions-refreshed"
            })}</div> : null;
            e[4] = showUnreadMentionIcon;
            e[5] = _;
        } else {
            _ = e[5];
        }
        const f = _;
        let g;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Archived");
            e[6] = g;
        } else {
            g = e[6];
        }
        let h;
        if (e[7] !== showUnreadMentionIcon) {
            h = showUnreadMentionIcon ? s._("\u0040 message") : "";
            e[7] = showUnreadMentionIcon;
            e[8] = h;
        } else {
            h = e[8];
        }
        let y;
        if (e[9] !== h) {
            y = [
                g,
                h
            ];
            e[9] = h;
            e[10] = y;
        } else {
            y = e[10];
        }
        const C = y.join(" ");
        let b;
        if (e[11] !== d || e[12] !== f) {
            b = <>{f}{d}</>;
            e[11] = d;
            e[12] = f;
            e[13] = b;
        } else {
            b = e[13];
        }
        const v = b;
        let S;
        if (e[14] !== unreadCount) {
            S = function() {
                new (o("WAWebChatFolderOpenWamEvent")).ChatFolderOpenWamEvent({
                    activityIndicatorCount: unreadCount,
                    folderType: "Archive"
                }).commit();
                const Component = o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "archived"
                } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            e[14] = unreadCount;
            e[15] = S;
        } else {
            S = e[15];
        }
        const R = S;
        let L;
        if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Archived");
            e[16] = L;
        } else {
            L = e[16];
        }
        let E;
        if (e[17] !== v || e[18] !== C || e[19] !== R) {
            const Component = r("WAWebChatlistPanelDrawerButton.react");
            E = <Component dataTestId="chatlist-panel-archived-button" dataTab={o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT} ariaLabel={C} onClick={R} primary={L} icon={p} detail={v}/>;
            e[17] = v;
            e[18] = C;
            e[19] = R;
            e[20] = E;
        } else {
            E = e[20];
        }
        return E;
    }
    l.default = d;
}, 226);