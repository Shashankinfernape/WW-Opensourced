__d("WAWebProductCatalogListItem.react", [
    "fbt",
    "WABidi",
    "WAWebAccessibility.react",
    "WAWebAddToCartIcon.react",
    "WAWebBadge.react",
    "WAWebBizCatalogGatingUtils",
    "WAWebCartQuantityControls.react",
    "WAWebCatalogVariantHelper",
    "WAWebChatCell.react",
    "WAWebCopyToClipboard",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerContext",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebLinkedCatalogHelper",
    "WAWebManageCart",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductPriceInfoText.react",
    "WAWebProductCatalogProductThumb.react",
    "WAWebProductCollection",
    "WAWebProductGetters",
    "WAWebProductSelectors",
    "WAWebProductTypes",
    "WAWebQplFlowWrapper",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WDSButton.react",
    "WDSIconIcAddShoppingCart.react",
    "WDSIconIcDelete.react",
    "WDSIconIcError.react",
    "WDSIconIcLink.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcShare.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "gkx",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebProductValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useContext, useRef, useState } = c;
    const _ = {
        marginInline5: {
            marginInlineStart: "xpcyujq",
            marginInlineEnd: "xf6vk7d",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    const f = {
        shareButton: {
            color: "xhslqc4",
            ":hover_color": "x12ln5q2",
            ":focus_color": "x1guw8n8",
            $$css: true
        }
    };
    const g = r("qpl")._(774774794, "10");
    const h = (t, n)=>{
        if (n === true && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
            return u.jsx(r("WAWebBadge.react"), {
                theme: "warning",
                Icon: r("WDSIconIcError.react")
            });
        }
        switch(t){
            case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW:
            case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED:
            case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING:
                return u.jsx(r("WAWebBadge.react"), {
                    theme: "pending",
                    Icon: r("WDSIconIcSchedule.react")
                });
            case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED:
                return u.jsx(r("WAWebBadge.react"), {
                    theme: "warning",
                    Icon: r("WDSIconIcError.react")
                });
        }
    };
    function y(e) {
        "use no forget";
        const e_canManageCatalog = e.canManageCatalog;
        const i = e_canManageCatalog === undefined ? false : e_canManageCatalog;
        const { checkbox, collectionId, detail, disableOutOfStockAppearance, isMuted, managedFocus } = e;
        const S = managedFocus === undefined ? false : managedFocus;
        const { onCartOpen, onClick, onProductDelete, onProductHideShow, onProductShare, theme } = e;
        const D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const context = useContext(o("WAWebDrawerContext").DrawerContext);
        const e_product = e.product;
        const P = o("useWAWebProductValues").useProductValues(e_product, [
            o("WAWebProductGetters").getId,
            o("WAWebProductGetters").getName,
            o("WAWebProductGetters").getDescription,
            o("WAWebProductGetters").getAvailability,
            o("WAWebProductGetters").getUrl,
            o("WAWebProductGetters").getRetailerId,
            o("WAWebProductGetters").getCurrency,
            o("WAWebProductGetters").getPriceAmount1000,
            o("WAWebProductGetters").getSalePriceAmount1000,
            o("WAWebProductGetters").getSalePriceStartDate,
            o("WAWebProductGetters").getSalePriceEndDate,
            o("WAWebProductGetters").getReviewStatus,
            o("WAWebProductGetters").getCatalogWid,
            o("WAWebProductGetters").getProductImageCollection,
            o("WAWebProductGetters").getImageHash,
            o("WAWebProductGetters").getImageCdnUrl,
            o("WAWebProductGetters").getIsHidden,
            o("WAWebProductGetters").getIsSanctioned,
            o("WAWebProductGetters").getMaxAvailable,
            o("WAWebProductGetters").getVariantInfo
        ]);
        const N = P[0];
        const M = P[1];
        const w = P[2];
        const A = P[3];
        const F = P[4];
        const O = P[5];
        const B = P[6];
        const W = P[7];
        const q = P[8];
        const U = P[9];
        const V = P[10];
        const H = P[11];
        const G = P[12];
        const z = P[13];
        const j = P[14];
        const K = P[15];
        const Q = P[16];
        const X = P[17];
        const Y = P[18];
        const J = P[19];
        const ZRef = useRef(null);
        const eeRef = useRef(null);
        const te = useState(null);
        const ne = te[0];
        const re = te[1];
        const oe = useState(false);
        const ae = oe[0];
        const ie = oe[1];
        const le = useState(false);
        const se = le[0];
        const ue = le[1];
        const space = function(t) {
            t.preventDefault();
            t.stopPropagation();
            onClick?.();
        };
        const de = function(t) {
            t.stopPropagation();
            t.preventDefault();
            ZRef.current?.mouseOver();
            ie(true);
        };
        const me = function() {
            ZRef.current?.mouseLeave();
            ie(false);
        };
        o("useWAWebListener").useListener(e.active, N.toString(), D);
        const pe = ()=>!(!J || !J.types || J.types.length === 0);
        const _e = function(t) {
            const e = o("WAWebProductCatalogContext").getProductCatalogContext(context);
            o("WAWebQplFlowWrapper").QPL.markerStart(g, {
                annotations: {
                    string: {
                        EntryPoint: "Catalog"
                    }
                }
            });
            if (e.session.isAccidental()) {
                o("WAWebQplFlowWrapper").QPL.markerDrop(g);
            } else {
                o("WAWebManageCart").addToCart(e_product, e, collectionId);
                t.preventDefault();
                t.stopPropagation();
            }
        };
        const fe = function(t) {
            t.preventDefault();
            t.stopPropagation();
            if (onProductHideShow) {
                onProductHideShow(e_product);
            }
        };
        const ge = function(t) {
            t.preventDefault();
            t.stopPropagation();
            if (onProductDelete) {
                onProductDelete(e_product);
            }
        };
        const he = function() {
            re(null);
            r("WAWebFocusTracer").focus(eeRef.current);
        };
        const YeComponent = ()=>{
            const e = [];
            const t = H === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED && Q !== true && X !== true;
            if (onProductShare != null && t) {
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                e.push(<Component key="ShareLabel" testid="mi-share-label" action={function(t) {
                    t.stopPropagation();
                    onProductShare(e_product);
                }} icon={u.jsx(r("WDSIconIcShare.react"), {})}>{s._("Share")}</Component>);
            }
            const n = o("WAWebUserPrefsMeUser").isMeAccount(G);
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            const Component_1 = o("WAWebDropdownItem.react").DropdownItem;
            if (n && onProductHideShow && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog()) {
                if (Q) {
                    e.push(<Component key="ShowLabel" testid="mi-show-label" action={fe} icon={u.jsx(r("WDSIconIcVisibility.react"), {})}>{s._("Show item")}</Component>);
                } else {
                    e.push(<Component_1 key="HideLabel" testid="mi-hide-label" action={fe} icon={u.jsx(r("WDSIconIcVisibilityOff.react"), {})}>{s._("Hide item")}</Component_1>);
                }
            }
            if (t && onCartOpen != null) {
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                e.push(<Component key="AddToCartLabel" testid="mi-addcart-label" action={_e} icon={u.jsx(r("WDSIconIcAddShoppingCart.react"), {})}>{s._("Add to cart")}</Component>);
            }
            if (n && onProductDelete && !o("WAWebLinkedCatalogHelper").shouldHideComponentForSMBLinkedCatalog()) {
                e.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}));
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                e.push(<Component key="DeleteLabel" testid="mi-edit-label" action={ge} icon={u.jsx(r("WDSIconIcDelete.react"), {})} theme={o("WAWebDropdownItem.react").DropdownItemThemeType.Negative}>{s._("Delete")}</Component>);
            }
            if (n && !r("gkx")("26258")) {
                e.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}));
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                e.push(<Component key="copy-id" addSpacing testid="mi-product-copy-id" action={function() {
                    o("WAWebCopyToClipboard").copyTextToClipboard(N.toString());
                }}>{u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                    label: "Copy Product ID"
                })}</Component>);
            }
            return e;
        };
        const Ce = function(t) {
            if (ne) {
                re(null);
                return;
            }
            const e = YeComponent();
            const n = o("WAWebProductCatalogContext").getProductCatalogContext(context);
            o("WAWebProductCatalogLogEvents").logCatalogContextMenuClick(N.toString(), n.session.isAccidental() ? undefined : n);
            re({
                menu: e,
                event: t.event,
                anchor: t.anchor
            });
        };
        const be = e_product.getPreviewImage()?.mediaData;
        const ve = theme || (!disableOutOfStockAppearance && o("WAWebProductTypes").PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(A) ? "product-out-of-stock" : "product");
        const badge = h(H, X);
        let overlayContent;
        let Le;
        if (Q) {
            overlayContent = u.jsx(r("WDSIconIcVisibilityOff.react"), {});
            const Component = o("WAWebAccessibility.react").InvisibleLabel;
            Le = <Component>{s._("Item is hidden")}</Component>;
        }
        const Ee = be ? u.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
            theme: "list",
            mediaData: be,
            badge,
            overlayContent
        }) : null;
        const ke = o("WABidi").bidiDir(M);
        const Ie = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: M,
            direction: ke,
            dirMismatch: ke === "rtl" !== r("WAWebL10N").isRTL(),
            ellipsify: true,
            titlify: true
        });
        const Te = o("WAWebProductSelectors").isEmptyPrice(e_product) ? null : u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
            product: e_product,
            showAvailabilityNotice: true
        });
        let De;
        let xe;
        const $e = J?.listing_details?.description?.toLocaleUpperCase();
        if ($e != null) {
            De = $e;
            xe = o("WABidi").bidiDir($e);
        } else {
            const Ne = J?.types?.find(function(e) {
                return e.name?.toLocaleLowerCase("en-US") === o("WAWebCatalogVariantHelper").VariantOptionName.COLOR;
            });
            if (Ne != null && Ne.options.length > 1 && Ne.name != null) {
                De = o("WAWebCatalogVariantHelper").getVariantTypeOptions(o("WAWebCatalogVariantHelper").VariantOptionName.COLOR, Ne.options.length);
            }
        }
        if (De == null && !r("isStringNullOrEmpty")(w)) {
            De = w;
            xe = o("WABidi").bidiDir(w);
        }
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const secondary = Te != null || De != null ? <><Component>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: De,
            direction: xe,
            dirMismatch: xe != null && xe === "rtl" !== r("WAWebL10N").isRTL(),
            ellipsify: true
        })}</Component><Component_1>{Te}</Component_1>{Le}</> : null;
        let we;
        if (ne) {
            const Component = o("WAWebUimUie.react").UIE;
            we = <Component displayName="ChatContextMenu" escapable popable dismissOnWindowResize requestDismiss={he}>{u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: ne
            })}</Component>;
        }
        let Ae;
        if (o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled()) {
            if (pe()) {
                Ae = u.jsx(o("WAWebCartQuantityControls.react").WAWebVariantCartQuantityControls, {
                    product: e_product,
                    collectionId
                });
            } else {
                Ae = A === o("WAWebProductTypes").ProductAvailability.IN_STOCK ? u.jsx(o("WAWebCartQuantityControls.react").WAWebCartQuantityControls, {
                    product: e_product,
                    context,
                    collectionId
                }) : null;
            }
        } else {
            const Component = r("WAWebAddToCartIcon.react");
            Ae = <Component onClick={_e}/>;
        }
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Fe = <Component_2 xstyle={_.marginInline5}>{onCartOpen != null && H === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED ? Ae : null}</Component_2>;
        const Component_3 = r("WDSButton.react");
        const Component_4 = o("WAWebFlex.react").FlexRow;
        const Oe = <Component_4 xstyle={_.marginInline5}>{onProductShare != null && H === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED ? <Component_3 aria-label="" xstyle={f.shareButton} onPress={function(t) {
            t.stopPropagation();
            onProductShare(e_product);
        }} Icon={r("WDSIconIcLink.react")} variant="borderless"/> : null}</Component_4>;
        const detail_1 = detail ?? (i ? null : <div {...babelHelpers.extends({}, {
            0: {
                className: "x1s85apg"
            },
            1: {
                className: "x78zum5"
            }
        }[!!(se || ae || o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled()) << 0], {
            children: [
                Fe,
                Oe
            ]
        })}/>);
        const Component_5 = r("WAWebChatCell.react");
        return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
            ref: eeRef,
            handlers: {
                space,
                right: function() {
                    r("WAWebFocusTracer").focus(ZRef.current?.getContextMenuRef());
                }
            },
            tabIndex: 0,
            role: "button",
            onMouseEnter: function() {
                return ue(true);
            },
            onMouseLeave: function() {
                return ue(false);
            }
        }, S ? undefined : {
            onFocus: de,
            onBlur: me,
            onMouseLeave: function() {
                me();
                ue(false);
            }
        }, {
            children: [
                <Component_5 key={N.toString()} testid="product-catalog-item" customImage image={Ee} primary={Ie} onClick={onClick} secondary={secondary} theme={ve} active={ae || !!ne} checkbox={checkbox} idle={isMuted} detail={detail_1} contextEnabled={function() {
                    return i;
                }} onContext={Ce} ref={ZRef} contextMenuControlled/>,
                we
            ]
        }));
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.default = y;
}, 226);