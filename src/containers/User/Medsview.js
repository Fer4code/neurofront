import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as War } from '../icons/warning.svg';


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

const  MedTable = function(props) {
  const classes = useStyles(); 
  const { useState } = React;

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
        
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Medicamentos</Typography>}
      columns={[        
        { title: 'Nombre', field: 'nombre' },
        { title: 'Comp Activo', field: 'principio_activo' },
        { title: 'Presentacion', field: 'presentacion' },
        { title: 'Laboratorio', field: 'laboratorio' },       
        
      ]}
      data={medsList}
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