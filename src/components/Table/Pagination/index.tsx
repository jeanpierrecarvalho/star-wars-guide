import { useEntityContext } from "@/providers/EntityProvider";

const Pagination: React.FC = () => {
  const { page, totalPages, handlePageChange } = useEntityContext();

  return (
    <div className="flex flex-row justify-between items-center">
      <button
        className="bg-yellow-500 hover:bg-yellow-300 px-2 py-1 rounded-lg w-32 font-medium text-gray-900"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <span className="flex flex-row items-center text-center text-lg">
        Page {page} of {totalPages}
      </span>
      <button
        className="bg-yellow-500 hover:bg-yellow-300 px-2 py-1 rounded-lg w-32 font-medium text-gray-900"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
