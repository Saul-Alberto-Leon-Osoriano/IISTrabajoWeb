async function enviardatos() {
  const nombreInput=document.getElementById('input-nombre');
  const emailInput=document.getElementById('input-email');
  const mensajeInput=document.getElementById('input-mensaje');

  const nombre=nombreInput.value.trim();
  const email=emailInput.value.trim();
  const mensaje=mensajeInput.value.trim();

  if (nombre === '' || email === '' || mensaje === '') {
    textoAlerta = 'Por favor completa todos los campos';
    colorAlerta = '#FF3B30';
  } else {
    textoAlerta = 'Datos enviados correctamente';
    colorAlerta = '#34C759';

    nombreInput.value = '';
    emailInput.value = '';
    mensajeInput.value = '';
  }

  const alerta = document.createElement('div');
  alerta.style.position = 'fixed';
  alerta.style.top = '10%';
  alerta.style.left = '50%';
  alerta.style.transform = 'translate(-50%, -50%)';
  alerta.style.backgroundColor = colorAlerta;
  alerta.style.padding = '20px';
  alerta.style.borderRadius = '10px';
  alerta.style.color = '#fff';
  alerta.style.fontSize = '18px';
  alerta.style.textAlign = 'center';
  
  alerta.innerHTML = textoAlerta;
  
  document.body.appendChild(alerta);

  setTimeout(() => alerta.remove(), 2000);
}
