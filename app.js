const express = require ('express');
const ProductsContainer = require ('./contenedor');

const PORT = proccess.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = new ProductsContainer('products.json');
products.init();

app.get('/productos', async (req, res) => {
    let respuesta = JSON.parse(await products.getAll())
    res.send(respuesta)
})

app.get('/productosRandom', async (req, res) => {
    let randomId = (min, max) => {
        return Math.random()*(max-min) + min;
    }
    let maxLength = products.productList.length + 1;
    let idRandom = parseInt (randomId(1, maxLength))

    res.send(await products.getById(IdRandom));
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})