import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};
interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    date: page.date,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }
  const formattedDate = formatDate(page.date);
  return (
    <article className="py-6 prose prose-invert text-white">
      <h1>
        {formattedDate}
        {page.title}
      </h1>
      {page.description && (
        <p className="text-xl text-white">{page.description}</p>
      )}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  );
}
