__d("WAWebConversionTupleModel", [
    "WABinary",
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebBaseModel",
    "WAWebConversionTupleCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = [
        "conversionData"
    ];
    let s;
    const u = 604800;
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.conversionData = o("WAWebBaseModel").prop();
            e.conversionSource = o("WAWebBaseModel").prop();
            e.ctwaSignals = o("WAWebBaseModel").prop();
            e.sourceId = o("WAWebBaseModel").prop();
            e.conversationDepth = o("WAWebBaseModel").prop();
            e.conversationRepeat = o("WAWebBaseModel").prop();
            e.lastMessageFromMe = o("WAWebBaseModel").prop();
            e.fromMe = o("WAWebBaseModel").prop();
            e.timestamp = o("WAWebBaseModel").prop(function() {
                return o("WATimeUtils").unixTime();
            });
            e.alarmId = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            this.listenTo(this, "change:timestamp", function() {
                return e.$ConversionTupleImpl$p_1();
            });
            this.$ConversionTupleImpl$p_1();
        };
        n_prototype.$ConversionTupleImpl$p_1 = function() {
            const e = this;
            const t = this.timestamp + u;
            if (t < 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid conversionTuple timer"
                ])));
                this.delete();
                return;
            }
            this.alarmId = r("WAWebAlarm").setLocalTimeout(function() {
                e.delete();
            }, t * 1000, this.alarmId);
        };
        n_prototype.$ConversionTupleImpl$p_2 = function() {
            if (this.alarmId != null) {
                r("WAWebAlarm").clearTimeout(this.alarmId);
                this.alarmId = undefined;
            }
        };
        n_prototype.toJSON = function() {
            const t = this.serialize();
            const t_conversionData = t.conversionData;
            const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            if (t_conversionData instanceof ArrayBuffer) {
                const a = new (o("WABinary")).Binary(t_conversionData);
                r.conversionData = a.readString(t_conversionData.byteLength);
            }
            return r;
        };
        n_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.getCollection().remove(this.id);
            this.$ConversionTupleImpl$p_2();
        };
        n_prototype.getCollection = function() {
            return r("WAWebConversionTupleCollection");
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "conversionTuple";
    c.idClass = r("WAWebWid");
    const d = o("WAWebBaseModel").defineModel(c);
    l.ConversionTupleExpiry = u;
    l.ConversionTuple = d;
}, 98);