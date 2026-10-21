__d("WAWebEmptyState.react", [
    "fbt",
    "$InternalEnum",
    "CometHeroHoldTrigger.react",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddToFavoritesModalLoadable",
    "WAWebArchivedFlowLoadable",
    "WAWebButton.react",
    "WAWebChatSearchFilters",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebEmojiText.react",
    "WAWebEmptyBlockedIcon.react",
    "WAWebFavoriteCollection",
    "WAWebFbtCommon",
    "WAWebFilterLogging",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelCollection",
    "WAWebModalManager",
    "WAWebNewGroupFlowLoadable",
    "WAWebNoop",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebWdsPictoSuccessTickIcon.react",
    "WDSIconIcArchive.react",
    "WDSIllustrationWdsIllContactBook.react",
    "WDSIllustrationWdsIllMakeGroup.react",
    "WDSIllustrationWdsIllReadChatsTick.react",
    "WDSIllustrationWdsIllReadMentionsTick.react",
    "WDSIllustrationWdsIllSearchChat.react",
    "WDSIllustrationWdsPictoArchive.react",
    "WDSIllustrationWdsPictoMessageReportAndroid.react",
    "WDSIllustrationWdsPictoStar.react",
    "WDSIllustrationWdsPictoUserBlock.react",
    "WDSMargins.stylex",
    "WDSTextLayout.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    function m() {
        return o("WAWebABProps").getABPropConfigValue("empty_unread_filter_cta_variant") !== 0;
    }
    function p() {
        return o("WAWebABProps").getABPropConfigValue("empty_unread_filter_cta_variant") === 1;
    }
    const _ = n("$InternalEnum")({
        Compact: "compact",
        FavoritesFilter: "favorites-filter",
        GroupsFilter: "groups-filter",
        UnreadFilter: "unread-filter"
    });
    const f = {
        empty: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            height: "x5yr21d",
            paddingTop: "x13crsa5",
            paddingInlineEnd: "xx281p9",
            paddingBottom: "x1rxj1xn",
            paddingInlineStart: "x67w97k",
            color: "xhslqc4",
            textAlign: "x2b8uid",
            $$css: true
        },
        emptyTop: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            justifyContent: "x1nhvcw1",
            height: "xt7dq6l",
            paddingTop: "x15uerrv",
            paddingInlineEnd: "xx281p9",
            paddingBottom: "x1j3kn9t",
            paddingInlineStart: "x67w97k",
            $$css: true
        },
        compact: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x1xnnf8n",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x106a9eq",
            $$css: true
        },
        title: {
            marginBottom: "x1c436fg",
            $$css: true
        },
        text: {
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            color: "xhslqc4",
            $$css: true
        },
        action: {
            display: "x1rg5ohu",
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            color: "xo1mcw5",
            $$css: true
        },
        filterCtaTitle: {
            fontSize: "xngnso2",
            fontWeight: "x117nqv4",
            lineHeight: "x1evy7pa",
            color: "x14ug900",
            $$css: true
        },
        filterCtaText: {
            color: "x14ug900",
            $$css: true
        },
        emptyStarredWithNavbar: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        emptyStateContainer: {
            alignItems: "x6s0dn4",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            height: "x5yr21d",
            justifyContent: "xl56j7k",
            overflowWrap: "xj0a0fe",
            paddingTop: "x1sk1jro",
            paddingBottom: "x1ci70gm",
            paddingInlineStart: "xb0esv5",
            paddingInlineEnd: "xyo0t3i",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        noFilteredChats: {
            overflowWrap: "xj0a0fe",
            $$css: true
        },
        unreadIconInner: {
            fill: "x1ss2flk",
            $$css: true
        }
    };
    function G6Component(t) {
        const n = o("react-compiler-runtime").c(18);
        const { children, icon, onClick, testid, text, theme, title, xstyle } = t;
        let g;
        if (n[0] !== testid || n[1] !== theme || n[2] !== title) {
            g = title != null && title !== "" ? <div {...babelHelpers.extends({
                "data-testid": testid
            }, (e || (e = r("stylex"))).props(f.title, (theme === _.FavoritesFilter || theme === _.GroupsFilter || theme === _.UnreadFilter) && [
                f.filterCtaTitle,
                o("WDSMargins.stylex").wdsMargins.marginTop24,
                o("WDSMargins.stylex").wdsMargins.marginBottom0
            ]), {
                children: title
            })}/> : null;
            n[0] = testid;
            n[1] = theme;
            n[2] = title;
            n[3] = g;
        } else {
            g = n[3];
        }
        const h = g;
        let y;
        if (n[4] !== testid || n[5] !== text || n[6] !== theme) {
            y = text != null && text !== "" ? <div {...babelHelpers.extends({
                "data-testid": testid
            }, (e || (e = r("stylex"))).props(f.text, (theme === _.FavoritesFilter || theme === _.GroupsFilter || theme === _.UnreadFilter) && [
                f.filterCtaText,
                o("WDSMargins.stylex").wdsMargins.marginTop8
            ]), {
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text
                })
            })}/> : null;
            n[4] = testid;
            n[5] = text;
            n[6] = theme;
            n[7] = y;
        } else {
            y = n[7];
        }
        const C = y;
        let b;
        if (n[8] !== theme || n[9] !== xstyle) {
            b = (e || (e = r("stylex")))(f.empty, xstyle, theme === _.Compact && f.compact, (theme === _.FavoritesFilter || theme === _.GroupsFilter || theme === _.UnreadFilter) && f.emptyTop);
            n[8] = theme;
            n[9] = xstyle;
            n[10] = b;
        } else {
            b = n[10];
        }
        const v = b;
        let S;
        if (n[11] !== children || n[12] !== v || n[13] !== icon || n[14] !== onClick || n[15] !== C || n[16] !== h) {
            S = <div className={v} onClick={onClick}>{icon}{h}{C}{children}</div>;
            n[11] = children;
            n[12] = v;
            n[13] = icon;
            n[14] = onClick;
            n[15] = C;
            n[16] = h;
            n[17] = S;
        } else {
            S = n[17];
        }
        return S;
    }
    function h(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_onAddBlockedContact = e.onAddBlockedContact;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("No blocked contacts yet");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Blocked contacts will no longer be able to call you or send you messages");
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = <div className="x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p">{c.jsx(o("WAWebEmptyBlockedIcon.react").EmptyBlockedIcon, {})}</div>;
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = d;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let p;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                p = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                t[3] = p;
            } else {
                p = t[3];
            }
            let _;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                _ = c.jsx(r("WDSIllustrationWdsPictoUserBlock.react"), {});
                t[4] = _;
            } else {
                _ = t[4];
            }
            let f;
            if (t[5] !== e_onAddBlockedContact) {
                f = e_onAddBlockedContact != null ? {
                    label: s._("Add blocked contact"),
                    onPress: e_onAddBlockedContact,
                    variant: "filled"
                } : undefined;
                t[5] = e_onAddBlockedContact;
                t[6] = f;
            } else {
                f = t[6];
            }
            let h;
            if (t[7] !== f) {
                h = <div {...babelHelpers.extends({
                    "data-testid": "add-blocked-container"
                }, p, {
                    children: c.jsx(r("WDSTextLayout.react"), {
                        headline: i,
                        body: u,
                        illustration: _,
                        actionsWidth: "hug",
                        primaryAction: f,
                        testid: "add-blocked-description"
                    })
                })}/>;
                t[7] = f;
                t[8] = h;
            } else {
                h = t[8];
            }
            return h;
        }
        let y;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            y = <G6Component icon={m} title={i} text={u} testid="add-blocked-description"/>;
            t[9] = y;
        } else {
            y = t[9];
        }
        return y;
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onViewAllChats = e.onViewAllChats;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("No archived chats");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let l;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                l = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                t[1] = l;
            } else {
                l = t[1];
            }
            let u;
            if (t[2] !== e_onViewAllChats) {
                u = <div {...babelHelpers.extends({
                    "data-testid": "archived-empty-container"
                }, l, {
                    children: e_onViewAllChats == null ? c.jsx(r("WDSTextLayout.react"), {
                        headline: i,
                        illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
                        testid: "archived-empty"
                    }) : c.jsx(r("WDSTextLayout.react"), {
                        actionsWidth: "hug",
                        headline: i,
                        illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
                        primaryAction: {
                            label: s._("View all chats"),
                            onPress: e_onViewAllChats,
                            variant: "borderless"
                        },
                        testid: "archived-empty"
                    })
                })}/>;
                t[2] = e_onViewAllChats;
                t[3] = u;
            } else {
                u = t[3];
            }
            return u;
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const m = <div className="x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p">{c.jsx(r("WDSIconIcArchive.react"), {})}</div>;
            d = <G6Component icon={m} title={i} testid="archived-empty"/>;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(10);
        const { testid, text } = e;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            const i = `${testid}-container`;
            let l;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                l = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                t[0] = l;
            } else {
                l = t[0];
            }
            let s;
            if (t[1] !== testid || t[2] !== text) {
                s = c.jsx(r("WDSTextLayout.react"), {
                    headline: text,
                    testid
                });
                t[1] = testid;
                t[2] = text;
                t[3] = s;
            } else {
                s = t[3];
            }
            let u;
            if (t[4] !== i || t[5] !== s) {
                u = <div {...babelHelpers.extends({
                    "data-testid": i
                }, l, {
                    children: s
                })}/>;
                t[4] = i;
                t[5] = s;
                t[6] = u;
            } else {
                u = t[6];
            }
            return u;
        }
        let d;
        if (t[7] !== testid || t[8] !== text) {
            d = <G6Component xstyle={f.emptyTop} text={text} testid={testid}/>;
            t[7] = testid;
            t[8] = text;
            t[9] = d;
        } else {
            d = t[9];
        }
        return d;
    }
    function BComponent(e) {
        const t = o("react-compiler-runtime").c(17);
        const { hasFilter, noResultsText, onClearFilter } = e;
        const l = hasFilter === undefined ? false : hasFilter;
        const u = onClearFilter === undefined ? r("WAWebNoop") : onClearFilter;
        let d;
        if (t[0] !== noResultsText) {
            d = noResultsText ?? v();
            t[0] = noResultsText;
            t[1] = d;
        } else {
            d = t[1];
        }
        const headline = d;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let p;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                p = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                t[2] = p;
            } else {
                p = t[2];
            }
            let _;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                _ = c.jsx(r("WDSIllustrationWdsIllSearchChat.react"), {});
                t[3] = _;
            } else {
                _ = t[3];
            }
            let h;
            if (t[4] !== l || t[5] !== u) {
                h = l ? {
                    label: s._("Search all chats"),
                    onPress: function() {
                        u();
                    },
                    variant: "borderless",
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                    testid: "clear-filter"
                } : undefined;
                t[4] = l;
                t[5] = u;
                t[6] = h;
            } else {
                h = t[6];
            }
            let y;
            if (t[7] !== h || t[8] !== headline) {
                y = <div {...babelHelpers.extends({
                    "data-testid": "search-no-chats-or-contacts-container"
                }, p, {
                    children: c.jsx(r("WDSTextLayout.react"), {
                        headline,
                        illustration: _,
                        actionsWidth: "hug",
                        primaryAction: h,
                        testid: "search-no-chats-or-contacts"
                    })
                })}/>;
                t[7] = h;
                t[8] = headline;
                t[9] = y;
            } else {
                y = t[9];
            }
            return y;
        }
        const C = l ? headline : undefined;
        const b = l ? undefined : headline;
        let S;
        if (t[10] !== l || t[11] !== u) {
            const Component = r("WAWebUnstyledButton.react");
            S = l && <Component dataTab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER} testid="clear-filter" onClick={u} xstyle={f.action}>{s._("Clear filter")}</Component>;
            t[10] = l;
            t[11] = u;
            t[12] = S;
        } else {
            S = t[12];
        }
        let R;
        if (t[13] !== C || t[14] !== b || t[15] !== S) {
            R = <G6Component xstyle={f.emptyTop} title={C} text={b} testid="search-no-chats-or-contacts">{S}</G6Component>;
            t[13] = C;
            t[14] = b;
            t[15] = S;
            t[16] = R;
        } else {
            R = t[16];
        }
        return R;
    }
    function v() {
        return s._("No chats, contacts or messages found");
    }
    function SComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component xstyle={o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? f.emptyStateContainer : f.emptyTop} text={R()} testid="searching-chats-contacts-messages"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function R() {
        return s._("Looking for chats, contacts or messages…");
    }
    function LComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component xstyle={f.emptyTop} text={s._("Looking for messages…")} testid="searching-messages"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function EComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <C testid="search-no-contacts" text={s._("No contacts found")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function KComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <C testid="search-no-results-without-keyword" text={s._("No results")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function IComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_keyword = e.keyword;
        let r;
        if (t[0] !== e_keyword) {
            r = s._("No results found for '{keyword}'", [
                s._param("keyword", e_keyword)
            ]);
            t[0] = e_keyword;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] !== r) {
            a = <C testid="search-no-results-without-keyword" text={r}/>;
            t[2] = r;
            t[3] = a;
        } else {
            a = t[3];
        }
        return a;
    }
    function TComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component xstyle={f.emptyTop} text={s._("Looking outside your contacts...")} testid="searching-non-contact"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function D(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_xstyle = e.xstyle;
        let r;
        if (t[0] !== e_xstyle) {
            r = [
                f.emptyTop,
                e_xstyle
            ];
            t[0] = e_xstyle;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = <div className="xdqhqc9">{c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 24,
                stroke: 6,
                color: "highlight"
            })}</div>;
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                element: "div",
                xstyle: f.text,
                text: s._("Looking outside your contacts...")
            });
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] !== r) {
            l = <G6Component xstyle={r} testid="searching-non-contact-with-spinner">{a}{i}</G6Component>;
            t[4] = r;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    function XComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const { error, onClick } = e;
        let i;
        if (t[0] !== error.retryStr || t[1] !== onClick) {
            const Component = r("WAWebUnstyledButton.react");
            i = error.retryStr != null ? <Component dataTab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER} testid="retry-search" onClick={onClick} xstyle={f.action}>{error.retryStr}</Component> : null;
            t[0] = error.retryStr;
            t[1] = onClick;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let s;
        if (t[3] !== error.text || t[4] !== l) {
            s = <G6Component xstyle={f.emptyTop} title={error.text} testid="search-non-contacts">{l}</G6Component>;
            t[3] = error.text;
            t[4] = l;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    function $() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <C testid="search-no-groups" text={s._("No groups found")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function P() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <C testid="search-no-messages" text={s._("No messages found")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function NComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component xstyle={f.emptyTop} text={s._("Search results not yet available. Try again later.")} testid="search-results-unavailable"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function M() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component text={w()} testid="no-chats"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function w() {
        return s._("No chats");
    }
    function AComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const { catalogLoadError, hasCatalog } = e;
        const a = catalogLoadError === undefined ? false : catalogLoadError;
        const i = hasCatalog === undefined ? true : hasCatalog;
        let l;
        if (i) {
            let u;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                u = s._("No products");
                t[0] = u;
            } else {
                u = t[0];
            }
            l = u;
            if (a) {
                let d;
                if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                    d = s._("Catalogue load error");
                    t[1] = d;
                } else {
                    d = t[1];
                }
                l = d;
            }
        } else {
            let m;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                m = s._("You need to create a catalogue first");
                t[2] = m;
            } else {
                m = t[2];
            }
            l = m;
        }
        let p;
        if (t[3] !== l) {
            p = <G6Component text={l} testid="no-products"/>;
            t[3] = l;
            t[4] = p;
        } else {
            p = t[4];
        }
        return p;
    }
    function F({ chatName, isGroup, isMessageYourselfChat }) {
        const o = isMessageYourselfChat ? s._("Search for messages with yourself.") : s._("Search for messages with {chatName}.", [
            s._param("chatName", chatName)
        ]);
        const a = isGroup ? s._("Search for messages within {chatName}.", [
            s._param("chatName", chatName)
        ]) : o;
        return <G6Component xstyle={f.emptyTop} text={a} testid="chat-search-prompt"/>;
    }
    F.displayName = `${F.name} [from ${i.id}]`;
    function OComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function B() {
        const Component = o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "archived"
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>);
    }
    function WComponent() {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = s._("View archived chats");
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = n;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let i;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                i = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                t[1] = i;
            } else {
                i = t[1];
            }
            let l;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                l = <div {...babelHelpers.extends({
                    "data-testid": "all-chats-archived-container"
                }, i, {
                    children: c.jsx(r("WDSTextLayout.react"), {
                        actionsWidth: "hug",
                        headline: q(),
                        illustration: c.jsx(r("WDSIllustrationWdsPictoArchive.react"), {}),
                        primaryAction: {
                            label: a,
                            onPress: B,
                            variant: "borderless"
                        },
                        testid: "all-chats-archived"
                    })
                })}/>;
                t[2] = l;
            } else {
                l = t[2];
            }
            return l;
        }
        let u;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = q();
            t[3] = u;
        } else {
            u = t[3];
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = <G6Component title={u} testid="all-chats-archived"><div {...babelHelpers.extends({
                "data-testid": "see-archived",
                role: "button",
                onClick: B
            }, (e || (e = r("stylex"))).props(f.action, o("WDSMargins.stylex").wdsMargins.marginVer8), {
                children: a
            })}/></G6Component>;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function q() {
        return s._("All chats are archived");
    }
    function U() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("No starred messages");
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let a;
            if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                a = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i x1280gxy"
                };
                e[1] = a;
            } else {
                a = e[1];
            }
            let i;
            if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                i = <div {...babelHelpers.extends({
                    "data-testid": "no-starred-messages-container"
                }, a, {
                    children: c.jsx(r("WDSTextLayout.react"), {
                        headline: n,
                        body: s._("Use WhatsApp on your phone to see older chats and messages."),
                        illustration: c.jsx(r("WDSIllustrationWdsPictoStar.react"), {}),
                        testid: "no-starred-messages"
                    })
                })}/>;
                e[2] = i;
            } else {
                i = e[2];
            }
            return i;
        }
        let l;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = <G6Component text={n} testid="no-starred-messages" xstyle={f.emptyStarredWithNavbar}/>;
            e[3] = l;
        } else {
            l = e[3];
        }
        return l;
    }
    function VComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component text={s._("Select messages to keep them from disappearing for everyone in the chat.")}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function H() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Messages sent for review by members will appear here.");
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let a;
            if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                a = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                e[1] = a;
            } else {
                a = e[1];
            }
            let i;
            if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                i = <div {...babelHelpers.extends({
                    "data-testid": "sent-for-admin-review-container"
                }, a, {
                    children: c.jsx(r("WDSTextLayout.react"), {
                        headline: n,
                        body: s._("Use WhatsApp on your phone to see older messages."),
                        illustration: c.jsx(r("WDSIllustrationWdsPictoMessageReportAndroid.react"), {}),
                        testid: "sent-for-admin-review-empty"
                    })
                })}/>;
                e[2] = i;
            } else {
                i = e[2];
            }
            return i;
        }
        let l;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = <G6Component text={n}/>;
            e[3] = l;
        } else {
            l = e[3];
        }
        return l;
    }
    function G() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component text={s._("No media")} testid="no-media"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function ZComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component text={s._("No links")} testid="no-links"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function JComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component text={s._("No docs")} testid="no-docs"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function K(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_description = e.description;
        const a = e_description === undefined ? "Loading" : e_description;
        let i;
        if (t[0] !== a) {
            i = c.jsx(r("CometHeroHoldTrigger.react"), {
                description: a,
                hold: true
            });
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 4
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] !== i) {
            s = <G6Component>{i}{l}</G6Component>;
            t[3] = i;
            t[4] = s;
        } else {
            s = t[4];
        }
        return s;
    }
    function QComponent(e) {
        const t = o("react-compiler-runtime").c(9);
        const { description, text } = e;
        const i = description === undefined ? "LoadingWithText" : description;
        let l;
        if (t[0] !== i) {
            l = c.jsx(r("CometHeroHoldTrigger.react"), {
                description: i,
                hold: true
            });
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        let s;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            s = <div className="xdqhqc9">{c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 4
            })}</div>;
            t[2] = s;
        } else {
            s = t[2];
        }
        let u;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = "x1f6kntn x1fc57z9 xhslqc4";
            t[3] = u;
        } else {
            u = t[3];
        }
        let d;
        if (t[4] !== text) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            d = <Component element="div" className={u} text={text}/>;
            t[4] = text;
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] !== l || t[7] !== d) {
            m = <G6Component>{l}{s}{d}</G6Component>;
            t[6] = l;
            t[7] = d;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    function X(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_labelId = e.labelId;
        const r = o("WAWebLabelCollection").LabelCollection.get(e_labelId);
        if (!r) {
            return null;
        }
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = "x1f6kntn x1fc57z9 xhslqc4";
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_labelId) {
            i = Y(e_labelId);
            t[1] = e_labelId;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== i) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            l = <G6Component><Component element="div" className={a} text={i}/></G6Component>;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function Y(e) {
        const t = o("WAWebLabelCollection").LabelCollection.get(e);
        if (t) {
            return s._("No result found for '{labelName}'", [
                s._param("labelName", t.name)
            ]);
        }
        return null;
    }
    function J() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <G6Component text="No quick replies" testid="no-quick-replies"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function Z(e, t) {
        let n;
        let actionLabel;
        let paragraph;
        let l;
        let u;
        let actionKind = "clear-filter";
        const d = o("WAWebABProps").getABPropConfigValue("wds_web_text_layout");
        switch(e){
            case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
                if (m()) {
                    const _ = ee(e, d);
                    u = _.icon;
                    l = _.theme;
                    n = s._("No unread chats");
                    paragraph = s._("You're all caught up.");
                    if (p()) {
                        actionKind = "find-chat";
                        actionLabel = s._("Find a chat");
                    } else {
                        actionLabel = s._("View all chats");
                    }
                } else {
                    if (o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) {
                        n = s._("No unread chats");
                        actionLabel = s._("View all chats");
                    } else {
                        n = s._("No unread chats");
                        actionLabel = s._("Clear filter");
                    }
                }
                break;
            case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
                if (o("WAWebFavoriteCollection").FavoriteCollection.length === 0 && o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                    actionKind = "add-favorite";
                    const f = ee(e, d);
                    u = f.icon;
                    l = f.theme;
                    n = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Add to Favourites") : s._("Add to favourites");
                    paragraph = s._("Make it easy to find the people and groups that matter most across WhatsApp.");
                    actionLabel = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Add to Favourites") : s._("Add to Favourites");
                } else {
                    n = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("No favourite chats") : s._("No favourite chats");
                    actionLabel = s._("View all chats");
                }
                break;
            case o("WAWebChatSearchFilters").SearchFilters.TO_YOU:
                const g = ee(e, d);
                u = g.icon;
                l = g.theme;
                n = s._("No mentions and replies");
                paragraph = s._("You're all caught up.");
                actionLabel = s._("View all chats");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.CHANNELS:
                n = s._("No channels");
                actionLabel = s._("See all chats");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.CONTACT:
                n = s._("No chats with contacts");
                actionLabel = s._("View all chats");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.GROUP:
                actionKind = "create-group";
                const h = ee(e, d);
                u = h.icon;
                l = h.theme;
                n = s._("Create a group");
                paragraph = s._("Connect with friends and family anywhere, anytime.");
                actionLabel = s._("Create a group");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU:
                n = s._("No chats assigned to you");
                actionLabel = s._("Clear filter");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.LABELS:
                {
                    const y = r("isStringNullOrEmpty")(t) ? null : o("WAWebLabelCollection").LabelCollection.get(t);
                    if (y == null) {
                        n = s._("No chats");
                    } else {
                        n = s._("No {list-name} chats", [
                            s._param("list-name", y.name)
                        ]);
                    }
                    actionLabel = s._("View all chats");
                    break;
                }
            case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
                const C = ee(e, d);
                u = C.icon;
                l = C.theme;
                n = s._("No community chats");
                paragraph = s._("Join or create a community to see it here.");
                actionLabel = s._("View all chats");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING:
                n = s._("No AI responding chats");
                actionLabel = s._("View all chats");
                break;
            case o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF:
                n = s._("No AI handoff chats");
                actionLabel = s._("View all chats");
                break;
            default:
                break;
        }
        if (n == null || actionLabel == null) {
            return null;
        }
        return {
            title: n,
            actionLabel,
            actionKind,
            paragraph,
            theme: l,
            icon: u
        };
    }
    function ee(e, t) {
        if (e === o("WAWebChatSearchFilters").SearchFilters.TO_YOU) {
            return {
                icon: c.jsx(r("WDSIllustrationWdsIllReadMentionsTick.react"), {})
            };
        }
        if (e === o("WAWebChatSearchFilters").SearchFilters.UNREAD) {
            if (t) {
                return {
                    icon: c.jsx(r("WDSIllustrationWdsIllReadChatsTick.react"), {})
                };
            }
            return {
                icon: c.jsx(o("WAWebWdsPictoSuccessTickIcon.react").WdsPictoSuccessTickIcon, {
                    width: 88,
                    height: 88,
                    innerStyles: {
                        inner: f.unreadIconInner
                    }
                }),
                theme: _.UnreadFilter
            };
        }
        if (e === o("WAWebChatSearchFilters").SearchFilters.FAVORITES) {
            if (t) {
                return {
                    icon: c.jsx(r("WDSIllustrationWdsIllContactBook.react"), {
                        testid: "wds-ill-favorites"
                    })
                };
            }
            return {
                icon: c.jsx(r("WDSIllustrationWdsIllContactBook.react"), {
                    testid: "wds-ill-favorites"
                }),
                theme: _.FavoritesFilter
            };
        }
        if (e === o("WAWebChatSearchFilters").SearchFilters.GROUP || e === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY) {
            if (t) {
                return {
                    icon: c.jsx(r("WDSIllustrationWdsIllMakeGroup.react"), {})
                };
            }
            return {
                icon: c.jsx(r("WDSIllustrationWdsIllMakeGroup.react"), {
                    testid: "wds-ill-make-group"
                }),
                theme: _.GroupsFilter
            };
        }
        return {};
    }
    function TeComponent() {
        const Component = o("WAWebAddToFavoritesModalLoadable").AddToFavoritesModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component onClose={o("WAWebModalManager").closeModalManager}/>, {
            transition: "modal-flow"
        });
    }
    function NeComponent() {
        const Component = o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable;
        o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.openDrawer(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "new_group",
            isSubFlow: false
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} onCreateGroup={(()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    const t = yield e;
                    if (t != null) {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                    }
                } catch (e) {}
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()}/>);
    }
    function re(e, onClearFilter, onShowSearch) {
        const r = function() {
            onClearFilter();
            onShowSearch?.();
        };
        const o = function() {
            onClearFilter();
        };
        switch(e){
            case "add-favorite":
                return TeComponent;
            case "find-chat":
                return r;
            case "create-group":
                return NeComponent;
            case "clear-filter":
                return o;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function OeComponent(e) {
        const t = o("react-compiler-runtime").c(40);
        const { filter, filterSession, onClearFilter, onShowSearch } = e;
        let s;
        let u;
        if (t[0] !== filter || t[1] !== filterSession.sessionId) {
            s = function() {
                o("WAWebFilterLogging").logEmptyStateViewedFilterEvent(filterSession.sessionId, filter);
            };
            u = [
                filter,
                filterSession.sessionId
            ];
            t[0] = filter;
            t[1] = filterSession.sessionId;
            t[2] = s;
            t[3] = u;
        } else {
            s = t[2];
            u = t[3];
        }
        u_useEffect(s, u);
        let m;
        let p;
        let h;
        let y;
        let C;
        let b;
        let v;
        let S;
        if (t[4] !== filter.kind || t[5] !== filter.label || t[6] !== onClearFilter || t[7] !== onShowSearch) {
            b = Symbol.for("react.early_return_sentinel");
            e: {
                const R = filter.kind != null ? Z(filter.kind, filter.label) : null;
                if (R == null) {
                    b = null;
                    break e;
                }
                m = R.actionKind;
                p = R.actionLabel;
                h = R.icon;
                y = R.paragraph;
                v = R.theme;
                S = R.title;
                C = re(m, onClearFilter, onShowSearch);
            }
            t[4] = filter.kind;
            t[5] = filter.label;
            t[6] = onClearFilter;
            t[7] = onShowSearch;
            t[8] = m;
            t[9] = p;
            t[10] = h;
            t[11] = y;
            t[12] = C;
            t[13] = b;
            t[14] = v;
            t[15] = S;
        } else {
            m = t[8];
            p = t[9];
            h = t[10];
            y = t[11];
            C = t[12];
            b = t[13];
            v = t[14];
            S = t[15];
        }
        if (b !== Symbol.for("react.early_return_sentinel")) {
            return b;
        }
        const L = C;
        if (o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let E;
            if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
                E = {
                    className: "x6s0dn4 x9f619 x78zum5 xdt5ytf x1iyjqo2 x5yr21d xl56j7k xj0a0fe x1sk1jro x1ci70gm xb0esv5 xyo0t3i"
                };
                t[16] = E;
            } else {
                E = t[16];
            }
            let k;
            if (t[17] !== m || t[18] !== p || t[19] !== L) {
                k = {
                    label: p,
                    onPress: L,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                    testid: m,
                    variant: "borderless"
                };
                t[17] = m;
                t[18] = p;
                t[19] = L;
                t[20] = k;
            } else {
                k = t[20];
            }
            let I;
            if (t[21] !== h || t[22] !== y || t[23] !== k || t[24] !== S) {
                I = <div {...babelHelpers.extends({
                    "data-testid": "no-filtered-chats-container"
                }, E, {
                    children: c.jsx(r("WDSTextLayout.react"), {
                        actionsWidth: "hug",
                        body: y,
                        headline: S,
                        illustration: h,
                        primaryAction: k,
                        testid: "no-filtered-chats"
                    })
                })}/>;
                t[21] = h;
                t[22] = y;
                t[23] = k;
                t[24] = S;
                t[25] = I;
            } else {
                I = t[25];
            }
            return I;
        }
        const T = v === _.FavoritesFilter || v === _.UnreadFilter || v === _.GroupsFilter;
        const D = T ? undefined : f.noFilteredChats;
        let x;
        if (t[26] !== T) {
            x = T ? [
                f.action,
                o("WDSMargins.stylex").wdsMargins.marginVer8
            ] : f.action;
            t[26] = T;
            t[27] = x;
        } else {
            x = t[27];
        }
        let $;
        if (t[28] !== m || t[29] !== p || t[30] !== L || t[31] !== x) {
            const Component = r("WAWebUnstyledButton.react");
            $ = <Component dataTab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER} testid={m} onClick={L} xstyle={x}>{p}</Component>;
            t[28] = m;
            t[29] = p;
            t[30] = L;
            t[31] = x;
            t[32] = $;
        } else {
            $ = t[32];
        }
        let P;
        if (t[33] !== h || t[34] !== y || t[35] !== D || t[36] !== $ || t[37] !== v || t[38] !== S) {
            P = <G6Component title={S} text={y} theme={v} icon={h} xstyle={D} testid="no-filtered-chats">{$}</G6Component>;
            t[33] = h;
            t[34] = y;
            t[35] = D;
            t[36] = $;
            t[37] = v;
            t[38] = S;
            t[39] = P;
        } else {
            P = t[39];
        }
        return P;
    }
    function AeComponent({ buttonText, center, onClick, testid, text, xstyle }) {
        const Component = o("WAWebButton.react").WAWebButtonSimplified;
        const d = <G6Component testid={testid} text={text} xstyle={xstyle}><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginTop4), {
            children: <Component onClick={onClick} testid="empty-state-error-button" shadowOnHover={false}>{buttonText ?? r("WAWebFbtCommon")("Try again")}</Component>
        })}/></G6Component>;
        if (center) {
            return d;
        }
        return <div>{d}</div>;
    }
    AeComponent.displayName = `${AeComponent.name} [from ${i.id}]`;
    function IeComponent({ center, testid, xstyle }) {
        const a = <G6Component xstyle={xstyle} text={r("WAWebFbtCommon")("No results found")} testid={testid ?? "no-search-results"}/>;
        if (center) {
            return a;
        }
        return <div>{a}</div>;
    }
    IeComponent.displayName = `${IeComponent.name} [from ${i.id}]`;
    function LeComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const { testid, xstyle } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Enter a phone number to start a chat");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = testid ?? "no-search-results";
        let l;
        if (t[1] !== i || t[2] !== xstyle) {
            l = <G6Component xstyle={xstyle} text={a} testid={i}/>;
            t[1] = i;
            t[2] = xstyle;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function SeComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const { testid, xstyle } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Enter a phone number to start a call");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = testid ?? "no-search-results";
        let l;
        if (t[1] !== i || t[2] !== xstyle) {
            l = <G6Component xstyle={xstyle} text={a} testid={i}/>;
            t[1] = i;
            t[2] = xstyle;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.EmptyStateTheme = _;
    l.Empty = G6Component;
    l.Blocked = h;
    l.Archived = y;
    l.Search = BComponent;
    l.searchFbt = v;
    l.Searching = SComponent;
    l.searchingFbt = R;
    l.SearchingMessages = LComponent;
    l.SearchContacts = EComponent;
    l.SearchWithoutKeyword = KComponent;
    l.SearchWithKeyword = IComponent;
    l.SearchingNonContact = TComponent;
    l.SearchingNonContactWithSpinner = D;
    l.SearchingNonContactError = XComponent;
    l.SearchGroups = $;
    l.SearchMessages = P;
    l.SearchMessagesUnavailable = NComponent;
    l.ListChats = M;
    l.listChatsFbt = w;
    l.ListProducts = AComponent;
    l.BeforeSearchMessages = F;
    l.ListStatus = OComponent;
    l.AllArchived = WComponent;
    l.allArchivedFbt = q;
    l.StarredMsgs = U;
    l.KeptMsgs = VComponent;
    l.SentForAdminReview = H;
    l.MediaMsgs = G;
    l.LinkMsgs = ZComponent;
    l.DocMsgs = JComponent;
    l.Loading = K;
    l.LoadingWithText = QComponent;
    l.NoResultForLabel = X;
    l.noResultForLabelFbt = Y;
    l.NoQuickReplies = J;
    l.getNoFilteredChatsStrings = Z;
    l.NoFilteredChats = OeComponent;
    l.EmptyErrorStateWithButton = AeComponent;
    l.NoSearchResults = IeComponent;
    l.EnterPhoneNumberToStartChat = LeComponent;
    l.EnterPhoneNumberToStartCall = SeComponent;
}, 226);