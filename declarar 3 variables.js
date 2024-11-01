document.write("<h1>Parte 1:</h1> <h2>Declaración de Variables y Tipos de Datos.</h2>Declara tres variables: nombre (string), edad (number) y esEstudiante` (booleano) Muestra los valores de estas variables en la consola Cambia los valores de las variables y observa los resultados.<br><br>");

let nombre = "Juan";        // string
let edad = 25;             // number
let esEstudiante = true;
document.write("Nombre:  "+nombre + "<br>Edad: " + edad + "<br>estidiante?:  " + esEstudiante +"<br><br>")


document.write("<h1>Parte 2:</h1> <h2>Operaciones Matemáticas y Comparación.</h2>Declara dos variables numéricas a y b  Realiza las operaciones de suma resta multiplicación y división entre a y b Compara los valores de a y b utilizando los operadores  == != > < >= <= y muestra los resultados en la consola <br><br>");
let a=100;
let b=15;
suma = a+b;
resta = a-b;
multiplicacion = a*b;
division = a/b;
igualdad = a==b;
diferencia = a != b;
mayorque = a > b;
menorque = a < b;
mayoroigual = a >= b;
menoroigual = a <= b;

document.write("<b>los numeros ingresados son:  </b>"+ a + "<b> y </b>" + b);
document.write("<br>el resultado de la suma es:  "+ suma);
document.write("<br>el resultado de la resta es:  "+ resta);
document.write("<br>el resultado de la multiplicacion es:  "+ multiplicacion);
document.write("<br>el resultado de la division es:  "+ division);
document.write("<br>A = B: "+ "<b>"+igualdad +"</b>");
document.write("<br>A != B: "+ "<b>"+diferencia+"</b>");
document.write("<br>A > B: "+ "<b>"+mayorque+"</b>");
document.write("<br>A < B: "+ "<b>"+menorque+"</b>");
document.write("<br>A >= B: "+ "<b>"+mayoroigual+"</b>");
document.write("<br>A <= B: "+ "<b>"+menoroigual+"</b>");


document.write("<h1>Parte 3:</h1> <h2>Uso de Operadores Lógicos y Concatenación de Strings</h2> Declara dos variables booleanas `esMayorDeEdad` y `tieneLicencia`. Usa operadores lógicos (`&&`, `||`) para determinar si una persona puede conducir. Crea un mensaje de bienvenida utilizando concatenación de strings y template literals <br><br>");

let esmayordeedad = true;
let tienelicencia = true;

document.write("La persona es mayor de edad: "  + esmayordeedad + ", <br> y la persona tiene licencia: " + tienelicencia + "<br> entonces" )

if(esmayordeedad==true && tienelicencia==true){
    document.write("<h3>Puede conducir</h3>");
}
else{
    document.write("<h3>No puede conducir </h3>");
}