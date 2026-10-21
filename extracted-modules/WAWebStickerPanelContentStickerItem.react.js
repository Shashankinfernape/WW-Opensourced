__d("WAWebStickerPanelContentStickerItem.react", [
    "fbt",
    "WAWebAppContext.react",
    "WAWebAuraGating",
    "WAWebCmd",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebDropdownItem.react",
    "WAWebEmojiPickerConstants",
    "WAWebFavoriteStickerAction",
    "WAWebFocusTracer",
    "WAWebGetActiveStickerChat",
    "WAWebInMemoryLottieStickerCache",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaDataGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaStickerUtils",
    "WAWebMiscGatingUtils",
    "WAWebRecentStickerAction",
    "WAWebSoundStickerUtils",
    "WAWebStateUtils",
    "WAWebSticker.react",
    "WAWebStickerGetters",
    "WAWebStickerUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUploadRefreshedIcon",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcUnfavourite.react",
    "WDSIconIcVolumeUp.react",
    "WDSIconWdsIcSticker.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebCallbackOnce",
    "useWAWebIntersection",
    "useWAWebMediaDataValues",
    "useWAWebRerenderOnActiveChatChange",
    "useWAWebStickerValues"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useRef, useState } = m;
    const h = {
        container: {
            position: "x1n2onr6",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        stickerPanel: {
            flexGrow: "x1c4vz4f",
            flexShrink: "xs83m0k",
            height: "xnfxvih",
            $$css: true
        },
        stickerPanelSizing: {
            flexBasis: "xve2v0a x1ot3tw xrtcgwr x11iwktt x1p2aluo",
            minWidth: "x1i9suas",
            $$css: true
        },
        stickerPanelSizingThree: {
            flexBasis: "xhnlq4v x1ediwgi xqrdzbz x11iwktt x1p2aluo",
            minWidth: "x1i9suas x13n58ee",
            $$css: true
        },
        stickerExpressionsPanel: {
            flexGrow: "x1c4vz4f",
            flexShrink: "xs83m0k",
            flexBasis: "xhnlq4v",
            minWidth: "xxsxjwm",
            height: "x14baz6b",
            $$css: true
        },
        moreSticker: {
            flexBasis: "x15foiic",
            minWidth: "x17y4j5z",
            height: "xwc1p85",
            $$css: true
        },
        selected: {
            borderStartStartRadius: "xr9e8f9",
            borderStartEndRadius: "x1e4oeot",
            borderEndEndRadius: "x1ui04y5",
            borderEndStartRadius: "x6en5u8",
            boxShadow: "x18fk9y3",
            $$css: true
        }
    };
    function YComponent(t) {
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { downloadErrorShouldThrow, onDownload, selected, theme } = l;
        const v = theme === undefined ? "stickerPanel" : theme;
        const S = o("WAWebAppContext.react").useAppContext();
        const S_rightDrawerOpen = S.rightDrawerOpen;
        const l_sticker = l.sticker;
        const E = o("useWAWebStickerValues").useStickerValues(l_sticker, [
            o("WAWebStickerGetters").getId,
            o("WAWebStickerGetters").getFilehash,
            o("WAWebStickerGetters").getMediaData,
            o("WAWebStickerGetters").getIsPlaceholder,
            o("WAWebStickerGetters").getIsCreateButton,
            o("WAWebStickerGetters").getMimetype,
            o("WAWebStickerGetters").getStickerAudio
        ]);
        const k = E[0];
        const I = E[1];
        const mediaData = E[2];
        const D = E[3];
        const isCreateButton = E[4];
        const $ = E[5];
        const P = E[6];
        const N = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, [
            o("WAWebMediaDataGetters").getStickerPremiumStatus,
            o("WAWebMediaDataGetters").getEmojis,
            o("WAWebMediaDataGetters").getAccessibilityLabel
        ]);
        const M = N[0];
        const w = N[1];
        const A = N[2];
        r("useWAWebRerenderOnActiveChatChange")();
        const F = P != null && o("WAWebSoundStickerUtils").canSendStickerAudio(P, r("WAWebGetActiveStickerChat")()?.id);
        const O = C(A, w, F);
        const BRef = useRef(null);
        const downloadMedia = r("useWAWebCallbackOnce")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield l_sticker.downloadMedia(downloadErrorShouldThrow);
            onDownload?.(k);
        }));
        const q = useState();
        const U = q[0];
        const V = q[1];
        const H = function() {
            if (BRef.current) {
                return BRef.current === document.activeElement;
            }
            return false;
        };
        const G = function() {
            if (BRef.current) {
                if (!H()) {
                    r("WAWebFocusTracer").focus(BRef.current);
                }
            }
        };
        const getOffsetTop = function() {
            if (BRef.current) {
                return BRef.current.offsetTop;
            }
            return 0;
        };
        useImperativeHandle(t_ref, function() {
            return {
                hasFocus: H,
                focus: G,
                getOffsetTop
            };
        });
        const j = l.onClick ? function(e) {
            const l_onClick = l.onClick;
            if (l_onClick) {
                l_onClick(o("WAWebStateUtils").unproxy(l_sticker), e);
            }
        } : undefined;
        const K = function(t) {
            if (!isCreateButton) {
                t.preventDefault();
                const e = l.onEnter;
                if (e) {
                    e(o("WAWebStateUtils").unproxy(l_sticker), t);
                }
            }
        };
        const Q = r("useWAWebIntersection")({
            root: null,
            rootMargin: "10px",
            threshold: 0
        });
        const X = Q[0];
        const isIntersecting = Q[1].isIntersecting;
        useEffect(function() {
            if (isIntersecting) {
                downloadMedia();
            }
        }, [
            isIntersecting,
            downloadMedia
        ]);
        const J = r("useMergeRefs")(BRef, X);
        let onContextMenu;
        let ee;
        if (v !== "stickerDetails") {
            onContextMenu = function(t) {
                const e = [];
                if (!(D || isCreateButton)) {
                    t.preventDefault();
                    t.stopPropagation();
                    const Component = o("WAWebDropdownItem.react").DropdownItem;
                    const Component_1 = o("WAWebDropdownItem.react").DropdownItem;
                    if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
                        if (o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(I) && l.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES) {
                            e.push(<Component key="remove-favorite-sticker" testid="mi-remove-favorite-sticker" action={function() {
                                o("WAWebFavoriteStickerAction").removeStickerFromFavorites(l.sticker);
                            }} icon={d.jsx(r("WDSIconIcUnfavourite.react"), {
                                testid: "remove_favorite_icon"
                            })}>{s._("Remove from Favourites")}</Component>);
                        } else if (!o("WAWebFavoriteStickerAction").isStickerFilehashFavorited(I) && r("WAWebAuraGating").canUsePremiumSticker(mediaData.stickerPremiumStatus)) {
                            e.push(<Component_1 key="add-favorite-sticker" testid="mi-add-favorite-sticker" action={function() {
                                o("WAWebFavoriteStickerAction").addStickerToFavorites(l.sticker);
                            }} icon={d.jsx(r("WDSIconIcFavorite.react"), {})}>{s._("Add to Favourites")}</Component_1>);
                        }
                    }
                    const n = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(I);
                    if (o("WAWebStickerUtils").getStickerFileType($) === o("WAWebStickerUtils").StickerFileType.LOTTIE) {
                        const a = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(I);
                        if (a != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard()) {
                            const Component = o("WAWebDropdownItem.react").DropdownItem;
                            e.push(<Component key="copy-favorite-sticker" testid="mi-copy-favorite-sticker" action={function() {
                                o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(a);
                            }} icon={d.jsx(r("WDSIconIcContentCopy.react"), {})}>{s._("Copy sticker image")}</Component>);
                        }
                    } else {
                        if (n != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard()) {
                            const Component = o("WAWebDropdownItem.react").DropdownItem;
                            e.push(<Component key="copy-favorite-sticker" testid="mi-copy-favorite-sticker" action={function() {
                                o("WAWebCopyToClipboard").copyImageToClipboard(n);
                            }} icon={d.jsx(r("WDSIconIcContentCopy.react"), {})}>{s._("Copy sticker image")}</Component>);
                        }
                    }
                    if (o("WAWebMiscGatingUtils").isRecentStickersMDEnabled() && l.selectedTab === o("WAWebEmojiPickerConstants").StickerTabs.RECENTS && o("WAWebRecentStickerAction").isStickerIdInRecent(l.sticker)) {
                        const Component = o("WAWebDropdownItem.react").DropdownItem;
                        e.push(<Component key="remove-recent-sticker" testid="mi-remove-recent-sticker" action={function() {
                            o("WAWebRecentStickerAction").removeStickerFromRecent(l.sticker);
                        }} icon={d.jsx(r("WDSIconIcDoNotDisturbOn.react"), {})}>{s._("Remove from recents")}</Component>);
                    }
                    const { isFirstParty, stickerPackId } = mediaData;
                    const c = l.dontShowViewPack;
                    const m = c === undefined ? false : c;
                    if (m === false && stickerPackId != null && stickerPackId !== "" && isFirstParty === true) {
                        const Component = o("WAWebDropdownItem.react").DropdownItem;
                        e.push(<Component key="open-sticker-pack" testid="mi-open-sticker-pack" action={function() {
                            return o("WAWebCmd").Cmd.openStickerPack(stickerPackId);
                        }} icon={d.jsx(r("WDSIconWdsIcSticker.react"), {})}>{s._("View pack")}</Component>);
                    }
                    if (!r("gkx")("26258")) {
                        const Component = o("WAWebDropdownItem.react").DropdownItem;
                        e.push(<Component key="request-sticker-reupload" testid="mi-request-sticker-reupload" action={function() {
                            o("WAWebMediaStickerUtils").requestStickerReupload([
                                l.sticker
                            ]);
                        }} icon={d.jsx(r("WAWebUploadRefreshedIcon"), {})}>[INTERNAL] Request Sticker Reupload</Component>);
                    }
                    V({
                        menu: e,
                        event: t
                    });
                }
            };
            if (U) {
                const Component = o("WAWebUimUie.react").UIE;
                ee = <Component displayName="ChatContextMenu" escapable popable dismissOnWindowResize requestDismiss={function() {
                    return V(null);
                }}>{d.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: U
                })}</Component>;
            }
        }
        const Component = r("WAWebSticker.react");
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 role={isCreateButton ? undefined : "button"} aria-label={isCreateButton ? undefined : O} ref={J} tabIndex={isCreateButton ? undefined : 0} onClick={isCreateButton ? undefined : j} className={(u || (u = r("stylex")))({
            "x-default-marker": "x-default-marker",
            $$css: true
        }, h.container, v === "stickerPanel" && h.stickerPanel, v === "stickerPanel" && (S_rightDrawerOpen ? h.stickerPanelSizingThree : h.stickerPanelSizing), v === "stickerExpressionsPanel" && h.stickerExpressionsPanel, v === "stickerExpressionsPanel" && h.moreSticker, selected === true && h.selected)} data-id="sticker-item" onContextMenu={onContextMenu} handlers={{
            enter: K,
            space: K
        }}><div {...babelHelpers.extends({}, {
            0: {},
            1: {
                className: "xw7cn0a xbjj16p x1bgewkw x1wy33pe xtt62yn"
            }
        }[(v === "stickerPanel" || v === "stickerExpressionsPanel") << 0], {
            "data-testid": "sticker-item",
            children: isIntersecting && <Component mediaData={mediaData} onClick={isCreateButton ? j : undefined} theme={v} loopAnimation downloadMedia={downloadMedia} isCreateButton={isCreateButton}/>
        })}/>{F && <div aria-hidden data-testid="sticker-sound-badge" className="x10l6tqk xugynej x67dgr1 x78zum5 x6s0dn4 xl56j7k xw4jnvo x1qx5ct2 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xy102ij x17t9dm2 x47corl">{d.jsx(r("WDSIconIcVolumeUp.react"), {
            height: 14,
            width: 14
        })}</div>}{ee}</Component_1>;
    }
    YComponent.displayName = `${YComponent.name} [from ${i.id}]`;
    function C(e, t, n) {
        const r = b(e, t);
        if (n) {
            return s._("{sticker_send_label}, with sound", [
                s._param("sticker_send_label", r)
            ]);
        }
        return r;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e, t) {
        let n = null;
        const r = e?.trim();
        if (r != null && r !== "") {
            n = r;
        } else if (t != null && t.length > 0) {
            n = t.join(" ");
        }
        if (n != null) {
            return s._("Send {sticker_name} sticker", [
                s._param("sticker_name", n)
            ]);
        }
        return s._("Send sticker");
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    l.default = YComponent;
}, 226);