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
                    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-slate-900/10 bg-[linear-gradient(135deg,#0f172a,#1e293b)] text-white shadow-[0_16px_40px_rgba(30,41,59,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#111827,#334155)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
                    aria-label="Open chat"
                >
                    <svg
                        className="block h-7 w-7 sm:h-8 sm:w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed inset-x-4 bottom-4 top-24 z-50 flex flex-col overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.92)] shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:top-auto sm:h-[min(76vh,680px)] sm:w-[420px] sm:bottom-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[var(--border-soft)] bg-[rgba(248,250,252,0.88)] px-4 py-4 sm:px-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))] text-white shadow-[0_10px_24px_rgba(99,102,241,0.26)]">
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
                                <h3 className="font-semibold text-[var(--text-strong)]">Lokesh's Assistant</h3>
                                <p className="text-xs text-[var(--text-muted)]">Ask me anything about experience, projects, or research.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen( false )}
                            className="rounded-full border border-transparent p-2 text-[var(--text-muted)] transition-colors hover:border-[var(--border-soft)] hover:text-[var(--text-strong)]"
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
                            className="h-full w-full border-0 bg-white"
                            title="AI Chatbot"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
