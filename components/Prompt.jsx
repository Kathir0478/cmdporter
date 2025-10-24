export default function Prompt({ command, textColor }) {
  return (
    <div className="mb-2" style={{ color: textColor }}>
      <span className="font-bold">C:\Users\dood&gt;</span>
      <span className="ml-2">{command}</span>
    </div>
  )
}
