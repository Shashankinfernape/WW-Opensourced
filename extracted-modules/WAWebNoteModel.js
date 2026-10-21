__d("WAWebNoteModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.type = o("WAWebBaseModel").prop();
            t.chatJid = o("WAWebBaseModel").prop();
            t.content = o("WAWebBaseModel").prop();
            t.createdAt = o("WAWebBaseModel").prop();
            t.modifiedAt = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "note";
    const s = o("WAWebBaseModel").defineModel(e);
    l.Note = s;
}, 98);