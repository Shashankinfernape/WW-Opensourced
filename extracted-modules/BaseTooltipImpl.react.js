__d("BaseTooltipImpl.react", [
    "BaseAnchorPositioningUtils",
    "BaseTooltipContainer.react",
    "CometHeroInteractionContextPassthrough.react",
    "CometPlaceholder.react",
    "cr:20267",
    "cr:20391",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useCometDisplayTimingTrackerForInteraction",
    "useFadeEffect",
    "useTooltipDelayedContent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "alignOffsetXstyle",
        "loadingState",
        "offset",
        "contentKey",
        "delayContentMs",
        "headline",
        "id",
        "isVisible",
        "themeWrapper",
        "contentColor",
        "contentType",
        "shouldShowCarat",
        "tooltip",
        "tooltipTheme",
        "xstyle",
        "contextualLayerXstyle",
        "position",
        "stopClickPropagation",
        "align"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useLayoutEffect, useRef } = c;
    const p = {
        loadingState: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_contextualLayerRef = e.contextualLayerRef;
        let r;
        let a;
        if (t[0] !== e_contextualLayerRef) {
            r = function() {
                const e_contextualLayerRef_current = e_contextualLayerRef.current;
                if (e_contextualLayerRef_current) {
                    e_contextualLayerRef_current.reposition({
                        autoflip: true
                    });
                }
            };
            a = [
                e_contextualLayerRef
            ];
            t[0] = e_contextualLayerRef;
            t[1] = r;
            t[2] = a;
        } else {
            r = t[1];
            a = t[2];
        }
        useLayoutEffect(r, a);
        return null;
    }
    function FComponent(t) {
        "use no forget";
        const { alignOffsetXstyle, loadingState, offset, contentKey, delayContentMs } = t;
        const delayContentMs_1 = delayContentMs === undefined ? 0 : delayContentMs;
        const { headline, id, isVisible, themeWrapper } = t;
        const V = themeWrapper === undefined ? u.Fragment : themeWrapper;
        const { contentColor, contentType, shouldShowCarat, tooltip, tooltipTheme, xstyle, contextualLayerXstyle, position, stopClickPropagation, align } = t;
        const align_1 = align === undefined ? "middle" : align;
        const N = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const MRef = useRef(null);
        const w = r("useFadeEffect")(isVisible);
        const A = w[0];
        const shouldFadeIn = w[1];
        const O = w[2];
        const B = r("useCometDisplayTimingTrackerForInteraction")("ToolTip");
        const W = r("useTooltipDelayedContent")({
            delayContentMs: delayContentMs_1,
            isVisible
        });
        const W_isPending = W.isPending;
        const URef = useRef(null);
        const N_anchorPosName = N.anchorPosName;
        const anchorRef = N.anchorPosRef ?? URef;
        const G = o("BaseAnchorPositioningUtils").contextualLayerToAnchorPositionAreaCompat(position, align_1);
        const blockPositionArea = G[0];
        const inlinePositionArea = G[1];
        const K = n("cr:20267")(N_anchorPosName, anchorRef, {
            blockPositionArea,
            inlinePositionArea,
            tryFallbacks: "flip-block"
        });
        let anchorTargetXstyle;
        let anchorTargetRef;
        if (K != null) {
            anchorTargetXstyle = K[0];
            anchorTargetRef = K[1];
        }
        const Y = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment();
        const J = Y ? {
            anchorRef,
            anchorTargetRef,
            anchorTargetXstyle
        } : {};
        const Z = babelHelpers.extends({
            align: align_1
        }, N, {
            imperativeRef: MRef,
            offset,
            ownerDocument: N.ownerDocument,
            position,
            ref: B,
            stopClickPropagation,
            vrPassTouchesThrough: true,
            xstyle: contextualLayerXstyle
        });
        if (tooltip == null || !A) {
            return null;
        }
        const Component = o("react-strict-dom").html.div;
        const Component_1 = o("react-strict-dom").html.span;
        const Component_2 = r("CometPlaceholder.react");
        const children = <V>{u.jsx(r("BaseTooltipContainer.react"), babelHelpers.extends({}, J, {
            align: align_1,
            alignOffsetXstyle,
            closeButton: null,
            id,
            position,
            ref: O,
            shouldFadeIn,
            shouldShowCarat,
            withCloseButton: false,
            xstyle,
            children: W_isPending ? <Component style={p.loadingState}>{loadingState}</Component> : <Component_2 key={contentKey} fallback={loadingState} name={i.id}><_ contextualLayerRef={MRef}/>{typeof tooltip === "string" ? <Component_1>{tooltip}</Component_1> : tooltip}</Component_2>
        }))}</V>;
        const Component_3 = r("CometHeroInteractionContextPassthrough.react");
        return <Component_3 clear>{u.jsx(n("cr:20391"), babelHelpers.extends({}, Z, {
            children
        }))}</Component_3>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.default = FComponent;
}, 98);