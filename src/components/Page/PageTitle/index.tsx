interface IProps {
  title: string;
}

const PageTitle: React.FC<IProps> = ({ title }) => {
  return (
    <h1 className="font-starjout text-5xl text-center text-yellow-500">
      {title}
    </h1>
  );
};

export default PageTitle;
