import Terminal from "@/components/Terminal"
import InitialPost from "@/components/InitialPost"

export default function Home() {
    return (
        <main className="w-full h-screen bg-black overflow-hidden">
            {/* Component triggers a single POST to the configured endpoint on first client render */}
            <InitialPost />
            <Terminal />
        </main>
    )
}
