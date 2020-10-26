-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2020 at 12:36 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id_blog` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `judul` varchar(256) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(256) NOT NULL,
  `created_at` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id_blog`, `id_user`, `judul`, `content`, `image`, `created_at`) VALUES
(9, 1, 'UPDATE: Kasus Covid-19 Indonesia Kini Capai 392.934, Bertambah 3.222', 'Meski jumlah kasus Covid-19 terus menanjak, harapan muncul dengan banyaknya pasien yang sembuh setelah terinfeksi virus corona. Dalam sehari, ada penambahan 3.908 pasien Covid-19 yang sembuh dan dianggap tidak lagi terinfeksi virus corona. Mereka dinyatakan sembuh berdasarkan pemeriksaan dengan metode polymerase chain reaction (PCR) yang memperlihatkan hasil negatif virus corona. Dengan demikian, total pasien Covid-19 yang sembuh kini mencapai 317.672 orang. Baca juga: Satgas: Disiplin Protokol Kesehatan Akan Diuji saat Libur Panjang Pekan Depan Akan tetapi, masih ada kabar duka dengan bertambahnya pasien Covid-19 yang meninggal dunia. Pada periode 25-26 Oktober 2020, ada 112 pasien Covid-19 yang tutup usia. Sehingga, angka kematian akibat Covid-19 di Indonesia kini mencapai 13.411 orang sejak awal pandemi. Berdasarkan data-data di atas, maka kasus aktif Covid-19 kini ada 61.851 orang. Mereka merupakan pasien yang menjalani perawatan atau isolasi mandiri. Selain itu, pemerintah juga menyatakan bahwa saat ini ada 170.163 orang berstatus suspek.\r\n', 'blank.png', '1603706103955'),
(10, 2, 'Selain Ronaldo, Ibrahimovic-Benzema Pun Sanjung Khabib: Ikuti Kata Hati...  Artikel ini telah tayang di Kompas.com dengan judul \"Selain Ronaldo, Ibrahimovic-Benzema Pun Sanjung Khabib: Ikuti Kata Hati...', 'Khabib Nurmagomedov memutuskan pensiun sebagai petarung UFC dan MMA, Minggu (25/10/2020) dini hari WIB. Keputusan itu diucapkan Khabib seusai mengalahkan Justin Gaethje pada UFC 254 yang dihelat di Pulau Yas, Abu Dhabi, Uni Emirat Arab. Khabib memutuskan pensiun karena sudah berjanji kepada ibunya untuk tidak bertarung lagi tanpa didampingi oleh mendiang ayahnya, Abdulmanap Nurmagomedov. Keputusan mengejutkan dari Khabib itu kemudian langsung ditanggapi oleh Cristiano Ronaldo tidak lama setelah UFC 254 berakhir. Foto itu diunggah Ronaldo dengan keterangan: \"Selamat kawan, ayahmu pasti bangga kepadamu.\" Ronaldo dan Khabib memang terkenal sangat dekat di luar profesi mereka masing-masing. Bintang Juventus itu sebelum UFC 254 secara terbuka juga sudah memberikan dukungan terhadap Khabib untuk mengalahkan Gaethje. Sama seperti Ronaldo, Ibrahimovic dan Karim Benzema juga memberi pujian terhadap Khabib yang memilih mengakhir karier pada usia 32 tahun.\n', 'blank.png', '1603706352827');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL,
  `created_at` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `name`, `username`, `password`, `created_at`) VALUES
(1, 'Achmad Sufyan Aziz', 'ahmadsufyan98', 'sufyan123', '1603689225303'),
(2, 'Arin', 'arin99', 'arin123', '1603702391256');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id_blog`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id_blog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
