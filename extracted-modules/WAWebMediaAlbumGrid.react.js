__d("WAWebMediaAlbumGrid.react", [
    "fbt",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMediaAlbumPosition",
    "WAWebMediaAlbumUtils",
    "WAWebMediaVideo.react",
    "WAWebMessagePicture.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSMargins.stylex",
    "WDSText.react",
    "err",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    const u = [
        "elRef",
        "mediaData",
        "overlayContent",
        "type"
    ];
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useEffect, useImperativeHandle, useRef } = p;
    const h = {
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        }
    };
    const y = {
        albumTopLeft: {
            marginTop: "xdj266r",
            marginInlineEnd: "x1p8j9ns",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        albumTopRight: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        albumBottomLeft: {
            marginTop: "x7r5mf7",
            marginInlineEnd: "x1p8j9ns",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        },
        albumBottomRight: {
            marginTop: "x7r5mf7",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            $$css: true
        }
    };
    const C = new Map([
        [
            o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT,
            y.albumTopLeft
        ],
        [
            o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT,
            y.albumTopRight
        ],
        [
            o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT,
            y.albumBottomLeft
        ],
        [
            o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_RIGHT,
            y.albumBottomRight
        ]
    ]);
    function BComponent(t) {
        const n = o("react-compiler-runtime").c(21);
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { albumPosition, currentAlbumMessageIndex, displayType, msgKey, numAdditionalMedia } = i;
        let y;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WAWebMsgGetters").getType,
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            n[0] = y;
        } else {
            y = n[0];
        }
        const b = o("useWAWebMsgValues").useMsgValues(msgKey, y);
        const R = b[0];
        const L = b[1];
        const ERef = useRef(null);
        const kRef = useRef(null);
        const I = o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(i.albumMsgs);
        const T = albumPosition === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_RIGHT && (i.albumMsgs.length === 3 || i.albumMsgs.length === 2 && !I);
        const D = albumPosition === o("WAWebMediaAlbumPosition").AlbumPosition.BOTTOM_LEFT && i.albumMsgs.length === 3 || albumPosition === o("WAWebMediaAlbumPosition").AlbumPosition.TOP_LEFT && i.albumMsgs.length < 4 && !(i.albumMsgs.length === 2 && I);
        const x = [
            [
                {
                    gridColumn: "1 / 3",
                    gridRow: "1 / 3"
                }
            ],
            [
                {
                    gridColumn: "1 / 3",
                    gridRow: "1 / 2"
                },
                {
                    gridColumn: "1 / 3",
                    gridRow: "2 / 3"
                }
            ],
            [
                {
                    gridColumn: "1 / 3",
                    gridRow: "1 / 2"
                },
                {
                    gridColumn: "1 / 2",
                    gridRow: "2 / 3"
                },
                {
                    gridColumn: "2 / 3",
                    gridRow: "2 / 3"
                }
            ],
            [
                {
                    gridColumn: "1 / 2",
                    gridRow: "1 / 2"
                },
                {
                    gridColumn: "2 / 3",
                    gridRow: "1 / 2"
                },
                {
                    gridColumn: "1 / 2",
                    gridRow: "2 / 3"
                },
                {
                    gridColumn: "2 / 3",
                    gridRow: "2 / 3"
                }
            ]
        ];
        const $ = [
            {
                gridColumn: "1 / 2",
                gridRow: "1 / 3"
            },
            {
                gridColumn: "2 / 3",
                gridRow: "1 / 3"
            }
        ];
        const PRef = useRef(R);
        let N;
        let M;
        if (n[1] !== R) {
            N = function() {
                const PRef_current = PRef.current;
                PRef.current = R;
                if (R !== PRef_current && R === o("WAWebMsgType").MSG_TYPE.REVOKED) {
                    o("WAWebCmd").Cmd.refreshMessages();
                }
            };
            M = [
                R
            ];
            n[1] = R;
            n[2] = N;
            n[3] = M;
        } else {
            N = n[2];
            M = n[3];
        }
        useEffect(N, M);
        let w;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            w = function() {
                return kRef.current;
            };
            n[4] = w;
        } else {
            w = n[4];
        }
        const getRef = w;
        let F;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            F = function() {
                return r("nullthrows")(ERef.current);
            };
            n[5] = F;
        } else {
            F = n[5];
        }
        const O = F;
        let B;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            B = function() {
                return {
                    getRef,
                    getContainerElement: O
                };
            };
            n[6] = B;
        } else {
            B = n[6];
        }
        useImperativeHandle(t_ref, B);
        const W = ()=>{
            if (i.albumMsgs.length === 2 && I) {
                return $[currentAlbumMessageIndex];
            }
            return x[Math.min(i.albumMsgs.length, 4) - 1][currentAlbumMessageIndex];
        };
        const q = W();
        const U = {
            0: "xh8yej3 x1o2hl16 xt7dq6l",
            1: "xh8yej3 xt7dq6l x9c8tz"
        }[!!o("WAWebDisplayType").isWideDisplay(displayType) << 0];
        const V = (c || (c = r("stylex"))).props(C.get(albumPosition), D && o("WDSMargins.stylex").wdsMargins.marginEnd0, T && h.marginTop3);
        let H;
        if (n[7] !== numAdditionalMedia) {
            H = numAdditionalMedia != null && numAdditionalMedia > 0 ? <V1Component numAdditionalMedia={numAdditionalMedia}/> : null;
            n[7] = numAdditionalMedia;
            n[8] = H;
        } else {
            H = n[8];
        }
        let G;
        if (n[9] !== L || n[10] !== i || n[11] !== H || n[12] !== R) {
            G = <SComponent {...babelHelpers.extends({}, i, {
                elRef: kRef,
                mediaData: L,
                type: R,
                overlayContent: H
            })}/>;
            n[9] = L;
            n[10] = i;
            n[11] = H;
            n[12] = R;
            n[13] = G;
        } else {
            G = n[13];
        }
        let z;
        if (n[14] !== G || n[15] !== V) {
            z = <div {...babelHelpers.extends({}, V, {
                children: G
            })}/>;
            n[14] = G;
            n[15] = V;
            n[16] = z;
        } else {
            z = n[16];
        }
        let j;
        if (n[17] !== z || n[18] !== q || n[19] !== U) {
            j = <div ref={ERef} style={q} className={U}>{z}</div>;
            n[17] = z;
            n[18] = q;
            n[19] = U;
            n[20] = j;
        } else {
            j = n[20];
        }
        return j;
    }
    function V1Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_numAdditionalMedia = e.numAdditionalMedia;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = "x10l6tqk x1n327nk xr1yuqi x11t971q x4ii5y1 xvc5jky x17t9dm2 x47corl";
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_numAdditionalMedia) {
            const Component = r("WDSText.react");
            i = <span className={a} data-testid="media-album-overflow-count-container"><Component type="LargeTitle1" colorName="persistentAlwaysWhite" testid="media-album-overflow-count">{s._("+{number}", [
                s._param("number", e_numAdditionalMedia)
            ])}</Component></span>;
            t[1] = e_numAdditionalMedia;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function SComponent(e) {
        const t = o("react-compiler-runtime").c(26);
        let n;
        let a;
        let i;
        let l;
        let s;
        if (t[0] !== e) {
            n = e.elRef;
            a = e.mediaData;
            i = e.overlayContent;
            s = e.type;
            l = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = s;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
            l = t[4];
            s = t[5];
        }
        if (s === o("WAWebMsgType").MSG_TYPE.REVOKED) {
            return null;
        }
        if (s === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            let c;
            if (t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== l.albumMsgs || t[10] !== l.albumTheme || t[11] !== l.currentAlbumMessageIndex || t[12] !== l.displayType || t[13] !== l.isMsgVisible || t[14] !== l.msgKey || t[15] !== l.zoomMsg) {
                const Component = o("WAWebMessagePicture.react").ImageMessage;
                c = <Component theme={l.albumTheme} albumMsgs={l.albumMsgs} msgKey={l.msgKey} currentAlbumMessageIndex={l.currentAlbumMessageIndex} mediaData={a} ref={n} isMsgVisible={l.isMsgVisible} zoomMsg={l.zoomMsg} overlayContent={i} displayAuthor={false} displayType={l.displayType}/>;
                t[6] = n;
                t[7] = a;
                t[8] = i;
                t[9] = l.albumMsgs;
                t[10] = l.albumTheme;
                t[11] = l.currentAlbumMessageIndex;
                t[12] = l.displayType;
                t[13] = l.isMsgVisible;
                t[14] = l.msgKey;
                t[15] = l.zoomMsg;
                t[16] = c;
            } else {
                c = t[16];
            }
            return c;
        }
        if (s === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            let d;
            if (t[17] !== n || t[18] !== i || t[19] !== l.albumMsgs || t[20] !== l.albumTheme || t[21] !== l.currentAlbumMessageIndex || t[22] !== l.displayType || t[23] !== l.msgKey || t[24] !== l.zoomMsg) {
                const Component = r("WAWebMediaVideo.react");
                d = <Component theme={l.albumTheme} albumMsgs={l.albumMsgs} msgKey={l.msgKey} currentAlbumMessageIndex={l.currentAlbumMessageIndex} ref={n} zoomMsg={l.zoomMsg} displayAuthor={false} overlayContent={i} displayType={l.displayType}/>;
                t[17] = n;
                t[18] = i;
                t[19] = l.albumMsgs;
                t[20] = l.albumTheme;
                t[21] = l.currentAlbumMessageIndex;
                t[22] = l.displayType;
                t[23] = l.msgKey;
                t[24] = l.zoomMsg;
                t[25] = d;
            } else {
                d = t[25];
            }
            return d;
        }
        throw r("err")(`Unexpected Album Type: ${s}`);
    }
    l.default = BComponent;
}, 226);