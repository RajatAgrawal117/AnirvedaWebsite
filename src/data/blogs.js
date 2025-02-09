// Utility function to format blog content
const formatBlogContent = (content) => {
  return content
    .replace(
      /<h2>(.*?)<\/h2>/g,
      '<h2 class="text-3xl font-semibold text-gray-900 mt-8 mb-4">$1</h2>'
    )
    .replace(
      /<p>(.*?)<\/p>/g,
      '<p class="text-lg text-gray-700 leading-relaxed mb-6">$1</p>'
    );
};

const blogData = [
  {
    id: 1,
    title: "The Future of Web Development",
    author: "John Doe",
    date: "January 21, 2025",
    excerpt:
      "Web development has come a long way since its inception. In this post, we explore the trends, technologies, and frameworks shaping the future of the web.",
    content: formatBlogContent(`
      <p>Web development has evolved at a rapid pace, with new frameworks and technologies emerging every day. As we move toward a more dynamic and interactive web, it's essential to stay updated on the latest trends.</p>
      <h2>The Rise of Serverless Architectures</h2>
      <p>Serverless computing enables developers to build applications without managing servers. Platforms like AWS Lambda increase productivity by eliminating infrastructure concerns.</p>
      <h2>JavaScript Frameworks: React, Vue, and Angular</h2>
      <p>JavaScript remains the backbone of web development. Frameworks like React, Vue, and Angular simplify development, making applications faster and more scalable.</p>
      <h2>WebAssembly: Transforming Web Performance</h2>
      <p>WebAssembly allows high-performance code execution in browsers, enabling applications like gaming and video editing with near-native performance.</p>
      <h2>AI and Machine Learning Integration</h2>
      <p>AI is revolutionizing web experiences with tools like TensorFlow.js, enabling features such as personalized recommendations, predictive analytics, and enhanced search.</p>
      <h2>Conclusion</h2>
      <p>The future of web development is driven by serverless computing, AI, and WebAssembly. Developers should embrace these innovations to create more efficient and engaging applications.</p>
    `),
    image: "/images/logos/logo_white.webp",
  },
  {
    id: 2,
    title: "Understanding Blockchain and Its Applications",
    author: "Jane Smith",
    date: "January 18, 2025",
    excerpt:
      "Blockchain technology is transforming industries beyond cryptocurrency. This post explores its fundamentals and real-world applications.",
    content: formatBlogContent(`
      <p>Blockchain technology is more than just the foundation of cryptocurrency. It has the potential to revolutionize industries like supply chain management, healthcare, and finance.</p>
      <h2>What is Blockchain?</h2>
      <p>Blockchain is a decentralized digital ledger that records transactions securely. Each block is immutable, ensuring transparency and security.</p>
      <h2>Blockchain in Supply Chain</h2>
      <p>Blockchain enhances transparency in supply chains, reducing fraud and ensuring ethically sourced products.</p>
      <h2>Blockchain in Healthcare</h2>
      <p>Securely storing patient records on blockchain improves privacy, reduces errors, and ensures data accessibility for authorized users.</p>
      <h2>Blockchain in Financial Services</h2>
      <p>Decentralized financial systems powered by blockchain reduce transaction costs and eliminate intermediaries like banks.</p>
      <h2>The Future of Blockchain</h2>
      <p>With industries adopting blockchain, its impact on security, transparency, and decentralization will continue to grow.</p>
      <h2>Conclusion</h2>
      <p>Blockchain is not a passing trend—it is a transformative technology reshaping industries worldwide.</p>
    `),
    image: "/images/logos/logo_white.webp",
  },
  {
    id: 3,
    title: "The Era of Influencer Entrepreneurship: Gaurav Taneja VS Mayur Gedia",
    author: "Editorial Team",
    date: "February 9, 2025",
    excerpt:
      "Shark Tank India has become a social media sensation, sparking intense discussions about influencer-driven businesses and traditional entrepreneurship.",
    content: formatBlogContent(`
      <h2>Shark Tank India: A Social Media Sensation</h2>
      <p>Shark Tank India has evolved into more than just a business reality show—it has become a social media sensation, sparking intense discussions across platforms after every episode. Viewers dissect pitches and debate investment decisions, making the show a hotbed for viral conversations.</p>
      <h2>Key Takeaways</h2>
      <ul>
        <li>How Shark Tank India is changing the landscape of Indian entrepreneurship.</li>
        <li>The increasing power of social media in entrepreneurship.</li>
        <li>Contrast between influencer-led businesses and product-focused businesses.</li>
        <li>Examples of entrepreneurs who went viral without being influencers.</li>
        <li>The importance of product and business fundamentals.</li>
      </ul>
      <h2>Gaurav Taneja VS Mayur Gedia: A Game of Contrasts</h2>
      <table class="table-auto border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border px-4 py-2">Aspect</th>
            <th class="border px-4 py-2">Gaurav Taneja (BeastLife)</th>
            <th class="border px-4 py-2">Mayur Gedia (BL Fabrics)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2">Social Media Influence</td>
            <td class="border px-4 py-2">YouTube: 9.28M, Instagram: 3.6M</td>
            <td class="border px-4 py-2">YouTube: 2.2M, Instagram: 800K</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Industry</td>
            <td class="border px-4 py-2">Fitness Supplements</td>
            <td class="border px-4 py-2">Indian Ethnic Wear</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Business Model</td>
            <td class="border px-4 py-2">Direct-to-Consumer</td>
            <td class="border px-4 py-2">Direct-to-Consumer</td>
          </tr>
        </tbody>
      </table>
      <h2>Conclusion</h2>
      <p>While influencer entrepreneurship provides instant audience reach, Shark Tank India demonstrates that long-term success requires strong fundamentals beyond social media popularity.</p>
    `),
    image: "/images/logos/logo_white.webp",
  }
];

export default blogData;
