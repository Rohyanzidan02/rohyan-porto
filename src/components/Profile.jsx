import React, { useEffect, useRef } from 'react';

// img
import profile from '../assets/profile.png';
import '../styles/Profile.css';
import sd from '../assets/profile/sd.png'
import smp from '../assets/profile/smp.png'
import smk from '../assets/profile/smk.png'
import kuliah from '../assets/profile/kuliah2.png'

// animasi
import IconBiodata from '../Icon/IconBiodata'


// cv
import cv from '../assets/berkas/cv1.pdf';

// Komponen
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact'

function Profile() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CV_Muhammad_Rohyan_Zidan.pdf';
    link.click();
  };
  const profileRef = useRef([]);

  // cv downlod
  
  
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% dari elemen harus terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Tambahkan kelas saat elemen terlihat
          observer.unobserve(entry.target); // Hentikan pengamatan setelah terlihat
        }
      });
    }, options);

    // Mengamati setiap elemen yang dirujuk
    profileRef.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect(); // Hentikan pengamatan saat komponen di-unmount
    };
  }, []);
  return (
    <>
      <Navbar />
      
      <div id='biodata'>
        {/* Kartu Biodata */}
        <div className='profile' id='profile'>
          <div className="wrapper2">
            <h1 className='bio'>Biodata</h1>
            <div className="profile-image2">
              <img src={profile} alt="Profile" />
            </div>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>Muhammad Rohyan Zidan</td>
                </tr>
                <tr>
                  <td>Tanggal Lahir</td>
                  <td>04/07/2002</td>
                </tr>
                <tr>
                  <td>Tempat Lahir</td>
                  <td>Garut</td>
                </tr>
                <tr>
                  <td>Telepon</td>
                  <td>08123456789</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Jl. Bakti Vlll no.19 Kel. cilincing Kec.cilining Kota Jakarta Utara  </td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Freshgraduate</td>
                </tr>
                <tr>
                  <td>Status Pernikahan</td>
                  <td>Belum Menikah</td>
                </tr>
                
                <tr>
                  <td>Pekerjaan Orang tua</td>
                  <td>Guru</td>
                </tr>
              
              {/* download cd */}
              <tr>
                  <td colSpan="2">
                    <button 
                      className="cv-download-button"
                      onClick={downloadCV}
                    >
                      Unduh CV
                    </button>
                  </td>
                </tr>
          
              </tbody>
            </table>
            <hr />
          </div>
        </div>

        {/* Kartu Kuliah */}
        <div className='profile-kuliah' id='s1'>
          <div className="wrapper2">
            <h1 className='bio'>Pendidikan Strata 1</h1>
            <div className="profile-image2">
              <img src={kuliah} alt="Profile" />
            </div>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Nama Kuliah</td>
                  <td>Stikom cipta Karya Informatika</td>
                </tr>
                <tr>
                  <td>Tahun Priode</td>
                  <td>2020/2024</td>
                </tr>
                <tr>
                  <td>Jenjang Pendidikan</td>
                  <td> Strata 1</td>
                </tr>
                <tr>
                  <td>Gelar</td>
                  <td>S.Kom <i>(Sarjana Komputer)</i></td>
                </tr>
                <tr>
                  <td>Fakultas</td>
                  <td>Ilmu Komputer</td>
                </tr>
                <tr>
                  <td>Prodi</td>
                  <td>Teknik Informatika</td>
                </tr>
                <tr>
                  <td>Judul Skripsi</td>
                  <td>Implementasi Algoritma Rabin-Karp untuk deteksi plagiarisme pada dokumen makalah mahasiswa</td>
                </tr>
                <tr>
                  <td>Judul Pengabdian Masyarkat (KKP)</td>
                  <td>Implementasi Sistem Pendataan Masyarakat 
                    Berbasis Mobile DI Pademangan Barat Jakarta Utara</td>
                </tr>
                {/* download cd */}
                {/* <tr>
                  <td>Alamat</td>
                  <td></td>
                </tr> */}
                      <a className='Link-skripsi' href="https://ejournal.warunayama.org/index.php/kohesi/article/view/2751" target='blank'>Link KKP</a>
                      <a className='Link-skripsi' href="https://doi.org/10.35870/jimik.v6i1.1191" target='blank'>Link Skripsi</a>
              
              </tbody>
            </table>
            <hr />
          </div>
        </div>

        {/* sma */}
        <div className='profile-kuliah' id='smk'>
          <div className="wrapper2">
            <h1 className='bio'>Sekolah Menengah Kejuruan(SMK)</h1>
            <div className="profile-image2">
              <img src={smk} alt="Profile" />
            </div>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Nama Sekolah</td>
                  <td>Smk Ma'arif sukawening</td>
                </tr>
                <tr>
                  <td>Tahun Priode</td>
                  <td>2017-2020</td>
                </tr>
                <tr>
                  <td>Tempat Tinggal</td>
                  <td> Pondok Pesantren ALBURHAN</td>
                </tr>
                <tr>
                  <td>Jenjang Pendidikan</td>
                  <td> Sekolah Menengah Kejuruan(SMK)</td>
                </tr>
                <tr>
                  <td>Jurusan</td>
                  <td>Multi media</td>
                </tr>
                <tr>
                  <td>Kuliah Kerja Praktek (KKP)</td>
                  <td>Multi media</td>
                </tr>
                <tr>
                  <td>Aktif Organisasi/Eskul</td>
                  <td>Osis (Ketua Tim Kreative) - Rohis (Wakil Ketua) - Pramuka</td>
                </tr>
                <tr>
                  <td>Pencapaian</td>
                  <td>Acara Marawis Tingkat Kabupaten (Wakil Ketua/Tim Kreative) 
                    <br />Acara Jalan Santai Kec Sukawening (Wakil Ketua/Tim Kreative)
                    <br />Pramuka Tingkat Laksana (Anggota)
                    <br /> Raimuna Tingkat Provinsi XIII (Anggota)
                    <br /> Shaka Bayangkara Tingkat Kabupaten (Tim Kreative)
                  </td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Garut</td>
                </tr>
                
              </tbody>
            </table>
            <hr />
          </div>
        </div>

        {/* smp */}
        {/* Kartu Kuliah */}
        <div className='profile-kuliah' id='smp'>
          <div className="wrapper2">
            <h1 className='bio'>Sekolah Menengah Pertama (SMP)</h1>
            <div className="profile-image2">
              <img src={smp} alt="Profile" />
            </div>
            <table className='table'>
              <tbody>
              <tr>
                  <td>Nama Sekolah</td>
                  <td>MTS AL-MUSADDADIYAH</td>
                </tr>
                <tr>
                  <td>Tahun Priode</td>
                  <td>2014-2017</td>
                </tr>
                <tr>
                  <td>Tempat Tinggal</td>
                  <td> Pondok Pesantren AL-MUSADDADIYAH</td>
                </tr>
                <tr>
                  <td>Jenjang Pendidikan</td>
                  <td> Sekolah Menengah Pertama (SMP)</td>
                </tr>
                <tr>
                  <td>Aktif Organisasi/Eskul</td>
                  <td>Rohis-Basket-volly</td>
                </tr>
                <tr>
                  <td>Pencapaian</td>
                  <td>Hafalan Juz 30</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>Garut</td>
                </tr>
                
              </tbody>
            </table>
            <hr />
          </div>
        </div>

        {/* sd */}
        {/* Kartu Kuliah */}
        <div className='profile-kuliah' id='sd'>
          <div className="wrapper2">
            <h1 className='bio'>Pendidikan Strata 1</h1>
            <div className="profile-image2">
              <img src={sd} alt="Profile" />
            </div>
            <table className='table'>
              <tbody>
              <tr>
                  <td>Nama Sekolah</td>
                  <td>SDI NURUL IKHLAS</td>
                </tr>
                <tr>
                  <td>Tahun Priode</td>
                  <td>2007-2014</td>
                </tr>
                <tr>
                  <td>Jenjang Pendidikan</td>
                  <td> Sekolah Dasar (SD)</td>
                </tr>
                <tr>
                  <td>Aktif Organisasi/Eskul</td>
                  <td>Pramuka - Futsal</td>
                </tr>
                {/* <tr>
                  <td>Pencapaian</td>
                  <td>Teknik Informatika</td>
                </tr> */}
                <tr>
                  <td>Alamat</td>
                  <td>Jakarta Utara</td>
                </tr>
                
                
              </tbody>
            </table>
            <hr />
            
          </div>
        </div>
      </div>
      <IconBiodata/>
      <Contact />
      <Footer />
      <ScrollToTop />
     
    </>
  );
}

export default Profile;