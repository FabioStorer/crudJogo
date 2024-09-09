let nextId = 1;

const model = (body, id = nextId++) => {

    if (body.nome != undefined &&
        body.nome != '') {
        return {
            id,
            nome: body.nome,
            criado_em: body.criado_em || new Date(),
            atualizado_em: new Date()
        }
    }
};

module.exports = model;