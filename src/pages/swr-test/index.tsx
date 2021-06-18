import { GetStaticProps, NextPage } from "next";
import useSWR from "swr";

const fetcher = async (key: string) => {
  const v = await fetch(`http://localhost:3000${key}`);
  return await v.json();
};

type Props = {
  data: string;
};
const SwrTest: NextPage<Props> = (props) => {
  const { data } = useSWR("/api/hello", fetcher, {
    initialData: props.data,
  });

  return <p>{data.name}</p>;
};
export default SwrTest;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await fetcher("/api/hello");

  return {
    props: { data },
    revalidate: 60,
  };
};
