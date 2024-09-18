import { useEntityContext } from "@/providers/EntityProvider";

const Pagination: React.FC = () => {
  const { page, totalPages, handlePageChange } = useEntityContext();

  return (
    <div>
      <span className="flex flex-row justify-center items-center sm:hidden mb-4 text-center text-md">
        Page {page} of {totalPages}
      </span>

      <div className="flex flex-row justify-between items-center">
        <button
          className={`${
            page === 1
              ? "bg-yellow-500 opacity-40 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-300"
          } px-2 py-1 rounded-lg w-32 font-medium text-gray-900`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous Page"
          aria-disabled={page === 1}
        >
          Previous
        </button>
        <span className="sm:flex flex-row items-center hidden text-center text-lg">
          Page {page} of {totalPages}
        </span>
        <button
          className={`${
            page === totalPages
              ? "bg-yellow-500 opacity-40 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-300"
          } px-2 py-1 rounded-lg w-32 font-medium text-gray-900`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next Page"
          aria-disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
