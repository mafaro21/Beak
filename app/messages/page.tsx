"use client"
import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MailPlus, Search, Send, MoreHorizontal } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogOverlay
} from "@/components/ui/dialog"
import { validateSearch } from '@/functions/validate'
import { useSearchUser } from '@/hooks/useSearchUser'
import { toast } from "sonner"
import Loader from '@/components/loader'

// Mock data for messages - replace with your actual data source
const mockMessages = [
    {
        id: 1,
        fullname: "John Doe",
        username: "johndoe",
        lastMessage: "Hey, how are you doing?",
        timestamp: "Jan 28, 2023",
        unread: 2,
        avatar: "https://robohash.org/johndoe.png?set=set5"
    },
    {
        id: 2,
        fullname: "Jane Smith",
        username: "janesmith",
        lastMessage: "Let's meet tomorrow",
        timestamp: "Jan 27, 2023",
        unread: 0,
        avatar: "https://robohash.org/janesmith.png?set=set5"
    },
    {
        id: 3,
        fullname: "Bob Johnson",
        username: "bobjohnson",
        lastMessage: "Thanks for your help!",
        timestamp: "Jan 26, 2023",
        unread: 5,
        avatar: "https://robohash.org/bobjohnson.png?set=set5"
    }
];

// Mock chat messages - replace with your actual data source
const mockChatMessages = {
    1: [
        { id: 1, sender: "johndoe", text: "Hey there!", timestamp: "10:30 AM" },
        { id: 2, sender: "currentUser", text: "Hi John! How are you?", timestamp: "10:31 AM" },
        { id: 3, sender: "johndoe", text: "I'm good, thanks for asking!", timestamp: "10:32 AM" }
    ],
    2: [
        { id: 1, sender: "janesmith", text: "Are we still meeting tomorrow?", timestamp: "9:15 AM" },
        { id: 2, sender: "currentUser", text: "Yes, 2 PM at the usual place", timestamp: "9:20 AM" },
        { id: 3, sender: "janesmith", text: "Perfect, see you then!", timestamp: "9:22 AM" }
    ],
    3: [
        { id: 1, sender: "bobjohnson", text: "I really appreciate your help with the project", timestamp: "4:45 PM" },
        { id: 2, sender: "currentUser", text: "No problem, happy to help!", timestamp: "4:50 PM" },
        { id: 3, sender: "bobjohnson", text: "Let me know if you need anything from me", timestamp: "4:52 PM" }
    ]
};

