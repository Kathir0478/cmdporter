"use client"

import { useState, useRef, useEffect } from "react"
import Prompt from "./Prompt"
import Output from "./Output"
import { getCommandResponse } from "@/data/commands"

export default function Terminal() {
  const [history, setHistory] = useState([
    {
      command: null,
      output: "Microsoft Windows [Version 10.0.22631.3527]\n(c) dood Corporation. All rights reserved.\n\n",
    },
  ])
  const [input, setInput] = useState("")
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [bgColor, setBgColor] = useState("#000000")
  const [textColor, setTextColor] = useState("#00FF00")
  const [theme, setTheme] = useState("green")
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) {
      setHistory([...history, { command: input, output: "" }])
      setInput("")
      return
    }

    const command = input.trim()

    const output = getCommandResponse(command, {
      setBgColor,
      setTextColor,
      setTheme,
      onAudioComplete: () => {
        setHistory((prev) => [
          ...prev,
          {
            command: null,
            output: `

Audio playback completed!

Thank you for listening to my portfolio message.
Feel free to explore other commands with 'help'.

`,
          },
        ])
      },
    })

    if (output === "CLEAR_SCREEN") {
      setHistory([
        {
          command: null,
          output: "",
        },
      ])
    } else {
      setHistory([...history, { command, output }])
    }

    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      const commands = history.filter((h) => h.command !== null).map((h) => h.command)
      if (commands.length === 0) return

      let newIndex = historyIndex + 1
      if (newIndex >= commands.length) newIndex = commands.length - 1

      setHistoryIndex(newIndex)
      setInput(commands[commands.length - 1 - newIndex])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const commands = history.filter((h) => h.command !== null).map((h) => h.command)
      if (commands.length === 0) return

      let newIndex = historyIndex - 1
      if (newIndex < -1) newIndex = -1

      setHistoryIndex(newIndex)
      if (newIndex === -1) {
        setInput("")
      } else {
        setInput(commands[commands.length - 1 - newIndex])
      }
    }
  }

  return (
    <div
      ref={terminalRef}
      className="w-full h-full font-mono text-sm overflow-y-auto overflow-x-hidden p-4 flex flex-col"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1">
        {history.map((entry, idx) => (
          <div key={idx}>
            {entry.command !== null && <Prompt command={entry.command} textColor={textColor} />}
            {entry.output && <Output output={entry.output} textColor={textColor} />}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-0 mt-4 pt-2 border-t"
        style={{ borderColor: textColor }}
      >
        <span style={{ color: textColor }} className="whitespace-nowrap font-bold">
          C:\Users\dood&gt;
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 outline-none ml-2 font-mono text-sm"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
          autoComplete="off"
          spellCheck="false"
        />
        <span style={{ color: textColor }} className="animate-blink">
          _
        </span>
      </form>
    </div>
  )
}
