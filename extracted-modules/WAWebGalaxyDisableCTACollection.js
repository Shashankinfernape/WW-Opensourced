__d("WAWebGalaxyDisableCTACollection", [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebUserPrefsGalaxyDisableCTA"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    const y = o("WAWebBaseModel").defineModel(h);
    const C = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.messageCollectionListener = null;
            e.initialize();
            e.$GalaxyDisableCTACollectionImpl$p_1();
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const e = this;
            const t = o("WAWebUserPrefsGalaxyDisableCTA").getGalaxyDisableCTAMessageIds();
            t.forEach((t)=>{
                const n = new y({
                    id: t
                });
                e.add(n);
            });
        };
        n_prototype.addMessageId = function(n) {
            if (this.get(n) == null) {
                const t = o("WAWebMsgCollection").MsgCollection.get(n);
                if (t) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "GalaxyDisableCTACollection: found existing message for ID: ",
                        ""
                    ])), n);
                    this.$GalaxyDisableCTACollectionImpl$p_2(t, n);
                } else {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[GalaxyDisableCTACollection] queued msgId: ",
                        ""
                    ])), n);
                    const r = new y({
                        id: n
                    });
                    o("WAWebUserPrefsGalaxyDisableCTA").addGalaxyDisableCTAMessageId(n);
                    this.add(r);
                }
            }
        };
        n_prototype.addByAgmId = function(t, n) {
            const e = o("WAWebMsgCollection").MsgCollection.getModelsArray();
            const r = e.find((e)=>e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.id?.remote?.toString() === n && e.ctwaContext?.sourceId === t);
            if (r != null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[GalaxyDisableCTACollection] found AGM by agmId: ",
                    ""
                ])), t);
                this.$GalaxyDisableCTACollectionImpl$p_2(r, r.id.toString());
            } else {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[GalaxyDisableCTACollection] AGM queued: ",
                    " ",
                    ""
                ])), t, n);
                o("WAWebUserPrefsGalaxyDisableCTA").addGalaxyDisableCTAAgmEntry(t, n);
            }
        };
        n_prototype.$GalaxyDisableCTACollectionImpl$p_1 = function() {
            const e = this;
            this.messageCollectionListener = function(t) {
                if (t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && t.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && t.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW || t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && t.ctwaContext != null) {
                    e.$GalaxyDisableCTACollectionImpl$p_3();
                }
            };
            o("WAWebMsgCollection").MsgCollection.on("add", this.messageCollectionListener);
        };
        n_prototype.$GalaxyDisableCTACollectionImpl$p_3 = function() {
            const e = this;
            const t = [];
            let n = 0;
            this.forEach((r)=>{
                const a = r.id.toString();
                const i = o("WAWebMsgCollection").MsgCollection.get(a);
                if (i) {
                    n++;
                    if (t.length < 3) {
                        t.push(a);
                    }
                    e.$GalaxyDisableCTACollectionImpl$p_2(i, a);
                }
            });
            if (n > 0) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "GalaxyDisableCTACollection: found ",
                    " messages for IDs => ",
                    ""
                ])), n, t);
            }
            const r = o("WAWebUserPrefsGalaxyDisableCTA").getGalaxyDisableCTAAgmEntries();
            const a = [];
            let i = 0;
            const l = (n)=>{
                const t = o("WAWebMsgCollection").MsgCollection.getModelsArray();
                const r = t.find((e)=>e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.id?.remote?.toString() === n.chatId && e.ctwaContext?.sourceId === n.agmId);
                if (r != null) {
                    i++;
                    if (a.length < 3) {
                        a.push(n.agmId);
                    }
                    e.$GalaxyDisableCTACollectionImpl$p_2(r, r.id.toString());
                    o("WAWebUserPrefsGalaxyDisableCTA").removeGalaxyDisableCTAAgmEntry(n.agmId);
                }
            };
            for (const s of r){
                l(s);
            }
            if (i > 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[GalaxyDisableCTACollection] deferred AGM: ",
                    " => ",
                    ""
                ])), i, a);
            }
        };
        n_prototype.$GalaxyDisableCTACollectionImpl$p_2 = function(t, n) {
            const e = this;
            try {
                if (t.galaxyFlowDisabled === true) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[GalaxyDisableCTACollection] already updated, skip: ",
                        ""
                    ])), n);
                    this.$GalaxyDisableCTACollectionImpl$p_4(n);
                    return;
                }
                t.set({
                    galaxyFlowDisabled: true
                });
                t.updateNFMButtonsState(true).then((t)=>e.$GalaxyDisableCTACollectionImpl$p_4(n)).catch((e)=>{
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[GalaxyDisableCTACollection] NFM btn update failed: ",
                        ""
                    ])), String(e));
                });
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[GalaxyDisableCTACollection] processed msgId: ",
                    ""
                ])), n);
            } catch (error) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "GalaxyDisableCTACollection: Error updating message state: ",
                    ""
                ])), error);
            }
        };
        n_prototype.$GalaxyDisableCTACollectionImpl$p_4 = function(t) {
            const e = this.get(t);
            if (e) {
                this.remove(e);
                o("WAWebUserPrefsGalaxyDisableCTA").removeGalaxyDisableCTAMessageId(t);
            }
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    C.model = y;
    const b = new C;
    l.GalaxyDisableCTACollection = b;
}, 98);