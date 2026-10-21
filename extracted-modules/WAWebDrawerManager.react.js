__d("WAWebDrawerManager.react", [
    "WATypeUtils",
    "WAUpperFirst",
    "WAWebContentEntryPointContext",
    "WAWebDrawerContext",
    "WAWebDrawerManagerContext",
    "WAWebErrorBoundary.react",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocus.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "cr:16043",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = n("cr:16043") != null ? n("cr:16043") : {};
    const UEntryPointContainer = u.EntryPointContainer;
    const props = {};
    const m = {
        container: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineEnd: "xtijo5x",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            $$css: true
        },
        rightContainer: {
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    const p = {
        LEFT: "drawer-left",
        MID: "slide-up",
        NONE: "none",
        RIGHT: "slide-left"
    };
    const _ = {
        LEFT: "left",
        MID: "mid",
        RIGHT: "right",
        FULLSCREEN: "fullscreen"
    };
    function FComponent({ animationDisabled, direction, onDrawerAnimationComplete }) {
        const i = o("WAWebDrawerManagerContext").useDrawerManagerContext(direction);
        const { blockTransitionRef, disableExitAnimation, disableRotateFocus, drawer, drawerContext, drawerId, focusType, handleRequestDismiss, noFocus, onEnterAnimationComplete, transition, uieRef, uim } = i;
        const entryPointReference = o("WAWebContentEntryPointContext").useWAWebContentEntryPoint();
        const I = direction === _.LEFT;
        const T = function() {
            if (uieRef.current) {
                const e = uieRef.current.getElement();
                if (!(!e || e.contains(document.activeElement))) {
                    r("WAWebFocusTracer").focus(e);
                }
            }
        };
        const D = (t)=>{
            const e = onDrawerAnimationComplete;
            if (e) {
                e();
            }
            if (!(onEnterAnimationComplete === undefined && noFocus === undefined) && drawer && t === drawerId && o("WATypeUtils").isFunction(onEnterAnimationComplete)) {
                onEnterAnimationComplete();
            }
        };
        const x = ()=>{
            if (animationDisabled === true || transition === p.NONE) {
                return "none";
            }
            return blockTransitionRef.current || transition;
        };
        let $;
        const P = I && entryPointReference != null && UEntryPointContainer != null ? <UEntryPointContainer entryPointReference={entryPointReference} props={props}/> : null;
        if (drawer != null || P != null) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            const Component_1 = o("WAWebDrawerContext").DrawerContext.Provider;
            const N = <Component_1 value={drawerContext}><Component name={`drawer-manager-${direction}`} type="fatal">{P ?? drawer}</Component></Component_1>;
            const Component_2 = o("WAWebKeyboardRotateFocus.react").RotateFocus;
            const Component_3 = o("WAWebUimUie.react").UIE;
            $ = <Component_3 key={drawerId} displayName={`Drawer${r("WAUpperFirst")(direction)}`} escapable ref={uieRef} requestFocus={noFocus === true ? null : T} requestDismiss={handleRequestDismiss}>{disableRotateFocus === true ? <div style={{
                height: "100%"
            }}>{N}</div> : <Component_2 style={{
                height: "100%"
            }} focusType={focusType}>{N}</Component_2>}</Component_3>;
        }
        const M = $ != null && direction === _.RIGHT;
        const Component = r("WAWebUimContext").Consumer;
        return <Component>{function(t) {
            const Component = r("WAWebVelocityTransitionGroup");
            const Component_1 = r("WAWebUimContext").Provider;
            return <Component_1 value={uim || t}><Component key={disableExitAnimation ? "instant-exit" : "animated-exit"} xstyle={[
                m.container,
                M && m.rightContainer
            ]} transitionName={x()} exit={!disableExitAnimation} onAnimationComplete={function() {
                return D(drawerId);
            }} displayName="DrawerManager">{$}</Component></Component_1>;
        }}</Component>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    l.Transition = p;
    l.Dir = _;
    l.DrawerManagerComponent = FComponent;
}, 98);