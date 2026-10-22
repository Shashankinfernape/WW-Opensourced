import React, { useState, useEffect } from 'react';
import { LeftNavRail } from './LeftNavRail';
import { ChatListHeader } from './ChatListHeader';
import { ChatListPanel, ChatSummary } from './ChatListPanel';
import { ChatHeader } from './ChatHeader';
import { MessageList, ChatMessage } from './MessageList';
import { ComposerBar } from './ComposerBar';
import { AttachMenu } from './AttachMenu';
import { EmojiGifPanel } from './EmojiGifPanel';
import { MenuDropdown, MenuItem } from './MenuDropdown';
import { ContactInfoDrawer } from './ContactInfoDrawer';
import { ChatSearchDrawer } from './ChatSearchDrawer';
import { NewChatPanel } from './NewChatPanel';
import { StatusPanel } from './StatusPanel';
import { ChannelsPanel } from './ChannelsPanel';
import { CommunitiesPanel } from './CommunitiesPanel';
import { CallsPanel } from './CallsPanel';
import { SettingsPanel } from './SettingsPanel';
import { ProfilePanel } from './ProfilePanel';
import { ArchivedChatsPanel } from './ArchivedChatsPanel';
import { StarredMessagesPanel } from './StarredMessagesPanel';
import { IntroPanel } from './IntroPanel';
import { MiddleDrawerEmptyState } from './MiddleDrawerEmptyState';

interface ChatShellProps {
  onBackToLogin?: () => void;
}

// Neutral fixtures with plain colored circles and initials (Rules 3 & 4)
const NEUTRAL_CHATS: ChatSummary[] = [
  {
    id: 'chat_1',
    name: 'Dan',
    initial: 'D',
    color: '#00a884',
    lastMessage: 'Sticker',
    mediaType: 'sticker',
    time: '3:10 am',
    unreadCount: 0,
    fromMe: true,
    ack: 3,
  },
  {
    id: 'chat_2',
    name: 'Cole',
    initial: 'C',
    color: '#1f7a8c',
    lastMessage: 'Sticker',
    mediaType: 'sticker',
    time: '12:16 am',
    unreadCount: 0,
    fromMe: false,
  },
  {
    id: 'chat_3',
    name: 'Alpha Engineering Team Assoc',
    initial: 'A',
    color: '#6b5b95',
    senderPrefix: 'David',
    lastMessage: 'Sticker',
    mediaType: 'sticker',
    time: 'Yesterday',
    unreadCount: 0,
    fromMe: false,
  },
  {
    id: 'chat_4',
    name: 'Sarah',
    initial: 'S',
    color: '#d9534f',
    lastMessage: 'Sticker',
    mediaType: 'sticker',
    time: 'Yesterday',
    unreadCount: 0,
    fromMe: true,
    ack: 3,
  },
  {
    id: 'chat_5',
    name: 'Jordan Tyler Davis',
    initial: 'J',
    color: '#25d366',
    lastMessage: 'Macha',
    time: 'Yesterday',
    unreadCount: 0,
    fromMe: false,
  },
  {
    id: 'chat_6',
    name: 'Mom',
    initial: 'M',
    color: '#e67e22',
    lastMessage: 'https://example.com/watch?v=k9X8jL2mQ1w',
    time: 'Yesterday',
    unreadCount: 0,
    fromMe: false,
  },
  {
    id: 'chat_7',
    name: 'Dev-B',
    initial: 'D',
    color: '#3498db',
    senderPrefix: 'Prof. Smith',
    lastMessage: 'Tomorrow is the last date for NM record sign... No more excuses',
    time: 'Yesterday',
    unreadCount: 0,
    isMuted: true,
    fromMe: false,
  },
  {
    id: 'chat_8',
    name: 'Senior Project Cohort (2024)',
    initial: 'S',
    color: '#9b59b6',
    senderPrefix: 'Prof. Smith',
    lastMessage: 'Dear students... Those who completed the dues kindly collect the NO-DUES form...',
    time: 'Yesterday',
    unreadCount: 0,
    fromMe: false,
  },
  {
    id: 'chat_9',
    name: 'Workspace Notes (You)',
    initial: 'W',
    color: '#1abc9c',
    lastMessage: 'Setup-Guide.pdf',
    time: 'Yesterday',
    unreadCount: 0,
    fromMe: true,
    ack: 3,
  },
  {
    id: 'chat_10',
    name: 'Elena Vance',
    initial: 'E',
    color: '#e74c3c',
    lastMessage: 'Thank you!',
    time: 'Tuesday',
    unreadCount: 0,
    fromMe: false,
    ack: 3,
  },
];

