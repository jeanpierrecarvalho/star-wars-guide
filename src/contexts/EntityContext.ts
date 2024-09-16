import { createContext } from "react";

interface IEntityContext {
  data: any;
  page: number;
  totalPages: number;
  searchTerm: string;
  loading: boolean;
  error: string | null;
  loadData: (type: string) => void;
  handlePageChange: (newPage: number) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EntityContext = createContext<IEntityContext | undefined>(
  undefined,
);
