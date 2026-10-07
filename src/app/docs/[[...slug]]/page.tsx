import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const authors = page.data.authors
    .map((author) => author.trim())
    .filter(Boolean);
  const byline = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }).format(authors);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      {byline ? (
        <p className="mt-1 text-fd-muted-foreground text-sm">By {byline}</p>
      ) : null}
      <DocsDescription className={byline ? "mt-2 mb-0" : "mb-0"}>
        {page.data.description}
      </DocsDescription>
      {page.data.lastModified && (
        <p className="text-fd-muted-foreground text-end text-xs italic">
          Last Updated:{" "}
          {new Date(page.data.lastModified).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      )}
      <DocsBody className="mt-8">
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
