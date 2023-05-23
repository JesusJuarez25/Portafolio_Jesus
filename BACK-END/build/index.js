"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userR_1 = __importDefault(require("./routes/userR"));
const loginR_1 = __importDefault(require("./routes/loginR"));
const administradorR_1 = __importDefault(require("./routes/administradorR"));
const cajeroR_1 = __importDefault(require("./routes/cajeroR"));
const clienteR_1 = __importDefault(require("./routes/clienteR"));
const ejecutivoR_1 = __importDefault(require("./routes/ejecutivoR"));
const busquedaR_1 = __importDefault(require("./routes/busquedaR"));
const busquedaDepositoR_1 = __importDefault(require("./routes/busquedaDepositoR"));
const insertarDepositoR_1 = __importDefault(require("./routes/insertarDepositoR"));
const mostrarMovimientosR_1 = __importDefault(require("./routes/mostrarMovimientosR"));
const obtenerNombreCuentasR_1 = __importDefault(require("./routes/obtenerNombreCuentasR"));
const obtenerNombreGenerosR_1 = __importDefault(require("./routes/obtenerNombreGenerosR"));
const obtenerEstadoCivilesR_1 = __importDefault(require("./routes/obtenerEstadoCivilesR"));
const obtenerTiposIdentificacionR_1 = __importDefault(require("./routes/obtenerTiposIdentificacionR"));
const obtenerPaisesR_1 = __importDefault(require("./routes/obtenerPaisesR"));
const obtenerEstadosR_1 = __importDefault(require("./routes/obtenerEstadosR"));
const obtenerComprobantesDomicilioR_1 = __importDefault(require("./routes/obtenerComprobantesDomicilioR"));
const obtenerTiposCuentasR_1 = __importDefault(require("./routes/obtenerTiposCuentasR"));
const obtenerFoliosDisponiblesR_1 = __importDefault(require("./routes/obtenerFoliosDisponiblesR"));
const creacionCuentaClienteR_1 = __importDefault(require("./routes/creacionCuentaClienteR"));
const informacionClienteR_1 = __importDefault(require("./routes/informacionClienteR"));
const obtenerTarjetaR_1 = __importDefault(require("./routes/obtenerTarjetaR"));
const listaTarjetasR_1 = __importDefault(require("./routes/listaTarjetasR"));
const apagarTarjetaR_1 = __importDefault(require("./routes/apagarTarjetaR"));
const tipoCuentasDispoblesR_1 = __importDefault(require("./routes/tipoCuentasDispoblesR"));
const agregarCuentaR_1 = __importDefault(require("./routes/agregarCuentaR"));
const listarServiciosR_1 = __importDefault(require("./routes/listarServiciosR"));
const datosServicioR_1 = __importDefault(require("./routes/datosServicioR"));
const pagarServicioR_1 = __importDefault(require("./routes/pagarServicioR"));
const apagarCuentaR_1 = __importDefault(require("./routes/apagarCuentaR"));
const transferenciaR_1 = __importDefault(require("./routes/transferenciaR"));
const listarNumeroCuentasR_1 = __importDefault(require("./routes/listarNumeroCuentasR"));
const due_oCuentaR_1 = __importDefault(require("./routes/due\u00F1oCuentaR"));
const mailerroutes_1 = __importDefault(require("./routes/mailerroutes"));
const fbancaeR_1 = __importDefault(require("./routes/fbancaeR"));
const usubancaeR_1 = __importDefault(require("./routes/usubancaeR"));
const transferenciaSpeiR_1 = __importDefault(require("./routes/transferenciaSpeiR"));
const buroCreditoR_1 = __importDefault(require("./routes/buroCreditoR"));
const asignarCreditoR_1 = __importDefault(require("./routes/asignarCreditoR"));
const transferenciaCuentasR_1 = __importDefault(require("./routes/transferenciaCuentasR"));
const estadoCuentaCreditoR_1 = __importDefault(require("./routes/estadoCuentaCreditoR"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.midlewares();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/users', userR_1.default);
        this.app.use('/api/login', loginR_1.default);
        this.app.use('/api/administrador', administradorR_1.default);
        this.app.use('/api/cajero', cajeroR_1.default);
        this.app.use('/api/cliente', clienteR_1.default);
        this.app.use('/api/ejecutivo', ejecutivoR_1.default);
        this.app.use('/api/busqueda', busquedaR_1.default);
        this.app.use('/api/buscarCuenta', busquedaDepositoR_1.default);
        this.app.use('/api/insertarDeposito', insertarDepositoR_1.default);
        this.app.use('/api/mostrarMovimientos', mostrarMovimientosR_1.default);
        this.app.use('/api/mostrarNombreCuentas', obtenerNombreCuentasR_1.default);
        this.app.use('/api/mostrarNombreGeneros', obtenerNombreGenerosR_1.default);
        this.app.use('/api/mostrarEstadosCivil', obtenerEstadoCivilesR_1.default);
        this.app.use('/api/mostrarTiposIdentificacion', obtenerTiposIdentificacionR_1.default);
        this.app.use('/api/mostrarPaises', obtenerPaisesR_1.default);
        this.app.use('/api/mostrarEstados', obtenerEstadosR_1.default);
        this.app.use('/api/mostrarComprobantesDomicilio', obtenerComprobantesDomicilioR_1.default);
        this.app.use('/api/mostrarTiposCuentas', obtenerTiposCuentasR_1.default);
        this.app.use('/api/mostrarFoliosDisponibles', obtenerFoliosDisponiblesR_1.default);
        this.app.use('/api/insertarCuentaCliente', creacionCuentaClienteR_1.default);
        this.app.use('/api/informacionCliente', informacionClienteR_1.default);
        this.app.use('/api/tarjeta', obtenerTarjetaR_1.default);
        this.app.use('/api/tarjetas', listaTarjetasR_1.default);
        this.app.use('/api/prender', apagarTarjetaR_1.default);
        this.app.use('/api/cuentasDisponibles', tipoCuentasDispoblesR_1.default);
        this.app.use('/api/agregarCuenta', agregarCuentaR_1.default);
        this.app.use('/api/listaservicio', listarServiciosR_1.default);
        this.app.use('/api/servicio', datosServicioR_1.default);
        this.app.use('/api/pagoservicio', pagarServicioR_1.default);
        this.app.use('/api/apagarCuenta', apagarCuentaR_1.default);
        this.app.use('/api/transferencia', transferenciaR_1.default);
        this.app.use('/api/numeroCuentas', listarNumeroCuentasR_1.default);
        this.app.use('/api/duenoCuenta', due_oCuentaR_1.default);
        this.app.use('/api/mailer', mailerroutes_1.default);
        this.app.use('/api/fbancaeC', fbancaeR_1.default);
        this.app.use('/api/usubancaeC', usubancaeR_1.default);
        this.app.use('/api/transferenciaSpei', transferenciaSpeiR_1.default);
        this.app.use('/api/buroCredito', buroCreditoR_1.default);
        this.app.use('/api/asignarCredito', asignarCreditoR_1.default);
        this.app.use('/api/transferenciaCuentas', transferenciaCuentasR_1.default);
        this.app.use('/api/mailer', mailerroutes_1.default);
        this.app.use('/api/fbancaeC', fbancaeR_1.default);
        this.app.use('/api/usubancaeC', usubancaeR_1.default);
        this.app.use('/api/estadoCuentasCredito', estadoCuentaCreditoR_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
    midlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
    }
}
const server = new Server();
server.start();
