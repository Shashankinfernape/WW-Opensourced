__d("useWAWebNewsletterReactions", [
    "Promise",
    "WALogger",
    "WAWebNewsletterReactionCollection",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = u || (u = o("react"));
    const { useEffect, useState } = c;
    function p(e) {
        const t = useState([]);
        const r = t[0];
        const a = t[1];
        const i = useState(false);
        const l = i[0];
        const u = i[1];
        o("useWAWebListener").useListener(o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection, [
            "add",
            "change",
            "remove",
            "reset"
        ], function() {
            u(!l);
        });
        useEffect(function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield (s || (s = n("Promise"))).all(e.map((e)=>o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.find(e.toString()).catch(()=>null)));
                a(t.filter(Boolean));
            })().catch((e)=>{});
        }, [
            l
        ]);
        return r;
    }
    l.default = p;
}, 98);