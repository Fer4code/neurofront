import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles, Typography, Grid, Button, Dialog, DialogActions,TextField, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as War } from '../icons/warning.svg';
import { ReactComponent as Eadd } from '../icons/examadd.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    width: '100%',
    height: '90%',
    position: 'center',
    align: 'center',
  },
  icon: {
    width: "30px",
    height: "30px",
    viewBox: "0 0 100 100"
  },
  table: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A69C68',
  }
}));

const  AntTable = function(props) {
  const classes = useStyles(); 
  const { useState } = React;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [ants, setAnts] = React.useState(null)
  const [newAnt, setNewAnt] = React.useState({
    name: '',
    description: ''
  })

  const config = {
    headers: { Authorization: "Bearer " + props.token }
  }

  React.useEffect(() => {
    if (ants === null) {
      axios.get('backgrounds', config)
        .then((response) => {
          setAnts(response.data.data)
        })
        .catch((err) => {

        })
    }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleSubmit = () => {
    axios.post('backgrounds', newAnt, config)
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err.data)
    })
  }

  const changeNewAnt = (e) => {
    setNewAnt({
      ...newAnt,
      [e.target.name]: e.target.value
    })
  }

  let antsList = []
  if (ants != null) {
    antsList = ants
  }

  return (
    <div className={classes.root}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Agregar nuevo Antecedente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese los detalles del antecedente a agregar
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="ant_name"
            name="name"
            value={newAnt.name}
            onChange={changeNewAnt}
            placeholder="Nombre del antecedente"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="ant_description"
            name="description"
            value={newAnt.description}
            onChange={changeNewAnt}
            placeholder="Detalles"
            type="text"
            fullWidth
            multiline="true"
            rowsMax={7}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleSubmit} color="primary">
            Agregar
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open1} onClose={handleClose1} aria-labelledby="form-dialog-title">
        <DialogTitle>Observacion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese una observacion para deshabilitar el examen
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="observacion"
            placeholder="Observaciones"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose1} color="primary">
            Confirmar
            <Check className={classes.icon}/>
          </Button>
          <Button onClick={handleClose1} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Administrador de antecedentes</Typography>}
      columns={[
        
        { title: 'Nombre', field: 'name' },
        
        { title: 'Descripcion', field: 'description'},
        
      ]}
      data={antsList}
      detailPanel={[
        {
          tooltip: 'Show Name',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 100,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#43A047',
                }}
              >
                {rowData.description}
              </div>
            )
          },
        },
      ]}
      localization={{
        header: {
            actions: 'Habilitar/Inhabilitar'
        },
        body: {
            emptyDataSourceMessage: 'No existen antecedentes registrados',
            filterRow: {
                filterTooltip: 'Filtrar',
            },
            addTooltip: 'Agregar'
        },        
        toolbar:{
          searchPlaceholder: 'Buscar', 
          exportName: 'Exportar'
        },
        pagination:{
          labelRowsSelect: 'Columnas',
          labelDisplayedRows: '{from}-{to} de {count}',
          firstTooltip: 'Inicio',
          lastTooltip: 'Final',
          nextTooltip: 'Siguiente pagina',
          previousTooltip: 'Pagina anterior'
        },
    }}
      actions={[
        {
            icon: () => <Eadd className={classes.icon}/>,
            isFreeAction: true,
            tooltip: 'Agregar Antecedente',
            onClick: (event) => handleClickOpen()
        },
        {
          icon: () => <Check className={classes.icon}/>,
          tooltip: 'Habilitado',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        rowData => ({
          icon: ()=> <War className={classes.icon}/>,
          tooltip: 'Inhabilitar',
            onClick: (event) => handleClickOpen1()
        }),        
      ]}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        filterCellStyle: {
          backgroundColor: '#1111'
        },
        detailPanelStyle: {
            backgroundColor: '#EEE',
        },
        searchFieldStyle: {
          backgroundColor: '#91C5D3', 
          width: '100%'
        },
        searchFieldVariant: 'outlined',
        actionsColumnIndex: -1,
        exportButton: false,
        pageSize: 10,
        pageSizeOptions: [10, 15, 20],       
      }}
    />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AntTable)