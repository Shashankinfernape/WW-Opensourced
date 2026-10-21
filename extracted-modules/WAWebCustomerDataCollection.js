__d("WAWebCustomerDataCollection", [
    "WAWebBaseCollection",
    "WAWebContactType",
    "WAWebCustomerDataModel",
    "WAWebWidToJid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.queriedChatJids = new Set;
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.maybeGetCustomerDataByChatJid = function(t) {
            const e = this.findFirst(function(e) {
                return e.chatJid === t;
            });
            return e ?? null;
        };
        t_prototype.isCustomer = function(t) {
            const e = this.maybeGetCustomerDataByChatJid(o("WAWebWidToJid").widToChatJid(t.id));
            return e != null && e.contactType === o("WAWebContactType").ContactType.CUSTOMER;
        };
        t_prototype.getCustomerModels = function() {
            return this.getModelsArray().filter((e)=>e.contactType === o("WAWebContactType").ContactType.CUSTOMER);
        };
        t_prototype.hasCachedQueryForChatJid = function(t) {
            return this.queriedChatJids.has(t);
        };
        t_prototype.updateCollectionFromDB = function(t, n) {
            this.queriedChatJids.add(t);
            if (n != null) {
                this.add(new (o("WAWebCustomerDataModel")).CustomerData(babelHelpers.extends({}, n, {
                    id: n.chatJid
                })), {
                    merge: true
                });
            }
        };
        t_prototype.initializeFromCache = function(t) {
            if (t.length !== 0) {
                this.add(t.map((e)=>new (o("WAWebCustomerDataModel")).CustomerData(babelHelpers.extends({}, e, {
                        id: e.chatJid
                    }))), {
                    merge: true
                });
            }
        };
        t_prototype.purgeCustomerDataByChatJid = function(t) {
            const e = this.where({
                chatJid: t
            });
            this.remove(e);
            this.queriedChatJids.delete(t);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCustomerDataModel").CustomerData;
    const s = new e;
    l.CustomerDataCollection = s;
}, 98);