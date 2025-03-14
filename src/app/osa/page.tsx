'use client';

import styles from './page.module.css';
import { fredericka, bitter } from '../fonts';
import Image from 'next/image';
import borderTop from '../assets/images/inbjudan/header-leaf-border-top.png';
import borderBottom from '../assets/images/inbjudan/header-leaf-border-bottom.png';
import { useState } from 'react';
import osaline from '../assets/images/osa/osaline.png';

export default function Osa() {
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
        <form 
          className={styles.osaSectionForm} 
          action="https://formsubmit.co/sandquist250906@gmail.com" 
          method="POST"
        >
          {/* Lägg till dessa dolda input-fält för FormSubmit.co konfiguration */}
          <input type="hidden" name="_subject" value="Nytt OSA till bröllopet!" />
          <input type="hidden" name="_next" value="http://localhost:3000/tackosa" />
          <h1 className={`${styles.osaFormTitle} ${fredericka.className}`}>Fira med oss!</h1>
          <h2 className={`${styles.osaFormSubtitle} ${bitter.className}`}>OSA senast 31/7</h2>
          <p className={`${styles.osaInfo} ${bitter.className}`}>
            (Vid ev. förhinder EFTER 31/7, ber vi er istället kontakta vår <a href="/hallatal" className={styles.underline}>Toastmadame</a>)
          </p>

          <div className={styles.nameSection}>
            <div className={styles.inputGroup}>
              <label className={bitter.className}>Namn *</label>
              <input 
                type="text" 
                name="namn1"
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
                name="namn2"
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
              />
              <label htmlFor="kommerEj" className={bitter.className}>Kommer ej</label>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={bitter.className}>Ev. Allergi eller specialkost</label>
            <textarea 
              name="specialkost"
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
                />
                <label htmlFor="egenTransport" className={bitter.className}>Vi ordnar transport själva</label>
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={bitter.className}>E-post (för att vi ska kunna bekräfta meddelandet) *</label>
            <input 
              type="email" 
              name="epost"
              required
              value={formData.epost}
              onChange={(e) => setFormData({...formData, epost: e.target.value})}
            />
          </div>

          <button type="submit" className={`${styles.submitButton} ${fredericka.className}`}>
            Skicka
          </button>
        </form>

        <form 
          className={styles.songForm} 
          action="https://formsubmit.co/sandquist250906@gmail.com" 
          method="POST"
        >
          {/* Lägg till dessa dolda input-fält för FormSubmit.co konfiguration */}
          <input type="hidden" name="_subject" value="Ny önskelåt till bröllopet!" />
          <input type="hidden" name="_next" value="http://localhost:3000/tacklatval" />
          <h2 className={`${styles.songFormTitle} ${fredericka.className}`}>
              Psst. Kasta in en önskelåt!
          </h2>
          <p className={`${styles.songFormSubtitle} ${bitter.className}`}>
              Självfallet helt anonymt & obegränsat antal.
          </p>

          <div className={styles.songInputSection}>
              <div className={styles.inputGroup}>
                  <label className={bitter.className}>Titel *</label>
                  <input 
                      type="text" 
                      name="titel"
                      required
                      value={songData.titel}
                      onChange={(e) => setSongData({...songData, titel: e.target.value})}
                  />
              </div>

              <div className={styles.inputGroup}>
                  <label className={bitter.className}>Artist</label>
                  <input 
                      type="text"
                      name="artist"
                      value={songData.artist}
                      onChange={(e) => setSongData({...songData, artist: e.target.value})}
                  />
              </div>
          </div>

          <button type="submit" className={`${styles.submitButton} ${fredericka.className}`}>
              Skicka
          </button>
        </form>
        </div>
      </main>
    </div>
  );
}