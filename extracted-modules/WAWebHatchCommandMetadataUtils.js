__d("WAWebHatchCommandMetadataUtils", [
    "WAWebBotUtils",
    "WAWebHatchCommandCache",
    "WAWebHatchGating"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (!o("WAWebHatchGating").isHatchCommandsEnabled() || !o("WAWebBotUtils").isHatchBot(t)) {
            return null;
        }
        const n = e.trim();
        if (!n.startsWith("/")) {
            return null;
        }
        const r = t.toJid();
        const a = o("WAWebHatchCommandCache").getHatchCommands(r);
        if (a == null) {
            return null;
        }
        const i = s(n, a);
        if (i == null) {
            return null;
        }
        const commandName = i.name.startsWith("/") ? i.name.slice(1) : i.name;
        return {
            commandName,
            commandDescription: i.description,
            commandPrompt: i.prompt
        };
    }
    function s(e, t) {
        let n = null;
        let r = 0;
        for (const o of t){
            const a = o.name.startsWith("/") ? o.name : `/${o.name}`;
            if (e.startsWith(a) && (e.length === a.length || e[a.length] === " ") && a.length > r) {
                n = o;
                r = a.length;
            }
        }
        return n;
    }
    l.resolveHatchCommandMetadata = e;
}, 98);