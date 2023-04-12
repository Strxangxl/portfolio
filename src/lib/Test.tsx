import client from "../../sanityClient";
import { ImageAsset } from "@sanity/types";
import { GetServerSideProps } from "next";

type Project = {
  title: string;
  description: string;
  image: ImageAsset;
  tags: [],
  url: string;
};

type Props = {
  projects: Project[];
};

export default function Test({ projects }: Props) {
  // console.log(projects);
  return <h1>test</h1>;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const query = `*[_type == "project"]{
    title,
    description,
    image,
    tags,
    url
  }`;

  const projects = await client.fetch<Project[]>(query);
  console.log("projects", projects)

  return {
    props: {
      projects,
    },
  };
};