const NEUTRAL_MESSAGES: Record<string, ChatMessage[]> = {
  chat_1: [
    {
      id: 'm_101',
      sender: 'them',
      text: 'Hi! Are you free to catch up later today?',
      time: '11:30 AM',
    },
    {
      id: 'm_102',
      sender: 'me',
      text: 'Yes, I should be free around 4 PM.',
      time: '11:32 AM',
      ack: 3,
    },
    {
      id: 'm_103',
      sender: 'them',
      text: 'That works perfectly. Talk soon!',
      time: '11:40 AM',
      reactions: [{ emoji: '👍', count: 1 }],
    },
    {
      id: 'm_104',
      sender: 'me',
      text: 'Great, see you then!',
      time: '11:42 AM',
      ack: 3,
      replyTo: {
        senderName: 'Alex Rivera',
        text: 'That works perfectly. Talk soon!',
      },
    },
  ],
  chat_2: [
    {
      id: 'm_201',
      sender: 'them',
      text: 'Listen to this quick audio update:',
      time: '10:14 AM',
    },
    {
      id: 'm_202',
      sender: 'them',
      text: '',
      time: '10:14 AM',
      type: 'audio',
      media: { duration: '0:18' },
    },
    {
      id: 'm_203',
      sender: 'me',
      text: 'Thanks, sounding good!',
      time: '10:15 AM',
      ack: 3,
    },
  ],
  chat_3: [
    {
      id: 'm_301',
      sender: 'them',
      text: 'Here is the project report for review:',
      time: 'Yesterday',
    },
    {
      id: 'm_302',
      sender: 'them',
      text: '',
      time: 'Yesterday',
      type: 'document',
      media: { fileName: 'Quarterly_Report_2026.pdf', fileSize: '2.4 MB' },
    },
    {
      id: 'm_303',
      sender: 'me',
      text: 'Have a great weekend!',
      time: 'Yesterday',
      ack: 2,
    },
  ],
  chat_4: [
    {
      id: 'm_401',
      sender: 'them',
      text: 'See you on Monday morning.',
      time: 'Tuesday',
    },
  ],
};

const CHATLIST_MENU_ITEMS: MenuItem[] = [
  { id: 'new_group', label: 'New group' },
  { id: 'new_community', label: 'New community' },
  { id: 'starred', label: 'Starred messages' },
  { id: 'select_chats', label: 'Select chats' },
  { id: 'settings', label: 'Settings' },
  { id: 'logout', label: 'Log out', danger: true },
];

const CHAT_MENU_ITEMS: MenuItem[] = [
  { id: 'contact_info', label: 'Contact info' },
  { id: 'select_messages', label: 'Select messages' },
  { id: 'close_chat', label: 'Close chat' },
  { id: 'mute_notifications', label: 'Mute notifications' },
  { id: 'disappearing_messages', label: 'Disappearing messages' },
  { id: 'clear_chat', label: 'Clear chat' },
  { id: 'delete_chat', label: 'Delete chat', danger: true },
];

