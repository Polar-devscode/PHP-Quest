-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18/06/2025 às 00:44
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `php_quest`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `expira_em` datetime NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `password_resets`
--

INSERT INTO `password_resets` (`id`, `email`, `token`, `expira_em`, `criado_em`) VALUES
(6, 'lucas_stradiotto@hotmail.com', '74c0bbb85e5e418b0b71f6b0eba1f90723fbb4168287a36935031298f348c0a8', '2025-06-10 14:14:37', '2025-06-10 11:14:37');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `progresso_basico` int(11) DEFAULT 0,
  `progresso_intermediario` int(11) DEFAULT 0,
  `progresso_avancado` int(11) DEFAULT 0,
  `token_recuperacao` varchar(255) DEFAULT NULL,
  `token_expira` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `progresso_basico`, `progresso_intermediario`, `progresso_avancado`, `token_recuperacao`, `token_expira`) VALUES
(1, 'Lucas Stradiotto', 'lucas_stradiotto@hotmail.com', '$2y$10$NNFc92SBczUMTBM2TsLoQ.jRRYVmhyQJ5PVaV/lKWeL1O4J7Zyp9a', 2, 1, 1, NULL, NULL),
(2, 'Franciele Loberto', 'fran@email.com', '$2y$10$pFiliCcGEPaSSq1CHPECG.T6V/G10nT2dOQGfW8GtPMtsoIc45LGS', 0, 0, 0, NULL, NULL),
(3, 'Bruno', 'bruno@email.com', '$2y$10$eERAbp64xSesV9R1Dmmdv.kSvTmI.tZNeuEBSfvVTjDPp2ra2QTpW', 0, 0, 0, NULL, NULL),
(4, 'Sebastian', 'seb@email.com', '$2y$10$UMpZjzJ8Bm4Zmkin8iJ//OHDQXJrpWIGSQBsnK2tSQGz7I2crBVaO', 0, 0, 0, NULL, NULL),
(5, 'Sophia', 'sophia@email.com', '$2y$10$G0TXmWqcnPfSHE90Ics7lORVNTR..0./bizKBgAea6taTOCl7UtEi', 0, 0, 0, NULL, NULL),
(6, 'Laura', 'laurinha@email.com', '$2y$10$LeQU3mZzMNrHk2PDLcdr1u0YdFANm0LJ0eh0MmPgK2oaxQAC9u.ba', 0, 0, 0, NULL, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
