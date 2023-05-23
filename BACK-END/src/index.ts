import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import routesUser from './routes/userR';
import loginR from './routes/loginR';
import administrador from './routes/administradorR';
import cajero from './routes/cajeroR';
import cliente from './routes/clienteR';
import ejecutivo from './routes/ejecutivoR';
import getCliente from './routes/busquedaR';
import getCuenta from './routes/busquedaDepositoR';
import insertarDeposito from './routes/insertarDepositoR';
import getMovimiento from './routes/mostrarMovimientosR';
import getNombreCuentas from './routes/obtenerNombreCuentasR';
import getNombreGeneros from './routes/obtenerNombreGenerosR';
import getEstadosCivil from './routes/obtenerEstadoCivilesR';
import getTiposIdentificacion from './routes/obtenerTiposIdentificacionR';
import getPaises from './routes/obtenerPaisesR';
import getEstados from './routes/obtenerEstadosR';
import getComprobantesDomiclio from './routes/obtenerComprobantesDomicilioR';
import getTiposCuentas from './routes/obtenerTiposCuentasR';
import getFoliosDisponibles from './routes/obtenerFoliosDisponiblesR';
import postCuentaCliente from './routes/creacionCuentaClienteR';
import InformacionCliente from './routes/informacionClienteR';
import getTarjeta  from './routes/obtenerTarjetaR';
import getTarjetas from './routes/listaTarjetasR';
import apagarTarjeta from './routes/apagarTarjetaR';
import getTiposCuentasDisponibles from './routes/tipoCuentasDispoblesR';
import postAgregarCuenta  from './routes/agregarCuentaR';
import getServicios from './routes/listarServiciosR';
import getServicio from './routes/datosServicioR';
import postPagarServicio from './routes/pagarServicioR';
import apagarCuenta from './routes/apagarCuentaR';
import transferencia from './routes/transferenciaR';
import postNumeroCuentas from './routes/listarNumeroCuentasR';
import getDueñoCuenta from './routes/dueñoCuentaR';
import prueba from './routes/mailerroutes';
import fbancaeC  from './routes/fbancaeR';
import  usubancaeC  from './routes/usubancaeR';
import postTransferenciaSpei from './routes/transferenciaSpeiR'
import postBuroCredito from './routes/buroCreditoR';
import postAsignarCredito from './routes/asignarCreditoR';
import postTransferenciaCuentas from './routes/transferenciaCuentasR';
import estadoCuentaCredito from './routes/estadoCuentaCreditoR';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.midlewares();
        this.routes();
    }

    
    config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
          this.app.use(indexRoutes);
          this.app.use('/api/users', routesUser);
          this.app.use('/api/login', loginR);
          this.app.use('/api/administrador', administrador);
          this.app.use('/api/cajero', cajero);
          this.app.use('/api/cliente', cliente);
          this.app.use('/api/ejecutivo', ejecutivo);
          this.app.use('/api/busqueda', getCliente);
          this.app.use('/api/buscarCuenta', getCuenta);
          this.app.use('/api/insertarDeposito', insertarDeposito);
          this.app.use('/api/mostrarMovimientos', getMovimiento);
          this.app.use('/api/mostrarNombreCuentas', getNombreCuentas);
          this.app.use('/api/mostrarNombreGeneros', getNombreGeneros);
          this.app.use('/api/mostrarEstadosCivil', getEstadosCivil);
          this.app.use('/api/mostrarTiposIdentificacion', getTiposIdentificacion);
          this.app.use('/api/mostrarPaises', getPaises);
          this.app.use('/api/mostrarEstados', getEstados);
          this.app.use('/api/mostrarComprobantesDomicilio', getComprobantesDomiclio);
          this.app.use('/api/mostrarTiposCuentas', getTiposCuentas);
          this.app.use('/api/mostrarFoliosDisponibles', getFoliosDisponibles);
          this.app.use('/api/insertarCuentaCliente', postCuentaCliente);
          this.app.use('/api/informacionCliente', InformacionCliente);
          this.app.use('/api/tarjeta',getTarjeta);
          this.app.use('/api/tarjetas',getTarjetas);
          this.app.use('/api/prender',apagarTarjeta);
          this.app.use('/api/cuentasDisponibles', getTiposCuentasDisponibles);
          this.app.use('/api/agregarCuenta', postAgregarCuenta);
          this.app.use('/api/listaservicio', getServicios);
          this.app.use('/api/servicio', getServicio);
          this.app.use('/api/pagoservicio', postPagarServicio);
          this.app.use('/api/apagarCuenta', apagarCuenta);
          this.app.use('/api/transferencia', transferencia);
          this.app.use('/api/numeroCuentas', postNumeroCuentas);
          this.app.use('/api/duenoCuenta', getDueñoCuenta);
          this.app.use('/api/mailer', prueba);
          this.app.use('/api/fbancaeC',fbancaeC)
          this.app.use('/api/usubancaeC', usubancaeC)
          this.app.use('/api/transferenciaSpei', postTransferenciaSpei);
          this.app.use('/api/buroCredito', postBuroCredito);
          this.app.use('/api/asignarCredito', postAsignarCredito);
          this.app.use('/api/transferenciaCuentas', postTransferenciaCuentas);
          this.app.use('/api/mailer', prueba);
          this.app.use('/api/fbancaeC',fbancaeC)
          this.app.use('/api/usubancaeC', usubancaeC)
          this.app.use('/api/estadoCuentasCredito', estadoCuentaCredito);
    }

    
    start(): void {
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'));
        });
    }
    
    midlewares(){
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(cors())
 
    }
}
const server = new Server();
server.start();

