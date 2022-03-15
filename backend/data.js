import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name:'elhem',
            email:'eldream903@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,

        },
        {
            name:'ahmed',
            email:'ahmed@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,

        }

    ],
    products:[
        {
            name:'site web portfoliov2',
            category:'c1',
            image:'../images/pf.jpg',
            brand:'ITILLUSION',
            description:'Mon portfolio',
            outils:'react Js & NodeJs',
            lien:'https://github.com/dream903/SHARE-P',

        },

        {
            name:'site web Aide Sociale',
            category:'c2',
            image:'../images/aidesoc.jpg',
            brand:'MAS',
            description:'Prestation pour les employes licenciés', 
            outils:'JAVA/JEE & BD ORACLE',
            lien:'https://github.com/dream903/SHARE-PORTFOLIO',


        },
        {
            name:'site web gestion clients kine',
            category:'c2',
            image:'../images/kine3.jpg',
            brand:'ITILLUSION',
            description:'gestion des rdv & des clients', 
            outils:'react Js & NodeJs',
            lien:'https://github.com/dream903/SHARE-PORTFOLIO',


        },
        {
            name:'site web gestion clients kinev2',
            category:'c2',
            image:'../images/kine2.jpg',
            brand:'ITILLUSION',
            outils:'spring boot & thymeleaf',
            description:'gestion des rdv & des clients',
            lien:'https://github.com/dream903/SHARE-PORTFOLIO',

        },
        {
            name:'site web commerciale',
            category:'c2',
            image:'../images/com.jpg',
            brand:'ITILLUSION',
            outils:'React JS & NodeJS & MongoDB',
            description:'Site pour transaction commerciale',
            lien:'https://github.com/dream903/SHARE-PORTFOLIO',

           
        },
        {
            name:'site web PHOTOGRAPHE',
            category:'c2',
            image:'../images/ph.jpg',
            brand:'ITILLUSION',
            outils:'React JS & NodeJS&MongoDBb',
            description:'site destine pour photographe',
            lien:'https://github.com/dream903/SHARE-PORTFOLIO',

            
        },




    ]
}
export default data;