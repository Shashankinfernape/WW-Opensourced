__d("WAWebParseQPSurfacesNotification", [
    "WALogger",
    "WASmaxQpSurfacesQPNotificationRPC",
    "WATimeUtils",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "qpConfigFilterRules"
    ];
    const u = [
        "qpConfigFilterRules"
    ];
    function c(t) {
        const n = o("WASmaxQpSurfacesQPNotificationRPC").receiveQPNotificationRPC(t);
        const { makeQPNotificationResponseAck, parsedRequest } = n;
        const { surfacesQPSurfacesMixin, t: t_1 } = parsedRequest;
        const surfacesQPSurfacesMixin_surface = surfacesQPSurfacesMixin.surface;
        const surfaces = surfacesQPSurfacesMixin_surface.map((t)=>{
            const promotions = t.promotion.reduce((acc, item)=>{
                const n_qpConfigFilterRules = item.qpConfigFilterRules;
                if (n_qpConfigFilterRules == null) {
                    const a = item.qpConfigFilterRules;
                    const i = babelHelpers.objectWithoutPropertiesLoose(item, s);
                    acc.push(i);
                    return acc;
                }
                try {
                    const qpConfigFilterRules = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterClauseSpec, n_qpConfigFilterRules.elementValue);
                    const c = item.qpConfigFilterRules;
                    const d = babelHelpers.objectWithoutPropertiesLoose(item, u);
                    const m = babelHelpers.extends({}, d, {
                        qpConfigFilterRules
                    });
                    acc.push(m);
                } catch (t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "loadQuickPromotions: malformed filter rules, skipping"
                    ])));
                }
                return acc;
            }, []);
            return {
                id: t.id,
                promotions
            };
        });
        return {
            surfaces,
            ts: o("WATimeUtils").castToUnixTime(t_1),
            makeAck: makeQPNotificationResponseAck
        };
    }
    l.parseQPSurfacesNotification = c;
}, 98);