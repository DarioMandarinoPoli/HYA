const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./testinitialize').default
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyptest")

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Event = database.define("Event", {
        title: DataTypes.STRING,
        des: DataTypes.STRING(1234),
        img: DataTypes.STRING,
        practInfo: DataTypes.STRING,
        practInfo: DataTypes.STRING,
        moreInfo: DataTypes.STRING,
        season: DataTypes.STRING,
        Participants: DataTypes.STRING,
        // artistlist: DataTypes.ARRAY,
    })

    const Itinerary = database.define("Itinerary", {
        title: DataTypes.STRING,
        des: DataTypes.STRING,
    })
    const Location  = database.define("location", {
        name: DataTypes.STRING,
        des: DataTypes.TEXT(1234),
        img: DataTypes.STRING(1234),
        practInfo: DataTypes.STRING(1234),
        MoreInfo: DataTypes.STRING,
        gooUrl: DataTypes.STRING(1234),
        longitude: DataTypes.FLOAT,
        latitude: DataTypes.FLOAT,
    })

    const Services  = database.define("services", {
        name: DataTypes.STRING,
        des: DataTypes.STRING(1234),
        img: DataTypes.STRING(1234),
        hours: DataTypes.STRING,
        type: DataTypes.STRING,
        practInfo: DataTypes.STRING(1234),
        MoreInfo: DataTypes.STRING,
        gooUrl: DataTypes.STRING(1234),
        longitude: DataTypes.FLOAT,
        latitude: DataTypes.FLOAT,
        Relatedevents:DataTypes.STRING(1234),
        genre: DataTypes.STRING,
    })


// Event Relationship
    Location.hasMany(Event )
    Event.belongsTo(Location)
