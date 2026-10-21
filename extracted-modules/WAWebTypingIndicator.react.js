__d("WAWebTypingIndicator.react", [
    "WAChatState",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeValue",
    "WAWebCmd",
    "WAWebFacePile.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendPresenceGetters",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebThemeContext",
    "WAWebTypingIndicatorRecording.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWallpaper",
    "WAWebWrapperConstants",
    "WAWebWrapperGetTailIcon",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatPreferenceValues",
    "useWAWebChatValues",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
    "useWAWebListener",
    "useWAWebPresenceValues",
    "useWAWebStableActiveUsers"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useMemo, useState } = c;
    const _ = 4;
    const F21 = o("WAWebWrapperGetTailIcon").getTailIcon(o("WAWebWrapperConstants").MSG_DIRECTION.IN);
    const g = 40;
    const h = {
        transitionGroup: {
            position: "x10l6tqk",
            overflowY: "x10wlt62",
            bottom: "x1ey2m1c",
            height: "x1vqgdyp",
            $$css: true
        },
        container: {
            display: "x78zum5",
            position: "x1n2onr6",
            $$css: true
        },
        groupContainer: {
            paddingInlineStart: "xz7312c",
            $$css: true
        },
        nonGroupContainer: {
            paddingInlineStart: "x1ogp2j0",
            $$css: true
        },
        bubble: {
            backgroundColor: "x1ew7x2d",
            display: "x78zum5",
            height: "x10w6t97",
            flexDirection: "xdt5ytf",
            justifyContent: "xl56j7k",
            alignItems: "x1cy8zhl",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            boxShadow: "x1khkcf",
            position: "x1n2onr6",
            top: "xs7f9wi",
            $$css: true
        },
        tail: {
            position: "x1n2onr6",
            top: "xs7f9wi",
            marginInlineEnd: "xjn30re",
            color: "x1l1cedg",
            height: "x10w6t97",
            $$css: true
        },
        borderWidth: {
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            $$css: true
        },
        plusXIndicator: {
            display: "x78zum5",
            height: "x1fgtraw",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x7coems",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            rowGap: "x1b8z93w",
            columnGap: "x1amjocr",
            background: "x2ts8ay",
            color: "x14ug900",
            borderStartStartRadius: "x1ekkm8c",
            borderStartEndRadius: "x1143rjc",
            borderEndEndRadius: "xum4auv",
            borderEndStartRadius: "xj21bgg",
            backdropFilter: "x19z9ohp",
            fontSize: "x7yx35o",
            fontWeight: "xo1h6xc",
            marginInlineStart: "x2459kn",
            marginTop: "xfl633f",
            $$css: true
        },
        wallpaperColor: function(t) {
            return [
                {
                    color: t != null ? "x14rh7hd" : t,
                    $$css: true
                },
                {
                    "--x-color": t ?? undefined
                }
            ];
        }
    };
    const y = 28;
    function C(chatstate) {
        if (chatstate.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING || chatstate.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO) {
            return chatstate.type;
        }
        return null;
    }
    function b(e, t) {
        if (e.length > 0) {
            return o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING;
        }
        if (t.length > 0) {
            return o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO;
        }
        return null;
    }
    function v(t) {
        const n = o("react-compiler-runtime").c(36);
        const t_chat = t.chat;
        let i;
        if (n[0] !== t_chat.id) {
            i = t_chat.id.isGroup();
            n[0] = t_chat.id;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let s;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebFrontendPresenceGetters").getTypingUserIds,
                o("WAWebFrontendPresenceGetters").getRecordingUserIds
            ];
            n[2] = s;
        } else {
            s = n[2];
        }
        const c = o("useWAWebPresenceValues").usePresenceValues(t_chat.presence.id, s);
        const m = c[0];
        const g = c[1];
        let v;
        e: {
            if (!l) {
                let R;
                if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
                    R = [];
                    n[3] = R;
                } else {
                    R = n[3];
                }
                v = R;
                break e;
            }
            const L = m;
            let E;
            if (n[4] !== g || n[5] !== L) {
                const k = new Set(L.map(S));
                const I = g.filter((e)=>{
                    const t = e.toString();
                    if (k.has(t)) {
                        return false;
                    }
                    k.add(t);
                    return true;
                });
                E = [].concat(L, I);
                n[4] = g;
                n[5] = L;
                n[6] = E;
            } else {
                E = n[6];
            }
            v = E;
        }
        let T = v;
        const D = o("useWAWebStableActiveUsers").useWAWebStableActiveUsers(m, g);
        if (l) {
            T = D;
        }
        let x;
        if (n[7] !== t_chat.presence.chatstate || n[8] !== l) {
            x = function() {
                if (l) {
                    return null;
                }
                return C(t_chat.presence.chatstate);
            };
            n[7] = t_chat.presence.chatstate;
            n[8] = l;
            n[9] = x;
        } else {
            x = n[9];
        }
        const $ = useState(x);
        const P = $[0];
        const N = $[1];
        let M;
        if (n[10] !== l || n[11] !== P || n[12] !== g || n[13] !== m) {
            M = l ? b(m, g) : P;
            n[10] = l;
            n[11] = P;
            n[12] = g;
            n[13] = m;
            n[14] = M;
        } else {
            M = n[14];
        }
        const w = M;
        const A = T.length <= 5;
        let F;
        if (n[15] !== T || n[16] !== A) {
            F = A ? T : T.slice(T.length - _, T.length);
            n[15] = T;
            n[16] = A;
            n[17] = F;
        } else {
            F = n[17];
        }
        const O = F;
        const B = T.length - _;
        const W = T.length >= 6;
        const q = o("WAWebThemeContext").useIsDarkTheme();
        let U;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            U = [
                o("WAWebFrontendChatGetters").getWallpaperValue
            ];
            n[18] = U;
        } else {
            U = n[18];
        }
        const V = o("useWAWebChatValues").useChatValues(t_chat.id, U);
        const H = V[0];
        let G;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            G = r("WAWebChatPreferenceCollection").getDefault();
            n[19] = G;
        } else {
            G = n[19];
        }
        let z;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            z = [
                o("WAWebChatPreferenceGetters").getWallpaperValue
            ];
            n[20] = z;
        } else {
            z = n[20];
        }
        const j = o("useWAWebChatPreferenceValues").useChatPreferenceValues(G.id, z);
        const K = j[0];
        let Q;
        if (n[21] !== H) {
            Q = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? H : null;
            n[21] = H;
            n[22] = Q;
        } else {
            Q = n[22];
        }
        const X = Q;
        let Y;
        if (n[23] !== K || n[24] !== X) {
            Y = o("WAWebChatThemeValue").isWallpaperOverride(X) ? X : K;
            n[23] = K;
            n[24] = X;
            n[25] = Y;
        } else {
            Y = n[25];
        }
        const J = Y;
        let Z = J != null ? o("WAWebChatThemeValue").wallpaperBackgroundFromValue(J, q ? "dark" : "light").wallpaper : undefined;
        let ee;
        if (n[26] !== t_chat.presence.chatstate || n[27] !== l) {
            ee = function(t, n) {
                if (!l) {
                    N(C(t_chat.presence.chatstate));
                }
            };
            n[26] = t_chat.presence.chatstate;
            n[27] = l;
            n[28] = ee;
        } else {
            ee = n[28];
        }
        o("useWAWebListener").useListener(t_chat.presence.chatstate, "change:type", ee);
        let te;
        let ne;
        if (n[29] !== w) {
            te = function() {
                o("WAWebCmd").Cmd.typingIndicatorVisibilityChange(w != null);
            };
            ne = [
                w
            ];
            n[29] = w;
            n[30] = te;
            n[31] = ne;
        } else {
            te = n[30];
            ne = n[31];
        }
        useEffect(te, ne);
        if (Z === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER) {
            Z = o("WDSVars.stylex").WDSVars["--WDS-systems-chat-background-wallpaper"];
        }
        const re = O[O.length - 1];
        const oe = o("useWAWebGroupColors").useGroupsColorRGBValue(0);
        const ae = o("useWAWebDefaultProfileColors").useDefaultProfileColorRGB(l ? re : null);
        const Ie = r("WAWebVelocityTransitionGroup");
        const le = h;
        const transitionName = "typing-indicator";
        const ue = w != null ? <div {...babelHelpers.extends({
            "data-testid": "typing-indicator"
        }, (e || (e = r("stylex"))).props(h.container, l ? h.groupContainer : h.nonGroupContainer, Z != null && h.wallpaperColor(Z)), {
            children: [
                O.length > 0 && u.jsx(r("WAWebFacePile.react"), {
                    faceSize: y,
                    idsOrUrls: O,
                    borderWidth: h.borderWidth,
                    theme: "typing_indicator",
                    chatWid: t_chat.id
                }),
                W && <div className="x78zum5 x1fgtraw xexx8yu x2vl965 x18d9i69 x7coems xl56j7k x6s0dn4 x1b8z93w x1amjocr x2ts8ay x14ug900 x1ekkm8c x1143rjc xum4auv xj21bgg x19z9ohp x7yx35o xo1h6xc x2459kn xfl633f">+{B}</div>,
                <span className="x1n2onr6 xs7f9wi xjn30re x1l1cedg x10w6t97"><F21 aria-hidden/></span>,
                <div className="x1ew7x2d x78zum5 x10w6t97 xdt5ytf xl56j7k x1cy8zhl x1bczwif xwf5gio x1p453bz x1suzm8a x1khkcf x1n2onr6 xs7f9wi">{w === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING && u.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                    isBotMsgStreaming: false,
                    colorRgb: ae ?? oe
                })}{w === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO && u.jsx(r("WAWebTypingIndicatorRecording.react"), {})}</div>
            ]
        })}/> : null;
        let ce;
        if (n[32] !== Ie || n[33] !== le.transitionGroup || n[34] !== ue) {
            ce = <Ie xstyle={le.transitionGroup} transitionName={transitionName}>{ue}</Ie>;
            n[32] = Ie;
            n[33] = le.transitionGroup;
            n[34] = ue;
            n[35] = ce;
        } else {
            ce = n[35];
        }
        return ce;
    }
    function S(e) {
        return e.toString();
    }
    l.default = v;
}, 98);