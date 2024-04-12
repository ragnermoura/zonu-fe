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

  cadastro: async (
    nome,
    sobrenome,
    email,
    senha,
    razao_social,
    cnpj,
    telefone,
    cep,
    endereco
  ) => {
    try {
      const response = await http.post(
        "/usuarios/cadastro",
        {
          nome: nome,
          sobrenome: sobrenome,
          email: email,
          senha: senha,
          avatar: "",
          nivel: 1,
          status: 1,
          id_plano: 1,
          razao_social: razao_social,
          cnpj: cnpj,
          telefone: telefone,
          cep: cep,
          endereco: endereco,
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

  caracteristica: async (nome_caracteristica, id_user) => {
    try {
      const response = await http.post(
        "/caracteristica/cadastro",
        {
          nome_caracteristica: nome_caracteristica,
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

  listcaracteristica: async () => {
    try {
      const response = await http.get("/caracteristica/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  deletecaracteristica: async (id_caracteristica) => {
    try {
      const response = await http.delete(
        `/caracteristica/${id_caracteristica}`,
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

  proximidades: async (nome_proximidade) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  minhasProximidades: async (nome_proximidade, id_user) => {
    try {
      const response = await http.post(
        "/proximidades/cadastro",
        {
          nome_proximidade: nome_proximidade,
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

  listproximidade: async () => {
    try {
      const response = await http.get("/proximidades/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listminhasproximidades: async (id_user) => {
    try {
      const response = await http.get(
        `/proximidades/user/${id_user}`,
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

  deleteproximidade: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
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

  deleteMinhaProximidades: async (id_proximidade) => {
    try {
      const response = await http.delete(
        `/proximidades/delete/${id_proximidade}`,
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

  novoCondominio: async (nome_condominio, id_user) => {
    try {
      const response = await http.post(
        "/condominio/cadastro",
        {
          nome_condominio: nome_condominio,
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

  novoProprietario: async (
    nomeProprietario,
    emailProprietario,
    documentoProprietario,
    telefonePropietario,
    id_user
  ) => {
    try {
      const response = await http.post(
        "/proprietario/cadastro",
        {
          nome: nomeProprietario,
          email: emailProprietario,
          documento: documentoProprietario,
          telefone: telefonePropietario,
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

  listcondominio: async (id_user) => {
    try {
      const response = await http.get(`/condominio/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  listproprietario: async (id_user) => {
    try {
      const response = await http.get(`/proprietario/${id_user}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  novoImovel: async (codRef, tipoImovel, perfilImovel, situacaoImovel, anoImovel, incorporacao, posicaoSolar, selectTerreno, proximoMar, selectAverbado, selectEscritura, selectEsquina, selectMobilia, dormitorio, suite, banheiro, garagem, selectGaragemCobertura, selectBoxGaragem, salaTv, salaJantar, lavabo, areaServico, cozinha, closet, escritorio, depEmpregada, copa, areaConstruida, areaPrivativa, areaTotal, tipoNegocio, precoImovel, precoNoSite,textoLugarPreco,  precoIptu, periodoIptu, precoCondominio, estaFinanciado, aceitaFinanciamento, mCasaMVida, taxasTotal, taxasDescricao, aceitaPermuta, permutaDescricao, buscarCEP, selectPais, selectEstado, selectCidade, selectBairro, logradouro, nLogradouro, complemento, idUnidade, selectAndar, undPorAndar, totalAndares, totalTorres, mostrarAndar, mostrarNUnidade, mostrarLogradouro, mostrarBairro, mostrarComplemento, mostrarNumero, mostrarNCondo, selectMapSite, titleImovel, descricaoImovel, urlYT, url360, formData, caracteristicas, proximidades, selectImovelSite, textoTarja, corTarja, selecteCond, idcondominio, selectProprietario, id_user) => {
    try {
      const response = await http.post(
        "/imovel/cadastrar",
        {
          cod_referencia: codRef,
          tipo: tipoImovel,
          perfil_imovel: perfilImovel,
          situacao_imovel: situacaoImovel,
          ano_construcao: anoImovel,
          incorporacao: incorporacao,
          posicao_solar: posicaoSolar,
          terreno: selectTerreno,
          proximo_mar: proximoMar,
          averbado: selectAverbado,
          escriturado: selectEscritura, 
          esquina: selectEsquina,
          mobilia: selectMobilia,
          dormitorio: dormitorio,
          suite: suite,
          banheiro: banheiro, 
          garagem: garagem,
          garagem_coberta: selectGaragemCobertura,
          garagem_box: selectBoxGaragem, 
          sala_tv: salaTv, 
          sala_jantar: salaJantar,
          lavabo: lavabo, 
          area_servico: areaServico, 
          cozinha: cozinha, 
          closet: closet,
          escritorio: escritorio,
          casa_empregada: depEmpregada,
          copa: copa,
          area_contruida: areaConstruida,
          area_privativa: areaPrivativa, 
          area_total: areaTotal,
          tipo_negocio: tipoNegocio, 
          preco_imovel: precoImovel,
          mostra_preco: precoNoSite, 
          text_preco_opcao: textoLugarPreco, 
          preco_iptu: precoIptu,
          periodo: periodoIptu, 
          preco_condominio: precoCondominio,
          financiado: estaFinanciado,
          aceita_financiamento: aceitaFinanciamento,
          minhacasa_minhavida: mCasaMVida,
          total_mensal_taxas: taxasTotal,
          descricao_taxas: taxasDescricao,
          aceita_permuta: aceitaPermuta,
          descricao_permuta: permutaDescricao,
          cep: buscarCEP,
          pais: selectPais,
          estado: selectEstado,
          cidade: selectCidade,
          bairro: selectBairro,
          logradouro: logradouro,
          numero: nLogradouro,
          complemento: complemento,
          numero_unidade: idUnidade,
          andar: selectAndar,
          unidade_por_andar: undPorAndar,
          total_andar: totalAndares,
          total_torres: totalTorres,
          mostrar_andar_site: mostrarAndar,
          mostrar_numero_unidade_site: mostrarNUnidade,
          mostrar_logradouro_site: mostrarLogradouro,
          mostrar_bairro_site: mostrarBairro,
          mostrar_complemento_site: mostrarComplemento,
          mostrar_numero_site: mostrarNumero,
          mostrar_nome_condominio_site: mostrarNCondo,
          mostrar_mapa_site: selectMapSite,
          titulo: titleImovel,
          apresentacao: descricaoImovel,
          link_youtube: urlYT,
          link_apresentacao: url360,
          foto: formData,
          caracteristicas: caracteristicas,
          proximidades: proximidades,
          mostrar_imovel_publi: selectImovelSite,
          tarja_imovel_site_publi: textoTarja,
          cor_tarja_publi: corTarja,
          tem_condominio: selecteCond,
          id_condominio: idcondominio,
          id_proprietario: selectProprietario,
          id_user: id_user,





        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
