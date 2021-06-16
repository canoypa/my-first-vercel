import { GetStaticProps, NextPage } from "next";
import useSWR from "swr";

const fetcher = (key: string) => {
  return fetch(`http://localhost:3000${key}`).then((v) => v.json());
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
