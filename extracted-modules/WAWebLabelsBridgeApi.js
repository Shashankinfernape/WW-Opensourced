__d("WAWebLabelsBridgeApi", [
    "JSResourceForInteraction",
    "WAWebBIzLabelReorderAction",
    "WAWebBizLabelUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebLabelCollection",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        applyLabelAssociationChanges: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ additions, removals }) {
                for (const a of removals){
                    const { labelId, parentId, parentType } = a;
                    o("WAWebBizLabelUtils").removeLabelFromCollection(parentId, labelId, parentType);
                }
                for (const u of additions){
                    const { labels, parentId, parentType } = u;
                    o("WAWebBizLabelUtils").addToLabelCollection(parentId, labels, parentType);
                }
                if (additions.some(({ detectedOutcomeSignalEmission })=>detectedOutcomeSignalEmission != null)) {
                    const p = yield r("JSResourceForInteraction")("WAWebSmbMarkAsXLabelAction").__setRef("WAWebLabelsBridgeApi").load();
                    const _ = p.emitDetectedOutcomeSignalsOnReceive;
                    for (const f of additions){
                        const { detectedOutcomeSignalEmission, parentId } = f;
                        if (detectedOutcomeSignalEmission != null) {
                            _(parentId, detectedOutcomeSignalEmission);
                        }
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        reorderLabels: function({ sortedLabelIds }) {
            o("WAWebBIzLabelReorderAction").reorderLabelsAction(sortedLabelIds);
        },
        restoreLabels: function() {
            return o("WAWebSchemaLabel").getLabelTable().all().then((e)=>{
                o("WAWebLabelCollection").LabelCollection.initializeFromCache(e);
            });
        },
        restoreLabelAssociations: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = [];
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "label",
                    "label-association",
                    "chat"
                ], (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const r = yield n.all();
                        const a = r.map((e)=>e.id);
                        const i = yield o("WAWebDBLabelAssociationDatabaseApi").queryLabelAssociationsForLabelIds(a);
                        e.push(...i);
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
                if (e.length > 0) {
                    o("WAWebLabelCollection").LabelCollection.initializeAssociationsFromCache(e);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.LabelsBridgeApi = e;
}, 98);