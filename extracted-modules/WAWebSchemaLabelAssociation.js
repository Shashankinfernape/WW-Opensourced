__d("WAWebSchemaLabelAssociation", [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        Jid: "jid"
    });
    function s({ associationId: t, labelId: n, type }) {
        return [
            n,
            t,
            type
        ];
    }
    function u(e) {
        return e[1];
    }
    function c(e) {
        return e[2];
    }
    function d(e) {
        return {
            labelId: e[0],
            associationId: e[1],
            type: e[2]
        };
    }
    function m(e, t) {
        return [
            e[0],
            t,
            e[2]
        ];
    }
    function p() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositeIndex: r, addCompositePrimaryKey: a, addIndex: i } = t;
        e.add("label-association").version(o("WAWebModelStorageVersions").labelAssociationCreateTable(), [
            a([
                "labelId",
                "associationId",
                "type"
            ]),
            n("pendingImportLeadStage"),
            i("labelId"),
            r([
                "associationId",
                "type"
            ])
        ]).view(function(e) {
            return e;
        });
    }
    function _() {
        return o("WAWebModelStorageUtils").getStorage().table("label-association");
    }
    l.LabelAssociationType = e;
    l.createLabelAssociationPrimaryKey = s;
    l.getAssociationIdFromPrimaryKey = u;
    l.getAssociationTypeFromPrimaryKey = c;
    l.createLabelAssociationRowFromPrimaryKey = d;
    l.replaceAssociationIdInPrimaryKey = m;
    l.addTable = p;
    l.getLabelAssociationTable = _;
}, 98);