__d("WAWebLabelModel", [
    "Promise",
    "WAWebBaseModel",
    "WAWebLabelCollection",
    "WAWebLabelItemCollection",
    "WAWebListItemParentType"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.name = o("WAWebBaseModel").prop();
            e.colorIndex = o("WAWebBaseModel").prop();
            e.color = o("WAWebBaseModel").prop();
            e.count = o("WAWebBaseModel").prop(0);
            e.chatCount = o("WAWebBaseModel").prop(0);
            e.orderIndex = o("WAWebBaseModel").prop();
            e.predefinedId = o("WAWebBaseModel").prop();
            e.isActive = o("WAWebBaseModel").prop();
            e.type = o("WAWebBaseModel").prop();
            e.isImmutable = o("WAWebBaseModel").prop();
            e.stale = o("WAWebBaseModel").session(true);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            this.labelItemCollection = new (o("WAWebLabelItemCollection")).LabelItemCollection;
            this.$LabelImpl$p_1();
            this.listenTo(this, "change:name", function() {
                return e.$LabelImpl$p_1();
            });
            this.listenTo(this, "change:color", function() {
                return e.$LabelImpl$p_1();
            });
            this.listenTo(this, "change:colorIndex", function() {
                return e.$LabelImpl$p_1();
            });
            this.listenTo(this, "change:count", function() {
                return e.$LabelImpl$p_1();
            });
            this.listenTo(this.labelItemCollection, "add", function() {
                return e.$LabelImpl$p_2();
            });
            this.listenTo(this.labelItemCollection, "remove", function() {
                return e.$LabelImpl$p_2();
            });
            if (this.orderIndex == null) {
                this.orderIndex = Number(this.id);
            }
        };
        r_prototype.findImpl = function(r) {
            return (e || (e = n("Promise"))).resolve({
                id: r
            });
        };
        r_prototype.$LabelImpl$p_1 = function() {
            if (this.name) {
                o("WAWebLabelCollection").LabelCollection.trigger(`label_updated_${this.id}`);
            }
        };
        r_prototype.$LabelImpl$p_2 = function() {
            const e = this.labelItemCollection.reduce((acc, item)=>{
                switch(item.parentType){
                    case o("WAWebListItemParentType").LabelItemParentType.Chat:
                        return acc + 1;
                    default:
                        item.parentType;
                        return acc;
                }
            }, 0);
            this.chatCount = e;
            this.count = e;
        };
        return r;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "label";
    const u = o("WAWebBaseModel").defineModel(s);
    l.Label = u;
}, 98);