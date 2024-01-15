//? Algoritmo de Tarjetas y Descuentos 



function procedimiento(repetir) {
    repetir = true;
    while (repetir) {
        let nombre = prompt("Ingresa tu Nombre: ");
        let edad = Number(prompt("Ingresa tu edad: "));
        let Id = prompt("Ingresa tu Identificacion");
    
        alert(`Excelente Amigo, Bienvenido ${nombre} tu edad es de ${edad} años, numero de Identificacion es ${Id}`);
    
        alert("Por favor responde el siguiente mensaje");
        let tiempo = Number(prompt("Hace cuanto que eres parte de nuestro centro de entrenamiento?"));
    
        if (tiempo >= 6) {
            alert(`Buenísimo ${nombre}, Me alegra decirte que te vamos a dar la Tarjeta de "PERSONA COMPROMETIDA" más un 20% por ciento de descuento el siguiente mes`);
            let precio = 1500;
            let descuento = precio * 0.2;
            let resultado = precio - descuento;
            alert(`El total del mes siguiente se queda en $${resultado}`);
    
    
        } else if (tiempo >= 3 && tiempo < 6) {
            alert(`Todo una Máquina ${nombre}, Me alegra decirte que te vamos a estar dando una tarjeta de "CAMINANDO HACIA EL ÉXITO" más un 10% de Descuento en el siguiente mes`);
            let precio = 1500;
            let descuento = precio * 0.1;
            let resultado = precio - descuento;
            alert(`El total del mes siguiente se queda en $${resultado}`);
    
    
        } else if (tiempo >= 1 && tiempo < 3) {
            alert(`Excelente ${nombre}!! Me alegra decirte de que vas por buen camino, te vamos a dar una tarjeta de "DANDO MIS PRIMEROS PASOS" más un 5% de descuento el siguiente mes`);
            let precio = 1500;
            let descuento = precio * 0.05;
            let resultado = precio - descuento;
            alert(`El total del mes siguiente se queda en $${resultado}`);
    
    
        } else {
            alert(`Sigue trabajando ${nombre}`);
        }
    
        // Pregunta al usuario si quiere repetir el proceso
        let respuesta = prompt("¿Quieres repetir el proceso? (Sí/No)").toLowerCase();
        repetir = respuesta === 'sí' || respuesta === 'si';
    }       
    
}

procedimiento();

// Mensaje de despedida
alert("Gracias por participar en nuestro centro de entrenamiento. ¡Hasta luego!");







