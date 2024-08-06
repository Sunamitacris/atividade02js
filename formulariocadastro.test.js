const { eMaiorDeIdade, senhaValida, senhasCoincidem, tratarEnvioFormulario } from '../src/formulariocadastro';

describe('Funções de Validação', () => {
    test('deve retornar verdadeiro se o usuário tiver 18 anos ou mais', () => {
        expect(eMaiorDeIdade('2000-01-01')).toBe(true);
        expect(eMaiorDeIdade('2006-01-01')).toBe(false);
    });

    test('deve retornar verdadeiro para senhas válidas', () => {
        expect(senhaValida('Senha1!')).toBe(true);
        expect(senhaValida('senha')).toBe(false);
        expect(senhaValida('SENHA1!')).toBe(false);npm
        expect(senhaValida('Senha')).toBe(false);
        expect(senhaValida('S1!')).toBe(false);
    });

    test('deve retornar verdadeiro se as senhas coincidirem', () => {
        expect(senhasCoincidem('Senha1!', 'Senha1!')).toBe(true);
        expect(senhasCoincidem('Senha1!', 'Senha2!')).toBe(false);
    });

    test('deve tratar o envio do formulário corretamente', () => {
        expect(tratarEnvioFormulario('2000-01-01', 'Senha1!', 'Senha1!')).toEqual({ sucesso: true, mensagem: 'Cadastro realizado com sucesso!' });
        expect(tratarEnvioFormulario('2006-01-01', 'Senha1!', 'Senha1!')).toEqual({ sucesso: false, mensagem: 'Você deve ter pelo menos 18 anos para se cadastrar.' });
        expect(tratarEnvioFormulario('2000-01-01', 'senha', 'senha')).toEqual({ sucesso: false, mensagem: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.' });
        expect(tratarEnvioFormulario('2000-01-01', 'Senha1!', 'Senha2!')).toEqual({ sucesso: false, mensagem: 'A senha e a confirmação da senha não conferem.' });
    });
});
