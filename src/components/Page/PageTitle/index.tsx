interface IProps {
  title: string;
}

const PageTitle: React.FC<IProps> = ({ title }) => {
  return (
    <div className="border-2 border-yellow-500 bg-gray-900 px-2 pb-2 border-opacity-60">
      <h1
        className="font-starjout text-5xl text-center text-yellow-500"
        role="heading"
        aria-level={1}
        aria-label={`Page title: ${title}`}
        id="page-title"
      >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
