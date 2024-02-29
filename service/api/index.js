import { http } from "../config";


export default {
    login: async (email, senha) => {
        try {
            const response = await http.post(
                "/login",
                {
                    email: email,
                    senha: senha,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },
    recovery: async (newsenha, id_user) => {
        try {
            const response = await http.patch(
                "/login",
                {
                    id_user: id_user,
                    senha: newsenha,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    cadastro: async (nome, sobrenome, email, senha) => {
        try {
            const response = await http.post(
                "/usuarios/cadastro",
                {
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    senha: senha,
                    avatar: '',
                    nivel: 1,
                    status: 1,
                    id_plano: 1
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    perfil: async (id_user, cnpj, razao_social, telefone, cep, endereco) => {
        try {
            const response = await http.post(
                "/perfil/cadastro",
                {
                    razao_social: razao_social,
                    cnpj: cnpj,
                    telefone: telefone,
                    cep: cep,
                    endereco: endereco,
                    termos: 'Lido e aceito',
                    id_user: id_user
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    sendNewAccount: async (email, nome) => {
        try {
            const response = await http.post(
                "/email/boas-vindas",
                {
                    email: email,
                    nome: nome,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    tabInfo: async (codigoref, selectCondominio, idCondominio, selectProprietario, selectCorretor, selectAgenciador, tipoImovel, perfilImovel, situacaoImovel, anoImovel, incorporacao, posicaoSolar, selectTerreno, proximoMar, selectAverbado, selectEscritura, selectEsquina, selectMobilia, id_user) => {
        try {
            const response = await http.post(
                "/info/cadastro",
                {
                    cod_referencia: codigoref,
                    corretor: ,
                    agenciador:
                    tipo:
                    perfil_imovel:
                    situacao_imovel:
                    ano_construcao:
                    incorporacao:
                    posicao_solar: 
                    terreno:
                    proximo_mar:
                    averbado:
                    escriturado:
                    esquina:
                    mobilia:
                    id_user: id_user
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    tabComodos: async ( id_user) => {
        try {
            const response = await http.post(
                "/info/cadastro",
                {
             
                    id_user: id_user,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },

    tabMedidas: async (areaConstruida, areaPrivativa, areaTotal, id_user) => {
        try {
            const response = await http.post(
                "/info/cadastro",
                {
                    area_contruida: areaConstruida,
                    area_privativa: areaPrivativa,
                    area_total: areaTotal,
                    id_user: id_user,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    },
                }
            );

            return response;
        } catch (error) {
            return error.response || error.message || error;
        }
    },



}