export default function Messages() {
    const { accent, theme } = useThemeStore()
    const [open, setOpen] = useState(false);
    const [searchError, setSearchError] = useState(false)
    const [query, setQuery] = useState('');
    const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState('');
    const [isFocused, setIsFocused] = useState(false)

    const { data, isLoading, error, refetch } = useSearchUser(query, { enabled: false })

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (query.length < 4) {
            setSearchError(true)
            toast("Search query is too short", {
                style: {
                    background: 'red',
                    border: 'none',
                    color: 'white',
                    textAlign: "center",
                    justifyContent: "center"
                }
            })
            return
        }

        const error = validateSearch(query)
        if (error) {
            console.log('Error: ', error)
            return
        }

        refetch()
    };

    const handleSendMessage = () => {
        if (messageInput.trim() === '') return;

        // Here you would typically send the message to your backend
        console.log("Sending message:", messageInput);

        // Clear the input field
        setMessageInput('');
    };


    return (
        <>
            <div className="flex justify-center min-h-screen max-w-100vw">
                <div className="flex w-full max-w-7xl">
                    <Navigation />

                    <main className="w-full xs:w-full sm:w-[430px] md:w-[430px] lg:w-[360px] xl:w-[460px] border overflow-y-auto">
                        <div className=" sticky top-0 z-10  " >
                            <div className='flex w-full justify-between p-2'>
                                <div className='font-bold text-lg p-2'>Messages</div>
                                <div className='justify-end p-2 rounded-4xl link cursor-pointer' onClick={() => setOpen(true)}><MailPlus /></div>
                            </div>

                            {/* Messages List */}
                            {mockMessages.map((item) => (
                                <div
                                    key={item.id}
                                    className={`link cursor-pointer  ${selectedMessage === item.id ? 'bg-gray-700' : ''}`}
                                    onClick={() => setSelectedMessage(item.id)}
                                >
                                    <div className='flex px-4 py-2'>
                                        <Avatar className="mr-3 h-10 w-10" >
                                            <AvatarImage src={item.avatar} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='flex-1'>
                                            <div className='flex justify-between'>
                                                <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                                    <span className='font-bold'>{item.fullname}</span>
                                                    <span className='text-gray-500'> @{item.fullname}</span>
                                                    <span className='text-gray-500'> · {item.timestamp}</span>
                                                </div>
                                            </div>
                                            <div className='text-sm truncate' style={{ color: theme === 'light' ? '#000' : 'white' }}>{item.lastMessage}</div>
                                        </div>
                                        {item.unread > 0 && (
                                            <div className='ml-2text-white rounded-full w-5 h-5 flex items-center justify-center text-xs' style={{ backgroundColor: accent, color: theme === 'light' ? '#fff' : '#000' }}>
                                                {item.unread}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    <Dialog open={open} onOpenChange={setOpen} >
                        <DialogOverlay className="fixed inset-0 bg-[rgba(111,177,250,0.3)]" />
                        <DialogContent className="sm:max-w-[620px] rounded-2xl">
                            <DialogHeader className=''>
                                <DialogTitle className='mx-auto'>
                                    New Message
                                </DialogTitle>
                            </DialogHeader>

                            <div className='w-full flex space-x-3 border-b pb-2 pt-2'>
                                <div><Search /></div>

                                <div className='w-full'>
                                    <input
                                        onChange={(e) => setQuery(e.target.value)}
                                        className='outline-none w-full px-2'
                                        placeholder='Search people'
                                        onKeyDown={handleEnter}
                                    />
                                </div>
                            </div>

                            {!data ?
                                <div className='hover:bg-gray-600 link cursor-pointer rounded-lg'>
                                    <div className='flex py-2'>
                                        <Avatar className="mr-3 h-10 w-10" style={{ border: '0px white solid' }}>
                                            <AvatarImage src={`https://robohash.org/mafaro65.png?set=set5`} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className=''>
                                            <div className='flex'>
                                                <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}><span className='font-bold'>item.fullname</span></div>
                                            </div>
                                            <div className='text-gray-500 text-sm'>@item.username</div>
                                        </div>
                                    </div>
                                </div>
                                :
                                isLoading ? <Loader /> :
                                    data?.map((item: any) => (
                                        <div className='hover:bg-gray-600 link cursor-pointer rounded-lg' key={item.id}>
                                            <div className='flex py-2'>
                                                <Avatar className="mr-3 h-10 w-10" style={{ border: '0px white solid' }}>
                                                    <AvatarImage src={`https://robohash.org/${item.username}.png?set=set5`} />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div className=''>
                                                    <div className='flex'>
                                                        <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}><span className='font-bold'>{item.fullname}</span></div>
                                                    </div>
                                                    <div className='text-gray-500 text-sm'>@{item.username}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }
                        </DialogContent>
                    </Dialog>

                    {/* Right Panel - Chat View */}
                    <main className="lg:block xl:w-[520px] lg:w-[420px] border-r overflow-y-auto flex flex-col">
                        {selectedMessage ? (
                            <>
                                {/* Chat Header */}
                                <div className="sticky top-0 z-10 bg-background border-b p-4 flex items-center justify-between">
                                    <div className="items-center mx-auto">
                                        <Avatar className="mr-3 h-20 w-20 mx-auto" style={{ border: `1px solid ${theme === 'light' ? '#000' : '#fff'}` }}>
                                            <AvatarImage src={mockMessages.find(m => m.id === selectedMessage)?.avatar} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='mx-auto text-center'>
                                            <div className="font-bold">{mockMessages.find(m => m.id === selectedMessage)?.fullname}</div>
                                            <div className="text-sm text-gray-500">@{mockMessages.find(m => m.id === selectedMessage)?.username}</div>
                                        </div>
                                    </div>
                                    {/* <Button variant="ghost" size="icon">
                                        <MoreHorizontal size={20} />
                                    </Button> */}
                                </div>

                                {/* Chat Messages */}
                                <div className="flex-1 p-4 overflow-y-auto h-9/12">
                                    {mockChatMessages[selectedMessage as keyof typeof mockChatMessages]?.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`mb-4 flex flex-col ${message.sender === "currentUser" ? "items-end" : "items-start"}`}
                                        >
                                            <div
                                                className={`max-w-xs lg:max-w-md xl:max-w-lg rounded-lg px-4 py-2`}
                                                style={{
                                                    backgroundColor: message.sender === 'currentUser' ? accent : '#2F3336'
                                                }}
                                            >
                                                <div>{message.text}</div>
                                            </div>
                                            <div className='text-xs text-gray-500'>
                                                {message.timestamp}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="sticky bottom-0 bg-background border-t p-4">
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            placeholder="Type a message"
                                            className="flex-1 rounded-full py-2 px-4 mr-2 outline-none"
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            style={{ border: `1px solid ${isFocused ? accent : '#ccc'}` }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSendMessage();
                                                }
                                            }}
                                        />
                                        <Button
                                            onClick={handleSendMessage}
                                            className="rounded-full"
                                            size="icon"
                                            disabled={messageInput.trim() === ''}
                                            style={{ backgroundColor: accent }}
                                        >
                                            <Send size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="text-2xl font-bold">Select a message</div>
                                <div className="text-xs text-gray-500 mt-2 text-center px-4">
                                    Choose from your existing conversations, start a new one, or just keep swimming.
                                </div>
                                <Button className="rounded-4xl mt-6 cursor-pointer" style={{ backgroundColor: accent }} onClick={() => setOpen(true)}>
                                    New Message
                                </Button>
                            </div>
                        )}
                    </main>
                </div >
            </div >
        </>
    )
}