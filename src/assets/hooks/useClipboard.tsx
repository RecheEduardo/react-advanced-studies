import { useState } from "react";

const useClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => { 
            setCopied(false)
        }, 1000);
    };

    return { copied, copyToClipboard };
};

export default useClipboard;