__d("WAWebChatCell.react", [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebCellFrame.react",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFormatConfiguration",
    "WAWebKeyboardIsKeyActivation",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebSpinner.react",
    "WAWebStopEvent",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "WDSIconIcExpandMore.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebIntersection",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { Fragment, useImperativeHandle, useRef, useState } = m;
    const h = {
        marginInlineStart6: {
            marginInlineStart: "xdzw4kq",
            $$css: true
        }
    };
    const y = {
        rootMargin: "300px"
    };
    const C = {
        btnContext: {
            display: "x1rg5ohu",
            width: "xn6xy2s",
            height: "x1qx5ct2",
            marginInlineStart: "x1wbi8v6",
            color: "xhslqc4",
            verticalAlign: "x16dsc37",
            $$css: true
        },
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        },
        btnContextAdjust: {
            width: "xw4jnvo",
            height: "x1qx5ct2",
            marginInlineEnd: "x18faa90",
            $$css: true
        },
        btnContextVerticallyCenter: {
            position: "x1n2onr6",
            top: "x1fur4o1",
            $$css: true
        },
        btnContextHidden: {
            visibility: "xlshs6z",
            pointerEvents: "x47corl",
            $$css: true
        },
        chevron: {
            float: "xtrg13t",
            $$css: true
        }
    };
    function BComponent(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { contextEnabled, onContext, onMouseEnter, onMouseLeave } = a;
        const b = useState(false);
        const v = b[0];
        const S = b[1];
        const R = useState(false);
        const L = R[0];
        const E = R[1];
        const k = r("useWAWebIsKeyboardUser")();
        const k_isKeyboardUser = k.isKeyboardUser;
        const TRef = useRef(null);
        const DRef = useRef(null);
        const x = r("useWAWebIntersection")(y);
        const $ = x[0];
        const isIntersecting = x[1].isIntersecting;
        const N = r("useMergeRefs")(DRef, $);
        const getCellFrameDivRef = function() {
            return DRef.current;
        };
        const w = function(t) {
            t.stopPropagation();
            if (contextEnabled()) {
                t.preventDefault();
                if (onContext != null) {
                    onContext({
                        anchor: TRef.current
                    });
                }
            }
        };
        const A = function(t) {
            if (r("WAWebKeyboardIsKeyActivation")(t)) {
                t.stopPropagation();
                t.preventDefault();
                if (!contextEnabled()) {
                    return;
                }
                onContext?.({
                    anchor: TRef.current
                });
            }
        };
        const getContextMenuRef = function() {
            return TRef.current;
        };
        const O = function(t) {
            if (contextEnabled()) {
                t.stopPropagation();
                t.preventDefault();
                if (onContext) {
                    onContext({
                        event: t
                    });
                }
            }
        };
        const focusOnContextMenuButton = function() {
            if (!(!TRef && !a.contextEnabled())) {
                r("WAWebFocusTracer").focus(TRef.current);
            }
        };
        const mouseOver = function() {
            if (!v && a.contextEnabled()) {
                S(true);
            }
        };
        const q = function() {
            if (!v && a.contextEnabled()) {
                S(true);
                if (onMouseEnter != null) {
                    onMouseEnter();
                }
            }
        };
        const mouseLeave = function() {
            if (v) {
                S(false);
                if (onMouseLeave != null) {
                    onMouseLeave();
                }
            }
        };
        const forceReveal = k_isKeyboardUser && a.active === true && a.contextEnabled();
        const H = function() {
            TRef.current?.removeAttribute("aria-hidden");
            E(true);
        };
        const G = function() {
            TRef.current?.setAttribute("aria-hidden", "true");
            E(false);
        };
        useImperativeHandle(t_ref, function() {
            return {
                focusOnContextMenuButton,
                mouseOver,
                mouseLeave,
                getContextMenuRef,
                getCellFrameDivRef
            };
        });
        const a_primary = a.primary;
        const j = typeof a_primary === "string" ? d.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            ellipsify: true,
            formatters: o("WAWebFormatConfiguration").Search({
                terms: a.searchText != null && a.searchText !== "" ? [
                    a.searchText
                ] : []
            }),
            text: a_primary,
            titlify: true
        }) : a_primary;
        const K = s._("Open the chat context menu");
        let Q = null;
        let X = null;
        if (a.pendingAction != null && a.pendingAction > 0) {
            X = <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(C.btnContext, k_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), {
                children: d.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "highlight",
                    size: 18,
                    stroke: 6
                })
            })}/>;
        } else if (a.contextEnabled()) {
            const J = v || a.active === true || forceReveal || a.contextMenu === true;
            const Z = (u || (u = r("stylex")))(C.btnContext, (a.theme === "hidden-status-row-cell" || a.theme === "product" || a.theme === "label-list" || a.theme === "label-list-no-border" || a.theme === "quick-replies-drawer-item") && C.btnContextVerticallyCenter, k_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, [
                C.btnContextAdjust,
                h.marginInlineStart6
            ], !J && C.btnContextHidden);
            const ee = a.theme === "chat-info";
            const te = d.jsx(r("WDSIconIcExpandMore.react"), {
                width: 20,
                height: 20,
                iconXstyle: ee ? C.secondaryColor : null
            });
            Q = <button key="icon-context" className={Z} data-testid="context-btn" onBlur={G} onClick={w} onFocus={H} onKeyDown={A} onMouseDown={o("WAWebStopEvent").stopPropagation} ref={TRef} tabIndex={a.contextMenuControlled ? -1 : 0}>{te}{L && d.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                assertive: true,
                startWithText: true,
                text: a.contextMenuAriaLabel ?? K
            })}</button>;
        }
        const Component = r("WAWebVelocityTransitionGroup");
        const ne = <Component transitionName="fade">{X}</Component>;
        const Component_1 = r("WAWebVelocityTransitionGroup");
        const re = <Component_1 transitionName="pop-fast-chat" xstyle={C.chevron}>{v || forceReveal || a.contextMenu === true ? Q : null}</Component_1>;
        let oe;
        let ae;
        let ie = null;
        if (a.secondary != null) {
            if (a.primaryDetail != null) {
                oe = a.primaryDetail;
                ae = [
                    <Fragment key="prop">{a.secondaryDetail}</Fragment>,
                    <Fragment key="spinner">{ne}</Fragment>,
                    <Fragment key="button">{re}</Fragment>
                ];
            } else {
                oe = null;
                ae = a.secondaryDetail != null ? <>{a.secondaryDetail}</> : null;
                ie = <>{ne}{re}</>;
            }
        } else {
            oe = [
                <Fragment key="prop">{a.primaryDetail}</Fragment>,
                <Fragment key="spinner">{ne}</Fragment>,
                <Fragment key="button">{re}</Fragment>
            ];
        }
        const le = {
            0: "x1yjtglu xiitwr3 x206yn3",
            1: "xb5mbof xiitwr3 x206yn3"
        }[!isIntersecting << 0];
        const se = [
            a.className,
            le
        ].filter(Boolean).join(" ");
        const Component_2 = r("WAWebCellFrame.react");
        const Component_3 = r("WAWebPrivacyBlurWrapper.react");
        return <Component_3 containerRef={DRef} forceReveal={forceReveal}><Component_2 active={a.active} activeStyleType={a.activeStyleType} checkbox={a.checkbox} className={se} containerRole={a.containerRole} customImage={a.customImage} detail={ie != null ? <>{a.detail}{ie}</> : a.detail} dragging={a.dragging} extendSecondaryEllipsis={a.extendSecondaryEllipsis} focusid={a.focusid} handleKeyboardClick={a.handleKeyboardClick} idle={a.idle} image={a.image} isMuted={a.isMuted} label={a.label} onClick={a.onClick} onContextMenu={a.contextEnabled() ? O : null} onMouseDown={a.onMouseDown} onMouseEnter={v ? null : q} onMouseLeave={v ? mouseLeave : null} onMouseOver={v ? null : mouseOver} primary={j} primaryDetail={oe} ref={N} role={a.role} secondary={a.secondary} secondaryDetail={ae} tabIndex={a.tabIndex} tabOrder={a.tabOrder} tallerCellWithMemberLabel={a.tallerCellWithMemberLabel} tertiary={a.tertiary} testid={a.testid} theme={a.theme} unreadStyle={a.unreadStyle}/></Component_3>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.default = BComponent;
}, 226);