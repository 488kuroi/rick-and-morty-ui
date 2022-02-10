import React, { FC, useState, useEffect } from 'react';

import { TableComponentProps } from '@core/interfaces';

import { loadTableData } from '@utils';
import * as REPOS from '@repositories/index';

import { ITheme } from '@themes'
import { makeStyles } from '@material-ui/core/styles';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

const useStyles = makeStyles((theme: ITheme) => ({
  paper: {
    overflowX: 'hidden',
    '& .MuiTableContainer-root': {
      width: 'calc( 100% + 20px )',
    }
  },
  headerCells: {
    backgroundColor: `${theme.palette.background.default}!important`,
    color: `${theme.palette.primary.contrastText}!important`,
  },
  rowsCells: {
    backgroundColor: `${theme.palette.background.paper}!important`,
    color: `${theme.palette.primary.contrastText}!important`,
  },
  paginationRow: {
    backgroundColor: `${theme.palette.background.default}!important`,
    color: `${theme.palette.primary.contrastText}!important`,
  }
}));

const TableComponent: FC<TableComponentProps> = ({
  headings,
  formatter,
  repository,
  action,
}) => {
  
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (fun: any) => useEffect(fun, []);
  // eslint-enable-next-line react-hooks/exhaustive-deps
  const [data, setData] = useState<Array<any>>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useMountEffect(() => {
    
    loadTableData(
      (page: number) => (REPOS as any)[repository][action](page),
      ( _data: any ) => formatter(_data),
      setData,
      () => console.log( 'done' )
    )
  } )

  return (
    <Paper data-testid="TableComponent" className={classes.paper}>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {headings.map((column) => (
                <TableCell
                  className={classes.headerCells}
                  key={column.id}
                  align={column?.align || 'left'}
                  style={(column?.style || {} )}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map( ( row: any, row_i: number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`row_${row_i}`}>
                    {headings.map( ( column: any, column_i: number ) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          className={classes.rowsCells}
                          key={`column_${column_i}_row_${row_i}`}
                          align={column?.align || 'left'}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={ classes.paginationRow}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;


