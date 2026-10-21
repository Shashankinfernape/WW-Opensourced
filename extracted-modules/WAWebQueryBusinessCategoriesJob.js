__d("WAWebQueryBusinessCategoriesJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("businessCategoriesResponse", function(e) {
        e.assertTag("iq");
        e.assertFromServer();
        const t = e.child("response");
        const categories = [];
        let notABizId = "";
        try {
            const o = t.maybeChild("not_a_biz");
            o?.forEachChildWithTag("category", function(e) {
                notABizId = e.attrString("id");
            });
            const a = t.child("categories");
            a.forEachChildWithTag("category", function(e) {
                const t = e.attrString("id");
                const localized_display_name = e.contentString();
                categories.push({
                    id: t,
                    localized_display_name,
                    not_a_biz: notABizId.length ? t === notABizId : false
                });
            });
        } catch (e) {}
        return {
            categories,
            notABizId
        };
    });
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            const r = "profile_typeahead";
            const a = (n = o("WAWap")).wap("iq", {
                to: n.S_WHATSAPP_NET,
                xmlns: "fb:thrift_iq",
                id: n.generateId(),
                type: "get"
            }, n.wap("request", {
                op: n.CUSTOM_STRING(r),
                type: "catkit",
                v: "1"
            }, n.wap("query", null, t)));
            const i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, e);
            if (i.success) {
                return i.result;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(i.errorCode);
        });
        return u.apply(this, arguments);
    }
    l.queryBusinessCategories = s;
}, 98);