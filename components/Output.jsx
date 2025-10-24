export default function Output({ output, textColor }) {
  return (
    <div className="mb-3 whitespace-pre-wrap break-words leading-relaxed" style={{ color: textColor }}>
      {output}
    </div>
  )
}
