import React, { useState, useCallback, useContext } from 'react'
import { EntityContext } from '@/contexts/EntityContext'
import { fetchEntity } from '@/services/star-wars-api'
import { ENTITY_TYPE } from '@/constants/entities'

interface IEntity {
  [key: string]: any
}

export const useEntityContext = () => {
  const context = useContext(EntityContext)
  if (!context) {
    throw new Error('useEntityContext must be used within an EntityProvider')
  }
  return context
}

export const EntityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<IEntity[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loadData = async (type: string) => {
    setLoading(true)
    try {
      const response = await fetchEntity(ENTITY_TYPE[type].toFetch, page, searchTerm)
      setData(response.results)
      setTotalPages(Math.ceil(response.count / 10))
    } catch (err) {
      setError('Failed to load data. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage > 0 && newPage <= totalPages) {
        setPage(newPage)
      }
    },
    [totalPages],
  )

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPage(1)
  }, [])

  return (
    <EntityContext.Provider
      value={{
        data,
        page,
        totalPages,
        searchTerm,
        loading,
        error,
        loadData,
        handlePageChange,
        handleSearchChange,
      }}
    >
      {children}
    </EntityContext.Provider>
  )
}
