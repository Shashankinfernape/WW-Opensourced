__d("WAWebMediaDocumentPreview", [
    "fbt",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebDocumentFileIcon",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebL10nFilesize",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaThumbnail.react",
    "WAWebMediaTimeLeftEta.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMessageMeta.react",
    "WAWebMessageUiUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSIconIcVideocamFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebDocumentMediaType",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef } = c;
    const p = {
        paddingBlock13: {
            paddingTop: "x1d0ri9u",
            paddingBottom: "x1ug4tga",
            $$css: true
        },
        marginInline10: {
            marginInlineStart: "x1hm9lzh",
            marginInlineEnd: "x1sa5p1d",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    const _ = {
        textContainerPadding: {
            paddingInlineEnd: "xl3akx1",
            $$css: true
        },
        container: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x1qjc9v5",
            width: "xh8yej3",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            color: "x1heor9g",
            textAlign: "x16tdsg8",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            $$css: true
        },
        fixedTextHeight: {
            height: "xdiz9cm",
            $$css: true
        },
        text: {
            position: "x1n2onr6",
            top: "x1qiirwl",
            marginTop: "xdj266r",
            marginBottom: "xat24cr",
            marginInlineEnd: "x1sa5p1d",
            marginInlineStart: "x1hm9lzh",
            $$css: true
        },
        textRTL: {
            textAlign: "x1hr2gdg",
            $$css: true
        },
        deepContainerContent: {
            paddingTop: "x1d0ri9u",
            paddingInlineEnd: "xl3akx1",
            paddingBottom: "x1ug4tga",
            paddingInlineStart: "x11ahuha",
            position: "x1n2onr6",
            $$css: true
        },
        embeddedContent: {
            paddingTop: "x1tiyuxx",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1nbhmlj",
            paddingInlineStart: "xdx6fka",
            marginBottom: "xz62fqu",
            position: "x1n2onr6",
            $$css: true
        },
        metaValue: {
            display: "x1rg5ohu",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            ":last-child_display": "xwcf1sq",
            $$css: true
        },
        deepContainer: {
            cursor: "xmper1u",
            $$css: true
        },
        mediaThumbVideoIcon: {
            position: "x10l6tqk",
            bottom: "xy1j3rs",
            insetInlineStart: "xrr41r3",
            left: null,
            right: null,
            color: "x17t9dm2",
            $$css: true
        }
    };
    function F3Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <span className="x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq xdj266r x7g7pl8 xat24cr x1wbi8v6">•</span>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function G3Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_size = e.size;
        if (e_size == null || e_size <= 0) {
            return null;
        }
        let r;
        if (t[0] !== e_size) {
            r = o("WAWebL10nFilesize").getL10nFilesize(e_size);
            t[0] = e_size;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq"
            };
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== a) {
            l = <span {...babelHelpers.extends({}, i, {
                title: a,
                children: a
            })}/>;
            t[3] = a;
            t[4] = l;
        } else {
            l = t[4];
        }
        let s;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            s = <F3Component/>;
            t[5] = s;
        } else {
            s = t[5];
        }
        let c;
        if (t[6] !== l) {
            c = <>{l}{s}</>;
            t[6] = l;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function H3Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_count = e.count;
        if (e_count == null || e_count <= 0) {
            return null;
        }
        let r;
        if (t[0] !== e_count) {
            r = s._("_j{\"*\":\"{count} pages\",\"_1\":\"1 page\"}", [
                s._plural(e_count, "count")
            ]);
            t[0] = e_count;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq"
            };
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== a) {
            l = <span {...babelHelpers.extends({}, i, {
                title: a,
                children: a
            })}/>;
            t[3] = a;
            t[4] = l;
        } else {
            l = t[4];
        }
        let c;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            c = <F3Component/>;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== l) {
            d = <>{l}{c}</>;
            t[6] = l;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    function Y3Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_ext = e.ext;
        if (e_ext == null) {
            return null;
        }
        let r;
        if (t[0] !== e_ext) {
            r = e_ext.toUpperCase();
            t[0] = e_ext;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1rg5ohu x6ikm8r x10wlt62 xlyipyv xuxw1ft xwcf1sq"
            };
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== a) {
            l = <span {...babelHelpers.extends({
                "data-meta-key": "type",
                "data-testid": "type"
            }, i, {
                title: a,
                children: a
            })}/>;
            t[3] = a;
            t[4] = l;
        } else {
            l = t[4];
        }
        let s;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            s = <F3Component/>;
            t[5] = s;
        } else {
            s = t[5];
        }
        let c;
        if (t[6] !== l) {
            c = <>{l}{s}</>;
            t[6] = l;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function C({ displayType, embedded = false, msgKey, ref, showMessageMeta = false }) {
        const S = r("useWAWebIsMsgTrusted")(msgKey);
        const RRef = useRef(null);
        const L = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getCaption,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebMsgGetters").getIsFromTemplate,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getType,
            o("WAWebFrontendMsgGetters").getMediaData,
            o("WAWebMsgGetters").getIsDynamicReplyButtonsMsg,
            o("WAWebMsgGetters").getMimetype
        ]);
        const E = L[0];
        const k = L[1];
        const I = L[2];
        const T = L[3];
        const D = L[4];
        const x = L[5];
        const $ = L[6];
        const P = L[7];
        const N = L[8];
        const M = L[9];
        const w = L[10];
        const A = L[11];
        const F = o("useWAWebMediaDataValues").useMediaDataValues(M, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getFilename,
            o("WAWebMediaDataGetters").getPageCount,
            o("WAWebMediaDataGetters").getSize,
            o("WAWebMediaDataGetters").getMimetype,
            o("WAWebMediaDataGetters").getPreview,
            o("WAWebMediaDataGetters").getFullPreviewData,
            o("WAWebMediaDataGetters").getLoadedSize,
            o("WAWebMediaDataGetters").getFilehash
        ]);
        const O = F[0];
        const filename = F[1];
        const W = F[2];
        const q = F[3];
        const mimetype = F[4];
        const V = F[5];
        const H = F[6];
        const loadedSize = F[7];
        const z = F[8];
        const j = r("useWAWebDocumentMediaType")({
            mimetype,
            filename
        });
        const K = !!((T || w) && k);
        const Component = r("WAWebMediaTimeLeftEta.react");
        const Q = K ? null : <div className="xx3o462 x1ncwhqj xyqdw3p xyri2b xg8j3zb x1c1uobl x152skdk x1bvqhpb xt1z7ec x1yp9nv9 x186kree x1y04bub x1duis28">{o("WAWebMessageUiUtils").ETA_SUPPORTED_STATES.has(O) ? <Component size={q} loadedSize={loadedSize} sampling={3} xstyle={_.metaValue}><F3Component/></Component> : <><H3Component count={W}/><Y3Component ext={j.ext}/></>}<G3Component size={q}/></div>;
        useEffect(function() {
            if (!H) {
                const t = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
                if (!(t == null || t.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT && t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE)) {
                    const n = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
                    r("WAWebMediaDownloadMmsThumbnail")({
                        msg: t,
                        isPreload: false,
                        chat: n
                    });
                }
            }
        }, []);
        const X = "xiy17q3 x1tbiz1a x1gnnpzl x23j0i4";
        const Y = filename || s._("Untitled");
        const J = o("WAWebMediaDocumentUtils").useMediaAction(msgKey, {
            getZoomNode: function() {
                return RRef.current;
            }
        });
        const Z = J[0];
        const ee = J[1];
        const te = babelHelpers.extends({}, Z);
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
            te.onClick = null;
        }
        const ne = (V ?? H) != null;
        const re = j.mime != null && o("WAWebMediaMessageGetValidatedProperties").isMediaMimeType(j.mime);
        const oe = <div className="x6ikm8r x10wlt62 xlyipyv x1yn0g08 x104kibb x1h7i4cw x1ua5tub">{u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: Y,
            dirMismatch: x !== r("WAWebL10N").isRTL(),
            direction: "auto",
            breakWord: true
        })}</div>;
        const ae = re && S && ne;
        const ie = showMessageMeta && <div className="x10l6tqk xxx7yvo xbfrwjf">{u.jsx(o("WAWebMessageMeta.react").Meta, {
            msgKey
        })}</div>;
        const Component_1 = r("WAWebFlexItem.react");
        const Component_2 = r("WAWebFlexItem.react");
        const Component_3 = r("WAWebFlexItem.react");
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = r("WAWebFlexItem.react");
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const le = <Component_7 xstyle={[
            embedded ? _.embeddedContent : _.deepContainerContent,
            o("WDSPaddings.stylex").wdsPaddings.padding0
        ]}><Component_1 shrink={0} grow={0}><div className="x1n2onr6">{u.jsx(r("WAWebMediaThumbnail.react"), {
            msgKey,
            containerClassName: "xcbkimw x1n2onr6 xjzcg3w",
            childClassName: "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3"
        })}{A != null && A !== "" && o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(A) && u.jsx(r("WDSIconIcVideocamFilled.react"), {
            xstyle: _.mediaThumbVideoIcon,
            height: 14,
            width: 14,
            testid: "msg-video"
        })}</div></Component_1><Component_6 align="start" xstyle={[
            _.textContainerPadding,
            p.paddingBlock13
        ]} grow={1}><Component_4 grow={1} justify="center" xstyle={[
            _.text,
            r("WAWebL10N").isRTL() && _.textRTL,
            p.marginInline10,
            _.fixedTextHeight
        ]}><Component_2>{oe}</Component_2><Component_3>{Q}</Component_3></Component_4><Component_5 grow={0} shrink={0}>{ee}</Component_5></Component_6></Component_7>;
        const Component_8 = r("WAWebFlexItem.react");
        const Component_9 = r("WAWebFlexItem.react");
        const Component_10 = r("WAWebFlexItem.react");
        const Component_11 = o("WAWebFlex.react").FlexRow;
        const se = <Component_11 xstyle={embedded ? _.embeddedContent : _.deepContainerContent} align="start"><Component_8 shrink={0}><div className={X}>{u.jsx(r("WAWebDocumentFileIcon"), {
            width: 26,
            mimeType: j.mime ?? "",
            ext: j.ext ?? ""
        })}</div></Component_8><Component_9 xstyle={[
            _.text,
            r("WAWebL10N").isRTL() && _.textRTL
        ]} grow={1}>{oe}{Q}</Component_9><Component_10 grow={0} shrink={0}>{ee}</Component_10>{ie}</Component_11>;
        const ue = ae ? le : se;
        const Component_12 = r("WAWebMessageDeeperContainer.react");
        return u.jsxs(o("WAWebClickable.react").Clickable, babelHelpers.extends({
            ref,
            xstyle: _.container,
            dataTestId: "document-thumb"
        }, te, {
            children: [
                S && !ae ? u.jsx(r("WAWebMediaThumbnail.react"), {
                    msgKey,
                    containerClassName: "xpyat2d x1n2onr6 xh8yej3",
                    childClassName: "x1agz8ms xiy17q3 x18d0r48 x5yr21d x10l6tqk xh8yej3",
                    thumbnailRef: RRef
                }) : null,
                embedded ? ue : <Component_12 xstyle={_.deepContainer} outgoingMsg={D} position={ne ? "bottom" : undefined}>{ue}</Component_12>
            ]
        }));
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 226);