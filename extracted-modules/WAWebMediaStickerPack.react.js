__d("WAWebMediaStickerPack.react", [
    "fbt",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebKeyboardTabUtils",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebStickerPackDetailsFlow.react",
    "WAWebStickerPackPreview",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingTop6: {
            paddingTop: "x1yrsyyn",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        }
    };
    const m = {
        caption: {
            boxSizing: "x9f619",
            maxWidth: "x1xtabgy",
            $$css: true
        }
    };
    function p(t) {
        const a = o("react-compiler-runtime").c(34);
        const { displayAuthor, displayType, msgKey } = t;
        let p;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebMsgGetters").getIsCaptionByUser
            ];
            a[0] = p;
        } else {
            p = a[0];
        }
        const g = o("useWAWebMsgValues").useMsgValues(msgKey, p);
        const h = g[0];
        let y;
        if (a[1] !== msgKey) {
            const C = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = f(msgKey);
                    if (e != null) {
                        yield e.downloadMedia({
                            downloadEvenIfExpensive: true,
                            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
                            isUserInitiated: true
                        });
                        const t = o("WAWebStateUtils").unproxy(e.unsafe()).mediaData.mediaBlob;
                        const n = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(t, e);
                        b(e, n);
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            y = function() {
                C();
            };
            var b = _;
            a[1] = msgKey;
            a[2] = y;
        } else {
            y = a[2];
        }
        let v;
        if (a[3] !== h || a[4] !== msgKey) {
            v = h ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.caption, d.paddingTop6, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, d.paddingInlineStart6), {
                children: c.jsx(r("WAWebMessageCaption.react"), {
                    msgKey,
                    testId: "document-caption"
                })
            })}/> : null;
            a[3] = h;
            a[4] = msgKey;
            a[5] = v;
        } else {
            v = a[5];
        }
        const S = v;
        let R;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "xdvlbce"
            };
            a[6] = R;
        } else {
            R = a[6];
        }
        let L;
        if (a[7] !== msgKey) {
            L = c.jsx(r("WAWebStickerPackPreview"), {
                msgKey
            });
            a[7] = msgKey;
            a[8] = L;
        } else {
            L = a[8];
        }
        let E;
        if (a[9] !== S) {
            const Component = o("WAWebFlex.react").FlexRow;
            E = <Component>{S}</Component>;
            a[9] = S;
            a[10] = E;
        } else {
            E = a[10];
        }
        let k;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            k = {
                className: "x10l6tqk x1inkcgm"
            };
            a[11] = k;
        } else {
            k = a[11];
        }
        let I;
        if (a[12] !== msgKey) {
            const Component = o("WAWebFlex.react").FlexRow;
            I = <Component><div {...babelHelpers.extends({}, k, {
                children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey
                })
            })}/></Component>;
            a[12] = msgKey;
            a[13] = I;
        } else {
            I = a[13];
        }
        let T;
        if (a[14] !== L || a[15] !== E || a[16] !== I) {
            T = <div {...babelHelpers.extends({}, R, {
                children: [
                    L,
                    E,
                    I
                ]
            })}/>;
            a[14] = L;
            a[15] = E;
            a[16] = I;
            a[17] = T;
        } else {
            T = a[17];
        }
        let D;
        if (a[18] !== displayAuthor || a[19] !== displayType || a[20] !== msgKey || a[21] !== T) {
            const Component = r("WAWebMessageTextBubble.react");
            D = <Component displayType={displayType} msgKey={msgKey} displayAuthor={displayAuthor} hideMeta>{T}</Component>;
            a[18] = displayAuthor;
            a[19] = displayType;
            a[20] = msgKey;
            a[21] = T;
            a[22] = D;
        } else {
            D = a[22];
        }
        const x = D;
        let $;
        if (a[23] === Symbol.for("react.memo_cache_sentinel")) {
            $ = s._("View sticker pack");
            a[23] = $;
        } else {
            $ = a[23];
        }
        const P = $;
        let N;
        if (a[24] !== displayType) {
            N = ({
                0: {
                    className: "x9f619 x3orp4s xyqdw3p x1im30kd xg8j3zb x1djpfga"
                },
                1: {
                    className: "x9f619 x4blvmq xyqdw3p x1im30kd xg8j3zb x1djpfga"
                }
            })[(displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 0];
            a[24] = displayType;
            a[25] = N;
        } else {
            N = a[25];
        }
        let M;
        if (a[26] !== x || a[27] !== N) {
            M = <div {...babelHelpers.extends({}, N, {
                children: [
                    x,
                    " "
                ]
            })}/>;
            a[26] = x;
            a[27] = N;
            a[28] = M;
        } else {
            M = a[28];
        }
        let w;
        if (a[29] !== y) {
            w = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.STICKER_PACK,
                items: [
                    {
                        label: P,
                        title: P,
                        onClick: y,
                        disabled: false,
                        testid: "view-sticker-pack"
                    }
                ]
            });
            a[29] = y;
            a[30] = w;
        } else {
            w = a[30];
        }
        let A;
        if (a[31] !== M || a[32] !== w) {
            A = <>{M}{w}</>;
            a[31] = M;
            a[32] = w;
            a[33] = A;
        } else {
            A = a[33];
        }
        return A;
    }
    function _(e, stickers) {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebStickerPackDetailsFlow.react"), {
            msg: e,
            stickers
        }), {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function f(msgKey) {
        const n = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
        if (n == null || n.type !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            return null;
        }
        return n;
    }
    l.default = p;
}, 226);