from flask import Flask, request, render_template, jsonify
import sqlite3

app = Flask(__name__)

def criar_banco():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS amigos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL
        )               
    ''')
    conn.commit()
    conn.close()

# Página principal
@app.route('/')
def home():
    return render_template('index.html')

# Página de listagem
@app.route('/listar')
def listar_pagina():
    return render_template('listar.html')

@app.route('/api/adicionar', methods=['POST'])
def adicionar():
    dados = request.get_json()
    nome = dados.get('nome')

    if not nome:
        return {'status': 'erro', 'mensagem': 'Nome não fornecido'}, 400

    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO amigos (nome) VALUES (?)', (nome,))
    conn.commit()
    conn.close()

    return {'status': 'sucesso'}, 200


@app.route('/api/listar', methods=['GET'])
def listar():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('SELECT nome FROM amigos')
    amigos = [linha[0] for linha in cursor.fetchall()]
    conn.close()
    return jsonify(amigos)


# Iniciar o site
if __name__ == '__main__':
    criar_banco()
    app.run(debug=True)