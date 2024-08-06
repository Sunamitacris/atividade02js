// Função para validar a idade
function eMaiorDeIdade(dataDeNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataDeNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade >= 18;
}

// Função para validar a senha de acordo com regras de segurança
function senhaValida(senha) {
    const comprimentoMinimo = 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temCaractereEspecial = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|-]/.test(senha);
    return senha.length >= comprimentoMinimo && temMaiuscula && temMinuscula && temNumero && temCaractereEspecial;
}

// Função para verificar se as senhas coincidem
function senhasCoincidem(senha, confirmarSenha) {
    return senha === confirmarSenha;
}

// Função para validar e sinalizar o envio bem-sucedido
function tratarEnvioFormulario(dataDeNascimento, senha, confirmarSenha) {
    if (!eMaiorDeIdade(dataDeNascimento)) {
        return { sucesso: false, mensagem: 'Você deve ter pelo menos 18 anos para se cadastrar.' };
    }

    if (!senhaValida(senha)) {
        return { sucesso: false, mensagem: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.' };
    }

    if (!senhasCoincidem(senha, confirmarSenha)) {
        return { sucesso: false, mensagem: 'A senha e a confirmação da senha não conferem.' };
    }

    return { sucesso: true, mensagem: 'Cadastro realizado com sucesso!' };
}
module.exports ={ eMaiorDeIdade, senhaValida, senhasCoincidem 

}