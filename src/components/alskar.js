export default function Alskar() {
  return (
    <div>
      <div className="css3 mt-2 mb-4">
        <div className="caja-interior-uno">
          <div className="caja-interior-dos">
            <picture>
              <source
                srcSet="https://alskarcloud.com/imagenes/logo_cloud_negativo.svg"
                media="(prefers-color-scheme:dark)"
              />
              <a href="https://alskarcloud.com" target="_blank">
                <img
                  alt="Alskar"
                  decoding="async"
                  src="https://alskarcloud.com/imagenes/logo_cloud_positivo.svg"
                  className="imagen-caja"
                />
              </a>
            </picture>
          </div>
        </div>
      </div>
      <p className="dark:text-zinc-100">
        I founded and designed Alskar to help people get their website on the
        internet. It was born in 2009 as a small hobby and since then I have had
        1000+ clients.
      </p>
      <p className="mt-2 dark:text-zinc-100">
        In 2021, I created <strong>AlskarMail</strong> to solve email marketing
        needs, achieving thousands of emails sent.
      </p>
    </div>
  );
}
