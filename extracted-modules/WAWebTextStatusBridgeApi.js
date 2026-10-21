__d("WAWebTextStatusBridgeApi", [
    "WALogger",
    "WAWebStatusContactAction",
    "WAWebTextStatusCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        setMyStatus: function({ status }) {
            const n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            o("WAWebTextStatusCollection").TextStatusCollection.assertGet(o("WAWebWidFactory").asUserWidOrThrow(n)).status = status ?? o("WAWebTextStatusCollection").getDefaultTextStatus();
        },
        refreshTextStatus: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contactId }) {
                const n = o("WAWebWidFactory").createWid(contactId);
                const r = o("WAWebTextStatusCollection").TextStatusCollection.get(n);
                if (r != null) {
                    const a = yield o("WAWebStatusContactAction").getStatus(o("WAWebWidFactory").asUserWidOrThrow(n));
                    r.set({
                        status: a.status
                    });
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateTextStatuses: function({ content, ids }) {
            for (const a of ids){
                const i = o("WAWebWidFactory").createWid(a);
                const l = o("WAWebTextStatusCollection").TextStatusCollection.get(i);
                if (l) {
                    l.status = content;
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleAboutNotification: unknown contact ",
                        ""
                    ])), i.toLogString());
                }
            }
        }
    };
    l.TextStatusBridgeApi = s;
}, 98);