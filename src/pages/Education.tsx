import ReactMarkdown from 'react-markdown';
import { degrees } from '../data/education';

export default function Education ()
{
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Education</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        My academic journey through computer science, building a strong foundation in software engineering,
                        machine learning, and real-world problem solving.
                    </p>
                </div>

                {/* Degrees */}
                <div className="max-w-5xl space-y-12">
                    {degrees.map( ( degree, index ) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors"
                        >
                            <div className="flex items-start gap-6">
                                {/* Logo */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={degree.logo_path}
                                        alt={degree.alt_name}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                                {degree.title}
                                            </h2>
                                            <p className="text-lg text-gray-600 mb-2">
                                                {degree.subtitle}
                                            </p>
                                            <p className="text-sm text-gray-500 mb-2">
                                                {degree.duration}
                                            </p>
                                            {degree.gpa && (
                                                <p className="text-sm text-gray-500">
                                                    <b>GPA:</b> {degree.gpa}
                                                </p>
                                            )}
                                        </div>
                                        <a
                                            href={degree.website_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:text-gray-600 transition-colors text-sm"
                                        >
                                            Visit Website →
                                        </a>
                                    </div>

                                    {/* Descriptions */}
                                    <div className="space-y-3">
                                        {degree.descriptions.map( ( description, descIndex ) => (
                                            <div key={descIndex} className="text-gray-600 leading-relaxed">
                                                <ReactMarkdown
                                                    components={{
                                                        a: ( { node, ...props } ) => (
                                                            <a
                                                                {...props}
                                                                className="underline underline-offset-2 decoration-1"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            />
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