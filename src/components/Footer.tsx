const Footer = () => {
  return (
    <div className="py-20 px-[5%] text-textgray flex justify-between space-x-72">
      <div className="space-y-6 w-1/2">
        <img src="./logo.svg" alt="" width={120} />
        <p className="w-[35rem]">
          Dekoor is a furniture company created to fulfill the needs of family with aesthetic
          feeling in their furniture. Always pay attention to details and give clear communication
          for the customers. Priority of our design is comfortability.
        </p>
        <p>©Copyright 2022 Dekoor</p>
      </div>
      <div className="w-1/2 flex justify-between">
        <ul className="space-y-5">
          <li className="text-xl text-black font-semibold">Support</li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Shipping & Return </a>
          </li>
          <li>
            <a href="">Care Guide</a>
          </li>
          <li>
            <a href="">Redeem Waranty</a>
          </li>
        </ul>
        <ul className="space-y-5">
          <li className="text-xl text-black font-semibold">Social Media</li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">TikTok</a>
          </li>
        </ul>
        <ul className="space-y-5">
          <li className="text-xl text-black font-semibold">About Us</li>
          <li>
            <a href="">Our Story</a>
          </li>
          <li>
            <a href="">Designer</a>
          </li>
          <li>
            <a href="">Craftmanship</a>
          </li>
          <li>
            <a href="">Sustainability</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
