__d("WAWebCommandCollection", [
    "WAWebActions",
    "WAWebBaseCollection",
    "WAWebCommandGetters",
    "WAWebCommandModel",
    "WAWebL10NAccentFold",
    "WAWebSettings"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const s = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.initializeCommands();
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebCommandGetters").clearCommandGetterCacheFor(e);
                }
            });
            return t;
        };
        t_prototype.reset = function() {
            this.forEach(o("WAWebCommandGetters").clearCommandGetterCacheFor);
            e.prototype.reset.call(this);
        };
        t_prototype.initializeCommands = function() {
            this.addCommandsFromActions();
            this.addCommandsFromSettings();
        };
        t_prototype.query = function(t) {
            const e = o("WAWebL10NAccentFold").accentFold(t.query.toLowerCase());
            return this.filter((n)=>{
                const r = o("WAWebL10NAccentFold").accentFold(n.label.toLowerCase());
                const a = r.includes(e);
                const i = t.type === n.type;
                return a && i;
            });
        };
        t_prototype.addCommandsFromActions = function() {
            for (const e of o("WAWebActions").Action.members()){
                this.add({
                    name: e,
                    id: e,
                    label: o("WAWebActions").getLabel(e).toString(),
                    type: "action"
                });
            }
        };
        t_prototype.addCommandsFromSettings = function() {
            for (const e of Array.from(o("WAWebSettings").SettingsSteps.members()).filter((e)=>o("WAWebSettings").isSettingAvailable(e))){
                this.add({
                    name: e,
                    id: e,
                    label: o("WAWebSettings").getLabel(e).toString(),
                    type: "setting"
                });
            }
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebCommandModel");
    const u = new s;
    l.CommandCollection = u;
}, 98);