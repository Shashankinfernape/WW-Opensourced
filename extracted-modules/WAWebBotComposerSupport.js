__d("WAWebBotComposerSupport", [
    "$InternalEnum",
    "WAWebBotSupportState"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "COMPOSE",
        "UPGRADE",
        "DEPRECATED",
        "DELETED"
    ]);
    function s({ input, isProductGateOn }) {
        const a = o("WAWebBotSupportState").evaluateBotSupport(input, isProductGateOn);
        if (a.kind === o("WAWebBotSupportState").BotSupportStateKind.UNRESOLVED) {
            return e.DEPRECATED;
        }
        if (a.kind === o("WAWebBotSupportState").BotSupportStateKind.SUPPORTED) {
            return e.COMPOSE;
        }
        if (a.kind === o("WAWebBotSupportState").BotSupportStateKind.UNSUPPORTED) {
            return e.UPGRADE;
        }
        if (a.kind === o("WAWebBotSupportState").BotSupportStateKind.DEPRECATED) {
            return e.DEPRECATED;
        }
        if (a.kind === o("WAWebBotSupportState").BotSupportStateKind.DELETED) {
            if (o("WAWebBotSupportState").hasCustomDeletedTombstone(a)) {
                return e.DELETED;
            }
            return e.DEPRECATED;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${a.kind}`);
        })();
    }
    l.BotComposerTreatment = e;
    l.getBotComposerTreatment = s;
}, 98);