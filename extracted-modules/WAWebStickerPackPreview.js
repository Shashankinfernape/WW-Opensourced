__d("WAWebStickerPackPreview", [
    "fbt",
    "WALogger",
    "WAWebCanvasUtils",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaThumbnail.react",
    "WAWebMessageDeeperContainer.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebStickerPackConstants",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcImage.react",
    "WDSMargins.stylex",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    const m = {
        paddingInlineEnd14: {
            paddingInlineEnd: "x1pic42t",
            $$css: true
        },
        marginInline10: {
            marginInlineStart: "x1hm9lzh",
            marginInlineEnd: "x1sa5p1d",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        paddingInlineEnd10: {
            paddingInlineEnd: "x2vl965",
            $$css: true
        },
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const p = {
        deepContainer: {
            cursor: "xmper1u",
            $$css: true
        },
        text: {
            position: "x1n2onr6",
            top: "x1qiirwl",
            $$css: true
        },
        textRTL: {
            textAlign: "xp4054r",
            $$css: true
        },
        fixedTextHeight: {
            height: "xdiz9cm",
            $$css: true
        }
    };
    function _({ msgKey }) {
        const a = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getStickers,
            o("WAWebMsgGetters").getDescription,
            o("WAWebMsgGetters").getFilename
        ]);
        const i = a[0];
        const l = a[1];
        const u = a[2];
        const _ = a[3];
        const g = l?.length ?? 0;
        function h() {
            if (u != null && u !== "") {
                return u;
            }
            if (g >= 1) {
                return s._("_j{\"*\":\"{stickerCount} stickers\",\"_1\":\"1 sticker\"}", [
                    s._plural(g, "stickerCount")
                ]);
            }
            return "";
        }
        u_useEffect(function() {
            const t = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
            if (!(t == null || t.type !== o("WAWebMsgType").MSG_TYPE.STICKER_PACK)) {
                if (r("isStringNullOrEmpty")(t.thumbnailDirectPath)) {
                    f(t);
                } else {
                    r("WAWebMediaDownloadMmsThumbnail")({
                        msg: o("WAWebStateUtils").unproxy(t),
                        chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
                        isPreload: false
                    });
                }
            }
        }, []);
        const titleDir = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = o("WAWebFlex.react").FlexItem;
        const Component_2 = r("WAWebMediaLinkPreviewDescription.react");
        const Component_3 = o("WAWebFlex.react").FlexItem;
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = o("WAWebFlex.react").FlexRow;
        const Component_6 = r("WAWebMessageDeeperContainer.react");
        return <Component_6 xstyle={p.deepContainer} outgoingMsg={i}><Component_5 xstyle={m.paddingInlineEnd14} align="start"><Component shrink={0} grow={0} align="center">{c.jsx(r("WAWebMediaThumbnail.react"), {
            msgKey,
            containerClassName: "xcbkimw x1n2onr6 x1dmp6jm",
            thumbnailPlaceholder: <div key="default">{c.jsx(r("WDSIconIcImage.react"), {
                height: 42,
                testid: "image",
                width: 42
            })}</div>
        })}</Component><Component_4 align="start" grow={1} justify="center" xstyle={[
            p.text,
            o("WDSMargins.stylex").wdsMargins.marginVer0,
            r("WAWebL10N").isRTL() && p.textRTL,
            m.marginInline10,
            p.fixedTextHeight,
            m.paddingInlineEnd10,
            m.paddingBlock6
        ]}><Component_1>{c.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
            isBotPluginLink: false,
            isCompose: false,
            isStatus: false,
            title: _,
            titleDir,
            titleDirMismatch: false
        })}</Component_1><Component_3><Component_2 isCompose={false} isComposeHQPreview={false} isFullPreview={false} isHighQualityLayout={false} isStatus={false} useTextLimit={false}>{h()}</Component_2></Component_3></Component_4></Component_5></Component_6>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                yield t.downloadMedia({
                    downloadEvenIfExpensive: true,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
                    isUserInitiated: false
                });
                const n = o("WAWebStateUtils").unproxy(t).mediaObject;
                if (n == null) {
                    return;
                }
                const a = o("WAWebStateUtils").unproxy(t.unsafe()).mediaData.mediaBlob;
                const i = yield o("WAWebStickerPackUtils").decompressStickerPackMedia(a, t);
                const l = yield o("WAWebStickerPackUtils").generateStickerGridThumbnail(i);
                const s = yield o("WAWebCanvasUtils").canvasToBlob(l, "image/png");
                n.consolidate({
                    fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(s, "image/png"),
                    fullPreviewSize: {
                        height: o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
                        width: o("WAWebStickerPackConstants").THUMBNAIL_LENGTH
                    }
                });
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "StickerPackPreview: failed to generate grid thumbnail"
                ])));
            }
        });
        return g.apply(this, arguments);
    }
    l.default = _;
}, 226);