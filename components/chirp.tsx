"use client"
import { useEffect, useRef, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Circle, CircleAlert, CircleStop } from "lucide-react"

export default function Chirp() {

    const [text, setText] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [text])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    }

    return (
        <div className="grid grid-cols-14 ">
            <div className="col-span-1 ">
                <Avatar className=" mt-3">
                    <AvatarImage src="https://pbs.twimg.com/profile_images/1832845968061964288/O8AQKEOm_400x400.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>


            <div className="ml-1 col-span-13">
                <form>

                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="border-none w-full focus:outline-none mt-3 resize-none text-[40px]"
                        style={{ fontSize: '22px' }}
                        placeholder="What's happening?"
                        maxLength={280}
                    />

                    <Separator className="bg-zinc-700 mt-4" />

                    <div className="flex justify-end w-full">
                        <div className="mr-1 mt-4" hidden={!text}>{text.length}</div>

                        {!text ? null :
                            text.length == 280 ? (
                                <Circle className="mt-4 mr-1 w-7 h-6 text-red-700 fill-red-700" />
                            ) : text.length > 250 ? (
                                <Circle className="mt-4 mr-1 w-7 h-6 text-orange-600" />
                            ) : text.length > 200 ? (
                                <Circle className="mt-4 mr-1 w-7 h-6 text-amber-500" />
                            ) : text.length > 150 ? (
                                <Circle className="mt-4 mr-1 w-7 h-6 text-yellow-400" />
                            ) : text.length > 100 ? (
                                <Circle className="mt-4 mr-1 w-7 h-6 text-yellow-200" />
                            ) : (
                                <Circle className="mt-4 mr-1 w-7 h-6 text-white" />
                            )
                        }

                        <Button
                            className="bg-white hover:bg-white hover:cursor-pointer text-black font-bold rounded-2xl mt-2"
                            disabled={!text}
                        >
                            Chirp
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
