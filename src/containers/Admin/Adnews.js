import React from 'react';
import { makeStyles, Typography, Button, Dialog, DialogActions,TextField, DialogContent, DialogContentText, DialogTitle, Container } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as War } from '../icons/warning.svg';
import { ReactComponent as Eadd } from '../icons/examadd.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    width: '100%',
    height: 'vh',
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

export default function NewsTable() {
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

  const [data, setData] = useState([
    { name: 'Health', location: 'UK', description: 'text' },
  ]);

  return (
    <Container maxWidth="xl">
      
    <div className={classes.root}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Agregar nueva API de Noticias</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese los detalles de la api de noticias
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="api_name"
            placeholder="Nombre del API"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="api_address"
            placeholder="Direccion"
            type="text"
            fullWidth
            multiline="true"
            rowsMax={7}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
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
            Por favor ingrese una observación para deshabilitar la API
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
      title= {<Typography variant='h6' className={classes.title}>Administrador de Noticias</Typography>}
      columns={[
        
        { title: 'Nombre', field: 'name' },
        { title: 'Ubicación', field: 'location'},        
        { title: 'Creado', field: 'created'},
        
      ]}
      data={data}
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
            emptyDataSourceMessage: 'No existen API registrados',
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
            tooltip: 'Agregar API',
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
    </Container>
  );
}