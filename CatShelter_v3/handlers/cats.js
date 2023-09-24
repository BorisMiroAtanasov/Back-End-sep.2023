const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require('formidable');

const breeds = require('../data/breeds.json')
const cats = require('../data/cats.json');



module.exports = (req, res) => {
    const pathName = url.parse(req.url).pathname;
    

    if(pathName === '/cats/add-cat' && req.method === "GET"){
        let filePath = path.normalize(
            path.join(__dirname,"../views/addCat.html")
        );

        const index = fs.createReadStream(filePath);

        index.on('data', (data) => {
            let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder)
            res.write(modifiedData)
        })


        index.on('end', () => {
            res.end()
        })

        index.on('error', (err) => {
            console.log(err)
        });
    

    } else if(pathName === '/cats/add-breed' && req.method === "GET"){
        let filePath = path.normalize(
            path.join(__dirname,"../views/addBreed.html")


        );
        const index = fs.createReadStream(filePath);

        index.on('data', (data) => {
           
            res.write(data)
        })

        index.on('end', () => {
            res.end()
        })

        index.on('error', (err) => {
            console.log(err)
        })
    } else if (pathName === '/cats/add-breed' && req.method === 'POST') {
        let formData = '';
        

        req.on('data', (data) => {
            formData += data;
        })

        req.on('end', () => {
            let body = qs.parse(formData);

            fs.readFile('./data/breeds.json', (err, data) =>{
                if (err) {
                    throw err;
                }

                //console.log(data)
              

                let breeds = JSON.parse(data);

                //console.log(breeds)
                breeds.push(body.breed);
               // console.log(breeds)
                let json = JSON.stringify(breeds);
               // console.log(json)


                fs.writeFile("./data/breeds.json", json, "utf-8", () => console.log('Your breed was added successfully!'));

                res.writeHead(303, {location: '/'})
                res.end();
            });
    
        });


    }
    // do not works - add- cat
    // else if (pathName === '/cats/add-cat' && req.method === 'POST'){
    //     let form = new formidable.IncomingForm();

    //     form.parse(req, (err, fields, files)=> {
    //         if (err) throw err;

    //         let oldPath = files.upload.filepath;
    //         let newPath = path.normalize(path.join('C:/vscode/catShelter', '/content/images/' + files.upload.originalFilename))

    //         fs.rename(oldPath, newPath, (err) => {
    //             if (err) throw err;
    //             console.log('File was uploaded succesSfully!')
    //         })

    //         fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
    //             if (err) throw err;

    //             let allData = JSON.parse(data);
    //             allData.push({id: cats.length + 1, ...fields, image: files.upload.originalFilename})
    //             let json = JSON.stringify(allData)
    //             fs.writeFile('./data/cats.json', json, () => {
    //                 res.writeHead(303, {location: '/'})
    //                 res.end();
    //             })
    //         })
    //     })

    //}
    else {
        return true;
    }
    

    
    
    
    
}