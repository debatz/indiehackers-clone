import ReactMarkdown from 'react-markdown';

export default function SlugPostContent({ children }) {
  return (
    <ReactMarkdown className="prose prose-xl prose-invert">
      {children}
    </ReactMarkdown>
  );
}
