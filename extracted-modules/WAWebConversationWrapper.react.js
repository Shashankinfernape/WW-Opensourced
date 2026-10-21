__d("WAWebConversationWrapper.react", [
    "WAWebConversation.react",
    "WAWebStrictMode.react",
    "hero-tracing",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const { conversationRef, inert, paneTwoProps } = e;
        const inert_1 = inert === undefined ? false : inert;
        let u;
        if (t[0] !== conversationRef || t[1] !== inert_1 || t[2] !== paneTwoProps) {
            const Component = o("hero-tracing").HeroPagelet;
            const Component_1 = r("WAWebStrictMode.react");
            u = <Component_1><Component name="Conversation Panel" observeTextMutation>{function(t, R) {
                const Component = o("WAWebConversation.react").WAWebConversation;
                return <><div {...babelHelpers.extends({}, paneTwoProps, {
                    inert: inert_1,
                    ref: t,
                    children: <Component ref={conversationRef}/>
                })}/><R/></>;
            }}</Component></Component_1>;
            t[0] = conversationRef;
            t[1] = inert_1;
            t[2] = paneTwoProps;
            t[3] = u;
        } else {
            u = t[3];
        }
        return u;
    }
    l.default = u;
}, 98);