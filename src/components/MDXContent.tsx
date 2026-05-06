import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = props.href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary underline underline-offset-4"
        />
      );
    }
    return (
      <Link
        href={props.href ?? "#"}
        className="text-brand-primary underline underline-offset-4"
      >
        {props.children}
      </Link>
    );
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={typeof props.src === "string" ? props.src : ""}
      alt={props.alt ?? ""}
      width={1200}
      height={800}
      className="my-8 h-auto w-full rounded-lg"
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="my-6 border-l-4 border-brand-accent bg-brand-accent/8 px-5 py-4 italic text-brand-ink"
    />
  ),
};

export function MDXContent(props: MDXRemoteProps) {
  return (
    <div className="prose-modak max-w-none">
      <MDXRemote {...props} components={{ ...components, ...(props.components ?? {}) }} />
    </div>
  );
}
