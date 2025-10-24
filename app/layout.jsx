import "./globals.css"

export const metadata = {
    title: "Kathiravan CMD Portfolio",
    description: "Interactive Windows CMD-style portfolio",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
