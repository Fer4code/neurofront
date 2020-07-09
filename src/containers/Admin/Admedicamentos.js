import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles, Typography, Grid, Button, Dialog, DialogActions,TextField, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as War } from '../icons/warning.svg';
import { ReactComponent as Eadd } from '../icons/pills.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(6),
    width: '100%',
    height: '90%',
    position: 'center',
    align: 'center',
  },
  icon: {
    width: "30px",
    height: "30px",
    viewBox: "0 0 100 100",
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

const  MedTable =  function(props) {
  const classes = useStyles(); 
  const { useState } = React;
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

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

  const [meds, setMeds] = React.useState(null)
  const [newMed, setNewMed] = React.useState({
    nombre: '',
    principio_activo: '',
    laboratorio: '',
    presentacion: ''
  })

  const config = {
    headers: { Authorization: "Bearer " + props.token }
  }

  React.useEffect(() => {
    if (meds === null) {
      axios.get('medicine_types', config)
        .then((response) => {
          console.log(response.data.data)
          setMeds(response.data.data)
        })
        .catch((err) => {

        })
    }
  })
  
  const handleSubmit = () => {
    axios.post('medicine_types', newMed, config)
    .then((response) => {
      console.log(response.data)
      alert("Medicamento creado satisfactoriamente")
      handleClose()
    })
    .catch((err) => {
      console.log(err.data)
    })
  }

  const changeNewMed = (e) => {
    setNewMed({
      ...newMed,
      [e.target.name]: e.target.value
    })
  }

  let medsList = []
  if (meds != null) {
    medsList = meds
  }

  return (
    <div className={classes.root}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Agregar nuevo medicamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese los detalles del medicamento a agregar
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="med_name"
            name="nombre"
            value={newMed.nombre}
            onChange={changeNewMed}
            placeholder="Nombre del medicamento"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="med_active"
            name="principio_activo"
            value={newMed.principio_activo}
            onChange={changeNewMed}
            placeholder="Principio Activo"
            type="text"
            fullWidth
            multiline="true"
            rowsMax={7}
            variant="outlined"
          />
          <TextField
            
            margin="dense"
            id="med_present"
            name="presentacion"
            value={newMed.presentacion}
            onChange={changeNewMed}
            placeholder="Presentacion"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="med_lab"
            name="laboratorio"
            value={newMed.laboratorio}
            onChange={changeNewMed}
            placeholder="Laboratorio"
            type="text"
            fullWidth
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
      title= {<Typography variant='h6' className={classes.title}>Administrador de medicamentos</Typography>}
      columns={[        
        { title: 'Nombre', field: 'nombre' },
        { title: 'Comp Activo', field: 'principio_activo' },
        { title: 'Presentacion', field: 'presentacion' },
        { title: 'Laboratorio', field: 'laboratorio' },           
      ]}
      data={medsList}
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
            emptyDataSourceMessage: 'No existen medicamentos registrados',
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
            tooltip: 'Agregar Medicamentos',
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

export default connect(mapStateToProps, mapDispatchToProps)(MedTable)