const { getCanonicals } = require('./controllers/getCanonicalData.js');
const fs = require('fs');

async function index(buildTime = '2022-02-23T10:05:54+00:00') {
  const canonicalObject = await getCanonicals();
  let canonicalsXML = overhead + localCanonicals + '\n';

  canonicalObject.data.map((ele) => {
    canonicalsXML += `<url>
      <loc>${ele.attributes.canonical}</loc>
      <lastmod>${buildTime}</lastmod>
      <priority>1.00</priority>
    </url>\n`;
  });

  canonicalsXML += underhead;

  fs.writeFileSync('./public/sitemap.xml', canonicalsXML);
}

index();

var localCanonicals = `
<url>
<loc>https://www.gupshup.io/</loc>
<lastmod>2018-11-27T10:41:54+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://www.gupshup.io/channels/whatsapp-api/</loc>
<lastmod>2018-11-27T10:41:54+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://www.gupshup.io/channels/instagram-messenger-api/</loc>
<lastmod>2022-02-23T10:05:54+00:00</lastmod>
<priority>1.00</priority>
</url>
`;

var overhead = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->`;

var underhead = `</urlset>`;
