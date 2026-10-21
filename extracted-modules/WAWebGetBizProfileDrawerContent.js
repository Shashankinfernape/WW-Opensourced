__d("WAWebGetBizProfileDrawerContent", [
    "WAWebBizProfileGatingUtils",
    "WAWebBizProfileTwoPhaseContainerLoadable",
    "WAWebBizRefreshedProfileDrawerLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, onClose) {
        if (o("WAWebBizProfileGatingUtils").isBizProfilePreloadEnabled()) {
            const Component = o("WAWebBizProfileTwoPhaseContainerLoadable").WAWebBizProfileTwoPhaseContainerLoadable;
            return <Component entryPoint={e} onClose={onClose}/>;
        }
        const Component = o("WAWebBizRefreshedProfileDrawerLoadable").WAWebBizRefreshedProfileDrawerLoadable;
        return <Component entryPoint={e} onClose={onClose}/>;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);