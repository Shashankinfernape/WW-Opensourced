__d("WAWebBotProfileModel", [
    "WAWebBaseModel",
    "WAWebBotExposedName",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.name = o("WAWebBaseModel").prop();
            e.attrs = o("WAWebBaseModel").prop("");
            e.description = o("WAWebBaseModel").prop();
            e.category = o("WAWebBaseModel").prop();
            e.isDefault = o("WAWebBaseModel").prop();
            e.prompts = o("WAWebBaseModel").prop(function() {
                return [];
            });
            e.personaId = o("WAWebBaseModel").prop();
            e.commands = o("WAWebBaseModel").prop(function() {
                return [];
            });
            e.commandsDescription = o("WAWebBaseModel").prop();
            e.isMetaCreated = o("WAWebBaseModel").prop();
            e.creatorName = o("WAWebBaseModel").prop();
            e.creatorProfileUrl = o("WAWebBaseModel").prop();
            e.posingAsProfessional = o("WAWebBaseModel").prop();
            e.lastUpdateTs = o("WAWebBaseModel").prop();
            e.product = o("WAWebBaseModel").prop();
            e.isDeprecated = o("WAWebBaseModel").prop();
            e.creatorLid = o("WAWebBaseModel").prop();
            e.hcaEntrypointId = o("WAWebBaseModel").prop();
            e.groupTosRequirements = o("WAWebBaseModel").prop();
            e.isDeleted = o("WAWebBaseModel").prop();
            e.fetchPauseUntilMs = o("WAWebBaseModel").prop();
            e.lastFetchedTimeMs = o("WAWebBaseModel").prop();
            e.contact = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const n = this;
            t.prototype.initialize.call(this);
            this.addChild("contact", o("WAWebContactCollection").ContactCollection.gadd({
                id: this.id,
                name: this.name,
                verifiedName: this.name,
                shortName: this.name,
                pushname: this.name,
                isBusiness: true,
                type: "out"
            }));
            const r = function() {
                n.$BotProfile$p_1();
                n.$BotProfile$p_2();
            };
            this.listenTo(this, "change:product", r);
            this.listenTo(this, "change:isDeprecated", r);
            this.listenTo(this, "change:isDeleted", r);
            this.listenTo(this, "change:name", function() {
                n.$BotProfile$p_2();
            });
            this.listenTo(this, "destroy", function() {
                e.delete(n.id.toString());
            });
            this.$BotProfile$p_1();
            this.$BotProfile$p_2();
        };
        n_prototype.$BotProfile$p_1 = function() {
            const e = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(this.id);
            if (e != null) {
                o("WAWebChatGroupUtils").updateCanSend(e);
            }
        };
        n_prototype.$BotProfile$p_2 = function() {
            if (this.contact != null && !this.id.isAiHub()) {
                const t = !o("WAWebBotExposedName").shouldDisplayProfileName(this.id, {
                    product: this.product,
                    isDeprecated: this.isDeprecated,
                    isDeleted: this.isDeleted,
                    isSynced: true
                }, this.name);
                const n = this.id.toString();
                if (t) {
                    if (!e.has(n)) {
                        e.set(n, {
                            name: this.contact.name,
                            verifiedName: this.contact.verifiedName,
                            shortName: this.contact.shortName,
                            pushname: this.contact.pushname
                        });
                    }
                    const r = o("WAWebBotExposedName").getUnknownAccountName();
                    this.contact.set({
                        name: r,
                        verifiedName: r,
                        shortName: r,
                        pushname: r
                    });
                } else {
                    const a = e.get(n);
                    e.delete(n);
                    if (this.name != null && this.name !== "") {
                        this.contact.set({
                            name: this.name,
                            verifiedName: this.name,
                            shortName: this.name,
                            pushname: this.name
                        });
                    } else if (a != null) {
                        this.contact.set(babelHelpers.extends({}, a));
                    }
                }
            }
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "botProfile";
    s.idClass = r("WAWebWid");
    const u = o("WAWebBaseModel").defineModel(s);
    l.default = u;
}, 98);