// Itineraries Relationship
    Itinerary.hasMany( Location )
    Location.belongsTo(Itinerary)
    //artist Relationship
    Services.hasMany(Event )
    Event.belongsTo(Services)

    await database.sync({ force: true })
    return {
        Event,
        Location,
        Itinerary,
        Services
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
    homepage: {
        title: "Homepage",
        image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
        description: `Tokyo, Japanese Tōkyō formerly (until 1868) Edo, City (pop., 2010: city, 8,945,695; metro. area, 13,159,388), capital of Japan. It is the country’s largest city and is located in east-central Honshu at the head of Tokyo Bay. The site has been inhabited since ancient times. The small fishing village of Edo existed there for centuries before it became the capital of the Tokugawa shogunate in 1603, at the start of the Edo (Tokugawa) period. By the 19th century it was one of the largest cities in the world, with a population exceeding 1,000,000. Under the Meiji Restoration, in 1868 it replaced Kyōto as the imperial capital, and Edo was renamed Tokyo (“Eastern Capital”). A massive earthquake in the region in 1923 destroyed most of the city and killed at least 100,000 people, but most of it had been rebuilt by 1930. Much of it was again devastated by U.S. bombing during World War II and had to be reconstructed. The Summer Olympic Games were held there in 1964. Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines. There are some 150 institutions of higher learning, including the University of Tokyo (1877).'
        desc1:'Top Questions What was Tokyo once called? Tokyo was formerly (until 1868) known as Edo, the name of the small fishing village that existed on the site for centuries. Edo's development into a city did not occur until the Tokugawa period (1603–1867), when it became the capital of the Tokugawa shogunate. During this period, however, the imperial family remained in Kyōto, the ancient imperial capital. With the Meiji Restoration of 1868, which ended the shogunate, the capital was moved to Edo, and the city was renamed Tokyo, meaning "eastern capital." Where is Tokyo located in Japan?
        Tokyo is located at the head of Tokyo Bay on the Pacific coast of central Honshu. Tokyo is the focus of the vast Tokyo-Yokohama Metropolitan Area, often called Greater Tokyo.
        When was Tokyo bombed?
        The Bombing of Tokyo took place March 9–10, 1945, during the final stages of World War II. The firebombing raid (codenamed "Operation Meetinghouse") was carried out by the United States. The bombing is often cited as one of the most destructive acts of war in history.
        When were the Tokyo Olympics?
        Tokyo hosted the Olympic Games in 1964; the 1964 Summer Games, which took place October 10–24, constituted the first time that the Olympic Games were hosted in Asia. Tokyo is set to host the Olympic Games again in the summer of 2020.`,
        desc1:`Did You Know?
        Tokyo is home to the Tokyo Skytree, recognized by Guinness World Records as the world's largest tower. While the tower was under construction, its developers found out that the Canton Tower, built about the same time in Guangzhou, China, would be roughly the same size as the Skytree; soon thereafter, an antenna measuring some 20 metres (67 feet) tall was added to the top of the Skytree.
        The blooms of the cherry tree, known in Japan as sakura, have long been of immense symbolic importance to the nation, and the blossoming of cherry trees traditionally heralds the arrival of spring in Japan; in an annual tradition that began in 1951, meteorologists publicly forecast the much-anticipated blossoming of the cherry trees each year.`,
        desc2:`Tokyo is a very large city made smaller, thanks to its excellent transportation system. Though sometimes crowded, the infrastructure does an excellent job of providing transport to the numerous inhabitants and travelers in the city. There are many modes of transportation, each with their own strengths and weaknesses.`,
        imgs:['https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/2187424/pexels-photo-2187424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/356872/pexels-photo-356872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/210497/pexels-photo-210497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
    },
    about: {
        member1:{
            name:'Marie Maruyama',
            email:'marieiram0405@gmail.com',
            description:'Fist year Master degree Erasmus Student from Japan, She is studing Design. ',

        },

        member2:{
            name:'Ali Deylamy',
            email:'ali.deylamy@mail.polimi.it',
            description:'Fist year Master degree Student from Iran, He is studing Telecommunication.',

        },
        member3:{
            name:'Ahmed Abdalgader Ahmed Eisaa',
            email:'ahmedabdalgader@mail.polimi.it',
            description:'Fist year Master degree Student from Sudan, He is studing Geoinformatics.',

        }
        // title: "Group Member",
}
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    // app.get('/cats/:id', async (req, res) => {
    //     const id = +req.params.id
    //     const result = await models.Cat.findOne({ where: { id }, include: [{model: models.Location}] })
    //     return res.json(result)
    // })
    //HTTP Get api that return specific event
    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }, include: [{model: models.Services}] })
        return res.json(result)
    })

    // HTTP GET api that returns all the Events in our actual database
    app.get("/events", async (req, res) => {
        const result = await models.Event.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.title,
                img: element.img,
                des: element.des,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns all the points of the interest in our actual database
    app.get("/places", async (req, res) => {
        const result = await models.Location.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                des: element.des,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // // Endpoint for specific point of interest
    // app.get('/places/:id', async (req, res) => {
    //     const id = +req.params.id
    //     console.log(id)
    //     const result = await models.Location.findOne({ where: { id }, include: [{model: models.Location}] })
    //     return res.json(result)
    // })

    // HTTP GET api that returns all the cats in our actual database
    // app.get("/cats", async (req, res) => {
    //     const result = await models.Cat.findAll()
    //     const filtered = []
    //     for (const element of result) {
    //         filtered.push({
    //             name: element.name,
    //             img: element.img,
    //             breed: element.breed,
    //             id: element.id,
    //         })
    //     }
    //     return res.json(filtered)
    // })
     // HTTP GET api that returns all the cats in our actual database
    app.get("/events", async (req, res) => {
        const result = await models.Cat.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                breed: element.breed,
                id: element.id,
            })
        }
        return res.json(filtered)
    })

    // // HTTP GET api that returns events for specific season
    //  app.get("/events/seasonal_events/:season", async (req, res) => {
    //     const { season } = req.params
    //     console.log(season)
    //     const result = await models.Event.findAll({ where: { season : season } , include: [{model: models.Location}] })
    //     console.log(result)
    //     return res.json(result)
    // })


    // // HTTP GET api that returns all the points of the interest in our actual database
    //  app.get("/itineraries", async (req, res) => {
    //     const result = await models.Itinerary.findAll()
    //     const filtered = []
    //     for (const element of result) {
    //         filtered.push({
    //             name: element.title,
    //             // img: element.img,
    //             des: element.des,
    //             id: element.id,
    //         })
    //     }
    //     return res.json(filtered)
    //     // return res.json(result)
    // })

    //HTTP Get api that return specific event
    app.get('/places/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Location.findOne({ where: { id } })
        console.log(result)
        return res.json(result)
    })

    //HTTP Get api that return specific itineraries
    app.get('/itineraries/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Itinerary.findOne({ where: { id: id }, include: [{model: models.Location}] })
    // console.log(result)      
    // console.log(result)
    return res.json(result)
    })

    // For Services
     //HTTP Get api that return specific service
     app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Services.findOne({ where: { id } })
        return res.json(result)
    })

    // HTTP GET api that returns all the Events in our actual database
    app.get("/services", async (req, res) => {
        const result = await models.Services.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
                name: element.name,
                img: element.img,
                des: element.des,
                id: element.id,
                type: element.type,
            })
        }
        return res.json(filtered)
    })

    // HTTP GET api that returns artists for specific music genre
    app.get("/services/genre/:genre", async (req, res) => {
        const { genre } = req.params
        console.log(genre)
        const result = await models.Services.findAll({ where: { genre : genre } , include: [{model: models.Event}] })
        console.log(result)
        return res.json(result)
    })


    // function  get_locationInfo(id){
    //     const r =  models.Location.findOne({ where: { id } })
    //     console.log(r)
    //     return res.json(r)
    // }


    // // /api/itineraries/trips_stations/
    // //HTTP Get api that return specific event
    // let s =[]
    // app.get('/itineraries/:id', async (req, res) => {
    //     const id = +req.params.id
    //     const result = await models.Itinerary.findOne({ where: { id } })
    //     console.log(result)
    //     array=res.json(result.locationId)
    //     console.log(array)
    //     for (let i of array){
    //         ri=get_locationInfo(i)
    //         s=s.push(ri)
    //     }
         
    //     return {
    //         itinerary: res.json(result),
    //         steps: res.json(s)
    //     }
    // })


    // HTTP POST api, that will push (and therefore create) a new element in our actual database
//     app.post("/cats", async (req, res) => {
//         const { body } = req
//         await models.Cat.create(body);
//         return res.sendStatus(200)
//     })
}

runMainApi()


export default app
