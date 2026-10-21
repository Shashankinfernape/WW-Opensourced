__d("WAWebBotCommandFormatMutator", [
    "WAWebBotCommandMutatorComponent.react",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "escapeRegex",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.match = function(t, n) {
            const e = n ?? {};
            const e_commands = e.commands;
            if (!e_commands || e_commands.length === 0) {
                return [];
            }
            const a = e_commands.map((e)=>r("escapeRegex")(`/${e.name}`));
            const i = new RegExp(`(${a.join("|")})(?=\$|\\s)`, "gmi");
            let l = false;
            return r("WAWebExtractRangesUsingRegex")(t, i, 0, function(e) {
                if (l) {
                    return null;
                }
                l = true;
                return e;
            });
        };
        return t;
    })(r("WAWebFormatMutator"));
    u.format = false;
    u.jsx = function(e, t) {
        const Component = r("WAWebBotCommandMutatorComponent.react");
        return <Component>{e}</Component>;
    };
    l.BotCommand = u;
}, 98);