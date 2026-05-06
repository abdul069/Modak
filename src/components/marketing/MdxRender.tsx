import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

const components: MDXRemoteProps["components"] = {
  h1: (props) => <h1 className="font-display" {...props} />,
  h2: (props) => <h2 className="font-display" {...props} />,
  h3: (props) => <h3 className="font-display" {...props} />,
  p: (props) => <p className="text-brand-ink-soft" {...props} />,
  a: (props) => (
    <a
      className="text-brand-primary underline-offset-4 hover:underline"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-brand-accent bg-brand-accent/10 px-5 py-3 italic text-brand-ink"
      {...props}
    />
  ),
};

export function MdxRender({ source }: { source: string }) {
  return (
    <div className="prose-modak max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
