-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2025 a las 01:21:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdasistencia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE `asistencia` (
  `idasis` int(11) NOT NULL,
  `dni` char(8) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `horaim` time DEFAULT NULL,
  `horasm` time DEFAULT NULL,
  `estadom` varchar(255) DEFAULT NULL,
  `minutos_descum` float DEFAULT NULL,
  `horait` time DEFAULT NULL,
  `horast` time DEFAULT NULL,
  `estadot` varchar(255) DEFAULT NULL,
  `minutos_descut` float DEFAULT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `tiempo_trabajo` int(11) DEFAULT NULL,
  `tiempo_tardanza_dia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

DROP TABLE IF EXISTS `personal`;
CREATE TABLE `personal` (
  `dni` char(8) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `modalidad_contratacion` varchar(50) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `sueldo` decimal(10,2) DEFAULT NULL,
  `fecha_registro` date DEFAULT curdate(),
  `foto` longtext NOT NULL,
  `estado` enum('activo','inactivo') DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`dni`, `nombres`, `apellidos`, `modalidad_contratacion`, `cargo`, `fecha_nacimiento`, `edad`, `sueldo`, `fecha_registro`, `foto`, `estado`) VALUES
('74444444', 'dfssdf', 'fdssdffsd', 'D.L N°276 - Carrera Administrativa', 'JEFE DE LA UNIDAD DE REGISTRO CIVIL', '2006-02-10', 19, 2333.00, '2025-02-20', 'data:image/jpeg;base64,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', 'activo'),
('76666666', 'jose alexander', 'yovera simbala', 'D.L N°276 - Carrera Administrativa', 'JEFE DE LA UNIDAD DE REGISTRO CIVIL', '2006-02-02', 19, 1200.00, '2025-02-18', 'data:image/jpeg;base64,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', 'activo');

--
-- Disparadores `personal`
--
DROP TRIGGER IF EXISTS `before_insert_personal`;
DELIMITER $$
CREATE TRIGGER `before_insert_personal` BEFORE INSERT ON `personal` FOR EACH ROW BEGIN
    SET NEW.edad = TIMESTAMPDIFF(YEAR, NEW.fecha_nacimiento, CURDATE());
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_update_´personal`;
DELIMITER $$
CREATE TRIGGER `before_update_´personal` BEFORE UPDATE ON `personal` FOR EACH ROW BEGIN
    SET NEW.edad = TIMESTAMPDIFF(YEAR, NEW.fecha_nacimiento, CURDATE());
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tardanza`
--

DROP TABLE IF EXISTS `tardanza`;
CREATE TABLE `tardanza` (
  `idasis` int(11) NOT NULL,
  `dni` char(8) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `horaim` time DEFAULT NULL,
  `horasm` time DEFAULT NULL,
  `estadom` varchar(255) DEFAULT NULL,
  `minutos_descum` float DEFAULT NULL,
  `horait` time DEFAULT NULL,
  `horast` time DEFAULT NULL,
  `estadot` varchar(255) DEFAULT NULL,
  `minutos_descut` float DEFAULT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `tiempo_trabajo` int(11) DEFAULT NULL,
  `tiempo_tardanza_dia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `idusudni` char(8) NOT NULL,
  `datos` varchar(255) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(8) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rol` char(1) NOT NULL,
  `Telefono` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusudni`, `datos`, `usuario`, `password`, `email`, `rol`, `Telefono`) VALUES
('74747441', 'juan perez camachoqeeeee', 'alexsads', '12122', 'milos01239@gmail.com', '1', 4747447),
('76531080', 'Jose .A.Yovera.S', 'admin', 'admin', 'jose@gmail.com', 'A', 2147483647),
('77777777', 'juan perez camachoqeeeee', 'admin', '4144', 'MARIABETTY@gmail.com', '1', 144);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`idasis`),
  ADD KEY `asistencia_personal` (`dni`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`dni`) USING BTREE;

--
-- Indices de la tabla `tardanza`
--
ALTER TABLE `tardanza`
  ADD PRIMARY KEY (`idasis`),
  ADD KEY `asistencia_personal` (`dni`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusudni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `idasis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tardanza`
--
ALTER TABLE `tardanza`
  MODIFY `idasis` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `asistencia_personal` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`);

--
-- Filtros para la tabla `tardanza`
--
ALTER TABLE `tardanza`
  ADD CONSTRAINT `tardanza_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `personal` (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
