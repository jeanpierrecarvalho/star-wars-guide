import { useEntityContext } from "@/providers/EntityProvider";

const Pagination: React.FC = () => {
  const context = useEntityContext();

  const { page, totalPages, handlePageChange } = context;

  return (
    <div className="flex flex-row justify-between item-center">
      <button
        className="bg-yellow-500 hover:bg-yellow-300 px-2 py-1 rounded-lg w-32 font-medium text-gray-900"
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className="flex flex-row items-center text-center text-lg">
        Page {page} of {totalPages}
      </span>
      <button
        className="bg-yellow-500 hover:bg-yellow-300 px-2 py-1 rounded-lg w-32 font-medium text-gray-900"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
