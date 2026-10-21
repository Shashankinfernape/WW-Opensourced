__d("WAWebMexFetchNewsletterMessageReactionSenderListJob", [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterMessageReactionSenderListJobQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexFetchNewsletterMessageReactionSenderListJobQuery.graphql");
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, server_id) {
            const a = {
                input: {
                    id: e,
                    server_id
                }
            };
            const i = yield o("WAWebMexClient").fetchQuery(u, a);
            const i_xwa2_newsletters_reaction_sender_list = i.xwa2_newsletters_reaction_sender_list;
            if (i_xwa2_newsletters_reaction_sender_list == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][NEWSLETTER] fetch reaction senders failed nid=",
                    " msgId=",
                    ""
                ])), e, server_id).tags("GQL", "mex");
                return null;
            }
            return {
                reactions: i_xwa2_newsletters_reaction_sender_list.reactions?.map(function({ reaction_code, sender_list }) {
                    return {
                        reactionCode: reaction_code,
                        senderList: sender_list == null ? undefined : sender_list.edges.map(({ node })=>{
                            const { id, profile_pic_direct_path } = node;
                            const a = id != null ? o("WAWebWidFactory").createWid(id) : null;
                            return {
                                id: a,
                                profileUrl: profile_pic_direct_path
                            };
                        })
                    };
                }) ?? []
            };
        });
        return d.apply(this, arguments);
    }
    l.mexFetchNewsletterMessageReactionSenderList = c;
}, 98);