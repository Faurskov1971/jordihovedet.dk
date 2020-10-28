import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import danmarkskort from '../assets/images/danmarkPrikker_small.png'
import danmarkPrikkerMobil from '../assets/images/danmarkPrikkerMobil.jpg'


function data_f(e){
  const aktuel = e.target.id;
  const data1 = [];
  const data2 = [];
  const data3 = [];
  const data4 = [];
  
 data1[0]= ["Rubjerg Knude - Lønstrup Klint"];
 data2[0]= ["Istidens gletsjere skubbede ler og sandlag op i stejle flager, som ses i klinten."];
 data3[0]= ["www.naturnet.dk"];
 data4[0]= ["www.rubjergknude.dk"];
  
 data1[1]= ["Bulbjerg"];
 data2[1]= ["Her danner bryozokalken et forbjerg i Jammerbugt. Tidligere stod den 16 m høje strandpille Skarreklit 60 m ude i vandet."];
 data3[1]= ["www.naturnet.dk"];
 data4[1]= ["www.bulbjerg.dk"];
  
 data1[2]= ["Vokslev Kalkgrav"];
 data2[2]= ["I kalkgraven, hvor brydning er ophørt, er det stadig muligt at studere skrivekridt m.m."];
 data3[2]= ["www.naturnet.dk"];
  
 data1[3]= ["Aggersund Kalkværk"];
 data2[3]= ["Dankalk graver skrivekridt i et stort brud. Kridtet bruges bl.a. til jordforbedring i landbruget."];
 data3[3]= ["www.dankalk.dk"];
  
 data1[4]= ["Molermuseet"];
 data2[4]= ["I molergraven ved siden af museet kan du gå på jagt efter fossiler."];
 data3[4]= ["www.dueholmkloster.dk"];
  
 data1[5]= ["Hanklit"];
 data2[5]= ["I den 60 m høje klit med moler og askelag er lagene foldet af pres fra istidens gletsjere."];
 data3[5]= ["www.naturnet.dk"];
  
 data1[6]= ["Fur"];
 data2[6]= ["Moler med askelag kan du møde i kystklinter og nedlagte grave på øens nordlige del."];
 data3[6]= ["www.naturnet.dk"];
 data4[6]= ["www.furmuseum.dk"];
  
 data1[7]= ["Ertebølle Hoved"];
 data2[7]= ["Klint med moler og askelag danner et forbjerg i Limfjorden tæt ved den berømte køkkenmødding fra jægerstenalder."];
 data3[7]= ["www.naturnet.dk"];
  
 data1[8]= ["Bovbjerg"];
 data2[8]= ["Selv om høfderne værner kysten, eroderer havet stadig i den mere end 30 m høje klint."];
 data3[8]= ["www.blst.dk"];
  
 data1[9]= ["Mønsted Kalkgrube"];
 data2[9]= ["Salt i undergrunden har løftet kalken, hvor landets største underjordiske mine blev anlagt."];
 data3[9]= ["www.naturnet.dk"];
 data4[9]= ["www.monsted-kalkgruber.dk"];
  
 data1[10]= ["Karlby-Sangstrup Klinter"];
 data2[10]= ["Djurslands hvide klinter mod Kattegat består af bryozokalk i tydelige banker."];
 data3[10]= ["www.naturnet.dk"];
  
 data1[11]= ["Mols Hoved"];
 data2[11]= ["I det storslåede landskab på Mols ses et tværsnit af istidens lag i klinten."];
 data3[11]= ["www.blst.dk"];
  
 data1[12]= ["Nordsamsø"];
 data2[12]= ["I Nordsamsøs klinter er der spor efter flere isfremstød."];
 data3[12]= ["www.samsonaturskole.dk"];
  
 data1[13]= ["Gram Lergrav"];
 data2[13]= ["I lergravens fede ler er fundet fossile hvaler - gå på hvalfangst i leret."];
 data3[13]= ["www.museum-sonderjylland.dk"];
  
 data1[14]= ["Halk Hoved"];
 data2[14]= ["Istidens gletsjere flyttede en del rundt på jordlagene, som det ses i denne klint."];
 data3[14]= ["www.naturnet.dk"];
  
 data1[15]= ["Sønderby Klint"];
 data2[15]= ["Foldede istidslag er dækket af vandretliggende yngre morænelag."];
 data3[15]= ["www.sns.dk"];
  
 data1[16]= ["Fyns Hoved"];
 data2[16]= ["Klinter, der nedbrydes af havet, danner smukke odder af sandet og gruset"];
 data3[16]= ["www.naturnet.dk"];
  
 data1[17]= ["Klintholm Kalkgrav"];
 data2[17]= ["Nedlagt kalkgrav med bryozokalk og den yngre kertemindemergel."];
 data3[17]= ["www.naturnet.dk"];
  
 data1[18]= ["Ristinge Klint"];
 data2[18]= ["Lag fra istid og mellemistid er skubbet sammen i flager af isfremstød fra sydøst."];
 data3[18]= ["www.blst.dk"];
  
 data1[19]= ["Naturbornholm"];
 data2[19]= ["NaturBornholm er et videnspædagogisk aktivitetscenter."];
 data3[19]= ["www.naturbornholm.dk"];
  
 data1[20]= ["Hundested Klinter"];
 data2[20]= ["Nordsjællands hårde næve mod nordvest består af moræneler og smeltevandssand."];
 data3[20]= ["www.naturnet.dk"];
  
 data1[21]= ["Karlstrup Kalkgrav"];
 data2[21]= ["Grænsen mellem kridttid og tertiærtid kan ses i den nordøstlige del af kalkgraven lige over søens vandspejl."];
 data3[21]= ["www.naturnet.dk"];
  
 data1[22]= ["Reersø"];
 data2[22]= ["Storebælt har blotlagt Reersøs indre, som ses i klinten mod vest."];
 data3[22]= ["www.naturnet.dk"];
  
 data1[23]= ["Stevns Klint"];
 data2[23]= ["De nederste lag i klinten ved Højerup Kirke indeholder det yngste skrivekridt."];
 data3[23]= ["www.naturnet.dk"];
 data4[23]= ["www.oestsjaellands-museum.dk"];
  
 data1[24]= ["Faxe Kalkbrud"];
 data2[24]= ["I Danmarks største hul graves stadig koralkalk fra forstenede koralrev."];
 data3[24]= ["www.naturnet.dk"];
 data4[24]= ["www.oessjaellands-museum.dk"];
  
 data1[25]= ["Strandegårds Dyrehave"];
 data2[25]= ["Her spejler bøgen sin top i bølgen blå ved klinten med lag fra istid og mellemistid."];
 data3[25]= ["www.stam.dk"];
  
 data1[26]= ["Knudshoved Odde"];
 data2[26]= ["Den 15 km lange odde består af små morænebakker bundet sammen af landtanger."];
 data3[26]= ["www.naturnet.dk"];
  
 data1[27]= ["Møns Klint"];
 data2[27]= ["Istidens sidste glesjerfremstød skubbede kridtlagene op til en højde af mere end 100 m."];
 data3[27]= ["www.naturnet.dk"];
 data4[27]= ["www.moensklint.dk"];
  
 data1[28]= ["Pomle Nakke"];
 data2[28]= ["Under bøgeskoven har havet eroderet en klint med lag fra istiden."];
 data3[28]= ["www.stam.dk"];
  
  let tmpNumber=Number(aktuel);
  let resultat="";
  
  resultat += "<strong>"+data1[tmpNumber]+"</strong><br />";
  resultat += "<p>"+data2[tmpNumber]+"</p>";
  resultat += "<a href='http://"+data3[tmpNumber]+"'>"+data3[tmpNumber]+"</a>";
  if(data4[tmpNumber]){
    resultat += "<br /><a href='http://"+data4[tmpNumber]+"'>"+data4[tmpNumber]+"</a>";
  }
  
  document.getElementById("data").innerHTML = resultat;
  return false
}

export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12} className="divContent">
            
<h1>Tag på ekspedition</h1>
<p>
Geologi er spændende i klasseværelset, men det er endnu mere spændende selv at besøge Danmarks geologiske seværdigheder. Tjek et bredt udvalg ud her!
</p>
<h2>Danmarkskort med ekspeditionsmuligheder.</h2>
<p>
Her har du Danmark. Prikkerne er et udvalg af geologiske seværdigheder, der er værd at besøge. Vi har valgt dem ud, så alle skulle have mulighed for at finde et sted at besøge i nærheden af skolen.
</p>
    </Col>
</Row>
<Row id="backgrundMap">
<Col md={6}>
              <div id="data">Vælg en prik på kortet, og få vist en beskrivelse...</div>
            </Col>

            <Col md={6}>
            <img id="danmarkLarge" src={danmarkskort} useMap="#image-map" alt="Danmarkskort" />
  <map name="image-map">
  <area id="0" target="_self" alt="0" title="1" href="#" onClick={data_f} coords="210,68,9" shape="circle" />
  <area id="1" target="_self" alt="1" title="2" href="#" onClick={data_f} coords="130,120,11" shape="circle" />
  <area id="2" target="_self" alt="2" title="3" href="#" onClick={data_f} coords="200,151,11" shape="circle" />
<area id="3" target="_self" alt="3" title="4" href="#" onClick={data_f} coords="154,157,9" shape="circle" />
<area id="4" target="_self" alt="4" title="5" href="#" onClick={data_f} coords="109,165,8" shape="circle" />
<area id="5" target="_self" alt="5" title="6" href="#" onClick={data_f} coords="98,175,9" shape="circle" />
<area id="6" target="_self" alt="6" title="7" href="#" onClick={data_f} coords="128,177,9" shape="circle" />
<area id="7" target="_self" alt="7" title="8" href="#" onClick={data_f} coords="149,181,10" shape="circle" />
<area id="8" target="_self" alt="8" title="9" href="#" onClick={data_f} coords="44,233,9" shape="circle" />
<area id="9" target="_self" alt="9" title="10" href="#" onClick={data_f} coords="151,247,9" shape="circle" />
<area id="10" target="_self" alt="10" title="11" href="#" onClick={data_f} coords="310,243,10" shape="circle" />
<area id="11" target="_self" alt="11" title="12" href="#" onClick={data_f} coords="263,294,8" shape="circle" />
<area id="12" target="_self" alt="12" title="13" href="#" onClick={data_f} coords="277,320,9" shape="circle" />
<area id="13" target="_self" alt="13" title="14" href="#" onClick={data_f} coords="129,452,13" shape="circle" />
<area id="14" target="_self" alt="14" title="15" href="#" onClick={data_f} coords="184,462,8" shape="circle" />
<area id="15" target="_self" alt="15" title="16" href="#" onClick={data_f} coords="210,460,11" shape="circle" />
<area id="16" target="_self" alt="16" title="17" href="#" onClick={data_f} coords="283,395,9" shape="circle" />
<area id="17" target="_self" alt="17" title="18" href="#" onClick={data_f} coords="295,463,7" shape="circle" />
<area id="18" target="_self" alt="18" title="19" href="#" onClick={data_f} coords="286,530,12" shape="circle" />
<area id="19" target="_self" alt="19" title="20" href="#" onClick={data_f} coords="474,97,12" shape="circle" />
<area id="20" target="_self" alt="20" title="21" href="#" onClick={data_f} coords="411,330,10" shape="circle" />
<area id="21" target="_self" alt="21" title="22" href="#" onClick={data_f} coords="445,401,14" shape="circle" />
<area id="22" target="_self" alt="22" title="23" href="#" onClick={data_f} coords="332,409,13" shape="circle" />
<area id="23" target="_self" alt="23" title="24" href="#" onClick={data_f} coords="465,453,11" shape="circle" />
<area id="24" target="_self" alt="24" title="25" href="#" onClick={data_f} coords="425,450,10" shape="circle" />
<area id="25" target="_self" alt="25" title="26" href="#" onClick={data_f} coords="438,464,8" shape="circle" />
<area id="26" target="_self" alt="26" title="27" href="#" onClick={data_f} coords="387,488,9" shape="circle" />
<area id="27" target="_self" alt="27" title="28" href="#" onClick={data_f} coords="476,514,9" shape="circle" />
<area id="28" target="_self" alt="28" title="29" href="#" onClick={data_f} coords="429,537,10" shape="circle" />
    </map>


    
