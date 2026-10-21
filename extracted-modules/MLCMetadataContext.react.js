__d("MLCMetadataContext.react", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useMemo } = u;
    const MContext = s.createContext({
        contentID: null,
        surface: null
    });
    function PComponent({ children, contentID, surface }) {
        const value = useMemo(function() {
            return {
                contentID,
                surface
            };
        }, [
            contentID,
            surface
        ]);
        return <MContext.Provider value={value}>{children}</MContext.Provider>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    function useComponent() {
        return useContext(MContext);
    }
    l.MLCMetadataProvider = PComponent;
    l.useMLCMetadata = useComponent;
}, 98);