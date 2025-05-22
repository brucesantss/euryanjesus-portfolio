"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function ReflexGame() {
  const [gameState, setGameState] = useState<"idle" | "waiting" | "ready" | "tooSoon" | "result">("idle")
  const [reactionTime, setReactionTime] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const startGame = () => {
    setGameState("waiting")
    setReactionTime(null)

    const randomDelay = Math.floor(Math.random() * 3000) + 2000 

    timeoutRef.current = setTimeout(() => {
      setGameState("ready")
      startTimeRef.current = performance.now()
    }, randomDelay)
  }

  const handleClick = () => {
    if (gameState === "waiting") {
      // clicou cedo demais
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setGameState("tooSoon")
    } else if (gameState === "ready") {
      const endTime = performance.now()
      const reaction = Math.floor(endTime - (startTimeRef.current || 0))
      setReactionTime(reaction)
      setGameState("result")
    }
  }

  const resetGame = () => {
    setGameState("idle")
    setReactionTime(null)
    startTimeRef.current = null
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const getButtonStyle = () => {
    switch (gameState) {
      case "waiting":
        return "bg-red-500"
      case "ready":
        return "bg-green-500"
      case "tooSoon":
      case "result":
        return "bg-gray-300"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="text-3xl font-bold">Teste seu Reflexo ⚡</h1>
      <span className="text-muted-foreground text-sm">Quando estiver verde!</span>

      {gameState === "idle" && (
        <Button onClick={startGame} className="text-lg px-8 py-6">
          Começar
        </Button>
      )}

      {gameState === "waiting" || gameState === "ready" ? (
        <button
          onClick={handleClick}
          className={`text-white text-xl font-semibold px-10 py-6 rounded-lg ${getButtonStyle()}`}
        >
          Clique agora!
        </button>
      ) : null}

      {gameState === "tooSoon" && (
        <div className="space-y-4">
          <p className="text-red-500 font-semibold">Você clicou cedo demais! 😅</p>
          <Button onClick={resetGame}>Tentar novamente</Button>
        </div>
      )}

      {gameState === "result" && (
        <div className="space-y-4">
          <p className="text-green-600 font-semibold text-lg">
            Seu tempo de reação: <span className="text-2xl">{reactionTime}ms</span>
          </p>
          <Button onClick={resetGame}>Jogar novamente</Button>
        </div>
      )}
    </div>
  )
}
