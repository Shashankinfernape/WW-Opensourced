__d("WAWebMediaDocument.react", [
    "WAWebBizCtwaContext.react",
    "WAWebDisplayType",
    "WAWebEnvironment",
    "WAWebL10N",
    "WAWebMediaDocumentBubbleActions.react",
    "WAWebMediaDocumentPreview",
    "WAWebMessageCaption.react",
    "WAWebMessageContentBox.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useRef } = d;
    const _ = {
        bubble: {
            boxSizing: "x9f619",
            width: "x3orp4s",
            paddingTop: "xvwn6h4",
            paddingInlineEnd: "x15caf7o",
            paddingBottom: "x9bjmck",
            paddingInlineStart: "x14wgdpn",
            $$css: true
        },
        isAnnouncement: {
            width: "x1yuel0x",
            $$css: true
        },
        bubbleExtraPadding: {
            paddingBottom: "xfssnsy",
            $$css: true
        },
        isGallery: {
            width: "x14atkfc",
            "@media (max-width:880px)_insetInlineEnd": "xt1z7ec",
            "@media (max-width:880px)_left": null,
            "@media (max-width:880px)_right": null,
            "@media (max-width:880px)_overflowX": "x1yp9nv9",
            "@media (max-width:880px)_overflowY": "x186kree",
            "@media (max-width:880px)_textOverflow": "x1y04bub",
            "@media (max-width:880px)_whiteSpace": "x1duis28",
            $$css: true
        },
        isPreview: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        templateBubble: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    const f = new Map([
        [
            o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
            _.isPreview
        ],
        [
            o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
            _.isGallery
        ],
        [
            o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
            _.isGallery
        ],
        [
            o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
            _.isAnnouncement
        ],
        [
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            _.isAnnouncement
        ]
    ]);
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(42);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { displayAuthor, displayType, msgKey, quotedMsg, trusted } = l;
        const CRef = useRef(null);
        let b;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = function() {
                return {
                    handleKeyActivation: function(t) {
                        t.preventDefault();
                        CRef.current?.click();
                    }
                };
            };
            n[3] = b;
        } else {
            b = n[3];
        }
        useImperativeHandle(i, b);
        let v;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            let S;
            v = [
                (S = o("WAWebMsgGetters")).getCaption,
                S.getIsFromTemplate,
                S.getFooter,
                S.getIsCaptionByUser,
                S.getIsDynamicReplyButtonsMsg
            ];
            n[4] = v;
        } else {
            v = n[4];
        }
        const R = o("useWAWebMsgValues").useMsgValues(msgKey, v);
        const L = R[0];
        const E = R[1];
        const k = R[2];
        const I = R[3];
        const T = R[4];
        let D;
        if (n[5] !== msgKey || n[6] !== a.displayType) {
            const x = r("WAWebL10N").isRTL();
            D = r("WAWebEnvironment").isWindows ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x1n2onr6 x1n327nk x18mqm2i xhsvlbd x14z9mp xz62fqu x1wbi8v6"
                },
                1: {
                    className: "x1n2onr6 x1n327nk xhsvlbd x14z9mp xz62fqu x1wbi8v6 xtrg13t"
                }
            }[!!x << 0], {
                children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey,
                    displayType: a.displayType
                })
            })}/> : null;
            n[5] = msgKey;
            n[6] = a.displayType;
            n[7] = D;
        } else {
            D = n[7];
        }
        const $ = D;
        let P;
        if (n[8] !== displayType || n[9] !== k || n[10] !== I || n[11] !== $ || n[12] !== msgKey || n[13] !== trusted) {
            P = I ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x9f619 x1xtabgy x1yrsyyn x11lfxj5 xs9asl8 x25sj25"
                },
                1: {
                    className: "x9f619 x1yrsyyn x11lfxj5 xs9asl8 x25sj25 xno0opx"
                }
            }[!!o("WAWebDisplayType").isWideDisplay(displayType) << 0], {
                children: [
                    c.jsx(r("WAWebMessageCaption.react"), {
                        msgKey,
                        trusted,
                        spacer: !k,
                        testId: "document-caption"
                    }),
                    $
                ]
            })}/> : null;
            n[8] = displayType;
            n[9] = k;
            n[10] = I;
            n[11] = $;
            n[12] = msgKey;
            n[13] = trusted;
            n[14] = P;
        } else {
            P = n[14];
        }
        const N = P;
        const hideCaption = N != null || !(E || T);
        let w;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            w = "xdj266r x14z9mp xahult9 x1lziwak";
            n[15] = w;
        } else {
            w = n[15];
        }
        let A;
        if (n[16] !== msgKey) {
            A = c.jsx(r("WAWebBizCtwaContext.react"), {
                msgKey,
                wrapperClass: w
            });
            n[16] = msgKey;
            n[17] = A;
        } else {
            A = n[17];
        }
        const showMessageMeta = r("WAWebEnvironment").isWindows && N == null;
        let O;
        if (n[18] !== displayType || n[19] !== msgKey || n[20] !== showMessageMeta) {
            const Component = r("WAWebMediaDocumentPreview");
            O = <Component ref={CRef} msgKey={msgKey} displayType={displayType} showMessageMeta={showMessageMeta}/>;
            n[18] = displayType;
            n[19] = msgKey;
            n[20] = showMessageMeta;
            n[21] = O;
        } else {
            O = n[21];
        }
        let B;
        if (n[22] !== msgKey) {
            B = c.jsx(r("WAWebMediaDocumentBubbleActions.react"), {
                msgKey
            });
            n[22] = msgKey;
            n[23] = B;
        } else {
            B = n[23];
        }
        let W;
        if (n[24] !== N || n[25] !== displayAuthor || n[26] !== displayType || n[27] !== msgKey || n[28] !== quotedMsg || n[29] !== B || n[30] !== hideCaption || n[31] !== A || n[32] !== O || n[33] !== trusted) {
            const Component = r("WAWebMessageContentBox.react");
            W = <Component displayType={displayType} msgKey={msgKey} quotedMsg={quotedMsg} showAuthor={displayAuthor} hideCaption={hideCaption} hideMeta={r("WAWebEnvironment").isWindows} trusted={trusted}>{A}{O}{N}{B}</Component>;
            n[24] = N;
            n[25] = displayAuthor;
            n[26] = displayType;
            n[27] = msgKey;
            n[28] = quotedMsg;
            n[29] = B;
            n[30] = hideCaption;
            n[31] = A;
            n[32] = O;
            n[33] = trusted;
            n[34] = W;
        } else {
            W = n[34];
        }
        const q = W;
        const U = !!((E || T) && L);
        let V;
        if (n[35] !== N || n[36] !== displayType || n[37] !== U) {
            V = (s || (s = r("stylex"))).props(_.bubble, !N && !r("WAWebEnvironment").isWindows && _.bubbleExtraPadding, U && _.templateBubble, f.get(displayType));
            n[35] = N;
            n[36] = displayType;
            n[37] = U;
            n[38] = V;
        } else {
            V = n[38];
        }
        let H;
        if (n[39] !== q || n[40] !== V) {
            H = <div {...babelHelpers.extends({}, V, {
                children: q
            })}/>;
            n[39] = q;
            n[40] = V;
            n[41] = H;
        } else {
            H = n[41];
        }
        return H;
    }
    l.default = GComponent;
}, 98);