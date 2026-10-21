__d("WAWebAlbumMessageComponent.react", [
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaAlbumGrid.react",
    "WAWebMediaAlbumGridConstants",
    "WAWebMessageAIContentLabel.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageListAlbums",
    "WAWebMessageMeta.react",
    "WAWebMsgModelPropUtils",
    "WAWebTypesMedia",
    "WDSPaddings.stylex",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    const d = {
        paddingTop3: {
            paddingTop: "xyqdw3p",
            $$css: true
        },
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingBlock3: {
            paddingTop: "xyqdw3p",
            paddingBottom: "xg8j3zb",
            $$css: true
        },
        paddingInline3: {
            paddingInlineStart: "x1djpfga",
            paddingInlineEnd: "x1im30kd",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const m = {
        metaWithCaption: {
            bottom: "xy1j3rs",
            position: "x10l6tqk",
            insetInlineEnd: "x11dcrhx",
            left: null,
            right: null,
            zIndex: "xhtitgo",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(44);
        const { associatedMessages, chat, displayAuthor, displayType, isMsgVisible, msgKey, quotedMsg, trusted } = t;
        let y;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebFrontendMsgGetters").getShouldShowForwarded
            ];
            n[0] = y;
        } else {
            y = n[0];
        }
        const C = o("useWAWebMsgValues").useMsgValues(msgKey, y);
        const b = C[0];
        const v = C[1];
        let S;
        if (n[1] !== chat || n[2] !== displayAuthor || n[3] !== displayType || n[4] !== msgKey || n[5] !== b || n[6] !== v) {
            S = displayAuthor ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.paddingTop3, d.paddingBottom5, d.paddingInlineStart6, v && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(chat) && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4), {
                children: u.jsx(r("WAWebMessageAuthor.react"), {
                    msgKey,
                    contact: b,
                    displayType
                })
            })}/> : null;
            n[1] = chat;
            n[2] = displayAuthor;
            n[3] = displayType;
            n[4] = msgKey;
            n[5] = b;
            n[6] = v;
            n[7] = S;
        } else {
            S = n[7];
        }
        const R = S;
        let L;
        if (n[8] !== displayAuthor || n[9] !== msgKey || n[10] !== v) {
            L = v ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msgKey,
                xstyle: [
                    d.paddingBlock3,
                    o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
                    d.paddingInlineStart6,
                    displayAuthor && o("WDSPaddings.stylex").wdsPaddings.paddingTop0
                ]
            }) : null;
            n[8] = displayAuthor;
            n[9] = msgKey;
            n[10] = v;
            n[11] = L;
        } else {
            L = n[11];
        }
        const E = L;
        const k = o("WAWebDisplayType").isWideDisplay(displayType);
        const reserveAiContentLabel = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(msgKey, associatedMessages);
        let T;
        if (n[12] !== associatedMessages) {
            T = r("compactMap")(associatedMessages, f);
            n[12] = associatedMessages;
            n[13] = T;
        } else {
            T = n[13];
        }
        const D = T;
        const x = D.find(_);
        const $ = x != null ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x9f619 x1xtabgy xm7lytj x1icxu4v xs9asl8 x25sj25"
            },
            1: {
                className: "x9f619 xm7lytj x1icxu4v xs9asl8 x25sj25 xno0opx"
            }
        }[!!k << 0], {
            children: u.jsx(r("WAWebMessageCaption.react"), {
                msgKey: x.id,
                trusted: trusted && o("WAWebMsgModelPropUtils").isTrusted(x.unsafe()),
                spacer: true,
                reserveAiContentLabel,
                testId: "album-caption"
            })
        })}/> : null;
        const numAdditionalMedia = D.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? D.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1 : null;
        const zoomMsg = D.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? D[0] : null;
        let M;
        if (n[14] !== quotedMsg) {
            M = quotedMsg ? <div className="xahult9">{quotedMsg}</div> : null;
            n[14] = quotedMsg;
            n[15] = M;
        } else {
            M = n[15];
        }
        const w = M;
        const A = {
            0: {
                className: "xyqdw3p x1im30kd xg8j3zb x1djpfga xgf70vc"
            },
            1: {
                className: "xyqdw3p x1im30kd xg8j3zb x1djpfga xm28ga1"
            }
        }[!!k << 0];
        const F = "media-album";
        const O = {
            0: {
                className: "xgf70vc x1k3r3g5 x6ikm8r x10wlt62 xrvj5dj xn2kgx5"
            },
            1: {
                className: "x6ikm8r x10wlt62 xrvj5dj xn2kgx5 xm28ga1 x1uaihgu"
            }
        }[!!k << 0];
        let B;
        if (n[16] !== displayType || n[17] !== isMsgVisible || n[18] !== D || n[19] !== numAdditionalMedia || n[20] !== zoomMsg) {
            B = D.slice(0, o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL).map((e, t)=>{
                const n = t === o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL - 1 ? {
                    numAdditionalMedia,
                    zoomMsg
                } : null;
                return u.jsx(r("WAWebMediaAlbumGrid.react"), babelHelpers.extends({
                    msgKey: e.id,
                    albumMsgs: D,
                    currentAlbumMessageIndex: t,
                    albumPosition: o("WAWebMediaAlbumGridConstants").ALBUM_GRID_POSITIONS[t % o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL],
                    isMsgVisible,
                    displayType,
                    albumTheme: o("WAWebTypesMedia").DisplayTheme.AlbumV2
                }, n), e.id.toString());
            });
            n[16] = displayType;
            n[17] = isMsgVisible;
            n[18] = D;
            n[19] = numAdditionalMedia;
            n[20] = zoomMsg;
            n[21] = B;
        } else {
            B = n[21];
        }
        let W;
        if (n[22] !== O || n[23] !== B) {
            W = <div {...babelHelpers.extends({}, O, {
                children: B
            })}/>;
            n[22] = O;
            n[23] = B;
            n[24] = W;
        } else {
            W = n[24];
        }
        const q = $ && m.metaWithCaption;
        let U;
        if (n[25] !== $) {
            U = !$ && [
                d.paddingInline3,
                d.paddingTop3
            ];
            n[25] = $;
            n[26] = U;
        } else {
            U = n[26];
        }
        let V;
        if (n[27] !== q || n[28] !== U) {
            V = [
                q,
                U
            ];
            n[27] = q;
            n[28] = U;
            n[29] = V;
        } else {
            V = n[29];
        }
        let H;
        if (n[30] !== associatedMessages || n[31] !== msgKey) {
            H = u.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey,
                associatedMessages
            });
            n[30] = associatedMessages;
            n[31] = msgKey;
            n[32] = H;
        } else {
            H = n[32];
        }
        let G;
        if (n[33] !== V || n[34] !== H) {
            const Component = o("WAWebFlex.react").FlexRow;
            G = <Component justify="end" xstyle={V}>{H}</Component>;
            n[33] = V;
            n[34] = H;
            n[35] = G;
        } else {
            G = n[35];
        }
        let z;
        if (n[36] !== R || n[37] !== $ || n[38] !== E || n[39] !== w || n[40] !== W || n[41] !== G || n[42] !== A) {
            z = <div {...babelHelpers.extends({}, A, {
                "data-testid": F,
                children: [
                    R,
                    E,
                    w,
                    W,
                    $,
                    G
                ]
            })}/>;
            n[36] = R;
            n[37] = $;
            n[38] = E;
            n[39] = w;
            n[40] = W;
            n[41] = G;
            n[42] = A;
            n[43] = z;
        } else {
            z = n[43];
        }
        return z;
    }
    function _({ caption }) {
        return caption != null;
    }
    function f(e) {
        return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
    }
    l.default = p;
}, 98);