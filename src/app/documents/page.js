"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { v4 as uuidV4 } from "uuid"

export default function Redirect() {
  const router = useRouter()

  useEffect(() => {
    router.push(`/documents/${uuidV4()}`)
  }, [])

  return (
    <>
      Redirecting...
    </>
  )
}