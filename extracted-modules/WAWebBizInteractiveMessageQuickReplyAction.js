__d("WAWebBizInteractiveMessageQuickReplyAction", [
    "WAWebCarouselMsgUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.isCarouselCard) {
                return u(e, t);
            }
            const n = d(e.interactivePayload, t);
            const r = o("WAWebSchemaMessage").getMessageTable();
            const a = yield r.get(e.id.toString());
            yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge([
                {
                    id: a?.id,
                    interactivePayload: n
                }
            ]);
            e.set("interactivePayload", n);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = d(e.interactivePayload, t);
            const a = r("nullthrows")(o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e));
            const carouselCardsParsed = r("nullthrows")(a.carouselCardsParsed).slice();
            const l = carouselCardsParsed.findIndex((t)=>t.id.toString() === e.id.toString());
            carouselCardsParsed[l] = babelHelpers.extends({}, carouselCardsParsed[l], {
                interactivePayload: n
            });
            const s = o("WAWebSchemaMessage").getMessageTable();
            const u = yield s.get(a.id.toString());
            yield s.bulkCreateOrMerge([
                {
                    id: u?.id,
                    carouselCardsParsed
                }
            ]);
            a.set("carouselCardsParsed", carouselCardsParsed);
            e.set("interactivePayload", n);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return babelHelpers.extends({}, e, {
            buttons: e?.buttons?.map(function(e, n) {
                if (e.buttonParamsJson === undefined) {
                    return e;
                }
                const r = JSON.parse(e.buttonParamsJson);
                if (t === n) {
                    r.disabled = true;
                }
                return {
                    name: e.name,
                    buttonParamsJson: JSON.stringify(r)
                };
            })
        });
    }
    l.markInteractiveButtonClicked = e;
    l.rebuildInteractivePayloadWithDisabledButton = d;
}, 98);