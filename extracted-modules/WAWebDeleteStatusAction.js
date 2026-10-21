__d("WAWebDeleteStatusAction", [
    "Promise",
    "WALogger",
    "WAWebContactGetters",
    "WAWebDBMessageDelete",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebStatusCollection",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return o("WAWebContactGetters").getIsNewsletter(e.contact) && !e.isExpired();
    }
    function d() {
        const t = o("WAWebStatusCollection").StatusCollection.filter((e)=>{
            let t;
            return !o("WAWebUserPrefsMeUser").isMeAccount(e.contact.id) && !o("WAWebFrontendContactGetters").getIsMyContact(e.contact) && (!o("WAWebContactGetters").getIsGroup(e.contact) || (r("WAWebGroupMetadataCollection") == null || (t = r("WAWebGroupMetadataCollection").get(e.contact.id)) == null || (t = t.participants) == null ? undefined : t.iAmMember()) !== true) && !c(e) && !o("WAWebContactGetters").getIsPSA(e.contact);
        });
        const n = t.reduce((acc, item)=>{
            const n = acc.concat(item.msgs.toArray());
            item.delete();
            return n;
        }, []);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "clearStatusForNonAddressBook: remove ",
            " status "
        ])), n.length);
        return o("WAWebDBMessageDelete").removeStatusMessage(n);
    }
    function m(e) {
        const t = o("WAWebStatusCollection").StatusCollection.get(e);
        if (t == null) {
            return (u || (u = n("Promise"))).resolve();
        }
        const r = t.msgs.toArray();
        t.delete();
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "deleteStatusForContact: remove ",
            " status msgs "
        ])), r.length);
        return o("WAWebDBMessageDelete").removeStatusMessage(r);
    }
    l.clearStatusForRemovedContact = d;
    l.deleteStatusForContact = m;
}, 98);