__d("WAWebOrderCollection", [
    "Promise",
    "WAWebBizComplianceUtil",
    "WAWebBizOrderAction",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCurrencyUtils",
    "WAWebE2EProtoUtils",
    "WAWebL10NCountryCodes",
    "WAWebOrderModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function a(e, n) {
            let r;
            r = t.call(this) || this;
            r.width = 80;
            r.height = 80;
            if (e != null) {
                r.width = e;
            }
            if (n != null) {
                r.height = n;
            }
            return r;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.addOrder = function() {
            const n = r("WAWebBizOrderGetFriendlyRandomIdAction")();
            const a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            const l = i != null ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(i.user) : o("WAWebBizComplianceUtil").getCountryShortcodeByWid(a) ?? "";
            t.prototype.add.call(this, {
                id: n,
                fetchedFromServer: false,
                sellerJid: o("WAWebE2EProtoUtils").encodeJid(a),
                createdAt: Math.round(Date.now() / 1000),
                currency: o("WAWebCurrencyUtils").currencyForCountryShortcode(l),
                products: [],
                tax: null,
                subtotal: null,
                total: null
            });
            return this.assertGet(n);
        };
        a_prototype.findOrder = function(r, o, a) {
            const t = this.get(r);
            if (t != null) {
                return (e || (e = n("Promise"))).resolve(t);
            }
            return this.$OrderCollectionImpl$p_1(r, o, a);
        };
        a_prototype.$OrderCollectionImpl$p_1 = (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(r, sellerJid, token) {
                const l = yield o("WAWebBizOrderAction").queryOrder({
                    height: this.height,
                    orderId: r,
                    sellerJid,
                    token,
                    width: this.width
                });
                t.prototype.add.call(this, babelHelpers.extends({
                    id: r,
                    fetchedFromServer: true,
                    sellerJid
                }, l));
                const s = this.get(r);
                if (s != null) {
                    return (e || (e = n("Promise"))).resolve(s);
                }
            });
            function a(e, t, n) {
                return r.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = r("WAWebOrderModel");
    const u = new s;
    l.OrderCollection = u;
}, 98);