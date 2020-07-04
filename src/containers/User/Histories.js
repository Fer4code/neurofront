import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core/'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";


const columns = [
  { id: 'user_id', label: 'Nombre', minWidth: 170 },
  { id: 'description', label: 'Motivo de consulta', minWidth: 100 },
  { id: 'created_at', label: 'Fecha', minWidth: 100 }
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  cont:{
    paddingTop: 80
  },
  container: {
    height: '65vh',
  },
} );

const StickyHeadTable = function(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [clinicalStories, setClinicalStories] = React.useState(null);
  const [strQuery, setStrQuery] = React.useState('');

  React.useEffect(() => {
    if (clinicalStories === null) {
      const config = {
        headers: { Authorization: "Bearer " + props.token }
      }
      axios.get('clinical_stories', config)
        .then((response) => {
          setClinicalStories(response.data.data)
        })
        .catch((err) => {

        })
    }
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeQuery = (e) => {
    setStrQuery(e.target.value)
  }

  let tableBody = <h4>Cargando datos</h4>
  if (clinicalStories != null) {
    tableBody = clinicalStories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
  }

  return (
    <Container maxWidth='lg' className={classes.cont}>
      
    <Paper className={classes.root}>
    <Grid container spacing={10} wrap='wrap' justify='flex-end' alignItems='stretch'>
    <Grid item xs={7} sm={7}>
    <Typography variant="h3" color="initial">Historias</Typography>
    </Grid>
    <Grid item xs={5} sm={5}>
          <TextField
            id="outlined-search"
            type='search'
            variant="outlined"
            value={strQuery}
            onChange={changeQuery}
            fullWidth
            placeholder="Buscar por nombre, motivo de consulta o fecha"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
    </Grid>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 25, 100]}
        component="div"
        count={clinicalStories?.length || 0}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage='Filas por pagina:'
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickyHeadTable)