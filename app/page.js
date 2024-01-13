import Image from 'next/image';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen">
        {' '}
        <img src="hero.svg" alt="hero" className="hero  -z-10" />
        <img src="navbar.svg" alt="navbar" className="navbar" />
        <div className="flex absolute top-36">
          <Container sx={{ margin: '0 6rem' }}>
            <div className="flex flex-col gap-10 text-white mt-24">
              <h2 className="text-4xl font-semibold">Selamat Datang di</h2>
              <h1 className="text-6xl font-extrabold">SMA Angkasa 1 Jakarta</h1>
              <p className="text-2xl font-bold">sekolah KOMPAK</p>
            </div>
            <div className="flex gap-5 pt-16">
              <button className="text-secondary font-bold bg-primary w-52 h-14 text-2xl rounded-2xl">
                Tentang Kami
              </button>
              <button className="w-52 h-14 text-2xl rounded-2xl border bg-opacity-0 border-white text-white">
                Pendaftaran
              </button>
            </div>
          </Container>
        </div>
        <div className="bg-primary">
          <div className="flex items-center justify-around mx-12 h-52">
            <div className="text-2xl">
              <h2 className="text-white">
                SMA Angkasa 1
                <span className="font-extrabold">
                  {' '}
                  merupakan salah satu dari 24 sekolah
                </span>
                <br />
                dibawah pengelolaan Yayasan Ardhya Garini (Yasarini)
              </h2>
            </div>
            <div></div>
            <div className="flex gap-2">
              <img src="logo-sekolah.svg" className="mr-16" alt="logo" />
              <img src="yayasan.svg" alt="yayasan" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="my-24">
        <div className="flex  items-center justify-around mx-32">
          <div className="flex-1">
            <img src="about.svg" className="about" alt="about" />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-5xl text-primary font-bold">Tentang Kami</h2>
            <p className="text-justify leading-8 font-semibold">
              SMA Angkasa 1 merupakan salah satu dari 24 sekolah dibawah
              pengelolaan Yayasan Ardhya Garini (Yasarini) Pengurus Cabang Lanud
              Halim Perdanakusuma Jakarta Timur. Berdiri sejak tahun 1983 dan
              berlokasi di Jalan Trikora Raya Halim Perdanakusuma Jakarta Timur.
            </p>
            <div>
              <button className="w-40 h-12 bg-primary text-white rounded font-bold tracking-wider">
                Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-primary">
        <div className="flex justify-center items-center flex-col p-10 gap-10">
          <h2 className="text-4xl text-white font-extrabold">Galeri</h2>
          <img src="galeri.svg" alt="galeri" />
          <button className="w-56 h-12 bg-secondary text-primary font-bold">
            Lebih Lanjut
          </button>
        </div>
      </section>

      {/* Program */}
      <section className="relative">
        <img
          src="program-bg.svg"
          alt="program-bg"
          className="absolute z-0 w-screen"
        />
        <div className="relative flex justify-around items-center gap-24 mx-32 flex-row py-16">
          <div className="flex-1 flex">
            <div className="mr-24 flex flex-col gap-6">
              <h2 className="text-4xl text-primary font-bold tracking-wider">
                Program Unggulan
              </h2>
              <p className="text-justify font-semibold leading-8">
                Kurikulum yang diselenggarakan di Sekolah Angkasa adalah
                Kurikulum 2013 yang terintegrasi dengan Tri Abdi Angkasa
                Nusantara.Struktur Kurikulum yang kembangkan di SMA Angkasa 1
                merupakan pengembangan dan jabaran visi dan misi SMA Angkasa 1
                sehingga menjadikan sebuah kurikulum multidimensi.
              </p>
              <button className="w-40 h-12 bg-primary text-white font-bold tracking-wide rounded">
                Lebih Lanjut
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="program-select.svg" alt="programs" />
          </div>
        </div>
      </section>

      {/* News and Activity */}
      <section className="bg-gradient-to-b from-news to-white z-1 relative">
        <div className="flex justify-center items-center flex-col py-10 gap-10">
          <h2 className="font-extrabold text-primary text-4xl tracking-wide">
            Berita dan Kegiatan
          </h2>
          <img src="berita-kegiatan.svg" alt="berita" />
          <button className="bg-primary text-white w-56 h-12 text-2xl tracking-wide">
            Lebih Lanjut
          </button>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-primary">
        <div className="flex justify-around items-center py-10 text-white">
          <div>
            <img src="logo-sekolah.svg" alt="logo-footer" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl border-b-2 w-1/2">Alamat</h3>
            <p>
              Jalan Trikora Raya No.1 Rt.01/004 <br /> Halim Perdanakusuma,
              Jakarta <br />
              Timur, Kodepos 13610
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src="footer/call.svg" alt="call" />
              <p>(021) 8001055</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="footer/sms.svg" alt="sms" />
              <p>kesiswaan.smangkasa1@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="footer/calendar.svg" alt="calendar" />
              <p>
                Senin - Jumat <br />
                08.00 - 16.00 WIB
              </p>
            </div>
          </div>
          <div>
            <img src="footer/adress.svg" alt="adress" />
          </div>
        </div>
      </footer>
    </main>
  );
}
