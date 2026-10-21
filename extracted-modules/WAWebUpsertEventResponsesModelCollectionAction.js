__d("WAWebUpsertEventResponsesModelCollectionAction", [
    "WAAckLevel",
    "WAWebEventResponseCollection",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebPrepareEventResponsesToUpsert",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = r("compactMap")(t || [], function(e) {
            return o("WAWebEventResponseCollection").EventResponseCollection.get(e);
        });
        const a = [];
        const i = o("WAWebPrepareEventResponsesToUpsert").getNewestEventResponses(e);
        i.forEach((e)=>{
            const t = r("nullthrows")(o("WAWebMsgGetters").getSender(e));
            const i = o("WAWebEventResponseCollection").EventResponseCollection.byParent(e.parentMsgKey).findFirst(function({ sender }) {
                return r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(sender, t));
            });
            if (i != null && !i.id.equals(e.id)) {
                n.push(i);
            }
            a.push(o("WAWebEventResponseCollection").createEventResponseModel(babelHelpers.extends({}, e, {
                isSendFailure: e.ack != null && e.ack < o("WAAckLevel").ACK.CLOCK && o("WAWebUserPrefsMeUser").isMeAccount(t)
            })));
        });
        if (a.length > 0) {
            o("WAWebEventResponseCollection").EventResponseCollection.add(a, {
                merge: true
            });
        }
        if (n.length > 0) {
            o("WAWebEventResponseCollection").EventResponseCollection.remove(n);
        }
    }
    l.upsertEventResponsesModelCollection = e;
}, 98);