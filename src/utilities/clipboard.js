export const copyToClipboard = ({ copied, setCopied, textToCopy }) => {
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Cambiar a "false" después de 2 segundos
        })
        .catch((err) => console.error('Error al copiar al portapapeles: ', err));
};
