__d("WAWebNavBarCometRouting", [
    "WAWebNavBarTypes",
    "WAXWhatsAppWebCometRoutedChannelsControllerRouteBuilder",
    "WAXWhatsAppWebRootControllerRouteBuilder"
], function(t, n, r, o, a, i, l) {
    const e = new Map([
        [
            o("WAWebNavBarTypes").NavBarItems.Chats,
            r("WAXWhatsAppWebRootControllerRouteBuilder").buildUri({}).toString()
        ],
        [
            o("WAWebNavBarTypes").NavBarItems.Newsletters,
            r("WAXWhatsAppWebCometRoutedChannelsControllerRouteBuilder").buildUri({}).toString()
        ]
    ]);
    function s(t) {
        return e.get(t);
    }
    function u(t) {
        const n = t.endsWith("/") ? t : `${t}/`;
        const r = [
            n,
            t
        ];
        let a = null;
        let i = 0;
        const l = ()=>{
            const e = s[0];
            const t = s[1];
            if (r.some((e)=>e.startsWith(t)) && t.length > i) {
                a = e;
                i = t.length;
            }
        };
        for (var s of e){
            l();
        }
        return a ?? o("WAWebNavBarTypes").NavBarItems.Chats;
    }
    l.getCometRouteForNavBarItem = s;
    l.getNavBarItemForRouteUrl = u;
}, 98);