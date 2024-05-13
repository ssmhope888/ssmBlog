import  React, {useState,useReducer} from 'react'
import PropTypes from 'prop-types';
import Link from "next/link";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('id', {
    header: () => <span>文章标题</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('title', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>文章标题</span>,
  }),
  columnHelper.accessor('description', {
    header: () => '文章内容',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('date', {
    header: () => <span>发布日期</span>,
  }),
]

function PostList({posts}) {
  const data = [...posts];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              <th>序号</th>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row,index) => (
            <tr key={row.id}>
              <td key={index + 1}>{index + 1}</td>
              {row.getVisibleCells().map(cell => {
                if (cell.column.id === 'title') {
                  return (
                    <td key={cell.id}>
                      <Link style={{color:'blue',textDecoration: 'underline'}} href={`/blog/${row.original.id}`}>{cell.renderValue('title')}</Link>,
                    </td>
                    )
                }
                 return ( <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>)
                })}
            </tr>
          ))}
        </tbody>
      </table>
  )
}
PostList.propTypes = {
  posts: PropTypes.arrayOf,
};

export default PostList;
