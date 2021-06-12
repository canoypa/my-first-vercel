import { GetStaticProps, NextPage } from "next";

type Props = {
  date: string;
};
const Time: NextPage<Props> = ({ date }) => {
  return <p>{date}</p>;
};
export default Time;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const date = new Date().toUTCString();
  return {
    props: { date },
    revalidate: 60,
  };
};
