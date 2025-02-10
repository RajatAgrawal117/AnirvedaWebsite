// Utility function to format blog content
const formatBlogContent = (content) => {
  return content
    .replace(
      /<h2>(.*?)<\/h2>/g,
      '<h2 class="text-3xl font-semibold text-gray-900 mt-8 mb-4 border-b-2 pb-2">$1</h2>'
    )
    .replace(
      /<p>(.*?)<\/p>/g,
      '<p class="text-lg text-gray-700 leading-relaxed mb-6">$1</p>'
    )
    .replace(
      /<li>(.*?)<\/li>/g,
      '<li class="text-lg text-gray-700 leading-relaxed mb-2">$1</li>'
    )
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    )
    .replace(
      /\*(.*?)\*/g,
      '<em>$1</em>'
    );
};

const blogData = [
  {
    id: 3,
    title: "The Era of Influencer Entrepreneurship: Gaurav Taneja VS Mayur Gedia",
    author: "Editorial Team",
    date: "February 9, 2025",
    excerpt:
      "Shark Tank India has become a social media sensation, sparking intense discussions about influencer-driven businesses and traditional entrepreneurship.",
    content: formatBlogContent(`
      <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mb-6">The Era of Influencer Entrepreneurship: Gaurav Taneja VS Mayur Gedia</h1>
        <h2 class="text-xl font-semibold text-center mb-4 italic">Deal Pakki or I’m Out?</h2>
        
        <p>**Shark Tank India** has evolved into more than just a business reality show—it has become a social media sensation, sparking intense discussions across social media platforms after every episode. Viewers dissect pitches and debate investment decisions, making the show a hotbed for viral conversations. Recently, the contrast between *Gaurav Taneja’s influencer-driven pitch* and *Mayur Gedia’s business approach* ignited debates online.</p>
        
        <h3 class="text-2xl font-semibold mt-6">Table of Contents</h3>
        <ul class="list-disc ml-6 mb-6">
            <li>Key Takeaways</li>
            <li>Inception of Shark Tank India</li>
            <li>The Trend of Influencer Startups</li>
            <li>Gaurav Taneja VS Mayur Gedia: A Game of Contrasts</li>
            <li>Influencers-Turned-Entrepreneurs</li>
            <li>Entrepreneurs Who Went Viral</li>
            <li>Conclusion</li>
        </ul>

        <h3 class="text-2xl font-semibold mt-6">Key Takeaways</h3>
        <ul class="list-disc ml-6 mb-6">
            <li>**How Shark Tank India is changing the landscape of Indian entrepreneurship.**</li>
            <li>*The power of social media in enhancing brand credibility and consumer engagement.*</li>
            <li>**An analytical contrast between two different business approaches.**</li>
            <li>*Examples from Shark Tank India that demonstrate being an influencer isn't a prerequisite for entrepreneurial success.*</li>
            <li>**The Importance of Product and Business Fundamentals for long-term sustainability.**</li>
        </ul>

        <h3 class="text-2xl font-semibold mt-6">Inception of Shark Tank India</h3>
        <p>Shark Tank India debuted in *December 2021* as the Indian adaptation of the globally acclaimed business reality show – Shark Tank. It has since played a pivotal role in transforming India’s **start-up ecosystem**, inspiring a new generation of founders.</p>
        
        <h3 class="text-2xl font-semibold mt-6">The Trend of Influencer Startups</h3>
        <p>The modern era has seen a **significant rise in influencer-led startups**, particularly in the D2C space. These businesses capitalize on personal brand credibility to drive sales, but many struggle with *long-term sustainability* as they overly rely on their founder’s influence rather than *true innovation*.</p>
        <p>As Anupam Mittal rightly said, *“Entrepreneurship cannot be outsourced.”*</p>
        
        <h3 class="text-2xl font-semibold mt-6">Gaurav Taneja VS Mayur Gedia: A Game of Contrasts</h3>
        <p>The pitches of **Gaurav Taneja** and **Mayur Gedia** showcased two starkly different entrepreneurial approaches:</p>
        
        <div class="overflow-x-auto">
            <table class="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-300 px-4 py-2">Aspect</th>
                        <th class="border border-gray-300 px-4 py-2">BeastLife (Gaurav Taneja)</th>
                        <th class="border border-gray-300 px-4 py-2">BL Fabrics (Mayur Gedia)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Revenue</td>
                        <td class="border border-gray-300 px-4 py-2">**₹1 Cr** within 1 hour of launch</td>
                        <td class="border border-gray-300 px-4 py-2">Projected **₹18 Cr** sales (FY24-25)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Industry</td>
                        <td class="border border-gray-300 px-4 py-2">Health & Wellness (Fitness Supplements)</td>
                        <td class="border border-gray-300 px-4 py-2">Indian Ethnic Wear</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Social Media</td>
                        <td class="border border-gray-300 px-4 py-2">YouTube: **9.28M**, Instagram: **3.6M**</td>
                        <td class="border border-gray-300 px-4 py-2">YouTube: **2.2M**, Instagram: **800K**</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Deal Outcome</td>
                        <td class="border border-gray-300 px-4 py-2">No offers</td>
                        <td class="border border-gray-300 px-4 py-2">Deal closed at **₹1 Cr** for **5% equity**</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3 class="text-2xl font-semibold mt-6">Conclusion</h3>
        <p>With millions of followers at their fingertips, **influencer entrepreneurs** have a unique advantage—*instant audience reach*. But does that always translate into real business success?</p>
        <p>Shark Tank India has become a proving ground, testing whether influencer-backed startups can thrive beyond personal influence. *Influence can open doors, but only a solid business model keeps them open.*</p>
    </div>
    `),
    image: "/images/logos/logo.webp",
  }
];

export default blogData;
