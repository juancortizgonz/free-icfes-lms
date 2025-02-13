interface ButtonProps {
    text: string
    onClick?: () => void
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
            {text}
        </button>
    )
}