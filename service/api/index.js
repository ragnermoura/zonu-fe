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

    tabInfo: async (codigoref, selectCondominio, idCondominio,
    selectProprietario, selectCorretor, selectAgenciador, tipoImovel,
    perfilImovel, situacaoImovel, anoImovel, incorporacao, posicaoSolar,
    selectTerreno, proximoMar, selectAverbado, selectEscritura,
    selectEsquina, selectMobilia, id_user) => { try { const response = await
    http.post(
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

    tabComodos: async ( dormitorio, suite, banheiro, garagem,
    selectGaragemCobertura, selectBoxGaragem, salaTv, salaJantar, salaEstar,
    lavabo, areaServico, cozinha, closet, escritorio, depEmpregada, copa,
    id_user) => { try { const response = await http.post(
                "/info/cadastro",
                {
                    dormitorio: dormitorio,
                    suite: suite,
                    banheiro: banheiro,
                    garagem: garagem,
                    garagem_coberta: selectGaragemCobertura,
                    garagem_box: selectBoxGaragem,
                    sala_tv: salaTv,
                    sala_jantar: salaJantar,
                    sala_estar: salaEstar,
                    lavabo: lavabo,
                    area_servico: areaServico,
                    cozinha: cozinha,
                    closet: closet,
                    escritorio: escritorio,
                    casa_empregada: depEmpregada,
                    copa: copa,
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

    tabPreco: async (tipoNegocio, precoImovel, precoNoSite, precoIptu,
    periodoIptu, precoCondominio, estaFinanciado, aceitaFinanciamento,
    mCasaMVida, taxasTotal, taxasTotal, taxasDescricao, aceitaPermuta,
    permutaDescricao, id_user) => { try { const response = await http.post(
                "/info/cadastro",
                {
                    tipo_negocio: tipoNegocio,
                    preco_imovel: precoImovel,
                    mostra_preco: precoNoSite,
                    text_preco_opcao: precoIptu,
                    preco_iptu: periodoIptu,
                    periodo: precoCondominio,
                    preco_condominio: estaFinanciado,
                    financiado: aceitaFinanciamento,
                    aceita_financiamento: mCasaMVida,
                    minhacasa_minhavisa: taxasTotal,
                    total_mensal_taxas: taxasTotal,
                    descricao_taxas: taxasDescricao,
                    aceita_permuta: aceitaPermuta,
                    descricao_permuta: permutaDescricao,
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


    tabCaracteristica: async (caracteristicaImovel, id_user) => {
        try {
            const response = await http.post(
                "/info/cadastro",
                {
                    nome_caracteristica: caracteristicaImovel,
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



    tabLocalizacao: async (buscarCEP, selectPais, selectEstado, selectCidade,
    selectBairro, selectZona, logradouro, nLogradouro,
    complemento, idUnidade, selectAndar, undPorAndar, totalAndares,
    totalTorres, mostrarAndar, mostrarNUnidade, 
    mostrarLogradouro, mostrarBairro, mostrarComplemento, mostrarNumero,
    mostrarNCondo, selectMapSite, selectLocalSite,
    selectLocalSite, id_user) => { try { const response = await http.post(
                "/info/cadastro",
                {
                    cep: buscarCEP,
                    pais: selectPais,
                    estado: selectEstado,
                    cidade: selectCidade,
                    bairro: selectBairro,
                    zona: selectZona,
                    logradouro: logradouro,
                    numero: nLogradouro,
                    complemento:  complemento,
                    numero_unidade:  idUnidade,
                    andar:  selectAndar,
                    unidade_por_andar:  undPorAndar,
                    total_andar:  totalAndares,
                    total_torres:  totalTorres,
                    mostrar_andar_site: mostrarAndar,
                    mostrar_numero_unidade_site: mostrarNUnidade,
                    mostrar_logradouro_site: mostrarLogradouro,
                    mostrar_bairro_site: mostrarBairro,
                    mostrar_complemento_site: mostrarComplemento,
                    mostrar_numero_site: mostrarNumero,
                    mostrar_nome_condominio_site: mostrarNCondo,
                    mostrar_mapa_site: selectMapSite,
                    mostrar_localizacao_site: selectLocalSite,                   
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


    tabProximidades: async (proximidades, id_user)
    => { try { const response = await http.post(
                "/info/cadastro",
                {
                    nome_proximidade: proximidades,
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

    tabDescricao: async (titleImovel, apresentacaoImovel, id_user)
    => { try { const response = await http.post(
                "/info/cadastro",
                {
                    titulo: titleImovel,
                    apresentacao: apresentacaoImovel,
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


    tabComplemento: async (urlYT, url360, id_user)
    => { try { const response = await http.post(
                "/info/cadastro",
                {
                    link_youtube: urlYT,
                    link_apresentacao: url360,
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



    novoImovel: async (id_info, selectCondominio, idCondominio,
    idProprietario, id_comodos, id_medidas, id_preco, id_caracteristica,
    id_localizacao, id_proximidades, id_descricao, id_complemento, id_user)
    => { try { const response = await http.post(
                "/info/cadastro",
                {
                    id_info: id_info,
                    tem_condominio: selectCondominio,
                    id_condominio: idCondominio,
                    id_proprietario: idProprietario,
                    id_comodos: id_comodos,
                    id_medidas: id_medidas,
                    id_preco: id_preco,
                    id_minhas_caracteristicas: id_caracteristica,
                    id_localizacao: id_localizacao,
                    id_minhas_proximidades: id_proximidades,
                    id_descricao: id_descricao,
                    id_complemento: id_complemento,
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
