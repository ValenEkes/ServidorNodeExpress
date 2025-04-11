import  express  from "express";

const app=express()
const port=3000

app.get('/',(req,res)=>{
res.send('Servidor')
})
app.get('/saludo',(req,res)=>{
res.send("Hola mundo")
})
app.get('/numero',(req,res)=>{
    res.send(42)
})
app.get('/usuario',(req,res)=>{
    res.send({"Nombre":"Ana","Edad":25})
})
app.get('/productos',(req,res)=>{
    res.send(["Mouse","Teclado","Monitor"])
})
app.get('/materias',(req,res)=>{
    res.send([{"nombre":"Matematica"},{"nombre":"Lengua"}])
})
app.get('/usuario',(req,res)=>{
    res.send({"Nombre":"Ana","Edad":25})
})    
app.post('/',(req,res)=>{
res.send('Hola')
})
app.get('/user/:id',(req,res)=>{
res.send('user'+req.params.id)
})
app.listen(port,()=>{
   console.log(`Listeninig on http://localhost:${port}`) 
})