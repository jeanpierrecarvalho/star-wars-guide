import React, { useEffect, memo } from "react";
import { ENTITY_TYPE } from "@/constants/entities";

import Loading from "@/components/Table/Loading";
import Error from "@/components/Table/Error";
import Actions from "@/components/Table/Actions";
import Pagination from "@/components/Table/Pagination";

import { useEntityContext } from "@/providers/EntityProvider";

interface IProps {
  type: string;
}

const Table: React.FC<IProps> = ({ type }: IProps) => {
  const context = useEntityContext();

  const { data, page, searchTerm, loading, error, loadData } = context;

  useEffect(() => {
    const handler = setTimeout(() => {
      loadData(type);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, page]);

  return (
    <React.Fragment>
      <div className="mt-4 sm:mt-8">
        <div className="sm:mt-12 px-6">
          <Actions />
        </div>

        <div
          className="scrollbar-thumb-yellow-500 overflow-x-auto scrollbar-thin scrollbar-track-black"
          tabIndex={0}
          role="region"
          aria-label="Scrollable table section"
        >
          {loading && (
            <div aria-live="polite" aria-busy="true">
              <Loading />
            </div>
          )}

          {error ? (
            <Error error={error} />
          ) : (
            <table
              className="border-collapse mt-4 sm:mt-8 w-full min-w-[640px] sm:min-w-full text-left table-auto"
              role="table"
              aria-label={`${type} data table`}
            >
              <thead>
                <tr>
                  {ENTITY_TYPE[type]?.attributes.map((attribute, index) => (
                    <th
                      key={index}
                      className="px-6 sm:px-6 py-1 sm:py-3 text-sm sm:text-base"
                      role="columnheader"
                      scope="col"
                      aria-label={`${attribute} column`}
                    >
                      {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row: any) => (
                  <tr key={row.name}>
                    {ENTITY_TYPE[type]?.attributes.map(
                      (attribute: string, index: number) => (
                        <td
                          className={`px-6 py-3 sm:px-6 sm:py-3 border-b text-sm sm:text-base ${
                            index === 0 ? "w-40 sm:w-64" : ""
                          }`}
                          key={index}
                          role="cell"
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
        <div className="mt-4 sm:mt-12 px-6">
          <Pagination />
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(Table);
