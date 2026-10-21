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
  selectedChatId: string;
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

        {/* Filter Pills Tablist */}
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
      </div>

      {/* Sync / Notification Banner */}
      <span className="x78zum5 x1c4vz4f x2lah0s xdl72j9 xdt5ytf" data-testid="chat-butterbar">
        <div className="x1380le5 x14mko6t xefnzgg x1uvdrpn">
          <div className="x1n2onr6">
            <div className="x67dgr1 x10l6tqk x1ngp85i">
              <span className="html-span xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1hl2dhg x16tdsg8 x1vvkbs x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                <button
                  data-tab="4"
                  aria-label="Close"
                  aria-disabled="false"
                  tabIndex={0}
                  type="button"
                  className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1so62im x1syfmzz x1ja2u2z x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w xuwfzo9 x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x1vqgdyp x100vrsf"
                >
                  <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x78zum5 xdt5ytf">
                    <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1q0g3np xh8yej3 xl56j7k">
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 x1vjfegm">
                        <span aria-hidden="true" className="xxk0z11 xvy4d1p">
                          <Icon name="ic-close" size={24} />
                        </span>
                      </div>
                      <div className="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xdt5ytf x6s0dn4 x78zum5 x1vjfegm x1c4vz4f" />
                    </div>
                  </div>
                </button>
              </span>
            </div>
            <div className="x6s0dn4 xs2akgl x78zum5 x1q0g3np x6nvzda x4i4b9w xhl9efl xj65ea0 x1xrf6ya xvtqlqk xscbp6u xdx6fka x1abdmlv">
              <span aria-hidden="true" className="x1v5yvga x19kjcj4">
                <Icon name="ic-notifications-off" size={36} />
              </span>
              <div className="x78zum5 xdt5ytf x129bwdz x1yc453h">
                <div className="xp48ta0">
                  <span
                    className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw x14ug900 x1hx0egp x1f6kntn xjb2p0i x8r4c90 xo1l8bm x1ic7a3i x12xpedu"
                    style={{
                      ['--x-fontSize' as string]: '14px',
                      ['--x-lineHeight' as string]: '9.9531px',
                      ['--x-8dd7yt' as string]: '-0.0137em',
                      ['--x-hxtmnb' as string]: '0.0137em',
                    }}
                  >
                    Message and call notifications are off.&nbsp;
                    <button
                      data-tab="4"
                      type="button"
                      className="xjb2p0i x1qlqyl8 x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl x11g6tue x1a2a7pz x1ypdohk x1ph7ams x17f7hit xuv8nkb x1hl2dhg xt0b8zv x1eo1aoc xbvygy2 x1wp9yj1 xv854yx x1k74hu9 xp30eni xrys4gj xhmieyt"
                    >
                      Turn on
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>

      {/* Pane-side Scroll Container */}
      <div
        id="pane-side"
        data-scrolltracepolicy="wa.web.chatlist"
        className="x1n2onr6 x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy"
        style={{ flex: 1, overflowY: 'auto' }}
      >
        {/* Archived Row */}
        <button
          type="button"
          tabIndex={0}
          onClick={onOpenArchived}
          className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x178xt8z x1lun4ml xso031l xpilrb4 x1n2onr6 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk x1s928wv x1j6awrg x1m1drc7 x1iygr5g x4eaejv x1wsn0xg x1r0yslu x2q1x1w xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u xjbqb8w x1wb366y xtnn1bt x9v5kkp xmw7ebm xrdum7p x2lah0s x1lliihq xk8lq53 x9f619 xt8t1vi x1xc408v x129tdwq x15urzxu x100vrsf x1vqgdyp"
          style={{
            width: '100%',
            border: 'none',
            background: 'transparent',
            textAlign: 'left',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <div
            data-testid="cell-frame-container"
            className="xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np x1hm9lzh x1sa5p1d x71s49j x1n2onr6 xjbqb8w x3ffywh x1ubxc9n"
            style={{
              height: '49px',
              padding: '0 16px',
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-default, rgba(134, 150, 160, 0.08))',
            }}
          >
            <div className="x78zum5" style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
              <span className="xxk0z11 xvy4d1p" style={{ color: 'var(--icon, #8696a0)', display: 'flex' }}>
                <Icon name="nav-archived" size={20} />
              </span>
            </div>
            <div className="x78zum5 xdl72j9 xdt5ytf x1iyjqo2 xl56j7k xeuugli x1n1b19v">
              <div role="group" className="x6s0dn4 x78zum5 xggjnk3 x1yc453h">
                <div data-testid="cell-frame-title" className="x14ug900 x78zum5 x1iyjqo2 x1jchvi3 xdod15v x6ikm8r x10wlt62 x1mzt3pk x1yc453h xo1l8bm">
                  <span
                    className="x140p0ai x1gufx9m x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x193iq5w xeuugli x13faqbe x1vvkbs x1lliihq x1fj9vlw xhslqc4 x1hx0egp x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i"
                    style={{ fontSize: '16px', color: 'var(--primary, #e9edef)' }}
                  >
                    Archived
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Chat List Virtual Grid */}
        <div data-testid="chat-list">
          <div
            role="grid"
            aria-label="Chat list"
            className="x1y332i5 x1n2onr6 x6ikm8r x10wlt62 x16ovd2e"
          >
            {filteredChats.map((chat, idx) => {
              const isSelected = chat.id === selectedChatId;
              return (
                <div
                  key={chat.id}
                  role="row"
                  data-testid={`list-item-${idx}`}
                  className="x10l6tqk xh8yej3 x1g42fcv"
                  style={{ height: '72px' }}
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
                        } xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x1q0g3np xy75621 x1hm9lzh x1sa5p1d x71s49j x1n2onr6 x1ypdohk x1ubxc9n xbmkbis x1yjtglu xiitwr3 x206yn3`}
                        style={{
                          height: '72px',
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
        <div
          style={{
            padding: '24px 16px',
            textAlign: 'center',
            fontSize: '12px',
            color: 'var(--secondary, #8696a0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <span>Your personal messages are end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default ChatListPanel;
