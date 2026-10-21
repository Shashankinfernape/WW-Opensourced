__d("WAWebBroadcastMetadataCollection", [
    "WALogger",
    "WAWebABProps",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastDatabaseJob",
    "WAWebBroadcastMetadataGetters",
    "WAWebBroadcastMetadataModel",
    "WAWebContactCollection",
    "WAWebDebounce",
    "WAWebLabelCollection",
    "WAWebListItemParentType",
    "WAWebStaleBaseCollection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 5000;
    const c = ((t)=>{
        function a() {
            let e;
            e = t.call(this) || this;
            e.$BroadcastMetadataCollection$p_1 = r("WAWebDebounce")(function() {
                return e.$BroadcastMetadataCollection$p_2();
            }, u);
            e.findImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebWidFactory").createWid(d(e));
                    const n = yield o("WAWebBroadcastDatabaseJob").getBroadcastMetadataJob(t);
                    if (n == null) {
                        return {
                            audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
                            id: t,
                            recipients: []
                        };
                    }
                    const a = n.recipients != null ? r("compactMap")(n.recipients, function(e) {
                        try {
                            return {
                                id: o("WAWebWidFactory").createWid(e)
                            };
                        } catch (e) {
                            return null;
                        }
                    }) : [];
                    return {
                        audienceExpression: n.audienceExpression,
                        customAudienceFbid: n.customAudienceFbid,
                        id: o("WAWebWidFactory").createWid(n.id),
                        recipients: a
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            o("WAWebLabelCollection").LabelCollection.forEach((t)=>{
                e.$BroadcastMetadataCollection$p_3(t);
            });
            e.listenTo(o("WAWebLabelCollection").LabelCollection, "add", function(t) {
                e.$BroadcastMetadataCollection$p_3(t);
            });
            e.listenTo(o("WAWebLabelCollection").LabelCollection, "remove", function(t) {
                e.stopListening(t.labelItemCollection);
            });
            e.listenTo(o("WAWebContactCollection").ContactCollection, "add remove", e.$BroadcastMetadataCollection$p_1);
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$BroadcastMetadataCollection$p_3 = function(t) {
            const e = this;
            const n = function(n) {
                e.$BroadcastMetadataCollection$p_4(n);
            };
            this.listenTo(t.labelItemCollection, "add", n);
            this.listenTo(t.labelItemCollection, "remove", n);
        };
        a_prototype.$BroadcastMetadataCollection$p_4 = function(n) {
            const t = this;
            if (n.parentType === o("WAWebListItemParentType").LabelItemParentType.Contact) {
                const a = n.labelId;
                this.forEach((n)=>{
                    const l = n.get("audienceExpression") ?? o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION;
                    if (o("WAWebAudienceExpressionTypes").expressionUsesLabel(l, a)) {
                        t.findImpl(n.id).then((e)=>{
                            const r = t.get(n.id);
                            if (r != null) {
                                r.set("audienceExpression", e.audienceExpression);
                                r.recipients.reset();
                                e.recipients.forEach((e)=>{
                                    r.recipients.add({
                                        id: e.id
                                    });
                                });
                            }
                        }).catch((t)=>{
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[broadcast:metadata] update failed on label change"
                            ]))).verbose().catching(r("getErrorSafe")(t)).sendLogs("broadcast-metadata-collection-failed-to-update-metadata");
                        });
                    }
                });
            }
        };
        a_prototype.$BroadcastMetadataCollection$p_2 = function() {
            const e = this;
            if (o("WAWebABProps").getABPropConfigValue("m2_audience_dynamic_rules")) {
                this.forEach((t)=>{
                    const a = t.get("audienceExpression") ?? o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION;
                    if (a.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE && a.predicateType === o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_ALL_CONTACTS) {
                        e.findImpl(t.id).then((n)=>{
                            const r = e.get(t.id);
                            if (r != null) {
                                r.set("audienceExpression", n.audienceExpression);
                                r.recipients.reset();
                                n.recipients.forEach((e)=>{
                                    r.recipients.add({
                                        id: e.id
                                    });
                                });
                            }
                        }).catch((e)=>{
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[broadcast:metadata] update failed on contact change"
                            ]))).verbose().catching(r("getErrorSafe")(e)).sendLogs("broadcast-metadata-collection-failed-to-update-metadata-contacts");
                        });
                    }
                });
            }
        };
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebBroadcastMetadataGetters").clearBroadcastMetadataGetterCacheFor(e);
                }
            });
            return e;
        };
        a_prototype.reset = function() {
            this.forEach(o("WAWebBroadcastMetadataGetters").clearBroadcastMetadataGetterCacheFor);
            t.prototype.reset.call(this);
        };
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = r("WAWebBroadcastMetadataModel");
    function d(e) {
        if (typeof e === "string") {
            return e;
        }
        return e.toString();
    }
    const m = new c;
    l.default = m;
}, 98);