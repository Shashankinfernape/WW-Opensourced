import React from 'react';
import { Icon } from '../icons/Icon';

export interface ChatSummary {
  id: string;
  name: string;
  initial: string;
  color: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
  ack?: 0 | 1 | 2 | 3;
  isPinned?: boolean;
  isMuted?: boolean;
  isTyping?: boolean;
  draft?: string;
}

interface ChatListPanelProps {
  chats: ChatSummary[];
  selectedChatId: string | null;
  onSelectChat: (id: string) => void;
  filter: 'all' | 'unread' | 'favourites' | 'groups';
  onFilterChange: (f: 'all' | 'unread' | 'favourites' | 'groups') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenArchived?: () => void;
}

export const ChatListPanel: React.FC<ChatListPanelProps> = ({
  chats,
  selectedChatId,
  onSelectChat,
  filter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  onOpenArchived,
}) => {
  const filteredChats = chats.filter((c) => {
    if (filter === 'unread' && !c.unreadCount) return false;
    if (searchQuery.trim() && !c.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div
      id="side"
      className="x78zum5 x1n2onr6 xdt5ytf x5yr21d x6ikm8r x10wlt62 x1280gxy"
      style={{
        width: '100%',
        flex: '1 1 0',
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'var(--panel-background, #111b21)',
        borderRight: '1px solid var(--border-default, rgba(134, 150, 160, 0.15))',
      }}
    >
      <div className="x1c4vz4f x2lah0s xdl72j9 x1280gxy">
        {/* Search input container */}
        <div
          data-testid="chat-list-search-container"
          className="x1n2onr6 x11uqc5h x9f619 x78zum5 x1okw0bk xdj0cbh xexx8yu x18d9i69 x1280gxy x1qhh985 x1sy0etr x1phvje8 xcldk2z x7a106z x4tpdpg"
        >
          <div className="x1n2onr6 x9f619 x98rzlu x1plvlek xryxfnj">
            <div className="x1gxa6cn xa0aww2">
              <div dir="ltr" className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl">
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x5yr21d xh8yej3">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1q0g3np xh8yej3 x78zum5 x6s0dn4 x9f619 x4wrhlh x1w9h8z1 xn2mukg x1yo0frk x2b5yea x1vqgdyp xq91m4v x1fxkg6m x1x15s1u x17mvztg x1bsbh89 xxyb0qf x8qhm2e">
                    <div className="html-div xdj266r xat24cr xexx8yu xyri2b x18d9i69 x1c1uobl xw4jnvo x1qx5ct2 x1yzq74r xv4jd37 xhslqc4">
                      <span aria-hidden="true">
                        <Icon name="ic-search" size={20} />
                      </span>
                    </div>
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1iyjqo2">
                      <input
                        role="textbox"
                        aria-label="Search or start a new chat"
                        autoComplete="off"
                        dir="ltr"
                        placeholder="Search or start a new chat"
                        className="html-input xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x1c1uobl x14ug900 xjbqb8w x1v8p93f x1o3jo1z x16stqrj xv5lvn5 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1qx5ct2 xlyipyv xh8yej3 x1uvtmcs x1hcheoe x1nzty39 xkrh14z x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        data-tab={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Pills Tablist (Direct child 2 of #side) */}
      <div
        tabIndex={-1}
        role="tablist"
        aria-label="chat-list-filters"
        className="x1iorvi4 x10b6aqq x106a9eq x2vl965 x1280gxy x78zum5 x1q0g3np xozqiw3 x2lah0s xfex06f xeuugli x2lwn1j x6ikm8r x10wlt62"
      >
          <div hidden={true} />
          {/* All Filter */}
          <div>
            <div data-testid="filter-button" role="none">
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <button
                  aria-selected={filter === 'all'}
                  aria-controls="chat-list"
                  data-tab="3"
                  id="all-filter"
                  role="tab"
                  tabIndex={0}
                  type="button"
                  onClick={() => onFilterChange('all')}
                  className={`html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1n2onr6 x1ypdohk x1s928wv x1j6awrg x1m1drc7 x17cx49 xnbfe2x x1xrz1ek x77mdso x1fidlvn x1nys2zw x14gt54a x2q1x1w xmf22ne ${filter === 'all' ? 'x1abdmlv xk4n5i7' : 'xjbqb8w xhslqc4'} xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xgqtt45 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x10w6t97 x1iw51ew xde1mab`}
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x1iyjqo2 x6s0dn4 x78zum5 xl56j7k x1vjfegm">
                        <span title="All">
                          <span
                            className={`x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw ${filter === 'all' ? 'xk4n5i7' : 'xhslqc4'} x1qh4rir x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu`}
                            style={{
                              ['--x-fontSize' as string]: '14px',
                              ['--x-lineHeight' as string]: '9.9531px',
                              ['--x-8dd7yt' as string]: '-0.0137em',
                              ['--x-hxtmnb' as string]: '0.0137em',
                            }}
                          >
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                                All
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>

          {/* Unread Filter */}
          <div>
            <div data-testid="filter-button" role="none">
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <button
                  aria-selected={filter === 'unread'}
                  aria-controls="chat-list"
                  id="label_item_1"
                  role="tab"
                  tabIndex={0}
                  type="button"
                  onClick={() => onFilterChange('unread')}
                  className={`html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1n2onr6 x1ypdohk x1s928wv x1j6awrg x1m1drc7 x17cx49 xnbfe2x x1xrz1ek x77mdso x1fidlvn x1nys2zw x14gt54a x2q1x1w xmf22ne ${filter === 'unread' ? 'x1abdmlv xk4n5i7' : 'xjbqb8w xhslqc4'} xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xgqtt45 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x10w6t97 x1iw51ew xde1mab`}
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x1iyjqo2 x6s0dn4 x78zum5 xl56j7k x1vjfegm">
                        <span title="Unread">
                          <span
                            className={`x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw ${filter === 'unread' ? 'xk4n5i7' : 'xhslqc4'} x1qh4rir x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu`}
                            style={{
                              ['--x-fontSize' as string]: '14px',
                              ['--x-lineHeight' as string]: '9.9531px',
                              ['--x-8dd7yt' as string]: '-0.0137em',
                              ['--x-hxtmnb' as string]: '0.0137em',
                            }}
                          >
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                                Unread
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>

          {/* Favourites Filter */}
          <div>
            <div data-testid="filter-button" role="none">
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <button
                  aria-selected={filter === 'favourites'}
                  aria-controls="chat-list"
                  id="label_item_2"
                  role="tab"
                  tabIndex={0}
                  type="button"
                  onClick={() => onFilterChange('favourites')}
                  className={`html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1n2onr6 x1ypdohk x1s928wv x1j6awrg x1m1drc7 x17cx49 xnbfe2x x1xrz1ek x77mdso x1fidlvn x1nys2zw x14gt54a x2q1x1w xmf22ne ${filter === 'favourites' ? 'x1abdmlv xk4n5i7' : 'xjbqb8w xhslqc4'} xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xgqtt45 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x10w6t97 x1iw51ew xde1mab`}
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x1iyjqo2 x6s0dn4 x78zum5 xl56j7k x1vjfegm">
                        <span title="Favourites">
                          <span
                            className={`x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw ${filter === 'favourites' ? 'xk4n5i7' : 'xhslqc4'} x1qh4rir x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu`}
                            style={{
                              ['--x-fontSize' as string]: '14px',
                              ['--x-lineHeight' as string]: '9.9531px',
                              ['--x-8dd7yt' as string]: '-0.0137em',
                              ['--x-hxtmnb' as string]: '0.0137em',
                            }}
                          >
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                                Favourites
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>

          {/* Groups Filter */}
          <div>
            <div data-testid="filter-button" role="none">
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <button
                  aria-selected={filter === 'groups'}
                  aria-controls="chat-list"
                  id="label_item_3"
                  role="tab"
                  tabIndex={0}
                  type="button"
                  onClick={() => onFilterChange('groups')}
                  className={`html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu x18d9i69 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1n2onr6 x1ypdohk x1s928wv x1j6awrg x1m1drc7 x17cx49 xnbfe2x x1xrz1ek x77mdso x1fidlvn x1nys2zw x14gt54a x2q1x1w xmf22ne ${filter === 'groups' ? 'x1abdmlv xk4n5i7' : 'xjbqb8w xhslqc4'} xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xgqtt45 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x10w6t97 x1iw51ew xde1mab`}
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x1iyjqo2 x6s0dn4 x78zum5 xl56j7k x1vjfegm">
                        <span title="Groups">
                          <span
                            className={`x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw ${filter === 'groups' ? 'xk4n5i7' : 'xhslqc4'} x1qh4rir x87ps6o x1f6kntn xjb2p0i xfjzk2p x8r4c90 x1ic7a3i x12xpedu`}
                            style={{
                              ['--x-fontSize' as string]: '14px',
                              ['--x-lineHeight' as string]: '9.9531px',
                              ['--x-8dd7yt' as string]: '-0.0137em',
                              ['--x-hxtmnb' as string]: '0.0137em',
                            }}
                          >
                            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x1plvlek xryxfnj x1n2onr6">
                              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                                Groups
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>

          {/* New list (+) button */}
          <div tabIndex={-1} data-tab="3">
            <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
              <button
                aria-selected="false"
                aria-controls="chat-list"
                aria-label="New list"
                id="new-filter"
                role="tab"
                tabIndex={0}
                type="button"
                className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9 x1n2onr6 x1ypdohk x1s928wv x1j6awrg x1m1drc7 x17cx49 xnbfe2x x1xrz1ek x77mdso x1fidlvn x1nys2zw x14gt54a x2q1x1w xmf22ne xjbqb8w xhslqc4 xtnn1bt x9v5kkp xmw7ebm xrdum7p x3oybdh x13t8fmb x11xpdln xum2xem xgqtt45 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x10w6t97 x14qfxbe"
              >
                <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x1iyjqo2 x6s0dn4 x78zum5 xl56j7k x1vjfegm">
                      <span aria-hidden="true" className="x1qx5ct2 xw4jnvo">
                        <Icon name="ic-add" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </span>
          </div>
        </div>

      {/* Empty butterbar span (Child 3 of #side) */}
      <span className="x78zum5 x1c4vz4f x2lah0s xdl72j9 xdt5ytf" data-testid="chat-butterbar" />

      {/* Pane-side Scroll Container */}
      <div
        id="pane-side"
        data-scrolltracepolicy="wa.web.chatlist"
        className="x1n2onr6 x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy"
        style={{ flex: 1, overflowY: 'auto' }}
      >
        {/* Archived Row */}
        <button
          className="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf x10w94by x1qhh985 x14e42zd x1fmog5m xu25z0z x140muxe xo1y3bh xexx8yu xyri2b x18d9i69 x1c1uobl x2lah0s xav9cv8 x4tpdpg x1lziwak x14z9mp xtnn1bt x9v5kkp xmw7ebm xrdum7p"
          tabIndex={0}
          data-tab="4"
          data-testid="chatlist-panel-archived-button"
          aria-disabled="false"
          type="button"
          aria-label="Archived "
          onClick={onOpenArchived}
        >
          <div data-testid="cell-frame-container" className="xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np x1hm9lzh x1sa5p1d x71s49j x1n2onr6 xjbqb8w x3ffywh x1ubxc9n">
            <div className="x78zum5">
              <div className="x6s0dn4 x78zum5 x1c4vz4f x2lah0s xdj266r xexx8yu x18d9i69 x1q3ajuy xbmws1g">
                <div className="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4 x1g3ev5e x3ffywh xhslqc4">
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor">
                      <title>ic-archive</title>
                      <path fill="currentColor" d="M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6.5c0-.25.04-.47.13-.67.08-.2.19-.4.32-.58l1.4-1.7c.13-.18.3-.32.5-.41.2-.1.42-.14.65-.14h12c.23 0 .45.05.65.14.2.09.37.23.5.41l1.4 1.7c.13.18.24.38.32.58.09.2.13.42.13.67V19c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 19h14V8H5v11Zm7-1.43c.13 0 .26-.02.38-.06a.88.88 0 0 0 .32-.21l2.6-2.6a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7.95.95 0 0 0-.7-.28c-.28 0-.52.1-.7.28l-.9.9V11c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 10c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 11v3.2l-.9-.9a.95.95 0 0 0-.7-.28.95.95 0 0 0-.97.97c0 .3.09.53.27.71l2.6 2.6c.1.1.2.17.32.21.12.04.25.06.38.06Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v">
              <div role="group" className="x6s0dn4 x78zum5 xggjnk3 x1yc453h">
                <div data-testid="cell-frame-title" className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm">
                  <span
                    className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i"
                    style={{
                      ['--x-fontSize' as any]: '16px',
                      ['--x-lineHeight' as any]: '11.375px',
                      ['--x-8dd7yt' as any]: '-0.0137em',
                      ['--x-hxtmnb' as any]: '0.0137em',
                    }}
                  >
                    Archived
                  </span>
                </div>
              </div>
            </div>
            <div className="xl56j7k xeuugli x6s0dn4 xamitd3 x9f619 x78zum5 xdl72j9 x1c4vz4f x2lah0s x5yr21d x1hwfens x1q0g3np" />
          </div>
        </button>

        {/* Chat List Virtual Grid */}
        <div data-testid="chat-list" tabIndex={-1}>
          <div
            role="grid"
            aria-label="Chat list"
            className="x1y332i5 x1n2onr6 x6ikm8r x10wlt62 x16ovd2e"
            style={{
              height: `${filteredChats.length * 76}px`,
              position: 'relative',
              width: '100%',
            }}
          >
            {filteredChats.map((chat, idx) => {
              const isSelected = chat.id === selectedChatId;
              return (
                <div
                  key={chat.id}
                  role="row"
                  data-testid={`list-item-${idx}`}
                  className="x10l6tqk xh8yej3 x1g42fcv"
                  style={{
                    height: '76px',
                    transform: `translateY(${idx * 76}px)`,
                    zIndex: 1000 - idx,
                    width: '100%',
                  }}
                >
                  <div
                    role="gridcell"
                    className="x1n2onr6"
                    tabIndex={0}
                    onClick={() => onSelectChat(chat.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div tabIndex={-1} aria-selected={isSelected}>
                      <div
                        data-testid="cell-frame-container"
                        className={`${
                          isSelected ? 'x4wrhlh' : 'x1280gxy'
                        } xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis xb5mbof xiitwr3 x206yn3`}
                        style={{
                          height: '76px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 16px',
                        }}
                      >
                        {/* Avatar: initials circle strictly per rule [DEVIATION] */}
                        <div className="x78zum5" style={{ marginRight: '15px', flexShrink: 0 }}>
                          <div
                            className="x78zum5 x6s0dn4 xl56j7k"
                            style={{
                              width: '48px',
                              height: '48px',
                              borderRadius: '50%',
                              backgroundColor: chat.color,
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 600,
                              fontSize: '18px',
                              userSelect: 'none',
                            }}
                          >
                            {chat.initial}
                          </div>
                        </div>

                        {/* Text info column */}
                        <div
                          className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v"
                          style={{ overflow: 'hidden', flex: 1 }}
                        >
                          {/* Title and Timestamp line */}
                          <div
                            role="gridcell"
                            aria-colindex={2}
                            className="x6s0dn4 x78zum5 xggjnk3 x1yc453h"
                            style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}
                          >
                            <div
                              data-testid="cell-frame-title"
                              className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm"
                            >
                              <span
                                dir="auto"
                                title={chat.name}
                                className="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i xnpuxes"
                                style={{
                                  fontSize: '16px',
                                  color: 'var(--primary, #e9edef)',
                                  fontWeight: 400,
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {chat.name}
                              </span>
                            </div>
                            <div
                              data-testid="cell-frame-primary-detail"
                              className="x1c4vz4f x2lah0s x1pg5gke xdzw4kq x193iq5w x1xxsxie x7r5mf7 x6ikm8r x10wlt62 xlyipyv xuxw1ft x1v5yvga x1s688f"
                            >
                              <span data-testid="chat-list-timestamp" style={{ fontSize: '12px', color: 'var(--secondary, #8696a0)' }}>
                                {chat.time}
                              </span>
                            </div>
                          </div>

                          {/* Secondary line: preview / typing / draft + ack ticks + unread badge + muted/pinned */}
                          <div
                            data-testid="cell-frame-secondary"
                            className="x6s0dn4 x78zum5 x1nxh6w3 x1fc57z9 xr9ek0c xisnujt xhslqc4 x1fcty0u"
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                          >
                            <div
                              className="xjbqb8w x1iyjqo2 x1f6kntn x1fc57z9 x6ikm8r x10wlt62 x1yc453h xlyipyv xuxw1ft xo1l8bm"
                              style={{ display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden' }}
                            >
                              {chat.isTyping ? (
                                <span style={{ fontSize: '14px', color: '#00a884', fontWeight: 500 }}>
                                  typing...
                                </span>
                              ) : chat.draft ? (
                                <span style={{ fontSize: '14px', color: 'var(--secondary, #8696a0)' }}>
                                  <span style={{ color: '#00a884', fontWeight: 500 }}>Draft: </span>
                                  {chat.draft}
                                </span>
                              ) : (
                                <>
                                  {chat.ack != null && (
                                    <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
                                      {chat.ack === 3 ? (
                                        <Icon name="wds-ic-read" size={18} color="var(--icon-ack, #53bdeb)" />
                                      ) : chat.ack === 2 ? (
                                        <Icon name="wds-ic-read" size={18} color="var(--bubble-meta, rgba(233, 237, 239, 0.6))" />
                                      ) : (
                                        <Icon name="msg-check" size={18} color="var(--bubble-meta, rgba(233, 237, 239, 0.6))" />
                                      )}
                                    </span>
                                  )}
                                  <span
                                    data-testid="last-msg-status"
                                    className="x78zum5 x1cy8zhl"
                                    style={{
                                      fontSize: '14px',
                                      color: 'var(--secondary, #8696a0)',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                    }}
                                  >
                                    {chat.lastMessage}
                                  </span>
                                </>
                              )}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                              {chat.isMuted && (
                                <span title="Muted" style={{ display: 'inline-flex', color: 'var(--secondary, #8696a0)' }}>
                                  <Icon name="ic-notifications-off" size={16} />
                                </span>
                              )}
                              {chat.isPinned && (
                                <span title="Pinned chat" style={{ display: 'inline-flex', color: 'var(--secondary, #8696a0)' }}>
                                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                    <path d="M4.5 2a.5.5 0 0 0-.5.5v2.879a1.5 1.5 0 0 1-.44 1.06L2.354 7.646a.5.5 0 0 0 .353.854H7v5.5a.5.5 0 0 0 1 0V8.5h4.293a.5.5 0 0 0 .353-.854L11.44 6.44a1.5 1.5 0 0 1-.44-1.06V2.5a.5.5 0 0 0-.5-.5h-6z"/>
                                  </svg>
                                </span>
                              )}
                              {Boolean(chat.unreadCount && chat.unreadCount > 0) && (
                                <div
                                  role="gridcell"
                                  aria-colindex={1}
                                  className="xhslqc4 x1c4vz4f x2lah0s x1pg5gke x1fc57z9 xdzw4kq x193iq5w"
                                >
                                  <span
                                    data-testid="icon-unread-count"
                                    className="x1rg5ohu x1gxa6cn x1j8ymqv xa0aww2 x4tra6z x1pse0pq x16dsc37 xlup9mm x15kz4h8 x2b8uid xt8t1vi x1xc408v x129tdwq x15urzxu xyp3urf"
                                    style={{
                                      backgroundColor: '#00a884',
                                      color: '#111b21',
                                      borderRadius: '10px',
                                      padding: '1px 6px',
                                      fontSize: '12px',
                                      fontWeight: 600,
                                    }}
                                  >
                                    {chat.unreadCount}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* E2E encryption notice at bottom of chatlist */}
        <div className="x9f619 x78zum5 x6s0dn4 xl56j7k xcxhlts x1ys307a x1fqp7bg xyqm7xq x889kno x178xt8z x13fuv20 xx42vgk x14ug900" data-testid="chatlist-e2e-message" style={{ height: '29px' }}>
          <div className="x2b8uid xl56j7k x78zum5">
            <div className="x1pg5gke x1fcty0u xvq8zen x1mzt3pk xeaf4i8" style={{ display: 'flex', alignItems: 'center' }}>
              <span aria-hidden="true" className="xvijh9v x1p8j9ns"><Icon name="ic-lock" size={12} color="var(--secondary, #8696a0)" /></span>
              <span className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1f6kntn xjb2p0i xo1l8bm x1ic7a3i x12xpedu" style={{ fontSize: '12px', color: 'var(--secondary, #8696a0)', marginLeft: '4px' }}>
                Your personal messages are <span role="button" tabIndex={0} style={{ color: '#00a884', cursor: 'pointer' }}>end-to-end encrypted</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListPanel;
