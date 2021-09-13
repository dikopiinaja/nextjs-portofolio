import {IProject, IService, ISkill} from './type'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign,AiOutlineApi }  from 'react-icons/ai'
import {RiComputerLine} from 'react-icons/ri'
import {BsCircleFill} from 'react-icons/bs'

export const services:IService[] =[
    
    {
        title:"Frontend Development",
        about:"I can make beautiful with <b>HTML</b> <b>CSS</b> <b>VueJs</b>",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Development",
        about:"handel database, server, api using </b> & CodeIgniter, Laravel",
        Icon: FaServer,
    },
    {
        title:"API Development",
        about:"I can develop Rest Api using <b>Laravel rest_api</b>",
        Icon: AiOutlineApi,
    },
    {
        title: "Designer",
        about:"I can make design with CorelDraw, Adobe Ilustrator",
        Icon: AiOutlineAntDesign,
    }
]

export const languages:ISkill[] =[
    {
        name : 'PHP',
        level :'70%',
        Icon:BsCircleFill
    },
    {
        name : 'CodeIgniter',
        level :'70%',
        Icon:BsCircleFill
    },
    {
        name : 'Laravel',
        level :'70%',
        Icon:BsCircleFill
    },
    {
        name : 'Vue Js',
        level :'50%',
        Icon:BsCircleFill
    },
    {
        name : 'Next Js',
        level :'50%',
        Icon:BsCircleFill
    },
]

export const tools: ISkill[] = [
    {
        Icon:BsCircleFill,
        name:'Ilustrator',
        level:'50%'
    },
    {
        Icon:BsCircleFill,
        name:'CorelDraw',
        level:'60%'
    },
    {
        Icon:BsCircleFill,
        name:'Figma',
        level:'40%'
    },
]

export const projects: IProject[] = [
    {
        name: "Portofolio Vue Vite Tailwind",
        description : 'Simple portofolio vue vite tailwinds',
        image_path : '/images/vue port.png',
        deployed_url : 'https://dikopiiinaja.herokuapp.com',
        github_url : '-',
        category : ['vue'],
        key_techs : ['Vue Vite', 'Tailwindcss'],
    },
    {
        name: "Aplikasi Klinik",
        description : 'Aplikasi Klinik Sederhana',
        image_path : '/images/vb.png',
        deployed_url : '-',
        github_url : '-',
        category : ['java'],
        key_techs : ['java', 'mysql'],
    },
    {
        name: "Sistem Barcode Tamu",
        description : 'Input Form Application with barcode',
        image_path : '/images/srikandi.png',
        deployed_url : 'https://srikandi12.000webhostapp.com',
        github_url : '-',
        category : ['codeigniter'],
        key_techs : ['Codeigniter', 'Php'],
    },
    {
        name: "Web GIS Pemesanan Tiket Travel",
        description : 'Reservation With Maps Api',
        image_path : '/images/webgis.png',
        deployed_url : '-',
        github_url : '-',
        category : ['codeigniter'],
        key_techs : ['Codeigniter', 'Php', 'GMaps Api', 'Leaflet Js'],
    },
    {
        name: "CRUD Laravel Vue Js",
        description : 'Implementation rest api laravel by Vue js',
        image_path : '/images/crudlaravue.jpg',
        deployed_url : '-',
        github_url : '-',
        category : ['laravel'],
        key_techs : ['Laravel 7', 'Php', 'Vue Js'],
    },
    {
        name: "Restfull Node Express",
        description : 'Rest API Express Sequelizer',
        image_path : '/images/crudlaravue.jpg',
        deployed_url : '-',
        github_url : '-',
        category : ['node'],
        key_techs : ['Node', 'Java Script', 'Vue Js'],
    },
    {
        name: "Simple application selling",
        description : 'Simple Application Selling Codeigniter ',
        image_path : '/images/penjualan.png',
        deployed_url : '-',
        github_url : '-',
        category : ['codeigniter'],
        key_techs : ['Framework Codeigniter', 'Php'],
    },
]