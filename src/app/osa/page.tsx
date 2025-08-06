'use client';

import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import { useState } from 'react';
import osaline from '../assets/images/osa/osaline.png';
import osaline1 from '../assets/images/osa/osaline-1.png';
import { useRouter } from 'next/navigation';


export default function Osa() {
  const router = useRouter();
  const [osaSubmitting, setOsaSubmitting] = useState(false);
  const [songSubmitting, setSongSubmitting] = useState(false);
  const [osaError, setOsaError] = useState('');
  const [songError, setSongError] = useState('');
  const [formData, setFormData] = useState({
    namn1: '',
    namn2: '',
    kommer: '',
    specialkost: '',
    transport: '',
    epost: ''
  });

  const [songData, setSongData] = useState({
    titel: '',
    artist: ''
  });

  const handleOsaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOsaError('');

    // Validera obligatoriska fält
    if (!formData.kommer) {
      setOsaError('Du måste välja om du kommer eller inte.');
      return;
    }

    setOsaSubmitting(true);

    try {
      const response = await fetch('/api/osa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/tackosa');
      } else {
        setOsaError('Något gick fel vid skickandet av formuläret. Försök igen.');
      }
    } catch (error) {
      console.error('OSA Error:', error);
      setOsaError('Ett fel uppstod. Kontrollera din internetanslutning och försök igen.');
    } finally {
      setOsaSubmitting(false);
    }
  };

  const handleSongSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSongError('');
    setSongSubmitting(true);

    try {
      const response = await fetch('/api/song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(songData),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/tacklatval');
        setSongData({ titel: '', artist: '' }); // Återställ formuläret
      } else {
        setSongError('Något gick fel vid skickandet av låtönskningen. Försök igen.');
      }
    } catch (error) {
      console.error('Song Error:', error);
      setSongError('Ett fel uppstod. Kontrollera din internetanslutning och försök igen.');
    } finally {
      setSongSubmitting(false);
    }
  };

  return (
    <div className={styles.osaPage}>
      <div className={styles.borderTop}>
        <Image src={borderTop} alt="" fill priority />
      </div>
      <div className={styles.borderBottom}>
        <Image src={borderBottom} alt="" fill priority />
      </div>

      <main className={styles.osaMain}>
        <h1 className={`${styles.osaTitle} ${fredericka.className}`}>Olivia & Jimmy</h1>
        <p className={`${styles.osaSubtitle} ${bitter.className}`}>Lördag 6/9 2025 | Kvistofta k:a | Kl: 14:30</p>
        <p className={`${styles.osaSubtitle1} ${bitter.className}`}>Middag & Fest på Grönadal</p>

        <div className={styles.osaContent}>
          {/*<form 
            className={styles.osaSectionForm} 
            onSubmit={handleOsaSubmit}
          >
            <h1 className={`${styles.osaFormTitle} ${fredericka.className}`}>Fira med oss!</h1>
            <h2 className={`${styles.osaFormSubtitle} ${bitter.className}`}>OSA senast 31/7</h2>
            <p className={`${styles.osaInfo} ${bitter.className}`}>
              (Vid ev. förhinder EFTER 31/7, ber vi er istället kontakta vår <a href="/hallatal" className={styles.underline}>Toastmadame</a>)
            </p>
            <div className={styles.osalineContainer}>
              <Image className={styles.osaline} src={osaline1} alt="Line" width={150} height={100} />
            </div>

            {osaError && <p className={styles.errorMessage}>{osaError}</p>}

            <div className={styles.nameSection}>
              <div className={styles.inputGroup}>
                <label className={bitter.className}>Namn *</label>
                <input 
                  type="text" 
                  required
                  value={formData.namn1}
                  onChange={(e) => setFormData({...formData, namn1: e.target.value})}
                />
              </div>

              <span className={`${styles.ampersand} ${fredericka.className}`}>&</span>

              <div className={styles.inputGroup}>
                <label className={bitter.className}>Namn</label>
                <input 
                  type="text"
                  value={formData.namn2}
                  onChange={(e) => setFormData({...formData, namn2: e.target.value})}
                />
              </div>
            </div>

            <div className={styles.radioGroup}>
              <div className={styles.radioOption}>
                <input 
                  type="radio" 
                  id="kommer" 
                  name="attendance" 
                  value="kommer"
                  onChange={(e) => setFormData({...formData, kommer: e.target.value})}
                  required
                />
                <label htmlFor="kommer" className={bitter.className}>Kommer</label>
              </div>
              <div className={styles.radioOption}>
                <input 
                  type="radio" 
                  id="kommerEj" 
                  name="attendance" 
                  value="kommerEj"
                  onChange={(e) => setFormData({...formData, kommer: e.target.value})}
                  required
                />
                <label htmlFor="kommerEj" className={bitter.className}>Kommer ej</label>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={bitter.className}>Ev. Allergi eller specialkost</label>
              <textarea 
                value={formData.specialkost}
                onChange={(e) => setFormData({...formData, specialkost: e.target.value})}
              />
            </div>

            <p className={`${styles.allergyInfo} ${bitter.className}`}>
              Har du en allergi eller matpreferens som du inte anmäler, så är 0418-70135 numret till närmsta pizzeria.<br/>
              Dvs. Ej föranmäld specialkost kommer <span className={styles.underline}>INTE</span> att kunna lösas på plats.
            </p>
            <div className={styles.osalineContainer}>
              <Image className={styles.osaline} src={osaline} alt="Line" width={150} height={100} />
            </div>

            <div className={styles.transportSection}>
              <p className={`${styles.transportInfo} ${bitter.className}`}>
                Då vårt önskemål är att så många som möjligt &quot;slipper köra&quot;.<br/>
                Ordnar vi med transport till och från centrala Helsingborg mot en kostnad på 100 kr/person.<br/>
                Mer info kommer senare för er som önskar.
              </p>

              <div className={styles.radioGroup}>
                <div className={styles.radioOption}>
                  <input 
                    type="radio" 
                    id="transport" 
                    name="transport" 
                    value="önskarTransport"
                    onChange={(e) => setFormData({...formData, transport: e.target.value})}
                    required
                  />
                  <label htmlFor="transport" className={bitter.className}>Vi önskar hjälp med transport</label>
                </div>
                <div className={styles.radioOption}>
                  <input 
                    type="radio" 
                    id="egenTransport" 
                    name="transport" 
                    value="ordnarSjälv"
                    onChange={(e) => setFormData({...formData, transport: e.target.value})}
                    required
                  />
                  <label htmlFor="egenTransport" className={bitter.className}>Vi ordnar transport själva</label>
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={bitter.className}>E-post (för att vi ska kunna bekräfta meddelandet) *</label>
              <input 
                type="email" 
                required
                value={formData.epost}
                onChange={(e) => setFormData({...formData, epost: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              className={`${styles.submitButton} ${fredericka.className}`}
              disabled={osaSubmitting}
            >
              {osaSubmitting ? 'Skickar...' : 'Skicka'}
            </button>
          </form>*/}

          <form 
            className={styles.songForm} 
            onSubmit={handleSongSubmit}
          >
            <h2 className={`${styles.songFormTitle} ${fredericka.className}`}>
              Psst... <br/> Din önskelåt... <br/> Kasta in den!
            </h2>
            <p className={`${styles.songFormSubtitle} ${bitter.className}`}>
              Självfallet helt anonymt & obegränsat antal.
            </p>

            {songError && <p className={styles.errorMessage}>{songError}</p>}

            <div className={styles.songInputSection}>
              <div className={styles.inputGroup}>
                <label className={bitter.className}>Titel *</label>
                <input 
                  type="text" 
                  required
                  value={songData.titel}
                  onChange={(e) => setSongData({...songData, titel: e.target.value})}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={bitter.className}>Artist</label>
                <input 
                  type="text"
                  value={songData.artist}
                  onChange={(e) => setSongData({...songData, artist: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitButton} ${fredericka.className}`}
              disabled={songSubmitting}
            >
              {songSubmitting ? 'Skickar...' : 'Skicka'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}