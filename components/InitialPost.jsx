"use client"

import { useEffect, useRef } from "react"

export default function InitialPost() {
    const sentRef = useRef(false)

    useEffect(() => {
        if (sentRef.current) return
        sentRef.current = true

        const apiBase = process.env.NEXT_PUBLIC_INITIAL_POST_ENDPOINT
        if (!apiBase) {
            console.log("InitialPost: no API base configured (NEXT_PUBLIC_API_URL)")
            return
        }

        // Build the exact endpoint as requested: POST to ${NEXT_PUBLIC_API_URL}/chat
        const endpoint = `${apiBase.replace(/\/$/, "")}/chat`

        // Query payload: can be set via NEXT_PUBLIC_INITIAL_QUERY or defaults to a simple message
        const query = "cold_start"
        const payload = { question: query }

        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }

        try {
            fetch(endpoint, opts)
                .then(async (res) => {
                    if (!res.ok) {
                        const text = await res.text().catch(() => "(no body)")
                        console.warn(`InitialPost: POST to ${endpoint} returned ${res.status} ${res.statusText}`)
                        console.debug("InitialPost: response body:", text)
                    } else {
                        console.log(`InitialPost: POST successful -> ${endpoint} [${res.status}]`)
                    }
                })
                .catch((err) => {
                    console.warn("InitialPost: POST failed", err)
                })
        } catch (err) {
            console.warn("InitialPost: error while sending POST", err)
        }
    }, [])

    return null
}
