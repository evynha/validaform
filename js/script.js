  function ver_nome(nmValue) {
    if (nmValue.trim() === '') {
      return false;
    } else {
      return true;
    }
  }


  function ver_cpf(cpfValue) {
    if (cpfValue.trim() === '') {
      return false;
    }
  

    if (cpfValue.length !== 11) {
      return false;
    }
  
    // Pesquisei na internet, pois não entendi compreendi o codigo no sigaa 
    if (/(\d)\1{10}/.test(cpfValue)) {
      return false;
    }
  
    return true;
  }


  function ver_data(dataValue) {
    if (dataValue.trim() === '') {
      return false;
    } else {
      return true;
    }
  }

//Não sabia como fazer validação de rádio, então esse código foi retirado da internet
  function ver_genero() {
    var generoSelecionado = document.querySelector('input[name="genero"]:checked');
    return generoSelecionado !== null;
  }


  function ver_remuneracao(remuneracaoValue) {
    if (remuneracaoValue.trim() === '') {
      return false;
    } else {
      return true;
    }
  }


  function ver_email(emailValue) {
    if (emailValue.trim() === '') {
      return false;
    }

//Pesquisei na internet 
    if (/[A-Z]/.test(emailValue)) {
      return false;
    }


    if (emailValue.indexOf('@') === -1) {
      return false;
    }


    if (!emailValue.endsWith('gmail.com')) {
      return false;
    }


    return true;
  }


  function validarForm() {
    var nameInput = document.getElementById('name');
    var cpfInput = document.getElementById('cpf');
    var dataInput = document.getElementById('data');
    var remuneracaoInput = document.getElementById('remuneracao');
    var emailInput = document.getElementById('email');


    var nameValue = nameInput.value;
    var cpfValue = cpfInput.value;
    var dataValue = dataInput.value;
    var remuneracaoValue = remuneracaoInput.value;
    var emailValue = emailInput.value;


    var valid = true;


    if (!ver_nome(nameValue)) {
      alert('Por favor, preencha o campo de nome.');
      nameInput.classList.add('error');
      valid = false;
    } else {
      nameInput.classList.remove('error');
    }


    if (!ver_cpf(cpfValue)) {
      alert('Por favor, preencha corretamente o campo de CPF.');
      cpfInput.classList.add('error');
      valid = false;
    } else {
      cpfInput.classList.remove('error');
    }

    if (!ver_data(dataValue)) {
      alert('Por favor, preencha o campo de data de nascimento.');
      dataInput.classList.add('error');
      valid = false;
    } else {
      dataInput.classList.remove('error');
    }


    if (!ver_genero()) {
      alert('Por favor, selecione um gênero.');
      valid = false;
    }


    if (!ver_remuneracao(remuneracaoValue)) {
      alert('Por favor, preencha o campo de remuneração.');
      remuneracaoInput.classList.add('error');
      valid = false;
    } else {
      remuneracaoInput.classList.remove('error');
    }


    if (!ver_email(emailValue)) {
      alert('Por favor, insira um email válido.');
      emailInput.classList.add('error');
      valid = false;
    } else {
      emailInput.classList.remove('error');
    }


    if (valid) {
      alert('Formulário válido. Enviando...');
    } else {
      alert('Corrija os erros antes de enviar o formulário.');
    }


    return valid;
  }


  function limparFormulario() {
    var nameInput = document.getElementById('name');
    var cpfInput = document.getElementById('cpf');
    var dataInput = document.getElementById('data');
    var remuneracaoInput = document.getElementById('remuneracao');
    var emailInput = document.getElementById('email');
  
   
    nameInput.value = '';
    cpfInput.value = '';
    dataInput.value = '';
    remuneracaoInput.value = '';
    emailInput.value = '';
  
    
    nameInput.classList.remove('error');
    cpfInput.classList.remove('error');
    dataInput.classList.remove('error');
    remuneracaoInput.classList.remove('error');
    emailInput.classList.remove('error');
  }
  

