__d("WDSTextContainer.react", [
    "BaseTextContext",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent({ children }) {
        const Component = o("BaseTextContext").BaseTextContextProvider;
        return <Component nested>{children}</Component>;
    }
    UComponent.displayName = `${UComponent.name} [from ${i.id}]`;
    l.default = UComponent;
}, 98);