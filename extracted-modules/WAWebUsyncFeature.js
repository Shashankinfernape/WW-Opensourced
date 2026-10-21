__d("WAWebUsyncFeature", [
    "WAWap",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        document: (e = o("WAWap")).wap("document", null),
        encrypt: e.wap("encrypt", null),
        encrypt_blist: e.wap("encrypt_blist", null),
        encrypt_contact: e.wap("encrypt_contact", null),
        encrypt_group_gen2: e.wap("encrypt_group_gen2", null),
        encrypt_image: e.wap("encrypt_image", null),
        encrypt_location: e.wap("encrypt_location", null),
        encrypt_url: e.wap("encrypt_url", null),
        encrypt_v2: e.wap("encrypt_v2", null),
        voip: e.wap("voip", null),
        multi_agent: e.wap("multi_agent", null)
    };
    function u(e) {
        e.assertTag("feature");
        const t = e.maybeChild("error");
        if (t) {
            return {
                errorCode: t.attrInt("code"),
                errorText: t.attrString("text")
            };
        }
        const n = {};
        Object.keys(s).forEach((t)=>{
            const r = e.maybeChild(t);
            if (r) {
                n[t] = r.attrString("value");
            }
        });
        return n;
    }
    class c {
        constructor(e){
            this.queries = e;
            if (e.length === 0) {
                throw r("err")("must specify at least one query");
            }
        }
        getName() {
            return "feature";
        }
        getQueryElement() {
            return o("WAWap").wap("feature", null, this.queries && this.queries.map((e)=>s[e]));
        }
        getUserElement(t) {
            return null;
        }
    }
    l.featureParser = u;
    l.USyncFeaturesProtocol = c;
}, 98);