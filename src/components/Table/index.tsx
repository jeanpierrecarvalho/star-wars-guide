import React, { useState, useEffect, memo, useCallback } from "react";
import { fetchEntity } from "@/services/star-wars-api";
import { ENTITY_TYPE } from "@/constants/entities";

import Loading from "@/components/Table/Loading";
import Error from "@/components/Table/Error";
import Actions from "@/components/Table/Actions";
import Pagination from "@/components/Table/Pagination";

interface IProps {
  type: string;
}

interface IEntity {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [key: string]: any;
}

const Table: React.FC<IProps> = ({ type }: IProps) => {
  const [data, setData] = useState<IEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      loadData();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, page]);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetchEntity(
        ENTITY_TYPE[type].toFetch,
        page,
        searchTerm,
      );
      setData(response.results);
      setTotalPages(Math.ceil(response.count / 10));
    } catch (err) {
      setError("Failed to load data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage > 0 && newPage <= totalPages) {
        setPage(newPage);
      }
    },
    [totalPages],
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setPage(1);
    },
    [],
  );

  return (
    <div className="mt-8">
      <div className="mt-12 px-6">
        <Actions
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </div>

      <div>
        {loading && <Loading />}

        {error ? (
          <Error error={error} />
        ) : (
          <table className="border-collapse mt-8 w-full text-left table-auto">
            <thead>
              <tr>
                {ENTITY_TYPE[type]?.attributes.map((attribute, index) => (
                  <th key={index} className="px-6">
                    {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.name}>
                  {ENTITY_TYPE[type]?.attributes.map(
                    (attribute: string, index: number) => (
                      <td
                        className={`px-6 py-2 border-b ${
                          index === 0 && "w-64"
                        }`}
                        key={index}
                      >
                        {row[attribute]}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-12 px-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default memo(Table);
