__d("WAWebBizLabelEditingAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelDatabaseApi",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelJidSync",
    "WAWebLabelSync",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const predefinedId = 0;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            let i;
            try {
                i = yield o("WAWebDBLabelDatabaseApi").getNextLabelId();
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "labelAddAction: failed to generate next label id with error ",
                    ""
                ])), error).sendLogs("labelAddAction-failed");
                return;
            }
            const l = o("WATimeUtils").unixTime();
            const predefinedId = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t);
            const isActive = true;
            const CUSTOM = o("WAWebSchemaLabel").ListType.CUSTOM;
            const m = r("WAWebLabelSync").getLabelMutation({
                color: a,
                deleted: false,
                id: String(i),
                isActive,
                name: t,
                predefinedId,
                timestamp: l,
                type: CUSTOM
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] labelAddAction: id ",
                ", mutation generated"
            ])), i);
            const p = {
                id: String(i),
                name: t,
                colorIndex: a,
                predefinedId,
                isActive,
                type: CUSTOM
            };
            yield o("WAWebSyncdCoreApi").lockForSync([
                "label"
            ], [
                m
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
            }));
            o("WAWebLabelCollection").LabelCollection.add(babelHelpers.extends({}, p));
            return i;
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r, o, a) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, isActive, s) {
            const c = o("WATimeUtils").unixTime();
            const m = r("WAWebLabelSync").getLabelMutation({
                color: i,
                deleted: false,
                id: e,
                isActive,
                name: t,
                predefinedId: a ?? predefinedId,
                timestamp: c,
                type: s
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] labelEditAction: id ",
                ", mutation generated"
            ])), e);
            const p = {
                id: e,
                name: t,
                colorIndex: i,
                predefinedId: a ?? null,
                isActive: isActive ?? undefined,
                type: s ?? undefined
            };
            yield o("WAWebSyncdCoreApi").lockForSync([
                "label"
            ], [
                m
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBLabelDatabaseApi").addOrEditLabel(p);
            }));
            o("WAWebLabelCollection").LabelCollection.add(babelHelpers.extends({}, p), {
                merge: true
            });
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ color, labelId, name }) {
            const l = yield o("WAWebDBLabelAssociationDatabaseApi").queryLabelAssociationsForLabelIds([
                labelId
            ]);
            const s = o("WATimeUtils").unixTime();
            const u = r("WAWebLabelSync").getLabelMutation({
                color,
                deleted: true,
                id: labelId,
                isActive: undefined,
                name,
                predefinedId,
                timestamp: s,
                type: undefined
            });
            let m = [];
            const p = l.filter((e)=>e.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid);
            if (p.length > 0) {
                m = yield r("WAWebLabelJidSync").createLabelAssociationMutations([
                    {
                        id: labelId,
                        type: "remove"
                    }
                ], p.map((e)=>({
                        labelAssociationType: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
                        modelId: e.associationId,
                        mutationIndexSegments: [
                            e.associationId
                        ]
                    })));
            }
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] labelDeleteAction: id ",
                ", mutation generated"
            ])), labelId);
            yield o("WAWebSyncdCoreApi").lockForSync([
                "label",
                "label-association",
                "chat"
            ], [
                u
            ].concat(m), n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBLabelDatabaseApi").removeLabel(labelId);
                if (l.length > 0) {
                    yield o("WAWebDBLabelAssociationDatabaseApi").removeLabelAssociations(l.map((e)=>o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey(e)));
                }
            }));
            o("WAWebLabelCollection").LabelCollection.remove(labelId);
        });
        return h.apply(this, arguments);
    }
    l.labelAddAction = m;
    l.labelEditAction = _;
    l.labelDeleteAction = g;
}, 98);