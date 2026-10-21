__d("HeroInteractionContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = function() {};
    const c = {
        consumeBootload: u,
        hold: function() {
            return "";
        },
        logHeroRender: u,
        logMetadata: u,
        logPageletVC: u,
        logReactCommit: u,
        logReactPostCommit: u,
        logReactRender: u,
        pageletStack: [],
        registerPlaceholder: u,
        removePlaceholder: u,
        suspenseCallback: u,
        unhold: u
    };
    const DContext = s.createContext(c);
    l.DEFAULT_CONTEXT_VALUE = c;
    l.Context = DContext;
}, 98);