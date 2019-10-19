let app = require('express')()
async function elbucle(cod, num) {
    if (num > 1) {
        await elbucle(cod, (num - 1))
        console.log(`Ejecucion ${cod} etapa ${num}`)
    } else {
        console.log(`Ejecucion ${cod} etapa ${num}`)
        console.log(`Fin proceso ${cod}`)
    }
}
app.get('/ping', (req, res) => {
    let { codigo, num } = req.query
    elbucle(codigo, num)
    res.status(200).json({
        message: "PONG!!"
    })
})

app.listen(5000, () => {
    console.log('Listen to port 5000')
})