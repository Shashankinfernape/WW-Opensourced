__d("WAWebBizCtwaPreview.react", [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaThumbnailImage.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebEmojiText.react",
    "WAWebKeyboardConstants",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        thumbnail: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            width: "x1useyqa",
            height: "xsdox4t",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            objectFit: "xl1xv1r",
            $$css: true
        }
    };
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(34);
        const { context, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getFrom
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const c = l[0];
        const m = l[1];
        let _;
        if (t[1] !== context) {
            _ = context.sourceApp ?? o("WAWebBizCtwaAGMUtils").getHostnameLabel(context);
            t[1] = context;
            t[2] = _;
        } else {
            _ = t[2];
        }
        const g = _;
        let h;
        if (t[3] !== g) {
            h = g != null ? <div className="x104kibb x1c4vz4f xs83m0k xdl72j9 xw6vvto x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub x1s688f x6prxxf x1fc57z9 x1w2d6ul" data-testid="ctwa-ad-source">{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: o("WAWebBizCtwaAGMUtils").getAdSourceLabel(g)
            })}</div> : null;
            t[3] = g;
            t[4] = h;
        } else {
            h = t[4];
        }
        const y = h;
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            C = "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x6ikm8r x10wlt62 x17fgdl5";
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = C;
        let v;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1nxh6w3 xhslqc4 xd4r4e8"
            };
            t[6] = v;
        } else {
            v = t[6];
        }
        let S;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s._("View details")
            });
            t[7] = S;
        } else {
            S = t[7];
        }
        let R;
        if (t[8] !== context.description) {
            R = <div {...babelHelpers.extends({}, v, {
                title: context.description,
                children: S
            })}/>;
            t[8] = context.description;
            t[9] = R;
        } else {
            R = t[9];
        }
        const L = R;
        let E;
        if (t[10] !== c) {
            E = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
                0: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1ypdohk x6egj2d",
                1: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1ypdohk x4wrhlh"
            }[!!c << 0]);
            t[10] = c;
            t[11] = E;
        } else {
            E = t[11];
        }
        const k = E;
        let I;
        if (t[12] !== context || t[13] !== msgKey) {
            I = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (e != null) {
                    p(context, e);
                }
            };
            t[12] = context;
            t[13] = msgKey;
            t[14] = I;
        } else {
            I = t[14];
        }
        const T = I;
        let onKeyPress;
        if (t[15] !== T) {
            onKeyPress = function(t) {
                if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ENTER || t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.SPACE) {
                    T();
                }
            };
            t[15] = T;
            t[16] = onKeyPress;
        } else {
            onKeyPress = t[16];
        }
        let x;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                className: "x78zum5 x1qjc9v5 x1nhvcw1 xh8yej3 x6ikm8r x10wlt62 x889kno x2vl965 x1a8lsjc xe2zdcy x1q0g3np xlrrn2g"
            };
            t[17] = x;
        } else {
            x = t[17];
        }
        let $;
        if (t[18] !== context || t[19] !== m || t[20] !== c) {
            $ = u.jsx(r("WAWebBizCtwaThumbnailImage.react"), {
                context,
                businessWid: m,
                fromMe: c,
                xstyle: d.thumbnail,
                isThumbnail: true
            });
            t[18] = context;
            t[19] = m;
            t[20] = c;
            t[21] = $;
        } else {
            $ = t[21];
        }
        let P;
        if (t[22] !== y || t[23] !== context.sourceUrl || t[24] !== L) {
            P = context.sourceUrl != null ? <div className={b}>{y}{L}</div> : null;
            t[22] = y;
            t[23] = context.sourceUrl;
            t[24] = L;
            t[25] = P;
        } else {
            P = t[25];
        }
        let N;
        if (t[26] !== $ || t[27] !== P) {
            N = <div {...babelHelpers.extends({}, x, {
                children: [
                    $,
                    P
                ]
            })}/>;
            t[26] = $;
            t[27] = P;
            t[28] = N;
        } else {
            N = t[28];
        }
        let M;
        if (t[29] !== k || t[30] !== T || t[31] !== onKeyPress || t[32] !== N) {
            M = <div className={k} onClick={T} data-testid="ctwa-agm-preview" role="button" tabIndex={0} onKeyPress={onKeyPress}>{N}</div>;
            t[29] = k;
            t[30] = T;
            t[31] = onKeyPress;
            t[32] = N;
            t[33] = M;
        } else {
            M = t[33];
        }
        return M;
    }
    function p(context, t) {
        const agmPayload = o("WAWebCtwaAGMUtils").extractAGMPayload(context);
        const fromBusiness = o("WAWebMsgGetters").getIsSentByMe(t);
        const a = function() {
            o("WAWebCtwaLogger").logAGMOperation({
                operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_closed,
                fromBusiness,
                agmPayload,
                businessWid: t.from,
                adId: context.sourceId
            });
        };
        const i = function() {
            o("WAWebCtwaLogger").logAGMOperation({
                operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_shown,
                fromBusiness,
                agmPayload,
                businessWid: t.from,
                adId: context.sourceId
            });
        };
        o("WAWebCtwaLogger").logAGMOperation({
            operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_view_details_clicked,
            fromBusiness,
            agmPayload,
            businessWid: t.from,
            adId: context.sourceId
        });
        o("WAWebCmd").Cmd.ctwaAdPreviewDrawer(o("WAWebStateUtils").unproxy(t), a, i);
    }
    l.default = MComponent;
}, 226);