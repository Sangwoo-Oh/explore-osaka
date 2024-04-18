import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <div className="main__pagetitle">
        <h1>Tourism</h1>
      </div>
      <div className="main__content">
        <section className="section__video">
          <h2>12 Top-Rated Tourist Attractions in Osaka, Japan</h2>
          <figure>
            <video controls poster="/osaka_video_poster.jpg">
              <source src="/osaka_video.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </figure>
        </section>
        <section>
          <div className="flex__wrapper">
            <div className="item">
              <h2>Osaka Castle</h2>
              <p>Immerse yourself in history as you visit this iconic landmark dating back to the 16th century.</p>
              <figure>
                <img src="/osaka_castle.jpg" alt="photo of osaka castle"/>
              </figure>
              <a className="cta" href="https://www.osakacastle.net/" target="_blank">Official website</a>
            </div>
            <div className="item">
              <h2>Dotonbori</h2>
              <p>Experience the energy of Osaka&apos;s entertainment district, known for its neon lights, street food, and vibrant atmosphere.</p>
              <figure>
                <img src="/dotonbori.jpg" alt="photo of dotonbori"/>
              </figure>
              <a className="cta" href="https://maps.app.goo.gl/WyJX5u1kLp9VWNnK6" target="_blank">Find location</a>
            </div>
            <div className="item">
              <h2>Shitennoji Temple</h2>
              <p>Delve into the spiritual side of Osaka with a visit to one of Japan&apos;s oldest temples.</p>
              <figure>
                <img src="/sitenouji.jpg" alt="photo of sitenouji"/>
              </figure>
              <a className="cta" href="https://maps.app.goo.gl/1d3bWn8YLwBNTBBB8" target="_blank">Find location</a>
            </div>
            <div className="item">
              <h2>Universal Studios Japan</h2>
              <p>Embark on a journey of adventure and fantasy at this popular theme park.</p>
              <figure>
                <img src="/usj.jpg" alt="photo of usj"/>
              </figure>
              <a className="cta" href="https://www.usj.co.jp/web/en/us" target="_blank">Official website</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
