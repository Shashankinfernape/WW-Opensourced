__d("WAWebUserDisclosureCollection", [
    "WAWebBaseCollection",
    "WAWebGetUserDisclosuresContentsAction",
    "WAWebUserDisclosureModel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 86400000;
    const s = ((t)=>{
        function a(...i_1) {
            let r;
            r = t.call(this, ...i_1) || this;
            r.findImpl = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const a = r.get(t);
                    if (a != null && a.privacyDisclosureModal != null && a.endDate != null && a.endDate?.getTime() > Date.now() && Date.now() - a.lastUpdated.getTime() < e) {
                        return a;
                    }
                    const i = yield o("WAWebGetUserDisclosuresContentsAction").getDisclosuresContentAction(parseInt(t, 10));
                    if (i != null) {
                        return r.gadd({
                            id: t,
                            policyVersion: i.policyVersion,
                            privacyDisclosureModal: i.privacyDisclosureModal,
                            endDate: i.endDate,
                            lastUpdated: new Date
                        }, {
                            merge: true
                        });
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(r) || babelHelpers.assertThisInitialized(r);
        }
        babelHelpers.inheritsLoose(a, t);
        const i = a.prototype;
        i.find = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                const o = this.get(e);
                if (o == null || o.privacyDisclosureModal != null) {
                    return t.prototype.find.call(this, e, n);
                }
                const a = yield this.update(e, n);
                return (Array.isArray(a) ? a[0] : a) ?? o;
            });
            function r(t, n) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        i.updateNoticeStage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ accepted: t, id: n, policyVersion: o, stage: a }) {
                const i = new (r("WAWebUserDisclosureModel"))({
                    id: n,
                    policyVersion: o,
                    accepted: t,
                    stage: a,
                    lastUpdated: new Date
                });
                this.gadd(i, {
                    merge: true
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebUserDisclosureModel");
    const u = new s;
    l.UserDisclosureCollection = u;
}, 98);