export const ChatShell: React.FC<ChatShellProps> = () => {
  const [activeTab, setActiveTab] = useState<'chats' | 'calls' | 'status' | 'channels' | 'communities'>('chats');
  const [leftDrawer, setLeftDrawer] = useState<'none' | 'newchat' | 'archived' | 'starred' | 'settings' | 'profile'>('none');
  const [rightDrawer, setRightDrawer] = useState<'none' | 'contact_info' | 'chat_search'>('none');
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [isChatListMenuOpen, setIsChatListMenuOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);

  const [chats, setChats] = useState<ChatSummary[]>(NEUTRAL_CHATS);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'favourites' | 'groups'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [messagesMap, setMessagesMap] = useState<Record<string, ChatMessage[]>>(NEUTRAL_MESSAGES);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1034
  );

  useEffect(() => {
    const applyUrlParams = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab === 'calls' || tab === 'status' || tab === 'channels' || tab === 'communities' || tab === 'chats') {
        setActiveTab(tab);
      }
      const drawer = params.get('drawer');
      if (drawer === 'newchat' || drawer === 'archived' || drawer === 'starred' || drawer === 'settings' || drawer === 'profile' || drawer === 'none') {
        setLeftDrawer(drawer as any);
      }
      const right = params.get('right');
      if (right === 'contact_info' || right === 'chat_search' || right === 'none') {
        setRightDrawer(right as any);
      }
      const chat = params.get('chat');
      if (chat) {
        setSelectedChatId(chat);
      }
      if (params.get('attach') === 'true') {
        setIsAttachOpen(true);
      }
      if (params.get('emoji') === 'true') {
        setIsEmojiOpen(true);
      }
      if (params.get('menu') === 'chatlist') {
        setIsChatListMenuOpen(true);
      }
      if (params.get('menu') === 'chat') {
        setIsChatMenuOpen(true);
      }
    };
    applyUrlParams();
    window.addEventListener('popstate', applyUrlParams);
    return () => window.removeEventListener('popstate', applyUrlParams);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSideWidth = () => {
    if (windowWidth >= 1210) {
      return 432;
    }
    if (windowWidth < 700) {
      return 336;
    }
    return 414;
  };

  const selectedChat = selectedChatId ? chats.find((c) => c.id === selectedChatId) || null : null;
  const activeMessages = selectedChatId ? messagesMap[selectedChatId] || [] : [];

  const handleSendMessage = (text: string) => {
    if (!selectedChatId) return;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const targetChatId = selectedChatId;
    const newMessage: ChatMessage = {
      id: `m_${Date.now()}`,
      sender: 'me',
      text,
      time: timeStr,
      ack: 1, // SENT
    };

    setMessagesMap((prev) => ({
      ...prev,
      [targetChatId]: [...(prev[targetChatId] || []), newMessage],
    }));

    setChats((prev) =>
      prev.map((c) => (c.id === targetChatId ? { ...c, lastMessage: text, time: timeStr, ack: 1 } : c))
    );

    // Simulate server ACK update to READ (ack = 3) after 800ms
    setTimeout(() => {
      setMessagesMap((prev) => ({
        ...prev,
        [targetChatId]: (prev[targetChatId] || []).map((m) =>
          m.id === newMessage.id ? { ...m, ack: 3 } : m
        ),
      }));
      setChats((prev) =>
        prev.map((c) => (c.id === targetChatId ? { ...c, ack: 3 } : c))
      );
    }, 400);
  };

  const handleSelectMenuItem = (id: string) => {
    if (id === 'settings') {
      setLeftDrawer('settings');
    } else if (id === 'starred') {
      setLeftDrawer('starred');
    } else if (id === 'contact_info') {
      setRightDrawer('contact_info');
    } else if (id === 'close_chat') {
      setSelectedChatId(null);
      setRightDrawer('none');
      setIsChatMenuOpen(false);
    }
  };

  return (
    <div
      className="app-wrapper-web os-win x1n2onr6 xupqr0c xh8yej3 x5yr21d xsxifin x1vs4gjj"
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--app-background, #0b141a)',
      }}
    >
      {/* Column 1: Left Navigation Rail (width: 64px) */}
      <LeftNavRail
        activeTab={activeTab}
        activeDrawer={leftDrawer}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setLeftDrawer('none');
        }}
        onOpenSettings={() => {
          setActiveTab('chats');
          setLeftDrawer('settings');
        }}
      />

      {/* Column 2: Secondary Rail Screen OR Chat List Column */}
      <div
        id="side_column"
        className="x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1"
        style={{
          width: `${getSideWidth()}px`,
          flexShrink: 0,
          flexGrow: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {activeTab === 'status' ? (
          <StatusPanel />
        ) : activeTab === 'channels' ? (
          <ChannelsPanel />
        ) : activeTab === 'communities' ? (
          <CommunitiesPanel />
        ) : activeTab === 'calls' ? (
          <CallsPanel />
        ) : leftDrawer === 'newchat' ? (
          <NewChatPanel
            onClose={() => setLeftDrawer('none')}
            onSelectContact={(c) => {
              if (!chats.some((item) => item.id === c.id)) {
                setChats([c, ...chats]);
              }
              setSelectedChatId(c.id);
              setLeftDrawer('none');
            }}
          />
        ) : leftDrawer === 'archived' ? (
          <ArchivedChatsPanel
            onClose={() => setLeftDrawer('none')}
            onSelectChat={(id) => {
              setSelectedChatId(id);
              setLeftDrawer('none');
            }}
          />
        ) : leftDrawer === 'starred' ? (
          <StarredMessagesPanel onClose={() => setLeftDrawer('none')} />
        ) : leftDrawer === 'settings' ? (
          <SettingsPanel
            onClose={() => setLeftDrawer('none')}
            onOpenProfile={() => setLeftDrawer('profile')}
          />
        ) : leftDrawer === 'profile' ? (
          <ProfilePanel onClose={() => setLeftDrawer('settings')} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <ChatListHeader
              onNewChat={() => setLeftDrawer('newchat')}
              onOpenMenu={() => setIsChatListMenuOpen(true)}
            />
            <MenuDropdown
              isOpen={isChatListMenuOpen}
              onClose={() => setIsChatListMenuOpen(false)}
              items={CHATLIST_MENU_ITEMS}
              onSelectItem={handleSelectMenuItem}
              top="54px"
              left="180px"
            />
            <ChatListPanel
              chats={chats}
              selectedChatId={selectedChatId}
              onSelectChat={setSelectedChatId}
              filter={filter}
              onFilterChange={setFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onOpenArchived={() => setLeftDrawer('archived')}
            />
          </div>
        )}
      </div>

      {/* Column 3: Active Conversation Column (flex: 1 1 0; min-width: 0;) */}
      <div
        className="x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2"
        style={{
          flex: '1 1 0',
          minWidth: 0,
          height: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        {selectedChatId && selectedChat ? (
          <div
            id="main"
            className="x78zum5 xdt5ytf x5yr21d xyyilfv xlkovuz x1q80dvb"
            style={{
              flex: '1 1 0',
              minWidth: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              backgroundColor: 'var(--WDS-surface-default, #161717)',
            }}
          >
            {/* Conversation Header (height: 64px) */}
            <ChatHeader
              chat={selectedChat}
              onContactInfoClick={() => setRightDrawer(rightDrawer === 'contact_info' ? 'none' : 'contact_info')}
              onSearchClick={() => setRightDrawer(rightDrawer === 'chat_search' ? 'none' : 'chat_search')}
              onMenuClick={() => setIsChatMenuOpen(true)}
            />

            <MenuDropdown
              isOpen={isChatMenuOpen}
              onClose={() => setIsChatMenuOpen(false)}
              items={CHAT_MENU_ITEMS}
              onSelectItem={handleSelectMenuItem}
              top="54px"
              right="16px"
            />

            {/* Conversation Message List & Doodle Wallpaper */}
            <div
              className="x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh"
              data-testid="conversation-panel-body"
              style={{
                flex: '1 1 0',
                minHeight: 0,
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <MessageList messages={activeMessages} />
            </div>

            {/* Attach Menu */}
            <AttachMenu
              isOpen={isAttachOpen}
              onClose={() => setIsAttachOpen(false)}
              onSelectOption={(opt) => console.log('Selected attach:', opt)}
            />

            {/* Emoji / GIF / Sticker Panel */}
            <EmojiGifPanel
              isOpen={isEmojiOpen}
              onClose={() => setIsEmojiOpen(false)}
              onSelectEmoji={(emoji) => handleSendMessage(emoji)}
            />

            {/* Conversation Composer Bar (height: 64px) */}
            <ComposerBar
              onSendMessage={handleSendMessage}
              onAttachClick={() => setIsAttachOpen(!isAttachOpen)}
              onEmojiClick={() => setIsEmojiOpen(!isEmojiOpen)}
            />
          </div>
        ) : (activeTab === 'status' || activeTab === 'channels' || activeTab === 'communities') ? (
          <MiddleDrawerEmptyState type={activeTab} />
        ) : (
          <IntroPanel
            onGoToCalls={() => {
              setActiveTab('calls');
              setLeftDrawer('none');
            }}
            onSendDocument={() => {
              setSelectedChatId('chat_3');
            }}
            onAddContact={() => {
              setLeftDrawer('newchat');
            }}
            onInviteFriend={() => {
              alert('Invite link copied: https://web.whatsapp.com');
            }}
            onNewCall={() => {
              setActiveTab('calls');
              setLeftDrawer('none');
            }}
            onAskMetaAi={() => {
              setLeftDrawer('none');
            }}
          />
        )}

        {/* Right Drawer: Contact Info OR Chat Search */}
        {rightDrawer === 'contact_info' && selectedChat && (
          <ContactInfoDrawer
            isOpen={true}
            onClose={() => setRightDrawer('none')}
            chat={selectedChat}
          />
        )}
        {rightDrawer === 'chat_search' && selectedChat && (
          <ChatSearchDrawer
            isOpen={true}
            onClose={() => setRightDrawer('none')}
            chat={selectedChat}
          />
        )}
      </div>
    </div>
  );
};

export default ChatShell;
