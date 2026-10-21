__d("WAWebGroupMetadataCollection", [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebFindGroupMetadataAction",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupMetadataModel",
    "WAWebIsCagGroupCache",
    "WAWebOrgContactCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebStaleBaseCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function a() {
            let a;
            a = t.call(this) || this;
            a._handleIsParentGroupChange = function(e) {
                if (e.isParentGroup === true) {
                    o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.update(e.id);
                }
            };
            a.findImpl = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (r("WAWebWid").isGroup(t)) {
                        const i = o("WAWebChatCollection").ChatCollection.get(t);
                        if (i?.isReadOnly && i?.groupMetadata?.stale === false) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "groupMetadata: skip trying to find groupMetadata wid ",
                                ""
                            ])), t.toString());
                            return (u || (u = n("Promise"))).resolve({
                                id: t
                            });
                        }
                        return o("WAWebFindGroupMetadataAction").findGroupMetadata(t).then((e)=>{
                            if (e == null) {
                                return e;
                            }
                            return babelHelpers.extends({}, e);
                        });
                    }
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "groupMetadata:find trying to fetch non-group wid ",
                        ""
                    ])), t.toString());
                    return (u || (u = n("Promise"))).reject(r("err")(`groupMetadata:find trying to fetch non-group wid ${t.toString()}`));
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
            a.listenTo(a, "add", a._handleGroupAdd);
            a.listenTo(a, "remove", a._handleGroupRemove);
            a.listenTo(a, "change:parentGroup", a._handleParentGroupChange);
            a.listenTo(a, "change:isParentGroup", a._handleIsParentGroupChange);
            a.listenTo(a, "change:defaultSubgroup", a._handleDefaultSubgroupChange);
            o("WAWebOrgContactCollection").OrgContactCollection.on(o("WAWebOrgContactCollection").ORG_CONTACTS_APPLIED, function() {
                return a.$GroupMetadataCollection$p_1();
            });
            o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", function() {
                return a.$GroupMetadataCollection$p_1();
            });
            return a;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$GroupMetadataCollection$p_1 = function() {
            this.forEach((e)=>e.isTrusted());
        };
        a_prototype._handleGroupAdd = function(t) {
            if (t.defaultSubgroup === true) {
                r("WAWebIsCagGroupCache").add(t.id);
            }
            if (t.participants.iAmMember()) {
                const e = t.parentGroup ? this.get(t.parentGroup.toString()) : null;
                if (e != null) {
                    const n = t.id;
                    o("WAWebUpdateSubgroupsCommunityAction").subgroupUnjoinedToJoined(e, n);
                }
            }
        };
        a_prototype._handleGroupRemove = function(t) {
            if (t.defaultSubgroup === true) {
                r("WAWebIsCagGroupCache").remove(t.id);
            }
            if (t.participants.iAmMember()) {
                const e = t.parentGroup ? this.get(t.parentGroup.toString()) : null;
                if (e != null) {
                    o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroups(e);
                }
            }
        };
        a_prototype._handleParentGroupChange = function(t, n, r) {
            if (t.participants.iAmMember()) {
                const e = t.id;
                const a = n != null ? this.get(n.toString()) : null;
                const i = r != null ? this.get(r.toString()) : null;
                if (a != null) {
                    o("WAWebUpdateSubgroupsCommunityAction").subgroupUnjoinedToJoined(a, e);
                    if (i != null) {
                        o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroups(i);
                    }
                } else if (i != null) {
                    o("WAWebUpdateSubgroupsCommunityAction").unlinkParentGroup(i, e);
                }
            }
        };
        a_prototype._handleDefaultSubgroupChange = function(t, n) {
            if (n === true) {
                r("WAWebIsCagGroupCache").add(t.id);
            } else {
                r("WAWebIsCagGroupCache").remove(t.id);
            }
        };
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    d(e);
                }
            });
            return e;
        };
        a_prototype.reset = function() {
            this.forEach(d);
            t.prototype.reset.call(this);
        };
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = r("WAWebGroupMetadataModel");
    function d(e) {
        o("WAWebGroupMetadataGetters").clearGroupMetadataGetterCacheFor(e);
        o("WAWebFrontendGroupMetadataGetters").clearFrontendGroupMetadataGetterCacheFor(e);
    }
    const m = new c;
    l.default = m;
}, 98);