<img id="danmarkMobil" src={danmarkPrikkerMobil} useMap="#image-map2" alt="Danmarkskort til mobil" />

<map name="image-map2">
<area target="" id="0" alt="0" title="0" href="#" onClick={data_f} coords="131,41,7" shape="circle" />
<area target="" id="1" alt="1" title="1" href="#" onClick={data_f}  coords="81,76,10" shape="circle" />
<area target="" id="2" alt="2" title="2" href="#" onClick={data_f}  coords="123,92,10" shape="circle" />
<area target="" id="3" alt="3" title="3" href="#" onClick={data_f}  coords="96,98,6" shape="circle" />
<area target="" id="4" alt="4" title="4" href="#" onClick={data_f}  coords="69,104,6" shape="circle" />
<area target="" id="5" alt="5" title="5" href="#" onClick={data_f}  coords="60,109,6" shape="circle" />
<area target="" id="6" alt="6" title="6" href="#" onClick={data_f}  coords="80,111,6" shape="circle" />
<area target="" id="7" alt="7" title="7" href="#" onClick={data_f}  coords="92,113,6" shape="circle" />
<area target="" id="8" alt="8" title="8" href="#" onClick={data_f}  coords="27,145,7" shape="circle" />
<area target="" id="9" alt="9" title="9" href="#" onClick={data_f}  coords="94,154,7" shape="circle" />
<area target="" id="10" alt="10" title="10" href="#" onClick={data_f}  coords="193,151,7" shape="circle" />
<area target="" id="11" alt="11" title="11" href="#" onClick={data_f}  coords="164,184,7" shape="circle" />
<area target="" id="12" alt="12" title="12" href="#" onClick={data_f}  coords="173,201,7" shape="circle" />
<area target="" id="13" alt="13" title="13" href="#" onClick={data_f}  coords="80,281,7" shape="circle" />
<area target="" id="14" alt="14" title="14" href="#" onClick={data_f}  coords="114,288,7" shape="circle" />
<area target="" id="15" alt="15" title="15" href="#" onClick={data_f}  coords="130,286,7" shape="circle" />
<area target="" id="16" alt="16" title="16" href="#" onClick={data_f}  coords="176,247,7" shape="circle" />
<area target="" id="17" alt="17" title="17" href="#" onClick={data_f}  coords="184,289,7" shape="circle" />
<area target="" id="18" alt="18" title="18" href="#" onClick={data_f}  coords="180,332,7" shape="circle" />
<area target="" id="19" alt="19" title="19" href="#" onClick={data_f}  coords="296,60,7" shape="circle" />
<area target="" id="20" alt="20" title="20" href="#" onClick={data_f}  coords="255,205,7" shape="circle" />
<area target="" id="21" alt="21" title="21" href="#" onClick={data_f}  coords="278,251,7" shape="circle" />
<area target="" id="22" alt="22" title="22" href="#" onClick={data_f}  coords="207,255,7" shape="circle" />
<area target="" id="23" alt="23" title="23" href="#" onClick={data_f}  coords="290,281,7" shape="circle" />
<area target="" id="24" alt="24" title="24" href="#" onClick={data_f}  coords="266,284,7" shape="circle" />
<area target="" id="25" alt="25" title="25" href="#" onClick={data_f}  coords="274,288,7" shape="circle" />
<area target="" id="26" alt="26" title="26" href="#" onClick={data_f}  coords="243,304,7" shape="circle" />
<area target="" id="27" alt="27" title="27" href="#" onClick={data_f}  coords="297,319,7" shape="circle" />
<area target="" id="28" alt="28" title="28" href="#" onClick={data_f}  coords="269,334,7" shape="circle" />
</map>
            
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
