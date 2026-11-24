CREATE DATABASE IF NOT EXISTS LOJA
CHARACTER SET UTF8MB4
COLLATE UTF8MB4_UNICODE_CI;
USE LOJA;

CREATE TABLE IF NOT EXISTS produtos(
    i INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO produtos (nome, descricao, preco) VALUES
('Teclado', 'Teclado usb', 89.90),
('Mouse','Mouse opico',49.90),
('monitor','Monitor 24 polegadas',799.90)