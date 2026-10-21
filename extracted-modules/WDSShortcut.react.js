__d("WDSShortcut.react", [
    "UserAgent",
    "WALogger",
    "WDSText.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        container: {
            display: "x1rg5ohu",
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "x1i5p2am",
            borderStartEndRadius: "x1whfx0g",
            borderEndEndRadius: "xr2y4jy",
            borderEndStartRadius: "x1ihp6rs",
            $$css: true
        },
        containerInverse: {
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        applyMacFont: {
            fontFamily: "x1ntu5ad",
            $$css: true
        },
        macLetterSpacing: {
            letterSpacing: "xl5zsmt",
            $$css: true
        },
        padding: function(t) {
            return [
                {
                    paddingInlineStart: t != null ? "xnvo3vl" : t,
                    paddingInlineEnd: t != null ? "x120eax6" : t,
                    $$css: true
                },
                {
                    "--x-paddingInlineStart": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? void 0;
                    })(t),
                    "--x-paddingInlineEnd": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? void 0;
                    })(t)
                }
            ];
        },
        noBreak: {
            wordBreak: "xdnwjd9",
            $$css: true
        }
    };
    const m = r("UserAgent").isPlatform("Mac OS X") ? "macWeb" : "windowsWeb";
    function p(t) {
        const { modifiers: a, shortcutKeys: i, inverse: l } = t;
        const u = l === void 0 ? false : l;
        const p = t.platform;
        const _ = p === void 0 ? m : p;
        if (_ !== "macWeb" && _ !== "windowsWeb") {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WDSShortcut] Unsupported platform"
            ]))).tags("wds").devConsole(t).sendLogs("wds-shortcut-unsupported-platform");
            return;
        }
        const f = a?.map(function(e) {
            return ((e)=>{
                if (Array.isArray(e) && e.length === 2 && e[0] === "Super" && e[1] === "macWeb") {
                    return "⌘";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Super" && e[1] === "windowsWeb") {
                    return "Win";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Option" && e[1] === "macWeb") {
                    return "⌥";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Option" && e[1] === "windowsWeb") {
                    return "Alt";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Shift" && e[1] === "macWeb") {
                    return "⇧";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Shift" && e[1] === "windowsWeb") {
                    return "Shift";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Control" && e[1] === "macWeb") {
                    return "⌃";
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === "Control" && e[1] === "windowsWeb") {
                    return "Ctrl";
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })([
                e,
                _
            ]);
        }) ?? [];
        const g = [].concat(f, i).map((e, t)=>{
            if (_ === "windowsWeb" && t !== 0) {
                return `+${e}`;
            }
            return e;
        });
        const h = u ? "none" : "4px";
        const Component = r("WDSText.react");
        return <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(d.padding(h), u ? d.containerInverse : d.container, _ === "macWeb" && d.applyMacFont), {
            children: <Component type="Body3" colorName={u ? "contentDisabled" : "contentDeemphasized"} platform={_} dir="auto" xstyle={[
                d.noBreak,
                _ === "macWeb" && d.macLetterSpacing
            ]}>{g}</Component>
        })}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);