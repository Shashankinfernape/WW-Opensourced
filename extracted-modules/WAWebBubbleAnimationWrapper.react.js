__d("WAWebBubbleAnimationWrapper.react", [
    "WAWebBotGating",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c({ bubbleRef, children, componentClass, msg, shouldAnimation }) {
        const animationProps = shouldAnimation ? m(msg, bubbleRef) : {};
        return <D7Component ref={bubbleRef} animationProps={animationProps} componentClass={componentClass}>{children}</D7Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function D7Component(t) {
        const n = o("react-compiler-runtime").c(9);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = r;
        const { animationProps, children, componentClass } = i;
        let d;
        if (n[3] !== animationProps.key || n[4] !== animationProps.style || n[5] !== children || n[6] !== componentClass || n[7] !== a) {
            d = <div key={animationProps.key} style={animationProps.style} className={componentClass} ref={a}>{children}</div>;
            n[3] = animationProps.key;
            n[4] = animationProps.style;
            n[5] = children;
            n[6] = componentClass;
            n[7] = a;
            n[8] = d;
        } else {
            d = n[8];
        }
        return d;
    }
    function m(msg, bubbleRef) {
        const s = !!o("WAWebBotGating").shouldAnimateAsBotStream(msg);
        const u = bubbleRef.current?.clientHeight;
        const c = `${msg.id.toString()}_${msg.unsafe().latestEditMsgKey?.toString() ?? ""}_${msg.unsafe().latestEditSenderTimestampMs?.toString() ?? ""}`;
        const d = s && u != null ? {
            key: c,
            style: {
                "--msg-bubble-starting-height": `${u ?? 0}px`
            }
        } : {};
        return d;
    }
    l.default = c;
}, 98);