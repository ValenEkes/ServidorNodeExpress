import  express  from "express";

const app=express()
let nombres=[]
app.use(express.json())

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
app.post('/nombres',(req,res)=>{
const{nombre}=req.body
if (!nombre) return res.status(400).json({ error: 'Falta el nombre' });
nombres.push(nombre)
res.status(201).json({nombres})  
})
app.get('/nombres',(req,res)=>{
    res.send(nombres)
})
app.delete('/nombres/:indice',(req,res)=>{
    const indice=parseInt(req.params.indice)
    if(isNaN(indice)||!nombres[indice]){
return res.status(400).json({ error: 'No existe la posicion' });
}
const eliminado=nombres.splice(indice,1)
res.json({nombres,mensaje:`${eliminado} fue eliminado`})
})
export default app