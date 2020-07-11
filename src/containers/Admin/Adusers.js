import React from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import { makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import { ReactComponent as Check } from '../icons/check.svg';
import { ReactComponent as War } from '../icons/warning.svg';
import BackButton from '../../components/UI/BackButton/BackButton';



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

const UserTable = function(props) {
  const classes = useStyles();
  
  const [users, setUsers] = React.useState(null)

  React.useEffect(() => {
    if (users === null) {
      const config = {
        headers: { Authorization: "Bearer " + props.token }
      }
      axios.get('users', config)
        .then((response) => {
          setUsers(response.data.data)
        })
        .catch((err) => {

        })
    }
  })
  
  let usersList = []
  if(users != null) {
    usersList = users
  }
  return (
    <div className={classes.root}>
      <BackButton/>
      <MaterialTable className={classes.table} 
      title= {<Typography variant='h6' className={classes.title}>Administrador de usuarios</Typography>}
      columns={[
        
        { title: 'Nombre', field: 'first_name' },
        { title: 'Apellido', field: 'last_name' },
        { title: 'Correo', field: 'email'},
        { title: 'Usuario', field: 'username'},
        { title: 'Tipo de usuario', 
          field: 'role', 
        },
        { title: 'Género', field: 'gender', render: rowData => rowData == "m" ? "Masculino" : "Femenino"},
        { title: 'Creado', field: 'created_at'},
        
      ]}
      data={usersList}
      localization={{
        header: {
            actions: 'Acciones'
        },
        body: {
            emptyDataSourceMessage: 'No existen usuarios registrados',
            filterRow: {
                filterTooltip: 'Filtrar',
            },
        },        
        toolbar:{
          searchPlaceholder: 'Buscar', 
          exportName: 'Exportar'
        },
        pagination:{
          labelRowsSelect: 'Columnas',
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsPerPage: '10',
          firstTooltip: 'Inicio',
          lastTooltip: 'Final',
          nextTooltip: 'Siguiente pagina',
          previousTooltip: 'Pagina anterior'
        },
    }}
      actions={[
        rowData => ({
          icon: ()=> <Check className= {classes.icon}/>,
          tooltip: 'Habilitar',
          hidden: rowData.active,
          onClick: (event, rowData) => {
            const config = {
              headers: { Authorization: "Bearer " + props.token }
            }
            axios.put('users/' + rowData.id, { active: 1}, config)
            alert("Usuario habilitado")

          }
        })
        ,
        rowData => ({
          icon: ()=> <War className= {classes.icon}/>,
          tooltip: 'Inhabilitar',
          hidden: !rowData.active,
          onClick: (event, rowData) => {
            const config = {
              headers: { Authorization: "Bearer " + props.token }
            }
            axios.put('users/' + rowData.id, { active: 0}, config)
            alert("Usuario deshabilitado")
      
          }
        }),        
      ]}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        cellStyle: {
          backgroundColor: '#EEE',
        },
        actionsCellStyle: {
          backgroundColor: '#EEE'
        },
        filterCellStyle: {
          backgroundColor: '#1111'
        },
        searchFieldStyle: {
          backgroundColor: '#91C5D3', 
          width: '100%'
        },
        searchFieldVariant: 'outlined',
        actionsColumnIndex: -1,
        exportButton: true,
        exportCsv: (columns, data) => {
          alert('You should develop a code to export ' + data.length + ' rows');
        },
        pageSize: '10',
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

export default connect(mapStateToProps, mapDispatchToProps)(UserTable)