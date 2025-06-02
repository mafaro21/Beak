import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { useRouter } from 'next/navigation';

interface Props {
  text: string;
}

export default function RenderMentions({ text }: Props) {
  if (!text) return null

  const parts = text.split(/([@#][a-zA-Z0-9_]+)/g)
  const { accent } = useThemeStore();
  const router = useRouter()

  const mentionClick = (e: any, username: string) => {
    e.stopPropagation()
    e.preventDefault()

    router.push(`/profile/${username}`)
  }

  const hashtagClick = (e: any, hashtag: string) => {
    e.stopPropagation()
    e.preventDefault()

    router.push(`/hashtag/${hashtag}`)
  }

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('@')) {
          const username = part.slice(1)
          return (
            <span
              key={index}
              onClick={(e) => mentionClick(e, username)}
              className="cursor-pointer"
              style={{ color: accent }}
            >
              {part}
            </span>
          )
        }

        if (part.startsWith('#')) {
          const hashtag = part.slice(1)
          return (
            <span
              key={index}
              onClick={(e) => hashtagClick(e, hashtag)}
              className="cursor-pointer"
              style={{ color: accent }}
            >
              {part}
            </span>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </>
  );
}
