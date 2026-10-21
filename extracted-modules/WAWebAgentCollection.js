__d("WAWebAgentCollection", [
    "WAWebAgentModel",
    "WAWebAgentModelUtils",
    "WAWebBaseCollection",
    "WAWebConnModel",
    "WAWebSyncdOrphan",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.$AgentCollectionImpl$p_1 = new Map;
            t.triggerDeviceIdMapUpdate = function() {
                t.$AgentCollectionImpl$p_1 = new Map;
                t.getModelsArray().forEach((e)=>{
                    t.$AgentCollectionImpl$p_1.set(e.deviceId, e);
                });
            };
            t.on("remove reset", t.triggerDeviceIdMapUpdate);
            o("WAWebConnModel").Conn.on("change:pushname", function() {
                const e = t.getModelsArray().filter((e)=>e.deviceId === o("WAWebAgentModelUtils").PRIMARY_DEVICE_ID)[0];
                if (e != null) {
                    e.set("name", o("WAWebAgentModelUtils").getFormattedAgentNameForAgent(e));
                }
            });
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.add = function(n, a) {
            const t = e.prototype.add.call(this, n, a);
            this.triggerDeviceIdMapUpdate();
            r("promiseDone")(o("WAWebSyncdOrphan").checkOrphanAgents(t.map((e)=>e?.id ?? "")));
            return t;
        };
        t_prototype.getByDeviceId = function(t) {
            return this.$AgentCollectionImpl$p_1.get(t);
        };
        t_prototype.initializeFromCache = function(t) {
            this.add(t, {
                merge: true
            });
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebAgentModel").Agent;
    const s = new e;
    l.AgentCollection = s;
}, 98);