

from flask import Flask, render_template, request, redirect, flash, session
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hgStudios'


@app.route('/')
def index():

    return render_template('inicial_index.html')





@app.route('/loginCliente')
def loginCliente():

    return render_template('loginCliente.html')


@app.route("/acessoCliente", methods=['POST'])
def acessoCliente():
    email = request.form.get('emailCliente')
    senha = request.form.get('senhaCliente')

    if email == 'helder@email.com' and senha == '123456':
        return redirect('/cliente')
    else:
        return redirect('/loginCliente')


@app.route('/cliente')
def cliente():

    return render_template('cliente.html')



@app.route('/cadastrar')
def cadastrar():

    return render_template('cadastro.html')

@app.route('/cadastroCliente', methods=['POST'])
def cadastroCliente():
    email = request.form.get('emailCliente')
    nome = request.form.get('nomeCliente')
    senha = request.form.get('senhaCliente')


    with open('clientes.json') as cliente_json:
        listaDeClientes = json.load(cliente_json)
        for usuario in listaDeClientes:
            if usuario ['email'] == email:
                flash('USUÁRIO JÁ CADASTRADO NO BD')
                return redirect('/loginCliente')


    

    user = [
        {
            "nome": nome,
            "email": email,
            "senha": senha,
            "foto": "",
            "carrinho": {},
            "total_preco": 0.0,
            "historico":{}

        }
    ]

    novalista = listaDeClientes + user


    with open('clientes.json', 'w') as cliente_json:
        json.dump(novalista, cliente_json, indent=4)

    flash(f'{nome}USUÁRIO CADASTRADO COM SUCESSO!')
    return redirect('loginCliente')
















if __name__ in '__main__':
    app.run(debug=True)
