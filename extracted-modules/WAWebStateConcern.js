__d("WAWebStateConcern", [
    "WALogger",
    "WAWebBaseMirror",
    "WAWebBaseModel",
    "WAWebCollections",
    "WAWebProxyStateFactory",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "cr:11133"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    n("WAWebCollections");
    function d(e) {
        if (typeof e === "string") {
            return e;
        }
        if (e.toString) {
            return e.toString();
        }
        return "Invalid Object";
    }
    function m(componentName, n, keys, isReadOnly) {
        const i = {
            $ProxyState$ComponentName: {
                value: componentName
            },
            proxyBitMask: {
                value: o("WAWebBaseMirror").genBitMask(n.prototype.mirrorMask, keys)
            }
        };
        const l = (r)=>{
            const n = {
                enumerable: true
            };
            n.get = function() {
                return this.$ProxyState$state.get(r);
            };
            n.set = function() {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    'READ ONLY: prop "',
                    '" in <',
                    " /> not writable"
                ])), r, componentName);
            };
            if (!isReadOnly) {
                n.set = function(e) {
                    this.$ProxyState$state.set(r, e);
                };
            }
            i[r] = n;
        };
        for (const s of keys){
            l(s);
        }
        function u(e) {
            n.call(this, e);
        }
        u.prototype = Object.create(n.prototype, i);
        u.prototype.constructor = u;
        return u;
    }
    class p {
        constructor({ componentName, isReadOnly = false, isStrong, keys, name }){
            this.componentName = componentName;
            this.name = name;
            this.$1 = isStrong;
            this.keys = keys;
            var u = o("WAWebProxyStateFactory").ProxyStates[name];
            if (!u) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    'Unknown StateHOC concern type "',
                    '"'
                ])), name).sendLogs("state-hoc-error");
            }
            this.$2 = u;
            this.$3 = m(componentName, u, keys, isReadOnly);
        }
        getModel(t) {
            if (t instanceof this.$2) {
                return t.$ProxyState$state;
            }
            return t;
        }
        getModelAndValidate(t) {
            const e = t instanceof this.$2 ? t.$ProxyState$state : t;
            if (e) {
                if (e instanceof o("WAWebBaseModel").BaseModel) {
                    return e;
                }
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " given invalid object for ",
                    ": ",
                    ""
                ])), this.componentName, this.name, d(e)).sendLogs("state-hoc-error");
                return null;
            }
            if ((n("cr:11133") == null ? undefined : n("cr:11133")()) === true ? o("WAWebSocketModel").Socket.hasSynced === true : o("WAWebStreamModel").Stream.mode === o("WAWebStreamModel").StreamMode.MAIN) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " was not supplied the ",
                    " model with keys ",
                    "."
                ])), this.componentName, this.name, String(this.keys)).sendLogs("state-hoc-error");
            }
            return null;
        }
        createProxy(t) {
            return new this.$3(t);
        }
        attachConcern({ model, onChange, proxyBitMask }) {
            model.incObservers(!this.$1);
            model.mirror.addListener(onChange, proxyBitMask, this);
        }
        detachConcern(t, n) {
            t.decObservers();
            t.mirror.removeListener(n);
        }
    }
    l.default = p;
}, 98);