import React from "react";

export default function RXHWebsite() {
  return (
    <div className="min-h-screen bg-[#0d0b14] text-gray-100 antialiased">
      {/* Header */}
      <header className="bg-[#1a1525] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold">RXH</div>
            <div>
              <h1 className="text-lg font-semibold text-white">RXH.fi</h1>
              <p className="text-xs text-gray-400">IT-konsultointi • Projektijohto • Nettisivut • Sovellukset</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-red-400">Palvelut</a>
            <a href="#about" className="hover:text-red-400">Tietoa</a>
            <a href="#contact" className="hover:text-red-400">Ota yhteyttä</a>
          </nav>
          <a href="#contact" className="ml-4 inline-block px-4 py-2 bg-red-600 text-white rounded-md text-sm">Pyydä tarjous</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">RXH — Luotettavaa IT-konsultointia ja projektijohtoa</h2>
          <p className="mt-4 text-gray-300">Autamme yrityksiä ja tiimejä menestymään teknologia-projekteissa — alusta loppuun. Projektipäällikön osaaminen, projektin johdon konsultointi, modernit nettisivuratkaisut ja web-sovellukset.</p>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 bg-red-600 text-white rounded-md shadow">Ota yhteyttä</a>
            <a href="#services" className="px-5 py-3 border border-red-600 text-red-300 rounded-md">Palvelut</a>
          </div>

          <ul className="mt-6 text-sm text-gray-400 space-y-2">
            <li>✔ Kokemus projektinhallinnasta ketterästi (Scrum, Kanban) ja perinteisemmillä menetelmillä</li>
            <li>✔ Räätälöidyt web-ratkaisut</li>
            <li>✔ Selkeä viestintä, riskienhallinta ja toimitusvarmuus</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-red-400">Palvelumme</h3>
        <p className="text-gray-300 mt-2">Tarjoamme laajan valikoiman IT- ja projektipalveluita — skaalautuvasti ja käytännönläheisesti.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'IT-konsultointi', text: 'Arkkitehtuuri- ja teknologia-analyysit sekä kustannustehokkaat ratkaisut yrityksesi tarpeisiin.' },
            { title: 'Projektipäällikön osaaminen', text: 'Kokenut projektipäällikkö joka osaa johtaa erityyppisiä projekteja: resursointi, aikataulutus, budjetointi ja sidosryhmäviestintä.' },
            { title: 'Projektin johdon konsultointi', text: 'Tarjoamme kokonaisvaltaista projektin johdon konsultointia: prosessien kehitystä, johtamismallien arviointia, projektien toimitusvarmuuden parantamista ja muutosjohtamista.' },
            { title: 'Nettisivujen tekeminen', text: 'Modernit, responsiiviset ja saavutettavat sivut (React, Next.js, tai staattinen HTML). Sisältöstrategia, hakukoneoptimointi (SEO) ja ylläpito.' },
            { title: 'Sovelluskehitys', text: 'Full-stack kehitys: frontend, backend ja API-integraatiot. Lisäksi reaaliaikainen raportointi, datan visualisointi sekä tekoälypohjaiset ratkaisut kuten AI-sovellukset ja chatbotit.' },
            { title: 'Koulutus ja tuki', text: 'Tarjoamme koulutusta työkaluihin, prosesseihin ja projektinhallinnan parhaisiin käytäntöihin sekä jatkuvan tuen projektin elinkaaren ajaksi.' }
          ].map((s, i) => (
            <article key={i} className="bg-[#1a1525] p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold text-red-400">{s.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#1a1525] rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-red-400">Tietoa RXH:sta</h3>
          <p className="text-gray-300 mt-3">RXH tarjoaa käytännönläheistä IT-asiantuntemusta ja projektinjohtopalveluja suomalaisille yrityksille. Painopisteenä on toimitusvarmuus, selkeä kommunikointi ja yrityksen tavoitteiden ymmärtäminen.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white rounded-xl p-6 md:p-10">
          <div>
            <h3 className="text-2xl font-bold">Ota yhteyttä</h3>
            <p className="mt-2 text-red-100 text-sm">Tavoitat meidät sähköpostitse tai puhelimitse.</p>

            <div className="mt-4 text-sm">
              <p>📧 <a href="mailto:rikurixuh@gmail.com" className="underline text-red-100 hover:text-white">rikurixuh@gmail.com</a></p>
              <p>📞 <a href="tel:" className="underline text-red-100 hover:text-white"></a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1525] border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} RXH.fi — Kaikki oikeudet pidätetään</div>
          <div className="text-sm text-gray-400 mt-2 md:mt-0">Domain: <span className="font-medium text-red-400">RXH.fi</span></div>
        </div>
      </footer>
    </div>
  );
}
