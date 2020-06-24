import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';


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

export default function MedTable() {
  const classes = useStyles(); 
  const { useState } = React;
  

  const [data, setData] = useState([
    { name: 'Acetaminofen', practive: 'Paracetamol', lab: 'Calox', presentation: 'Tabletas', administration:'Oral', created: '20/02/2020', description: 'text' },
  ]);

  return (
    <div className={classes.root}>
        
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Medicamentos</Typography>}
      columns={[        
        { title: 'Nombre', field: 'name' },
        { title: 'Comp Activo', field: 'practive' },
        { title: 'Presentacion', field: 'presentation' },
        { title: 'Laboratorio', field: 'lab' },        
        { title: 'Administracion', field: 'administration' },        
        { title: 'Creado', field: 'created'},
        
      ]}
      data={data}
      detailPanel={[
        {
          tooltip: 'Mostrar detalles',
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
            actions: 'Estado'
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
          labelRowsSelect: 'Filas',
          labelDisplayedRows: '{from}-{to} de {count}',
          firstTooltip: 'Inicio',
          lastTooltip: 'Final',
          nextTooltip: 'Siguiente pagina',
          previousTooltip: 'Pagina anterior'
        },
    }}
      actions={[
        {
          icon: () => <Check className={classes.icon}/>,
          tooltip: 'Habilitado',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
              
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