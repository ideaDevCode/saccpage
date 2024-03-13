import { useState } from "react"
import { copyToClipboard } from "../../utilities/clipboard"

export default function ClipboardButton({ textToCopy }) {
    const [copied, setCopied] = useState(false)
    return <>
        <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy }) }>
            {copied ? 'Copiado' : 'Copiar'}
        </button>
    </>
}