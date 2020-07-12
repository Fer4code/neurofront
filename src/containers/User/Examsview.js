import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles, Typography, useTheme, Container } from '@material-ui/core';
import MaterialTable from 'material-table';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import { ReactComponent as Check } from '../icons/check.svg';
import BackButton from '../../components/UI/BackButton/BackButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '60vh',
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
  },
  container: {
    marginTop: theme.spacing(10)
  }
}));

const ExamTable = function(props) {
  const classes = useStyles(); 
  const { useState } = React;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [exams, setExams] = React.useState(null)
  const [newExam, setNewExam] = React.useState({
    name: '',
    description: ''
  })

  const config = {
    headers: { Authorization: "Bearer " + props.token }
  }
  React.useEffect(() => {
    if (exams === null) {
      axios.get('exam_types', config)
        .then((response) => {
          setExams(response.data.data)
        })
        .catch((err) => {

        })
    }
  })
 

  let examsList = []
  if (exams != null) {
    examsList = exams
  }

  return (
    <div className={classes.root}>
          <BackButton/>
      <Container maxWidth="lg" className={classes.container}>
        
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Examenes</Typography>}
      columns={[
        
        { title: 'Nombre', field: 'name' },
        
        { title: 'Descripcion', field: 'description'},
        
      ]}
      data={examsList}
      detailPanel={[
        {
          tooltip: 'Mostrar Detalles',
          render: rowData => {
            return (
              <div
                style={{
                  paddingLeft: 20,
                  fontSize: 20,
                  textAlign: 'left',
                  color: 'black',
                  backgroundColor: 'white',
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
            emptyDataSourceMessage: 'No existen examenes registrados',
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
            backgroundColor: 'white',
        },
        searchFieldStyle: {
          backgroundColor: '#91C5D3', 
          width: '100%'
        },
        searchFieldVariant: 'outlined',
        actionsColumnIndex: -1,
        exportButton: false,
        pageSize: 7,
        pageSizeOptions: [5, 15, 20],       
      }}
    />
          </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExamTable)