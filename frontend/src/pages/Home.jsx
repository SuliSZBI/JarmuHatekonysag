import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Energieffektivitást optimalizáló szoftver – elektromos autókhoz</h1>
      <h2>A szoftver nem csupán passzív megfigyelő, hanem egy aktív döntéshozatali réteg, amely akár 15-25%-kal is növelheti a valós hatótávot a vezetési körülmények okos menedzselésével.</h2>

      <div class="pop_up">
            <div id="first">
              <h1 id="first_pop_up">Intelligens Energiamenedzsment (IEM)</h1>
              <p>A szoftver központi agya, amely összehangolja az akkumulátor, a motor és a kiegészítő rendszerek működését.</p>
              <ul>
                <li>Dinamikus nyomatékelosztás: Összkerékhajtású modelleknél a szoftver milliszekundumok alatt dönti el, melyik motor használata a leggazdaságosabb az adott sebességnél.</li>
                <li>Prediktív hőszabályozás: A navigációs adatok alapján előmelegíti vagy hűti az akkumulátort a töltési ponthoz érkezés előtt, így csökkentve a töltési veszteséget és rövidítve a várakozási időt.</li>
              </ul>
            </div>
            <div id="second">
              <h1>Prediktív Útvonal-optimalizálás</h1>
              <p>A hagyományos GPS-nél mélyebb integráció, amely figyelembe veszi az útviszonyokat.</p>
              <ul>
                <li>Domborzati elemzés: Kalkulál az emelkedőkkel és lejtőkkel. A lejtőkön maximalizálja a visszatáplálást (rekuperációt).</li>
                <li>Időjárás-adaptáció: Figyelembe veszi a szembeszelet és a külső hőmérsékletet, amely drasztikusan befolyásolja a légellenállást és a fűtésigényt.</li>
                <li>Forgalom alapú sebességprofil: Javaslatot tesz az optimális "vitorlázó" sebességre, hogy elkerülje a felesleges gyorsításokat és fékezéseket.</li>
              </ul>
            </div>
            <div id="thirtd">
              <h1>Adaptív Regeneratív Fékezés</h1>
              <p>A szoftver finomhangolja a motorfék erejét a környezeti ingerek alapján.</p>
              <ul>
                <li>Radar-asszisztált lassítás: Ha az elöl haladó autó lassít, a szoftver automatikusan növeli a visszatáplálás mértékét, így nem vész el mozgási energia súrlódási hőként.</li>
                <li>Személyre szabott tanulás: A mesterséges intelligencia figyeli a sofőr vezetési stílusát, és javaslatokat tesz a takarékosabb pedálkezelésre.</li>
              </ul>
            </div>
            <div id="fourth">
              <h1>Fogyasztói Optimalizálás (Non-Drivetrain)</h1>
              <p>A hajtáson kívüli rendszerek (klíma, infotainment, világítás) vezérlése.</p>
              <ul>
                <li>Eco-Klíma mód: Intelligens zónavezérlés (csak ott hűt/fűt, ahol utas ül).</li>
                <li>Háttérfolyamatok korlátozása: Alacsony töltöttségnél lekapcsolja a nem kritikus kényelmi funkciókat a biztonságos célba érés érdekében.</li>
              </ul>
            </div>
      </div>
    </div>
  );
};

export default Home;
