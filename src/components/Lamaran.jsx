import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2'; // Import SweetAlert2
import tanda from '../assets/berkas/tanda.png';
import background from '../assets/berkas/backgroundlamaran.jpg';
// css
import '../styles/Lamaran.css';
import HeaderPortfolio from './Headerportfolio';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

// Configuration constants
const PDF_CONFIG = {
  margin: 72,
  fontSize: 12,
  lineHeight: 16,
  imageWidth: 100,
  pageSize: 'a4',
  fontFamily: 'times',
};

function Lamaran() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(''); // State to hold the PDF Blob URL

  const loadImage = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });

  const createPDFDocument = () => new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: PDF_CONFIG.pageSize,
  });

  const addBackground = (doc, image, pageWidth, pageHeight) => {
    doc.addImage(image, 'JPEG', 0, 0, pageWidth, pageHeight);
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.setFont(PDF_CONFIG.fontFamily, 'normal');
    doc.setFontSize(PDF_CONFIG.fontSize);
  };

  const createContent = () => {
    const currentDate = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const location = 'Jakarta'; // You can change this to any location you want

    return [
      'Lampiran: 1 berkas',
      'Perhal: Surat Lamaran Kerja',
      '',
      'Yth.',
      `HRD ${company}`,
      'Di tempat',
      'Dengan hormat,',
      `Berdasarkan informasi lowongan kerja yang saya dapat, saya mengetahui bahwa: ${company} sedang mencari ${position}.`,
      'Untuk itu, saya yang bertanda tangan di bawah ini:',
      'Nama                     : Muhammad Rohyan Zidan',
      'Jenis Kelamin            : Laki-Laki',
      'Tempat/Tanggal lahir     : Garut, 04 Juli 2002',
      'Alamat                   : JLN.Bakti VIII.NO19 RT/RW 007/006',
      '                         : Kel. Cilincing Jakarta Utara Kec. Cilicing',
      '                         : Jakarta Utara',
      `Dengan ini bermaksud untuk melamar ${position} di ${company}.`,
      'Sebagai bahan pertimbangan, saya sertakan beberapa dokumen berikut:',
      '1. Fotocopi KTP',
      '2. Fotocopi IZAJAh',
      '3. Fotocopi SKCK',
      '4. Pas foto 3x4',
      '',
      'Demikian surat lamaran kerja ini, saya ucapkan terima kasih atas perhatian Bapak/Ibu HRD.',
      ` ${location},${currentDate}`,
      'Hormat saya,',
      '{tanda_tangan}',
      'Muhammad Rohyan Zidan'
    ];
  };

  const downloadLamaran = async () => {
    if (!company || !position) {
      alert('Harap isi nama perusahaan dan posisi terlebih dahulu');
      return;
    }

    setIsGenerating(true);
    try {
      const [signatureImg, backgroundImg] = await Promise.all([
        loadImage(tanda),
        loadImage(background),
      ]);

      const doc = createPDFDocument();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      let yPosition = PDF_CONFIG.margin + 50;

      const addPageContent = (text, x = PDF_CONFIG.margin) => {
        if (yPosition + PDF_CONFIG.lineHeight * 2 > pageHeight - PDF_CONFIG.margin) {
          doc.addPage();
          addBackground(doc, backgroundImg, pageWidth, pageHeight);
          yPosition = PDF_CONFIG.margin + 50; // Reset yPosition for the new page
        }

        const textHeight = doc.getTextDimensions(text).h;
        doc.text(text, x, yPosition, { maxWidth: pageWidth - PDF_CONFIG.margin * 2 });
        yPosition += textHeight + PDF_CONFIG.lineHeight; // Move yPosition down for the next line
      };

      // Add initial background
      addBackground(doc, backgroundImg, pageWidth, pageHeight);

      // Process content
      createContent().forEach(line => {
        if (line === '{tanda_tangan}') {
          const imgHeight = (signatureImg.naturalHeight / signatureImg.naturalWidth) * PDF_CONFIG.imageWidth;
          addPageContent(''); // Ensure space for signature
          doc.addImage(
            signatureImg,
            'PNG',
            PDF_CONFIG.margin,
            yPosition,
            PDF_CONFIG.imageWidth,
            imgHeight
          );
          yPosition += imgHeight + PDF_CONFIG.lineHeight * 2; // Move yPosition down for the next line
        } else {
          addPageContent(line);
        }
      });

      // Create a Blob URL for the PDF
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl); // Set the PDF URL in state

      // Save the PDF
      doc.save('lamaran.pdf');

      // Show success alert
      Swal.fire({
        title: "TERIMAKASIH 🤝🏻",
        text: "Surat lamaran Anda telah berhasil diunduh.",
        icon: "success"
      });

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Gagal membuat PDF. Silahkan coba lagi.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <HeaderPortfolio />
      <div className="lamaran">
        <div className="container-lamran">
          <h1 className="lamaran-h1">Buat Surat Lamaran</h1>

          <div className='input-box'>
            <div>
              <label className="label-prushaan">Nama Perusahaan</label>
              <input
                type="text"
                className="input-posisi"
                placeholder="Contoh: PT Indonesia"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className='input-box'>
              <label className="label-lamaran">Posisi Yang Tersedia</label>
              <input
                type="text"
                className="input-posisi"
                placeholder="Contoh: Software Engineer"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
          </div>

          <button 
            onClick={downloadLamaran}
            disabled={isGenerating}
            className="back-home-button"
          >
            {isGenerating ? 'Membuat PDF...' : 'Unduh Surat Lamaran'}
          </button>

          {/* Button to view the PDF */}
          {pdfUrl && (
            <button 
              onClick={() => window.open(pdfUrl, '_blank')}
              className="view-file-button"
            >
              Lihat File Lamaran
            </button>
          )}
          
        </div>

        {/* Social Media */}
        <div className="social-container">
          <div className="social-media">
            <h2>Connect to me</h2>
            <p></p>
            <ul>
              <li><a href="https://www.linkedin.com/in/rohyan-zidan-29b5002ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a></li>
              <li><a href="#"><BiLogoGmail /></a></li>
              <li><a href="Https://wa.me/+6282110173830"><FaWhatsapp /></a></li>
              <li><a href="https://github.com/Rohyanzidan02"><LuGithub /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lamaran;