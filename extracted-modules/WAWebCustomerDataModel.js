__d("WAWebCustomerDataModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.chatJid = o("WAWebBaseModel").prop();
            t.contactType = o("WAWebBaseModel").prop();
            t.email = o("WAWebBaseModel").prop();
            t.altPhoneNumbers = o("WAWebBaseModel").prop();
            t.birthday = o("WAWebBaseModel").prop();
            t.birthdayIso = o("WAWebBaseModel").session(null);
            t.address = o("WAWebBaseModel").prop();
            t.acquisitionSource = o("WAWebBaseModel").prop();
            t.leadStage = o("WAWebBaseModel").prop();
            t.lastOrder = o("WAWebBaseModel").prop();
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
    e.Proxy = "customerData2";
    const s = o("WAWebBaseModel").defineModel(e);
    l.CustomerData = s;
}, 98);