import { lazy } from "react";

const Introduccion = lazy(() => import("../components/Manual/Introduccion/Introduccion"));
const Configuracion = lazy(() => import("../components/Manual/Configuracion/Configuracion"));
const Requirement = lazy(() => import("../components/Manual/Requirement/Requirement"));
const Instalation = lazy(() => import("../components/Manual/Instalation/Instalation"));
const PingApplication = lazy(() => import("../components/Manual/PingApplication/PingApplication"));
const WhatsappAPI = lazy(() => import("../components/Manual/WhatsappAPI/WhatsappAPI"));
const StartServices = lazy(() => import("../components/Manual/StartServices/StartServices"));

export const routes = [
    {
        name: "Introducción",
        path: "introduccion",
        componentName: <Introduccion/>
    },
    {
        name: "Requisitos",
        path: "requisitos",
        componentName: <Requirement/>,
    },
    {
        name: "Instalación",
        path: "instalacion",
        componentName: <Instalation/>,
        subroutes: [
            // {
            //     name: "Windows",
            //     path: "windows",
            //     componentName: <InstallWindows/>,
            //     child: true
            // },
            // {
            //     name: "Linux",
            //     path: "linux",
            //     componentName: <InstallLinux/>,
            //     child: true
            // },
            // {
            //     name: "Windows & Linux",
            //     path: "windows-linux",
            //     componentName: <InstallZip/>,
            //     child: true
            // },
        ]
    },
    {
        name: "Iniciar servicios",
        path: "iniciar-servicios",
        componentName: <StartServices/>,
    },
    {
        name: "Ping Application",
        path: "ping-application",
        componentName: <PingApplication/>,
    },
    {
        name: "Whatsapp API",
        path: "whatsapp-api",
        componentName: <WhatsappAPI/>,
    },
    {
        name: "Comenzar",
        path: "comenzar",
        // componentName: 'Comenzar',
    },
    {
        name: "Configuracion",
        path: "configuracion",
        componentName: <Configuracion/>,
    },
    {
        name: "Mensajeria",
        path: "mensajeria",
        // componentName: 'Mensajeria',
    },
    {
        name: "Paquetes",
        path: "paquetes",
        // componentName: 'Paquetes',
        subroutes: [
            {
                name: "Agregar",
                path: "agregar",
                // componentName: 'Agregar',
            },
            {
                name: "Editar",
                path: "editar",
                // componentName: 'Editar',
            },
            {
                name: "Eliminar",
                path: "eliminar",
                // componentName: 'Eliminar',
            },
        ]
    },
    {
        name: "Antenas",
        path: "antenas",
        // componentName: 'Antenas',
        subroutes: [
            {
                name: "Agregar",
                path: "agregar",
                // componentName: 'Agregar',
            },
            {
                name: "Editar",
                path: "editar",
                // componentName: 'Editar',
            },
            {
                name: "Eliminar",
                path: "eliminar",
                // componentName: 'Eliminar',
            },
        ]
    },
    {
        name: "Mikrotiks",
        path: "mikrotiks",
        // componentName: 'Mikrotiks',
        subroutes: [
            {
                name: "Agregar",
                path: "agregar",
                // componentName: 'Agregar',
            },
            {
                name: "Editar",
                path: "editar",
                // componentName: 'Editar',
            },
            {
                name: "Eliminar",
                path: "eliminar",
                // componentName: 'Eliminar',
            },
            {
                name: "Visualizar",
                path: "visualizar",
                // componentName: 'Visualizar',
            },
        ]
    },
    {
        name: "Colonias",
        path: "colonias",
        // componentName: 'Colonias',
        subroutes: [
            {
                name: "Agregar",
                path: "agregar",
                // componentName: 'Agregar',
            },
            {
                name: "Editar",
                path: "editar",
                // componentName: 'Editar',
            },
            {
                name: "Eliminar",
                path: "eliminar",
                // componentName: 'Eliminar',
            },
            {
                name: "Graficas",
                path: "graficas",
                // componentName: 'Graficas',
            }
        ]
    },
    {
        name: "Clientes",
        path: "clientes",
        // componentName: 'clientes',
        subroutes: [
            {
                name: "Conexión",
                path: "conexion",
                // componentName: 'Conexion',
                child: true
            },
            {
                name: "Suspensión",
                path: "suspension",
                // componentName: 'Suspension',
                child: true
            },
            {
                name: "Negociación",
                path: "negociacion",
                // componentName: 'Negociacion',
                child: true
            },
            {
                name: "Pagos",
                path: "pagos",
                // componentName: 'Pagos',
                child: true
            },
            {
                name: "Historial",
                path: "historial",
                // componentName: 'Historial',
                child: true
            },
            {
                name: "Reportes",
                path: "reportes",
                // componentName: 'Reportes',
                child: true
            },
        ]
    },
    {
        name: "Usuarios",
        path: "usuarios",
        // componentName: 'Usuarios',
    },
]