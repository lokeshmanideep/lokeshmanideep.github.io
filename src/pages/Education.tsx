import ReactMarkdown from 'react-markdown';
import { degrees } from '../data/education';

export default function Education ()
{
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(224,231,255,0.72),transparent_34%),radial-gradient(circle_at_top_right,rgba(251,207,232,0.58),transparent_28%),var(--page-bg)] pt-24 pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-14 max-w-4xl">
                    <span className="mb-5 inline-flex rounded-full border border-[var(--border-soft)] bg-[rgba(255,255,255,0.78)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-primary)] shadow-[0_10px_30px_rgba(148,163,184,0.12)]">
                        Education
                    </span>
                    <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] lg:text-6xl">
                        Academic depth shaped for systems thinking and applied AI.
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
                        My academic journey through computer science, building a strong foundation in software engineering,
                        machine learning, and real-world problem solving.
                    </p>
                </div>

                <div className="grid gap-8">
                    {degrees.map( ( degree, index ) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-[32px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.84)] p-8 shadow-[0_22px_60px_rgba(148,163,184,0.12)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-10"
                        >
                            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.88))] shadow-[0_12px_32px_rgba(148,163,184,0.12)]">
                                    <img
                                        src={degree.logo_path}
                                        alt={degree.alt_name}
                                        className="h-14 w-14 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                                        <div>
                                            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-[var(--text-soft)]">
                                                <span className="rounded-full bg-[rgba(99,102,241,0.10)] px-3 py-1 font-medium text-[var(--accent-primary)]">
                                                    {degree.duration}
                                                </span>
                                                {degree.gpa && (
                                                    <span className="rounded-full bg-[rgba(190,231,211,0.38)] px-3 py-1 font-medium text-[var(--text-strong)]">
                                                        GPA {degree.gpa}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                                                {degree.title}
                                            </h2>
                                            <p className="mt-2 text-lg text-[var(--text-muted)]">
                                                {degree.subtitle}
                                            </p>
                                        </div>
                                        <a
                                            href={degree.website_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] bg-[rgba(248,250,252,0.88)] px-4 py-2 text-sm font-medium text-[var(--text-strong)] transition-colors hover:border-[rgba(99,102,241,0.28)] hover:text-[var(--accent-primary)]"
                                        >
                                            Visit Website →
                                        </a>
                                    </div>

                                    <div className="space-y-4">
                                        {degree.descriptions.map( ( description, descIndex ) => (
                                            <div
                                                key={descIndex}
                                                className="rounded-[22px] border border-[rgba(215,222,231,0.75)] bg-[rgba(248,250,252,0.7)] px-5 py-4 text-[var(--text-muted)] shadow-[0_10px_28px_rgba(148,163,184,0.08)]"
                                            >
                                                <ReactMarkdown
                                                    components={{
                                                        a: ( { ...props } ) => (
                                                            <a
                                                                {...props}
                                                                className="font-medium text-[var(--accent-primary)] underline decoration-[rgba(99,102,241,0.35)] underline-offset-4"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            />
                                                        ),
                                                        p: ( { children } ) => (
                                                            <p className="text-base leading-8 text-[var(--text-muted)]">
                                                                {children}
                                                            </p>
                                                        ),
                                                    }}
                                                >
                                                    {description}
                                                </ReactMarkdown>
                                            </div>
                                        ) )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
}
