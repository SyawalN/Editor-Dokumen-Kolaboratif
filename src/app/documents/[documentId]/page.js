"use client"

import dynamic from "next/dynamic"
const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false })
import "./styles.css"

export default function Client() {
  return (
    <TextEditor />
  )
}