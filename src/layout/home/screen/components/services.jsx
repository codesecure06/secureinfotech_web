import React from "react";
// import images from "../../../../apis/images";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Website Development",
      icon: () => (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path
            d="M27.1335 0H2.4142C1.08291 0 0 1.1511 0 2.56504V20.3892C0 21.8031 1.08291 22.9543 2.4142 22.9543H10.7012V26.3931H9.39355C8.57351 26.3931 7.90901 27.0996 7.90901 27.9704C7.90901 28.8411 8.57351 29.5477 9.39355 29.5477H20.1561C20.9761 29.5477 21.6406 28.8412 21.6406 27.9704C21.6406 27.0997 20.9761 26.3931 20.1561 26.3931H18.8485V22.9543H27.1335C28.4648 22.9543 29.5477 21.8031 29.5477 20.3892V2.56504C29.5477 1.1511 28.4648 0 27.1335 0ZM23.6074 21.377C23.2352 21.377 22.9347 21.0577 22.9347 20.6634C22.9347 20.268 23.2353 19.9487 23.6074 19.9487C23.9785 19.9487 24.279 20.268 24.279 20.6634C24.279 21.0577 23.9785 21.377 23.6074 21.377ZM26.5763 21.5485C26.1153 21.5485 25.7423 21.152 25.7423 20.6634C25.7423 20.1735 26.1153 19.7771 26.5763 19.7771C27.0363 19.7771 27.4094 20.1735 27.4094 20.6634C27.4094 21.152 27.0363 21.5485 26.5763 21.5485ZM27.5684 18.8828H1.9793V2.56504C1.9793 2.31046 2.17453 2.10304 2.4142 2.10304H27.1335C27.3732 2.10304 27.5683 2.31046 27.5683 2.56504L27.5684 18.8828Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M15.8775 10.7478L16.9657 10.0475C17.058 9.98795 17.1102 9.87706 17.0985 9.76308C17.0874 9.64806 17.015 9.55153 16.9129 9.51343L11.9168 7.6651C11.8159 7.62817 11.7033 7.65493 11.6279 7.73599C11.5521 7.81612 11.5264 7.93521 11.5611 8.04302L13.3003 13.3509C13.3356 13.4597 13.4269 13.5367 13.5347 13.549C13.642 13.5603 13.7463 13.5058 13.8024 13.4074L14.461 12.2521L16.5051 14.424C16.5574 14.4794 16.6283 14.5101 16.7023 14.5101C16.7762 14.5101 16.8472 14.4793 16.8994 14.424L17.9209 13.3376C18.0297 13.2214 18.0297 13.0346 17.9209 12.9185L15.8775 10.7478Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="14.7738"
              y1="0"
              x2="14.7738"
              y2="29.5477"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="14.7742"
              y1="7.6488"
              x2="14.7742"
              y2="14.5101"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum modi. Minus debitis labore est quia culpa eum necessitatibus libero molestias vitae nostrum? Suscipit debitis aliquam tempora. Libero, consequatur totam.",
    },
    {
      id: 2,
      title: "Application Development",
      icon: () => (
        <svg width="22" height="40" viewBox="0 0 32 50" fill="none">
          <path
            d="M30.3595 1.39979V1.39463C29.472 0.502454 28.2656 0.000516529 27.0072 0H4.98759C2.37227 0.00852273 0.254372 2.12642 0.24585 4.74174V45.2531C0.246366 46.5115 0.748304 47.7178 1.64048 48.6054C2.52671 49.4963 3.731 49.9981 4.98759 50H27.0124C28.269 49.9981 29.4732 49.4963 30.3595 48.6054C31.2504 47.7191 31.7522 46.5149 31.7541 45.2583V4.7469C31.7522 3.49031 31.2504 2.28603 30.3595 1.39979ZM16 46.782C15.2925 46.782 14.719 46.2085 14.719 45.501C14.719 44.7935 15.2925 44.22 16 44.22C16.7075 44.22 17.281 44.7935 17.281 45.501C17.281 46.2085 16.7075 46.782 16 46.782ZM27.9886 38.7397C27.9886 40.4513 26.6011 41.8388 24.8894 41.8388H7.10535C5.39371 41.8388 4.00618 40.4513 4.00618 38.7397V8.54855C4.00618 6.83691 5.39371 5.44938 7.10535 5.44938H24.8946C26.6063 5.44938 27.9938 6.83691 27.9938 8.54855L27.9886 38.7397Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="16"
              y1="0"
              x2="16"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00CFFF" />
              <stop offset="1" stopColor="#005CFF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum modi. Minus debitis labore est quia culpa eum necessitatibus libero molestias vitae nostrum? Suscipit debitis aliquam tempora. Libero, consequatur totam.",
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: () => (
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none">
          <path
            d="M48.7674 16.5802C49.3202 16.125 49.463 15.337 49.105 14.7168L45.4251 8.34332C45.0671 7.7231 44.3131 7.45289 43.6426 7.70396L42.3896 8.17339L47.7344 17.4305L48.7674 16.5802Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M28.6679 34.869C26.0387 35.693 23.3913 36.762 20.9844 38.1508L19.7108 38.886L25.1688 48.3396C25.4401 48.8096 25.9325 49.0723 26.4387 49.0722C26.6873 49.0722 26.9391 49.009 27.1698 48.8758L33.0899 45.4578C33.4263 45.2635 33.6718 44.9436 33.7724 44.5683C33.8729 44.193 33.8203 43.7932 33.626 43.4568L28.6679 34.869Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M6.25433 27.1424C5.46361 27.5989 4.89808 28.3359 4.66175 29.2178C4.55931 29.6 4.52435 29.9895 4.55443 30.3727L0.74349 32.5304C0.403646 32.7229 0.154622 33.0431 0.0518881 33.4201C-0.0508463 33.797 0.00139983 34.1993 0.196615 34.5376L3.64622 40.5124C3.91732 40.9821 4.4096 41.2451 4.91615 41.2451C5.16068 41.2451 5.40863 41.1838 5.63656 41.0548L9.3804 38.9351C9.99281 39.4297 10.757 39.6972 11.5357 39.6972C12.1152 39.6972 12.702 39.5499 13.2388 39.2399L16.9775 37.0815L9.99261 24.9843L6.25433 27.1424Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M49.8037 26.8737L35.2461 1.65996C34.9851 1.20791 34.5033 0.929004 33.9812 0.927734H33.9775C33.4569 0.927734 32.9752 1.2042 32.7125 1.65391C32.6225 1.80801 23.5829 17.138 12.5295 23.5194L19.5143 35.6166C25.6813 32.0562 33.2098 30.4656 38.4396 29.7583C44.1448 28.9865 48.4346 29.0692 48.5015 29.0707C49.0294 29.0832 49.5253 28.8085 49.7952 28.3531C50.0651 27.8978 50.0683 27.3322 49.8037 26.8737Z"
            fill="url(#paint3_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="45.8455"
              y1="7.61072"
              x2="45.8455"
              y2="17.4305"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="26.7666"
              y1="34.869"
              x2="26.7666"
              y2="49.0722"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="8.48892"
              y1="24.9843"
              x2="8.48892"
              y2="41.2451"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="31.2647"
              y1="0.927734"
              x2="31.2647"
              y2="35.6166"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum modi. Minus debitis labore est quia culpa eum necessitatibus libero molestias vitae nostrum? Suscipit debitis aliquam tempora. Libero, consequatur totam.",
    },
    {
      id: 4,
      title: "E-Commerce Development",
      icon: () => (
        <svg width="27" height="30" viewBox="0 0 47 50" fill="none">
          <path
            d="M41.5504 27.5152L46.8944 14.1105C47.2972 13.1 46.4976 12.0215 45.3446 12.0215H11.4331L10.0876 2.76758C9.99448 2.12674 9.48545 1.6077 8.81121 1.46597L2.01687 0.0378285C1.12554 -0.149082 0.240726 0.37479 0.0405855 1.20883C-0.159659 2.04296 0.400549 2.87109 1.29188 3.05839L6.96467 4.25077L10.7777 30.5121C10.8904 31.3627 11.7216 31.9671 12.6319 31.8567L31.3748 29.5819L37.6726 33.2352C38.9946 34.002 38.4157 35.9042 36.8604 35.9042H12.6332C11.7198 35.9042 10.9792 36.5972 10.9792 37.4521C10.9792 38.307 11.7198 39 12.6332 39H36.8603C41.7296 39 43.5638 33.0102 39.4154 30.6038L36.5673 28.9517L40.2134 28.5092C40.8216 28.4355 41.3361 28.053 41.5504 27.5152Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M15.1183 41.2244C12.6989 41.2244 10.7305 43.1928 10.7305 45.6122C10.7305 48.0316 12.6989 50 15.1183 50C17.5378 50 19.5061 48.0316 19.5061 45.6122C19.5061 43.1928 17.5378 41.2244 15.1183 41.2244Z"
            fill="#4242DF"
          />
          <path
            d="M30.2234 41C27.804 41 25.8356 42.9684 25.8356 45.3878C25.8356 47.8072 27.804 49.7756 30.2234 49.7756C32.6429 49.7756 34.6112 47.8072 34.6112 45.3878C34.6112 42.9684 32.6429 41 30.2234 41Z"
            fill="#4242DF"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="23.5"
              y1="0"
              x2="23.5"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum modi. Minus debitis labore est quia culpa eum necessitatibus libero molestias vitae nostrum? Suscipit debitis aliquam tempora. Libero, consequatur totam.",
    },
    {
      id: 5,
      title: "Software Development",
      icon: () => (
        <svg width="40" height="29" viewBox="0 0 50 39" fill="none">
          <path
            d="M49.6907 18.2684L36.9298 5.50757C36.533 5.11076 35.8309 5.11076 35.4341 5.50757L32.6676 8.27412C32.2544 8.68733 32.2544 9.35714 32.6676 9.77036L41.9143 19.016L32.6681 28.2632C32.2549 28.6765 32.2549 29.3463 32.6681 29.7595L35.4347 32.526C35.6331 32.7244 35.9024 32.8366 36.1828 32.8366C36.4627 32.8366 36.7325 32.7244 36.9309 32.526L49.6907 19.7657C50.1039 19.352 50.1039 18.6816 49.6907 18.2684Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M17.3325 28.2624L8.08736 19.0162L17.3341 9.77058C17.5325 9.57217 17.6441 9.3034 17.6441 9.02246C17.6441 8.74205 17.533 8.47275 17.3341 8.27434L14.5675 5.50779C14.3691 5.30939 14.0998 5.19775 13.8194 5.19775C13.539 5.19775 13.2697 5.30939 13.0713 5.50779L0.309907 18.2676C-0.103303 18.6808 -0.103303 19.3506 0.309907 19.7643L13.0707 32.5246C13.2691 32.723 13.5384 32.8352 13.8189 32.8352C14.0993 32.8352 14.3686 32.723 14.567 32.5246L17.3335 29.7581C17.7467 29.3454 17.7467 28.6756 17.3325 28.2624Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M32.2571 1.21465C32.1227 0.968096 31.8962 0.785035 31.6275 0.705673L29.3847 0.0437966C28.8249 -0.122334 28.2355 0.198817 28.0705 0.75911L17.6587 36.0185C17.5794 36.2878 17.6101 36.5772 17.7439 36.8232C17.8778 37.0703 18.1047 37.2528 18.3735 37.3327L20.6163 37.9946C20.7163 38.0242 20.8173 38.0385 20.9163 38.0385C21.3729 38.0385 21.7945 37.7401 21.9305 37.2793L32.3422 2.01937C32.4216 1.75007 32.3914 1.46067 32.2571 1.21465Z"
            fill="url(#paint2_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="41.1791"
              y1="5.20996"
              x2="41.1791"
              y2="32.8366"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="8.82205"
              y1="5.19775"
              x2="8.82205"
              y2="32.8352"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="25.0006"
              y1="0"
              x2="25.0006"
              y2="38.0385"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum modi. Minus debitis labore est quia culpa eum necessitatibus libero molestias vitae nostrum? Suscipit debitis aliquam tempora. Libero, consequatur totam.",
    },
    {
      id: 6,
      title: "Game Development",
      icon: () => (
        <svg width="34" height="40" viewBox="0 0 44 50" fill="none">
          <path
            d="M32.2539 29.4922H35.1836V32.4219H32.2539V29.4922Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M10.2812 32.4219C11.0903 32.4219 11.7461 31.766 11.7461 30.957C11.7461 30.148 11.0903 29.4922 10.2812 29.4922C9.47224 29.4922 8.81641 30.148 8.81641 30.957C8.81641 31.766 9.47224 32.4219 10.2812 32.4219Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M33.7188 20.7031C31.0309 20.7031 28.4516 21.7631 26.5419 23.6328H23.4648V17.8711H20.5352V23.6328H17.4581C15.5483 21.7631 12.9691 20.7031 10.2812 20.7031C4.62783 20.7031 0.0273438 25.3036 0.0273438 30.957C0.0273438 31.8268 0.1375 32.6908 0.353516 33.5276L3.19023 44.5068C4.02422 47.7412 6.93955 50 10.2812 50C13.6229 50 16.5397 47.7412 17.3723 44.5068L18.9816 38.2812H25.0184L26.6263 44.5068C27.4603 47.7412 30.3771 50 33.7188 50C37.0604 50 39.9772 47.7412 40.8098 44.5068L43.6479 33.5276C43.8625 32.6908 43.9727 31.8268 43.9727 30.957C43.9727 25.3036 39.3722 20.7031 33.7188 20.7031ZM10.2812 35.3516C7.85801 35.3516 5.88672 33.3803 5.88672 30.957C5.88672 28.5338 7.85801 26.5625 10.2812 26.5625C12.7045 26.5625 14.6758 28.5338 14.6758 30.957C14.6758 33.3803 12.7045 35.3516 10.2812 35.3516ZM38.1133 32.4219H35.1836V35.3516H32.2539V32.4219H29.3242V29.4922H32.2539V26.5625H35.1836V29.4922H38.1133V32.4219Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M28.895 11.5825L32.8604 7.61719L28.895 3.65186L26.8237 5.72314L28.7177 7.61719L26.8237 9.51123L28.895 11.5825Z"
            fill="url(#paint3_linear)"
          />
          <path
            d="M17.1762 9.51123L15.2823 7.61719L17.1762 5.72314L15.105 3.65186L11.1395 7.61719L15.105 11.5825L17.1762 9.51123Z"
            fill="url(#paint4_linear)"
          />
          <path
            d="M19.0945 14.6436L22.0235 -0.016358L24.8973 0.557822L21.9683 15.2177L19.0945 14.6436Z"
            fill="url(#paint5_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="33.7188"
              y1="29.4922"
              x2="33.7188"
              y2="32.4219"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00afff" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="10.2812"
              y1="29.4922"
              x2="10.2812"
              y2="32.4219"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="22"
              y1="17.8711"
              x2="22"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="29.8421"
              y1="3.65186"
              x2="29.8421"
              y2="11.5825"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="14.1579"
              y1="3.65186"
              x2="14.1579"
              y2="11.5825"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="20.559"
              y1="7.3136"
              x2="23.4328"
              y2="7.88778"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D5FF" />
              <stop offset="1" stopColor="#0053FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum modi. Minus debitis labore est quia culpa eum necessitatibus libero molestias vitae nostrum? Suscipit debitis aliquam tempora. Libero, consequatur totam.",
    },
  ];

  return (
    <div className="our-service-main" id="serives">
      {/* <div className="our-service-bg-compoA"></div>
      <div className="our-service-bg-compoB"></div> */}
      <div className="container pt-5">
        <div className="content-title">Our Services</div>
        <div className="content-tagline px-md-5 my-4 d-flex flex-column align-items-center">
          <div className="col-md-8">
            We develop website, application, software and games and provide all
            other services related to these. We provide all the benefits
            associated with digital marketing and E-commerce development.
          </div>
        </div>
        <div className="row px-md-5">
          {data.map((item, i) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-12 px-md-4 pt-5 mt-5"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}
                key={i}
              >
                <div className="our-service-item-main">
                  <div className="our-service-item-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="our-service-item px-md-4 px-4 pb-4">
                    <div className="our-service-images">
                      <div>
                        <div>{item.icon()}</div>
                        <div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                      <div>
                        <span>0{item.id}</span>
                      </div>
                    </div>

                    <div className="our-service-title">
                      <span>{item.title}</span>
                    </div>

                    <p className="our-service-details mt-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
