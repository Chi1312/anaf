import Article from "./Article";
import ArticleButton from "./ArticleButton";
import ArticleHeader from "./ArticleHeader";
import Card from "./Card";

function ArticleGrid() {
  return (
    <div>
      <div className="article-grid">
        <div className="article-col">
          <ArticleHeader content="Comunicate de presă ANAF"></ArticleHeader>

          <Article
            date="09 iunie 2022"
            title="Rezultatele acțiunilor de control fiscal din primele 5 luni ale anului &rarr;"
            content="În vederea asigurării resurselor necesare pentru buna funcționare a statului, ANAF urmărește creșterea gradului de conformare voluntară, atât la declarare, cât și la plată, mizând pe spiritul de responsabilitate civică al contribuabililor, dar și pe campanii de informare cu privire la procedurile de declarare a veniturilor și de plată a taxelor și impozitelor."
          ></Article>
          <Article
            date="07 iunie 2022"
            title="Rezultatele acțiunilor de control antifraudă în primele 5 luni ale anului &rarr;"
            content="Unul dintre obiectivele majore ale ANAF este combaterea evaziunii fiscale, un flagel al economiei care păgubește bugetul general consolidat de resursele necesare bunei desfășurări a statului. În acest sens, Agenția desfășoară acțiuni de control menite să îndrepte sau să sancționeze neregulile comise de contribuabili, îmbunătățind astfel gradul de colectare."
          ></Article>
          <Article
            date="01 iunie 2022"
            title="Declarația președintelui ANAF, domnul LUCIAN OVIDIU HEIUȘ &rarr;"
            content="Vreau să le mulțumesc, pe această cale, contribuabililor pentru faptul că majoritatea dintre ei au înțeles responsabilitatea fiscală și civică și au declarat și și-au achitat impozitele si taxele."
          ></Article>
          <Article
            date="29 mai 2022"
            title="Declarația președintelui ANAF, domnul LUCIAN OVIDIU HEIUȘ &rarr;"
            content="Pe lângă combaterea evaziunii fiscale și creșterea gradului de colectare voluntară, ANAF își propune și să recupereze sumele stabilite ca prejudiciu de către instanțe în dosarele penale."
          ></Article>
          <ArticleButton></ArticleButton>
        </div>
        <div className="article-col">
          <ArticleHeader content="Transparență decizională"></ArticleHeader>

          <Article
            date="24 mai 2022"
            title="Detalii proiect &rarr;"
            content="Proiect de ordin al preşedintelui Agenţiei Naţionale de Administrare Fiscală pentru modificarea modelului, conținutului și instrucțiunilor de completare ale formularului 208 „Declarație informativă privind impozitul pe veniturile din transferul proprietăților imobiliare din patrimoniul personal”, aprobat prin Ordinul ministrului finanțelor publice și al ministrului justiției nr.1022/2562/2016 privind aprobarea procedurilor de stabilire, plată și rectificare a impozitului pe veniturile din transferul proprietăților imobiliare din patrimoniul personal și a modelului și conținutului unor formulare utilizate în administrarea impozitului pe venit."
          ></Article>
          <Article
            date="23 mai 2022"
            title="Detalii proiect &rarr;"
            content="Proiect de ordin al preşedintelui Agenţiei Naţionale de Administrare Fiscalã pentru aprobarea procedurii de anulare a obligațiilor fiscale ce fac obiectul prevederilor art. I din Legea nr. 72/2022 pentru anularea unor obligații fiscale și pentru modificarea unor acte normative."
          ></Article>
          <Article
            date="04 mai 2022"
            title="Detalii proiect &rarr;"
            content="Proiect de ordin privind aprobarea Procedurii de comunicare prin mijloace electronice de transmitere la distanţă între organul fiscal central şi persoanele fizice, persoanele juridice şi alte entităţi fără personalitate juridică."
          ></Article>
          <Article
            date="04 mai 2022"
            title="Titlu &rarr;"
            content="Proiect de ordin pentru aprobarea Procedurii de utilizare și funcționare a sistemului național privind monitorizarea transporturilor de bunuri cu risc fiscal ridicat RO e-Transport."
          ></Article>
          <ArticleButton></ArticleButton>
        </div>
        <div className="article-col">
          <ArticleHeader content="Structură ANAF"></ArticleHeader>

          <Card
            img="https://images.theconversation.com/files/454096/original/file-20220324-25-lrsaeg.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            title="Direcţia Generală Antifraudă Fiscală"
            location="Locaţie"
            phone="0771 777 771"
          ></Card>
          <Card
            img="https://i.guim.co.uk/img/media/ce670c0525dd6797c22780909ca3b6cf4cc14b32/0_0_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=513d390c7ea7141a1904b9e9eeac4a9a"
            title="Direcţia Generală a Vămilor"
            location="Locaţie"
            phone="0771 777 771"
          ></Card>
          <Card
            img="https://www.rmg.co.uk/sites/default/files/styles/large/public/compass-square.jpg?itok=5Vuv75d6"
            title="Direcţia Generală de Integritate"
            location="Locaţie"
            phone="0771 777 771"
          ></Card>
          <Card
            img="https://cs.ucsb.edu/sites/default/files/2021-06/source-4280758_1920.jpg"
            title="Direcţia Generală Control Venituri Persoane Fizice"
            location="Locaţie"
            phone="0771 777 771"
          ></Card>
          <Card
            img="https://vacommunityhealth.org/wp-content/uploads/2018/07/explore-computer-magnifying-glass.jpg"
            title="Direcţia Generală de Management a Riscului"
            location="Locaţie"
            phone="0771 777 771"
          ></Card>
          <Card
            img="https://miro.medium.com/max/1400/1*gx_0gcBtD_ogtyrph_kC1w.jpeg"
            title="Direcţia Generală de Administrare Contribuabili"
            location="Locaţie"
            phone="0771 777 771"
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default ArticleGrid;
