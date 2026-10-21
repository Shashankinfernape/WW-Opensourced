__d("WAWebNewsletterAddOnsUtils", [
    "WAWebNewsletterReactionCollection"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebNewsletterReactionCollection").NewsletterMessageReactionsCollection.get(e.id);
    }
    e.key = "reactions";
    const s = [
        e
    ];
    function u(e) {
        return e.reduce((acc, item)=>{
            s.forEach((n)=>{
                const r = n(item);
                if (r != null) {
                    acc[n.key].push(r);
                }
            });
            return acc;
        }, {
            reactions: []
        });
    }
    l.getAddOnsFromMessages = u;
}, 98);