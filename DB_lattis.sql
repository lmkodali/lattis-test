-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 23, 2017 at 09:09 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB_lattis`
--

-- --------------------------------------------------------

--
-- Table structure for table `locks`
--

CREATE TABLE `locks` (
  `lock_id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mac_id` varchar(50) NOT NULL,
  `latitude` int(20) NOT NULL,
  `longitude` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locks`
--

INSERT INTO `locks` (`lock_id`, `name`, `mac_id`, `latitude`, `longitude`) VALUES
(1, 'Updated', 'lock_id 1', 12345678, 567890),
(2, 'sampay', 'lock_id 1', 12345678, 567890),
(3, 'asdfasdfsadf', 'lock_id 1', 12345678, 567890),
(4, 'lock1', 'lock_id 1', 12345678, 567890),
(5, 'lock1', 'lock_id 1', 12345678, 567890),
(6, 'lock1', 'lock_id 1', 12345678, 567890),
(7, 'lock1', 'lock_id 1', 12345678, 567890);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_No` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `phone_No`) VALUES
(1, 'codertex', 'super sample', 'codertex@gmail.com', ''),
(2, 'codertex1', 'super sample', 'codertex@gmail.com1', ''),
(3, 'codertex2', 'sample2', 'codertex@gmail2.com', ''),
(4, 'superDex', '1234567890', 'codecode@com.se', ''),
(7, 'supsup', '1234567890', 'codecode@com.se', '123246');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locks`
--
ALTER TABLE `locks`
  ADD PRIMARY KEY (`lock_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locks`
--
ALTER TABLE `locks`
  MODIFY `lock_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
