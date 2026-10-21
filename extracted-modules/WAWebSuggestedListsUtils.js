__d("WAWebSuggestedListsUtils", [
    "WAWebLabelCollection",
    "WAWebLabelConstants"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        {
            predefinedId: (e = o("WAWebLabelConstants")).PREDEFINED_LABEL_IDS.NEW_CUSTOMER,
            name: e.PREDEFINED_LABEL_NAMES.NEW_CUSTOMER,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.NEW_CUSTOMER),
            colorIndex: 1
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.NEW_ORDER,
            name: e.PREDEFINED_LABEL_NAMES.NEW_ORDER,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.NEW_ORDER),
            colorIndex: 2
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.PENDING_PAYMENT,
            name: e.PREDEFINED_LABEL_NAMES.PENDING_PAYMENT,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.PENDING_PAYMENT),
            colorIndex: 0
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.FOLLOW_UP,
            name: e.PREDEFINED_LABEL_NAMES.FOLLOW_UP,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.FOLLOW_UP),
            colorIndex: 12
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.PAID,
            name: e.PREDEFINED_LABEL_NAMES.PAID,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.PAID),
            colorIndex: 3
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.ORDER_COMPLETE,
            name: e.PREDEFINED_LABEL_NAMES.ORDER_COMPLETE,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.ORDER_COMPLETE),
            colorIndex: 5
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.LEAD,
            name: e.PREDEFINED_LABEL_NAMES.LEAD,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.LEAD),
            colorIndex: 18
        },
        {
            predefinedId: e.PREDEFINED_LABEL_IDS.IMPORTANT,
            name: e.PREDEFINED_LABEL_NAMES.IMPORTANT,
            displayName: e.mapPredefinedIdToLabelName(e.PREDEFINED_LABEL_IDS.IMPORTANT),
            colorIndex: 11
        }
    ];
    function u(e = "") {
        const t = new Set;
        const n = new Set;
        for (const r of o("WAWebLabelCollection").LabelCollection.toArray()){
            if (r.predefinedId != null) {
                t.add(r.predefinedId);
            }
            if (r.name != null) {
                n.add(r.name.toLowerCase());
            }
        }
        const a = s.filter((e)=>!t.has(e.predefinedId) && !n.has(e.name.toLowerCase()));
        const i = e.trim().toLowerCase();
        if (i === "") {
            return a;
        }
        return a.filter((e)=>(e.displayName?.toString() ?? e.name).toLowerCase().includes(i));
    }
    l.getSuggestedLists = u;
}, 98);