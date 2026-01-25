import { useState } from 'react';

export default function Chat ()
{
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen( true )}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50"
                    aria-label="Open chat"
                >
                    {/* Temporary Bot Avatar */}
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Lokesh's Assistant</h3>
                                <p className="text-xs text-gray-500">Ask me anything</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen( false )}
                            className="text-gray-500 hover:text-gray-900 transition-colors"
                            aria-label="Close chat"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Embedded Gradio Chatbot */}
                    <div className="flex-1 overflow-hidden">
                        <iframe
                            src="https://lokeshmanideep-careeragent.hf.space"
                            className="w-full h-full border-0"
                            title="AI Chatbot"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
