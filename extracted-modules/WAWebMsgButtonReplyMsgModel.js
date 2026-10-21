__d("WAWebMsgButtonReplyMsgModel", [
    "WAWebBaseModel",
    "WAWebMsgKey"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.unsyncedButtonReplies = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "msgButtonReplyMsg";
    e.idClass = r("WAWebMsgKey");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);