import React from "react"

const Strengths = () => {
  const card = "mx-auto  text-center  py-8 "
  const iconDiv = "mx-auto w-14 "
  const p = "h3_strengths mt-3 lg:mt-5 lg:whitespace-nowrap"
  const medalAnimation  = "transform hover:rotate-45 ease-linear	duration-75 "
  
  return (
    <section className="strengths"id="strengths">
      <h2 className="h2 text-center  pt-14 lg:pt-20  pb-8 lg:mb-14">Our Strengths</h2>
      <div className="grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-5 max-w-1240 mx-auto">
        <div className={`rocket lg:row-start-1  lg:col-start-1 ${card}`}>
          <div className={` rocket ${iconDiv}`}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <path
              id="sub"
                className="hover:opacity-0"
                d="M7.6538 59.7639C6.6538 59.7639 5.8538 59.674 5.6538 59.674L4.75381 59.574V58.7639C4.65381 57.9639 4.2538 51.174 6.6538 48.864C7.24475 48.273 7.94629 47.8043 8.71841 47.4844C9.49052 47.1646 10.3181 47 11.1538 47C11.9895 47 12.8171 47.1646 13.5892 47.4844C14.3613 47.8043 15.0629 48.273 15.6538 48.864C16.2447 49.4549 16.7135 50.1565 17.0333 50.9286C17.3531 51.7007 17.5178 52.5282 17.5178 53.364C17.5178 54.1997 17.3531 55.0272 17.0333 55.7993C16.7135 56.5715 16.2447 57.273 15.6538 57.864C13.9538 59.434 10.0538 59.7639 7.6538 59.7639Z"
                fill="#31FFC1"
              />
              <path
              id="main"
                className="hover:opacity-0"
                d="M37.2965 34.26C40.4059 34.26 42.9265 31.7394 42.9265 28.63C42.9265 25.5206 40.4059 23 37.2965 23C34.1871 23 31.6665 25.5206 31.6665 28.63C31.6665 31.7394 34.1871 34.26 37.2965 34.26Z"
                fill="#31FFC1"
              />
              <path
               id="sub"
                d="M10.6463 46.3799C9.74764 46.3785 8.85752 46.5544 8.02697 46.8976C7.19643 47.2408 6.44178 47.7445 5.80627 48.3799C3.04627 51.0199 3.74627 58.6299 3.74627 58.6399V59.8899L5.1463 60.0399H5.4563C5.8263 60.0399 6.4563 60.1199 7.1463 60.1199C9.4563 60.1199 13.6063 59.8599 15.5063 58.1199C16.4631 57.1572 17.1138 55.9331 17.3765 54.6015C17.6392 53.2699 17.5021 51.8903 16.9826 50.6364C16.4631 49.3825 15.5843 48.3103 14.4568 47.5547C13.3293 46.799 12.0036 46.3938 10.6463 46.3899V46.3799ZM14.4463 53.2499C14.4464 53.7568 14.3467 54.2589 14.1528 54.7273C13.9589 55.1957 13.6747 55.6213 13.3163 55.9799C12.3763 56.8399 9.31629 57.2199 6.63629 57.1699C6.58629 54.4699 6.95627 51.3499 7.80627 50.5099C8.35152 49.9715 9.0433 49.6057 9.79519 49.4581C10.5471 49.3105 11.3258 49.3877 12.0341 49.6799C12.7424 49.9722 13.3489 50.4667 13.7779 51.1016C14.2069 51.7365 14.4394 52.4837 14.4463 53.2499Z"
                fill="#006EFF"
              />
              <path
               id="main"
                d="M31.6966 22.4004C31.0601 23.0365 30.5552 23.7918 30.2107 24.6231C29.8662 25.4545 29.689 26.3455 29.689 27.2454C29.689 28.1452 29.8662 29.0363 30.2107 29.8676C30.5552 30.6989 31.0601 31.4542 31.6966 32.0904C32.321 32.7501 33.075 33.2737 33.9113 33.6282C34.7477 33.9827 35.6483 34.1605 36.5566 34.1504C37.4592 34.1589 38.3545 33.9863 39.1892 33.6428C40.024 33.2993 40.7814 32.7918 41.4166 32.1504C42.0903 31.5211 42.6305 30.7626 43.0049 29.9202C43.3794 29.0778 43.5805 28.1686 43.5962 27.2469C43.6119 26.3251 43.442 25.4096 43.0964 24.5549C42.7509 23.7002 42.2369 22.9238 41.585 22.2719C40.9331 21.6201 40.1567 21.106 39.302 20.7605C38.4473 20.415 37.5318 20.245 36.6101 20.2608C35.6883 20.2765 34.7792 20.4776 33.9367 20.852C33.0943 21.2265 32.3359 21.7666 31.7066 22.4404L31.6966 22.4004ZM39.2966 30.1004C38.7538 30.6426 38.0624 31.0117 37.3099 31.1611C36.5574 31.3105 35.7774 31.2334 35.0687 30.9396C34.36 30.6458 33.7542 30.1485 33.3281 29.5106C32.9019 28.8726 32.6744 28.1226 32.6744 27.3554C32.6744 26.5881 32.9019 25.8381 33.3281 25.2002C33.7542 24.5622 34.36 24.0649 35.0687 23.7711C35.7774 23.4773 36.5574 23.4002 37.3099 23.5496C38.0624 23.699 38.7538 24.0681 39.2966 24.6104C39.6573 24.9707 39.9435 25.3986 40.1387 25.8696C40.3339 26.3406 40.4344 26.8455 40.4344 27.3554C40.4344 27.8652 40.3339 28.3701 40.1387 28.8411C39.9435 29.3121 39.6573 29.74 39.2966 30.1004Z"
                fill="#006EFF"
              />
              <path
               id="main"
                d="M62.6467 1L61.0167 1.15001C51.2734 1.58569 41.8093 4.53828 33.5467 9.72C29.3904 8.0544 24.8358 7.64889 20.4507 8.55402C16.0655 9.45914 12.0438 11.6349 8.88666 14.81C7.56535 16.2083 6.4017 17.7475 5.41666 19.4L4.82666 20.4L13.9867 29.56C12.6629 31.6851 11.49 33.9006 10.4767 36.19L10.8967 36.47L10.4167 36.32L10.1167 37.21L26.6767 53.77L27.6767 53.35C29.9555 52.3494 32.1494 51.1655 34.2367 49.81L43.4567 59.02L44.3567 58.42C46.0616 57.4928 47.6187 56.3165 48.9767 54.93C52.1744 51.7747 54.3655 47.7427 55.2732 43.343C56.1809 38.9432 55.7646 34.3732 54.0767 30.21C59.2538 21.9554 62.2285 12.5115 62.7166 2.78L62.6467 1ZM8.59665 20C9.30546 18.9276 10.1123 17.9233 11.0067 17C13.5002 14.4865 16.6184 12.6826 20.0404 11.774C23.4624 10.8653 27.0646 10.8847 30.4767 11.83C24.7163 16.0317 19.7117 21.1817 15.6767 27.06L8.59665 20ZM46.7967 52.81C45.8847 53.7171 44.8791 54.525 43.7967 55.22L36.6866 48.11C42.5413 44.0486 47.6784 39.04 51.8867 33.29C52.8614 36.7 52.9033 40.309 52.008 43.7406C51.1127 47.1723 49.313 50.3008 46.7967 52.8V52.81ZM27.3567 50.19L13.6467 36.48C15.8567 31.86 23.5967 17.84 39.6467 9.81L54.0067 24.17C45.6867 40.57 30.9967 48.4 27.3567 50.19ZM55.3066 21.19L42.4767 8.42C47.8833 6.13504 53.6243 4.74035 59.4767 4.29001C58.9959 10.1095 57.5882 15.8148 55.3066 21.19Z"
                fill="#006EFF"
              />
            </svg>
          </div>
          <p className={p}>
            {" "}
            Leveraging Delivery Hero’s <br />  unique ecosystem
          </p>
          
        </div>
        <div className={`globe  lg:row-start-1  lg:col-start-3 ${card}`}>
          <div className={` transform hover:rotate-45 ease-linear	duration-75	 ${iconDiv}`}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1334_18115)">
                <path
                  d="M36.9947 52.9269C35.9964 52.9463 35.0203 52.6317 34.2213 52.033C31.4988 50.0012 31.6105 48.1015 31.7731 45.2571C32.0377 41.664 31.8122 38.0516 31.1026 34.5193C30.9273 33.5398 30.9771 32.5333 31.2481 31.5759C31.5192 30.6185 32.0044 29.7352 32.667 28.993C33.8233 27.7204 35.2356 26.7067 36.8114 26.0187C38.3871 25.3306 40.0906 24.9836 41.8099 25.0006C47.6512 25.0006 52.4563 29.1758 52.5274 34.3161C52.6188 40.8076 46.2696 49.0869 40.7534 51.8908C39.5988 52.5254 38.3114 52.8803 36.9947 52.9269Z"
                  fill="#31FFC1"
                />
                <path
                  d="M12.2313 55.6088L11.2154 53.8716C12.5465 53.1527 13.6856 52.125 14.5373 50.8748C15.99 48.4367 17.1786 44.7288 14.5373 40.8786C13.8584 39.9397 13.1257 39.0409 12.343 38.1866C10.5348 36.0939 8.82812 34.1231 8.82812 32.0913C8.82812 29.5923 11.6319 28.231 14.5881 26.7783C16.7519 25.7624 18.9869 24.6348 20.1246 23.1618C22.2681 20.3885 20.338 14.4456 19.2002 12.5561C18.1453 10.9949 16.7576 9.6869 15.1367 8.72624L13.9786 7.90338L15.1875 6.26781C15.5532 6.5421 15.9291 6.79606 16.305 7.06019C18.1613 8.17969 19.744 9.69992 20.9373 11.5097C22.1361 13.5415 24.6656 20.6526 21.7195 24.4012C20.2872 26.25 17.8389 27.4488 15.4719 28.6069C13.105 29.765 10.8497 30.8723 10.8497 32.0913C10.8497 33.3104 12.3837 35.1999 13.8973 36.9065C14.7352 37.8358 15.5187 38.8127 16.244 39.8323C18.743 43.53 18.7532 47.8475 16.244 52.0227C15.213 53.5223 13.8368 54.7522 12.2313 55.6088ZM42.7684 19.9008C42.3272 19.9015 41.8873 19.8504 41.458 19.7485C38.4103 18.9866 37.5672 16.8431 36.724 14.7808C36.3234 13.7166 35.8162 12.6955 35.2104 11.7332C34.347 10.6992 33.317 9.81684 32.1627 9.12244C30.2123 7.76117 28.1907 6.3491 28.1907 4.28688C28.1811 3.254 28.3319 2.2259 28.6376 1.23926L30.5678 1.85893C30.3244 2.65173 30.2079 3.478 30.2224 4.30718C30.2224 5.32306 31.8681 6.46083 33.27 7.4767C34.6403 8.30496 35.8485 9.37552 36.8357 10.6361C37.5166 11.7163 38.0851 12.8635 38.5323 14.0596C39.3348 16.0202 39.8732 17.3205 41.8846 17.8285C43.8961 18.3364 47.2484 16.6196 51.0275 14.598C52.4395 13.8462 53.9126 13.064 55.4669 12.3224L56.3405 14.151C54.8269 14.8824 53.3742 15.6443 51.9824 16.3859C48.5284 18.2653 45.3894 19.9008 42.7684 19.9008Z"
                  fill="#006EFF"
                />
                <path
                  d="M12.0582 56.3099L10.4836 53.6991L10.9205 53.435C12.1815 52.7597 13.2616 51.7911 14.0697 50.6108C15.4512 48.3048 16.5687 44.7899 14.1205 41.1632C13.4682 40.2515 12.7662 39.3766 12.0176 38.5423L11.9465 38.461C10.0773 36.3073 8.31982 34.2654 8.31982 32C8.31982 29.1962 11.2252 27.774 14.3033 26.2604C16.4874 25.1937 18.6614 24.1372 19.7179 22.7556C21.7497 20.1956 19.8195 14.4762 18.763 12.7289C17.7759 11.2568 16.4749 10.0217 14.9535 9.11243L14.4659 8.76704L13.7141 8.21845L13.3078 7.92384L15.1262 5.46545L15.5325 5.7702C15.7865 5.96321 16.0506 6.14609 16.3147 6.32895L16.6398 6.55241C18.5534 7.71272 20.1844 9.28479 21.4144 11.1543C22.7147 13.3385 25.3052 20.5715 22.156 24.6248C20.6525 26.5651 18.1535 27.7842 15.7357 28.9727C14.0087 29.8159 11.3979 31.0857 11.3979 32.0204C11.3979 33.1784 12.9319 34.9461 14.2932 36.5004L14.4354 36.6731C15.238 37.5603 15.9844 38.4967 16.6703 39.4769C19.2913 43.3473 19.3014 47.8578 16.6703 52.1956C15.6038 53.8084 14.1602 55.1369 12.4646 56.0661L12.0582 56.3099ZM11.8754 54.0343L12.4036 54.908C13.7797 54.0979 14.9511 52.9821 15.8271 51.647C18.1941 47.675 18.1941 43.52 15.8271 40.0254C15.1597 39.0828 14.4372 38.1805 13.6633 37.3232L13.5109 37.1505C11.9668 35.3727 10.3719 33.534 10.3719 32C10.3719 30.4661 12.8709 29.2369 15.2786 28.0585C17.6862 26.88 19.9922 25.7524 21.3738 23.995C24.0049 20.6121 21.8919 13.9073 20.5611 11.6826C19.415 9.94608 17.8946 8.48819 16.1116 7.41591L15.756 7.16194L15.3598 6.88766L14.7503 7.70035L15.0957 7.94418L15.5833 8.28957C17.2091 9.27844 18.5965 10.6139 19.6468 12.2007C20.876 14.2324 22.8773 20.3277 20.5408 23.3753C19.3319 24.9296 17.0462 26.047 14.8417 27.1238C11.977 28.5257 9.34585 29.8261 9.34585 31.9899C9.34585 33.8794 10.9916 35.7791 12.7287 37.7905L12.4138 38.207L12.7998 37.8718C13.5734 38.7356 14.2992 39.641 14.9738 40.5842C17.7268 44.6476 16.4773 48.5588 14.9738 51.1289C14.1782 52.3228 13.1179 53.3171 11.8754 54.0343ZM42.7681 20.4394C42.2862 20.4367 41.806 20.3822 41.3357 20.2769C38.0646 19.4438 37.0995 17.087 36.2563 15.0045C35.8695 13.9576 35.3759 12.9534 34.7833 12.0077C33.9514 11.0364 32.9708 10.2032 31.8779 9.53908C29.8462 8.09654 27.6925 6.61338 27.6925 4.28703C27.6835 3.19606 27.8411 2.1101 28.1598 1.0667L28.3224 0.579102L31.2176 1.51369L31.0652 2.00132C30.8362 2.74113 30.7265 3.5127 30.7401 4.28703C30.7401 5.02862 32.4773 6.2375 33.6252 7.04004C35.0494 7.90515 36.3027 9.02421 37.323 10.3416C38.0097 11.4376 38.5881 12.5978 39.05 13.8058C39.8322 15.7359 40.2995 16.8534 42.0976 17.3207C43.8957 17.788 47.3497 16.0204 50.9052 14.1308C52.2462 13.4096 53.77 12.607 55.3548 11.8451L55.822 11.6216L57.1325 14.3645L56.6754 14.588C55.1414 15.3296 53.6786 16.0915 52.3274 16.8127C48.8328 18.6819 45.5516 20.4394 42.7681 20.4394ZM28.9522 1.85908C28.756 2.65328 28.6605 3.469 28.6678 4.28703C28.6678 6.08513 30.5776 7.41593 32.4265 8.70609C33.6273 9.43894 34.6983 10.3658 35.596 11.4489C36.2206 12.4498 36.7414 13.5118 37.1503 14.6184C37.9833 16.6502 38.7757 18.5905 41.5389 19.2915C44.302 19.9924 47.8881 18.0115 51.7789 15.9188C53.0081 15.2686 54.3186 14.5778 55.7103 13.887L55.2735 12.9727C53.8614 13.6534 52.5103 14.3746 51.3014 15.0045C47.4208 17.0362 44.0582 18.8546 41.7827 18.2756C39.5071 17.6965 38.8773 16.1626 38.0849 14.2121C37.6509 13.0466 37.096 11.9298 36.429 10.88C35.489 9.68746 34.3434 8.67257 33.0462 7.88323C31.37 6.71498 29.6836 5.53654 29.6836 4.26669C29.6781 3.55561 29.7565 2.84638 29.9173 2.15369L28.9522 1.85908Z"
                  fill="#006EFF"
                />
                <path
                  d="M31.9999 63.492C25.7713 63.492 19.6827 61.645 14.5038 58.1846C9.32499 54.7242 5.28858 49.8058 2.90502 44.0514C0.521456 38.297 -0.10219 31.965 1.11294 25.8561C2.32807 19.7472 5.32739 14.1359 9.73164 9.73164C14.1359 5.32739 19.7472 2.32806 25.8561 1.11293C31.965 -0.102196 38.297 0.521473 44.0514 2.90503C49.8058 5.28859 54.7242 9.32499 58.1846 14.5038C61.645 19.6827 63.492 25.7714 63.492 31.9999C63.492 36.1355 62.6774 40.2306 61.0948 44.0514C59.5121 47.8722 57.1924 51.3438 54.2681 54.2682C51.3438 57.1925 47.8722 59.5121 44.0514 61.0948C40.2306 62.6774 36.1355 63.492 31.9999 63.492ZM31.9999 2.53958C26.1732 2.53958 20.4773 4.26741 15.6326 7.50455C10.7879 10.7417 7.01189 15.3428 4.78211 20.7259C2.55233 26.1091 1.96891 32.0326 3.10564 37.7473C4.24238 43.4621 7.0482 48.7114 11.1683 52.8315C15.2884 56.9516 20.5377 59.7574 26.2525 60.8941C31.9672 62.0309 37.8907 61.4475 43.2739 59.2177C48.657 56.9879 53.2581 53.2119 56.4953 48.3672C59.7324 43.5225 61.4602 37.8266 61.4602 31.9999C61.4602 24.1865 58.3564 16.6932 52.8315 11.1683C47.3066 5.64342 39.8132 2.53958 31.9999 2.53958Z"
                  fill="#006EFF"
                />
                <path
                  d="M32 64C25.671 64 19.4841 62.1232 14.2218 58.607C8.95939 55.0908 4.85788 50.0931 2.43587 44.2459C0.0138671 38.3987 -0.619842 31.9645 0.614885 25.7571C1.84961 19.5497 4.89732 13.8479 9.3726 9.3726C13.8479 4.89732 19.5497 1.84961 25.7571 0.614883C31.9645 -0.619844 38.3986 0.0138729 44.2459 2.43588C50.0931 4.85788 55.0908 8.9594 58.607 14.2218C62.1233 19.4842 64 25.671 64 32C63.9919 40.4845 60.6179 48.6191 54.6185 54.6185C48.6191 60.6179 40.4845 63.992 32 64ZM32 1.01589C25.8719 1.01589 19.8815 2.83307 14.7862 6.23765C9.69084 9.64223 5.71952 14.4813 3.37441 20.1429C1.02929 25.8045 0.415712 32.0344 1.61124 38.0447C2.80677 44.0551 5.75772 49.5759 10.0909 53.9091C14.4241 58.2423 19.945 61.1933 25.9553 62.3888C31.9656 63.5843 38.1955 62.9707 43.8571 60.6256C49.5187 58.2805 54.3578 54.3092 57.7624 49.2139C61.1669 44.1186 62.9841 38.1281 62.9841 32C62.9761 23.785 59.7091 15.9088 53.9002 10.0998C48.0913 4.29094 40.215 1.02396 32 1.01589ZM32 61.9683C26.0729 61.9683 20.2788 60.2107 15.3505 56.9177C10.4223 53.6248 6.58118 48.9444 4.31296 43.4684C2.04473 37.9924 1.45126 31.9668 2.60759 26.1535C3.76392 20.3402 6.61812 15.0004 10.8093 10.8093C15.0004 6.61813 20.3402 3.76393 26.1535 2.6076C31.9668 1.45127 37.9924 2.04473 43.4684 4.31295C48.9444 6.58118 53.6247 10.4223 56.9177 15.3506C60.2107 20.2788 61.9683 26.0729 61.9683 32C61.9602 39.9456 58.8002 47.5635 53.1819 53.1819C47.5635 58.8002 39.9456 61.9602 32 61.9683ZM32 3.04764C26.2738 3.04764 20.6761 4.74565 15.9149 7.92698C11.1537 11.1083 7.44284 15.6301 5.2515 20.9204C3.06017 26.2108 2.48681 32.0321 3.60395 37.6483C4.72108 43.2645 7.47853 48.4234 11.5276 52.4724C15.5767 56.5215 20.7355 59.2789 26.3517 60.3961C31.9679 61.5132 37.7893 60.9399 43.0796 58.7485C48.37 56.5572 52.8917 52.8463 56.073 48.0851C59.2544 43.3239 60.9524 37.7263 60.9524 32C60.9416 24.3247 57.8879 16.9668 52.4606 11.5395C47.0333 6.11216 39.6754 3.05839 32 3.04764Z"
                  fill="#006EFF"
                />
                <path
                  d="M36.9268 53.0998C35.9286 53.1192 34.9525 52.8045 34.1535 52.2058C31.4309 50.1741 31.5427 48.2744 31.7052 45.43C31.9698 41.8369 31.7443 38.2244 31.0347 34.6922C30.8595 33.7127 30.9092 32.7062 31.1803 31.7487C31.4513 30.7913 31.9365 29.9081 32.5992 29.1658C33.7554 27.8932 35.1677 26.8796 36.7435 26.1915C38.3192 25.5034 40.0227 25.1565 41.742 25.1734C47.5833 25.1734 52.3884 29.3487 52.4595 34.489C52.5509 40.9804 46.2017 49.2598 40.6855 52.0636C39.5309 52.6983 38.2435 53.0532 36.9268 53.0998ZM41.7319 27.2052C40.3133 27.1886 38.907 27.4692 37.6035 28.0291C36.3 28.589 35.1282 29.4157 34.1636 30.456C33.7003 30.973 33.3586 31.5871 33.1635 32.2533C32.9684 32.9195 32.9248 33.6209 33.036 34.3061C33.7754 38.0026 34.0112 41.782 33.7369 45.5417C33.5744 48.3353 33.5236 49.1785 35.3827 50.6211C36.622 51.5557 38.4303 50.9563 39.7611 50.2858C44.6474 47.8071 50.4989 40.2388 50.4176 34.5601C50.3668 30.4865 46.4658 27.2052 41.7319 27.2052Z"
                  fill="#006EFF"
                />
                <path
                  d="M36.9268 53.6075C35.8267 53.6143 34.7552 53.2571 33.8792 52.5917C30.9433 50.377 31.0652 48.2844 31.2277 45.3891C31.4925 41.8336 31.2703 38.2585 30.5674 34.7631C30.3776 33.7103 30.4299 32.628 30.7203 31.5984C31.0107 30.5687 31.5316 29.6187 32.2436 28.8202C33.4455 27.4917 34.9152 26.4328 36.5558 25.7132C38.1964 24.9935 39.9709 24.6295 41.7623 24.645C47.8576 24.645 52.9369 29.0437 52.9369 34.4583C53.0284 41.1224 46.5369 49.6253 40.8887 52.5002C39.6704 53.1682 38.3148 53.547 36.9268 53.6075ZM41.7319 25.6812C40.0893 25.6639 38.4616 25.9944 36.9559 26.6509C35.4502 27.3075 34.1004 28.2753 32.9954 29.4907C32.3859 30.1733 31.9379 30.9843 31.6847 31.8636C31.4314 32.7429 31.3794 33.6679 31.5325 34.5701C32.2495 38.1391 32.4784 41.7889 32.2131 45.4196C32.0506 48.2132 31.9592 49.8793 34.4582 51.7688C35.9211 52.8761 37.9731 52.7847 40.4519 51.5758C45.836 48.8431 52.0328 40.7669 51.9414 34.4685C51.8703 29.6329 47.2989 25.6812 41.7319 25.6812ZM36.9369 51.5656C36.2706 51.5811 35.6176 51.3777 35.0779 50.9866C33.0462 49.4221 33.0462 48.3555 33.229 45.5212C33.5027 41.7822 33.2703 38.0234 32.5382 34.3466C32.408 33.588 32.4519 32.8097 32.6666 32.0705C32.8813 31.3314 33.2612 30.6507 33.7776 30.0799C34.7883 28.9815 36.0188 28.1081 37.3893 27.5165C38.7597 26.9249 40.2393 26.6284 41.7319 26.6463C46.7503 26.6463 50.8747 30.151 50.8747 34.4583C50.956 40.3097 44.9623 48.1015 39.9439 50.6513C39.0244 51.1814 37.9959 51.4942 36.9369 51.5656ZM41.7319 27.7129C40.3883 27.6911 39.055 27.951 37.8179 28.476C36.5809 29.0009 35.4676 29.7791 34.5496 30.7606C34.1381 31.2229 33.8336 31.7703 33.658 32.3638C33.4824 32.9574 33.44 33.5824 33.5338 34.1942C34.2806 37.9239 34.5198 41.7375 34.2449 45.5314C34.0823 48.3352 34.0519 48.9142 35.6874 50.1536C36.7033 50.9256 38.349 50.377 39.5274 49.7675C44.2919 47.3497 49.9909 40.005 49.9096 34.5294C49.8589 30.7707 46.222 27.7129 41.7319 27.7129Z"
                  fill="#006EFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1334_18115">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className={p}> Global approach <br />  and mindset</p>
        </div>
        <div className={`founder globe lg:row-start-1  lg:col-start-5 ${card}`}>
          <div className={` founder ${iconDiv}`}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.2954 45.5773C39.7082 40.8076 23.9587 40.8076 9.37163 45.5773C7.6022 46.2166 6.07396 47.3788 4.99392 48.9067C3.91389 50.4345 3.33425 52.2541 3.3335 54.119V63.9999H60.3335V54.119C60.3327 52.2541 59.7531 50.4345 58.6731 48.9067C57.593 47.3788 56.0648 46.2166 54.2954 45.5773Z"
                fill="#31FFC1"
              />
              <path
                d="M55.0835 44.7399C39.9846 39.7534 23.6824 39.7534 8.5835 44.7399C6.75278 45.4094 5.17173 46.6249 4.05399 48.2219C2.93625 49.8189 2.3357 51.7206 2.3335 53.6699V63.9999H61.3335V53.6699C61.3313 51.7206 60.7307 49.8189 59.613 48.2219C58.4953 46.6249 56.9142 45.4094 55.0835 44.7399ZM31.8335 43.9999C39.3941 43.8967 46.9154 45.1045 54.0635 47.5699C55.3144 48.0268 56.3948 48.8569 57.1585 49.9479C57.9222 51.0389 58.3324 52.3382 58.3335 53.6699V60.9999H5.3335V53.6699C5.33462 52.3382 5.74478 51.0389 6.50848 49.9479C7.27219 48.8569 8.35258 48.0268 9.6035 47.5699C16.7516 45.1045 24.2729 43.8967 31.8335 43.9999Z"
                fill="#006EFF"
              />
              <path id="head"
                d="M31.8335 36C35.9435 35.9974 39.8845 34.3635 42.7907 31.4572C45.697 28.551 47.3308 24.61 47.3335 20.5V16.5C47.3335 12.3891 45.7005 8.44665 42.7937 5.53984C39.8868 2.63303 35.9444 1 31.8335 1C27.7226 1 23.7802 2.63303 20.8733 5.53984C17.9665 8.44665 16.3335 12.3891 16.3335 16.5V20.5C16.3361 24.61 17.97 28.551 20.8763 31.4572C23.7825 34.3635 27.7235 35.9974 31.8335 36ZM31.8335 4C35.1471 4.00529 38.3234 5.32395 40.6665 7.66701C43.0095 10.0101 44.3282 13.1864 44.3335 16.5V20.5C44.3335 23.8152 43.0165 26.9946 40.6723 29.3388C38.3281 31.683 35.1487 33 31.8335 33C28.5183 33 25.3389 31.683 22.9947 29.3388C20.6505 26.9946 19.3335 23.8152 19.3335 20.5V16.5C19.3388 13.1864 20.6574 10.0101 23.0005 7.66701C25.3436 5.32395 28.5199 4.00529 31.8335 4Z"
                fill="#006EFF"
              />
            </svg>
          </div>
          <p className={p}> Founder-centric <br />  philosophy</p>
        </div>
        <div className={`triple lg:row-start-2  lg:col-start-2 ${card}`}>
          <div className={`  transform hover:rotate-90 ease-linear	duration-300 ${iconDiv}`}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.879 24.758C39.1634 24.758 44.258 19.6634 44.258 13.379C44.258 7.09454 39.1634 2 32.879 2C26.5945 2 21.5 7.09454 21.5 13.379C21.5 19.6634 26.5945 24.758 32.879 24.758Z"
                fill="#31FFC1"
              />
              <path
                d="M40.2236 27.3458L42.1328 26.3262L47.8819 37.0869L45.9619 38.1065L40.2236 27.3458Z"
                fill="#006EFF"
              />
              <path
                d="M45.7448 38.8454L39.4858 27.1193L42.3604 25.5898L48.6086 37.3159L45.7448 38.8454ZM40.9502 27.5641L46.1896 37.381L47.1441 36.8712L41.9157 27.1085L40.9502 27.5641Z"
                fill="#006EFF"
              />
              <path
                d="M20.5679 31.4688L26.2194 21.4023L28.1177 22.4871L22.4553 32.5535L20.5679 31.4688Z"
                fill="#006EFF"
              />
              <path
                d="M22.6725 33.2688L19.8413 31.6742L26.0244 20.6641L28.8664 22.2586L22.6725 33.2688ZM21.3166 31.2621L22.2603 31.7936L27.3911 22.6708L26.4474 22.1393L21.3166 31.2621Z"
                fill="#006EFF"
              />
              <path
                d="M23.8223 46.1016H34.6697V48.2711H23.8223V46.1016Z"
                fill="#006EFF"
              />
              <path
                d="M35.212 48.8128H23.2798V45.5586H35.212V48.8128ZM24.3645 47.7281H34.1272V46.6433H24.3645V47.7281Z"
                fill="#006EFF"
              />
              <path
                d="M12.9747 59.1192C10.6147 59.1192 8.30776 58.4194 6.34552 57.1083C4.38327 55.7972 2.85389 53.9336 1.95077 51.7533C1.04765 49.573 0.811354 47.1738 1.27176 44.8592C1.73217 42.5446 2.8686 40.4185 4.53735 38.7497C6.2061 37.081 8.33221 35.9445 10.6468 35.4841C12.9614 35.0237 15.3606 35.26 17.5409 36.1631C19.7213 37.0662 21.5848 38.5956 22.8959 40.5579C24.2071 42.5201 24.9069 44.8271 24.9069 47.187C24.9069 50.3517 23.6497 53.3867 21.412 55.6244C19.1743 57.8621 16.1393 59.1192 12.9747 59.1192ZM12.9747 37.4243C11.0438 37.4243 9.15628 37.9969 7.55081 39.0697C5.94534 40.1424 4.69404 41.6671 3.95512 43.451C3.21621 45.2349 3.02286 47.1979 3.39956 49.0916C3.77625 50.9854 4.70606 52.725 6.0714 54.0903C7.43674 55.4557 9.1763 56.3855 11.0701 56.7622C12.9639 57.1389 14.9268 56.9455 16.7107 56.2066C18.4946 55.4677 20.0193 54.2164 21.0921 52.6109C22.1648 51.0054 22.7374 49.1179 22.7374 47.187C22.7374 44.5978 21.7088 42.1146 19.878 40.2838C18.0471 38.4529 15.5639 37.4243 12.9747 37.4243ZM52.0255 59.1192C49.6656 59.1192 47.3586 58.4194 45.3964 57.1083C43.4341 55.7972 41.9047 53.9336 41.0016 51.7533C40.0985 49.573 39.8622 47.1738 40.3226 44.8592C40.783 42.5446 41.9195 40.4185 43.5882 38.7497C45.257 37.081 47.3831 35.9445 49.6977 35.4841C52.0123 35.0237 54.4115 35.26 56.5918 36.1631C58.7721 37.0662 60.6357 38.5956 61.9468 40.5579C63.2579 42.5201 63.9577 44.8271 63.9577 47.187C63.9577 50.3517 62.7006 53.3867 60.4629 55.6244C58.2251 57.8621 55.1902 59.1192 52.0255 59.1192ZM52.0255 37.4243C50.0947 37.4243 48.2071 37.9969 46.6017 39.0697C44.9962 40.1424 43.7449 41.6671 43.006 43.451C42.2671 45.2349 42.0737 47.1979 42.4504 49.0916C42.8271 50.9854 43.7569 52.725 45.1222 54.0903C46.4876 55.4557 48.2271 56.3855 50.1209 56.7622C52.0147 57.1389 53.9777 56.9455 55.7616 56.2066C57.5455 55.4677 59.0702 54.2164 60.1429 52.6109C61.2157 51.0054 61.7882 49.1179 61.7882 47.187C61.7882 44.5978 60.7597 42.1146 58.9288 40.2838C57.098 38.4529 54.6148 37.4243 52.0255 37.4243ZM32.5001 24.4074C30.1401 24.4074 27.8332 23.7076 25.8709 22.3964C23.9087 21.0853 22.3793 19.2217 21.4762 17.0414C20.5731 14.8611 20.3368 12.4619 20.7972 10.1473C21.2576 7.8327 22.394 5.70659 24.0628 4.03784C25.7315 2.3691 27.8576 1.23266 30.1722 0.772253C32.4869 0.311846 34.886 0.548125 37.0664 1.45125C39.2467 2.35437 41.1102 3.88377 42.4214 5.84601C43.7325 7.80825 44.4323 10.1152 44.4323 12.4752C44.4323 15.6398 43.1752 18.6748 40.9374 20.9125C38.6997 23.1502 35.6647 24.4074 32.5001 24.4074ZM32.5001 2.71247C30.5692 2.71247 28.6817 3.28505 27.0762 4.35779C25.4708 5.43053 24.2195 6.95525 23.4805 8.73915C22.7416 10.5231 22.5483 12.486 22.925 14.3798C23.3017 16.2736 24.2315 18.0131 25.5968 19.3784C26.9622 20.7438 28.7017 21.6736 30.5955 22.0503C32.4893 22.427 34.4522 22.2337 36.2361 21.4947C38.02 20.7558 39.5448 19.5045 40.6175 17.899C41.6903 16.2936 42.2628 14.4061 42.2628 12.4752C42.2628 9.88595 41.2343 7.40277 39.4034 5.57191C37.5725 3.74105 35.0893 2.71247 32.5001 2.71247Z"
                fill="#006EFF"
              />
              <path
                d="M52.0254 59.661C49.5582 59.661 47.1464 58.9294 45.0949 57.5587C43.0435 56.1879 41.4446 54.2397 40.5004 51.9602C39.5563 49.6808 39.3092 47.1726 39.7905 44.7528C40.2719 42.3329 41.46 40.1102 43.2046 38.3656C44.9492 36.621 47.1719 35.4329 49.5918 34.9516C52.0116 34.4702 54.5198 34.7173 56.7993 35.6614C59.0787 36.6056 61.0269 38.2045 62.3977 40.2559C63.7684 42.3074 64.5 44.7192 64.5 47.1864C64.4971 50.494 63.1819 53.6653 60.8431 56.0041C58.5043 58.3429 55.333 59.6581 52.0254 59.661ZM52.0254 35.7966C49.7727 35.7966 47.5706 36.4646 45.6976 37.7161C43.8245 38.9677 42.3647 40.7465 41.5026 42.8277C40.6405 44.9089 40.415 47.1991 40.8545 49.4085C41.2939 51.6179 42.3787 53.6474 43.9716 55.2403C45.5645 56.8332 47.594 57.9179 49.8034 58.3574C52.0128 58.7969 54.3029 58.5713 56.3841 57.7093C58.4654 56.8472 60.2442 55.3873 61.4957 53.5143C62.7473 51.6413 63.4153 49.4391 63.4153 47.1864C63.4124 44.1665 62.2115 41.2712 60.0761 39.1358C57.9407 37.0004 55.0453 35.7995 52.0254 35.7966ZM12.9746 59.661C10.5074 59.661 8.09552 58.9294 6.04409 57.5587C3.99266 56.1879 2.39375 54.2397 1.44958 51.9602C0.505407 49.6808 0.258366 47.1726 0.7397 44.7528C1.22103 42.3329 2.40913 40.1102 4.15373 38.3656C5.89833 36.621 8.12108 35.4329 10.5409 34.9516C12.9607 34.4702 15.469 34.7173 17.7484 35.6614C20.0278 36.6056 21.9761 38.2045 23.3468 40.2559C24.7175 42.3074 25.4492 44.7192 25.4492 47.1864C25.4463 50.494 24.1311 53.6653 21.7923 56.0041C19.4535 58.3429 16.2822 59.6581 12.9746 59.661ZM12.9746 35.7966C10.7219 35.7966 8.51979 36.4646 6.64674 37.7161C4.7737 38.9677 3.31383 40.7465 2.45176 42.8277C1.58969 44.9089 1.36413 47.1991 1.80361 49.4085C2.24309 51.6179 3.32786 53.6474 4.92076 55.2403C6.51366 56.8332 8.54313 57.9179 10.7525 58.3574C12.962 58.7969 15.2521 58.5713 17.3333 57.7093C19.4145 56.8472 21.1934 55.3873 22.4449 53.5143C23.6964 51.6413 24.3644 49.4391 24.3644 47.1864C24.3615 44.1665 23.1606 41.2712 21.0252 39.1358C18.8899 37.0004 15.9945 35.7995 12.9746 35.7966ZM52.0254 57.4915C49.9873 57.4915 47.9949 56.8871 46.3002 55.7548C44.6056 54.6225 43.2847 53.013 42.5048 51.13C41.7248 49.247 41.5207 47.175 41.9184 45.176C42.316 43.177 43.2975 41.3408 44.7386 39.8996C46.1798 38.4584 48.016 37.477 50.015 37.0793C52.014 36.6817 54.086 36.8858 55.969 37.6658C57.852 38.4457 59.4615 39.7666 60.5938 41.4612C61.7261 43.1559 62.3305 45.1483 62.3305 47.1864C62.3276 49.9186 61.241 52.5381 59.3091 54.4701C57.3771 56.402 54.7576 57.4887 52.0254 57.4915ZM52.0254 37.9661C50.2018 37.9661 48.4192 38.5068 46.9029 39.52C45.3866 40.5331 44.2048 41.9732 43.5069 43.658C42.8091 45.3428 42.6265 47.1967 42.9823 48.9852C43.338 50.7738 44.2162 52.4167 45.5057 53.7062C46.7952 54.9957 48.4381 55.8738 50.2266 56.2296C52.0152 56.5854 53.8691 56.4028 55.5539 55.7049C57.2387 55.007 58.6787 53.8253 59.6919 52.309C60.705 50.7927 61.2458 49.01 61.2458 47.1864C61.2429 44.7419 60.2706 42.3984 58.542 40.6699C56.8135 38.9413 54.4699 37.969 52.0254 37.9661ZM12.9746 57.4915C10.9364 57.4915 8.94405 56.8871 7.24938 55.7548C5.55472 54.6225 4.2339 53.013 3.45393 51.13C2.67396 49.247 2.46989 47.175 2.86751 45.176C3.26514 43.177 4.2466 41.3408 5.68779 39.8996C7.12899 38.4584 8.96517 37.477 10.9642 37.0793C12.9632 36.6817 15.0352 36.8858 16.9182 37.6658C18.8012 38.4457 20.4106 39.7666 21.5429 41.4612C22.6753 43.1559 23.2797 45.1483 23.2797 47.1864C23.2768 49.9186 22.1902 52.5381 20.2582 54.4701C18.3263 56.402 15.7068 57.4887 12.9746 57.4915ZM12.9746 37.9661C11.151 37.9661 9.36831 38.5068 7.85204 39.52C6.33576 40.5331 5.15397 41.9732 4.4561 43.658C3.75823 45.3428 3.57565 47.1967 3.93142 48.9852C4.28719 50.7738 5.16534 52.4167 6.45483 53.7062C7.74431 54.9957 9.38722 55.8738 11.1758 56.2296C12.9644 56.5854 14.8183 56.4028 16.5031 55.7049C18.1879 55.007 19.6279 53.8253 20.641 52.309C21.6542 50.7927 22.1949 49.01 22.1949 47.1864C22.1921 44.7419 21.2197 42.3984 19.4912 40.6699C17.7627 38.9413 15.4191 37.969 12.9746 37.9661ZM32.5 24.9491C30.0328 24.9491 27.6209 24.2175 25.5695 22.8468C23.5181 21.4761 21.9192 19.5278 20.975 17.2484C20.0308 14.9689 19.7838 12.4607 20.2651 10.0409C20.7465 7.62108 21.9346 5.3983 23.6792 3.6537C25.4238 1.9091 27.6465 0.721035 30.0663 0.2397C32.4862 -0.241634 34.9944 0.00540737 37.2738 0.949579C39.5533 1.89375 41.5015 3.49262 42.8722 5.54406C44.243 7.59549 44.9746 10.0073 44.9746 12.4746C44.9717 15.7822 43.6565 18.9535 41.3177 21.2923C38.9789 23.6311 35.8076 24.9463 32.5 24.9491ZM32.5 1.08474C30.2473 1.08474 28.0452 1.75274 26.1722 3.00427C24.2991 4.2558 22.8393 6.03464 21.9772 8.11586C21.1151 10.1971 20.8896 12.4872 21.329 14.6966C21.7685 16.906 22.8533 18.9355 24.4462 20.5284C26.0391 22.1213 28.0686 23.2061 30.278 23.6456C32.4874 24.085 34.7775 23.8595 36.8587 22.9974C38.9399 22.1353 40.7188 20.6755 41.9703 18.8024C43.2218 16.9294 43.8898 14.7273 43.8898 12.4746C43.887 9.45468 42.686 6.55931 40.5507 4.42392C38.4153 2.28854 35.5199 1.08761 32.5 1.08474ZM32.5 22.7797C30.4619 22.7797 28.4695 22.1753 26.7748 21.0429C25.0801 19.9106 23.7593 18.3012 22.9794 16.4182C22.1994 14.5352 21.9953 12.4631 22.3929 10.4641C22.7906 8.46515 23.772 6.62895 25.2132 5.18776C26.6544 3.74657 28.4906 2.76511 30.4896 2.36748C32.4886 1.96986 34.5606 2.17395 36.4436 2.95392C38.3266 3.73388 39.936 5.0547 41.0684 6.74937C42.2007 8.44403 42.8051 10.4364 42.8051 12.4746C42.8022 15.2068 41.7156 17.8263 39.7836 19.7582C37.8517 21.6902 35.2322 22.7768 32.5 22.7797ZM32.5 3.25423C30.6764 3.25423 28.8937 3.79498 27.3775 4.80813C25.8612 5.82127 24.6794 7.26131 23.9815 8.9461C23.2837 10.6309 23.1011 12.4848 23.4568 14.2734C23.8126 16.0619 24.6908 17.7048 25.9802 18.9943C27.2697 20.2838 28.9126 21.162 30.7012 21.5177C32.4898 21.8735 34.3437 21.6909 36.0285 20.993C37.7133 20.2952 39.1533 19.1134 40.1664 17.5971C41.1796 16.0808 41.7204 14.2982 41.7204 12.4746C41.7175 10.0301 40.7451 7.68651 39.0166 5.95799C37.2881 4.22946 34.9445 3.2571 32.5 3.25423Z"
                fill="#006EFF"
              />
            </svg>
          </div>
          <p className={p}> Support through <br />  the lifecycle</p>
        </div>
        <div className={`medal col-span-2 lg:row-start-2  lg:col-start-4 lg:col-span-1 ${card}`}>
          <div className={` medal ${iconDiv}`}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.019 10.3301H45.7962V12.2978H20.019V10.3301Z"
                fill="#006EFF"
              />
              <path
                d="M46.2878 12.7895H19.5269V9.83789H46.2878V12.7895ZM20.5107 11.8056H45.304V10.8217H20.5107V11.8056Z"
                fill="#006EFF"
              />
              <path
                d="M46.8881 31.5725L45.3041 30.4115L59.2257 11.3444L52.1222 2.48964H13.7517L6.64826 11.3444L20.5699 30.4115L18.976 31.5725L4.16895 11.2853L12.8072 0.462891H53.1454L61.7837 11.2853L46.8881 31.5725Z"
                fill="#006EFF"
              />
              <path
                d="M46.9964 32.2607L44.6154 30.5193L58.5961 11.3537L51.8763 2.95158H13.9387L7.21898 11.3537L21.2095 30.5193L18.8187 32.2607L3.5 11.275L12.522 0H53.2931L62.3151 11.275L62.0888 11.58L46.9964 32.2607ZM4.69046 11.3045L18.9859 30.8833L19.7828 30.3028L5.9498 11.3242L13.4369 1.96772H52.3191L59.8062 11.3242L45.9535 30.3028L46.7504 30.8833L61.0459 11.3045L52.7913 0.983859H12.9942L4.69046 11.3045Z"
                fill="#006EFF"
              />
              <path
                d="M12.4233 2.03664L14.0369 0.915039L30.5657 24.8228L28.9522 25.9444L12.4233 2.03664ZM35.239 24.8228L51.7777 0.915039L53.3912 2.03664L36.8624 25.9346L35.239 24.8228Z"
                fill="#006EFF"
              />
              <path
                d="M28.8245 26.6235L11.7349 1.90897L14.165 0.226562L31.2546 24.9509L28.8245 26.6235ZM13.0827 2.15493L29.0803 25.3051L29.887 24.7443L13.919 1.60397L13.0827 2.15493ZM36.9512 26.6235L34.5308 24.9411L51.6205 0.226562L54.0506 1.90897L36.9512 26.6235ZM35.8984 24.6558L36.7052 25.2166L52.6831 2.12542L51.8763 1.56461L35.8984 24.6558Z"
                fill="#006EFF"
              />
              <path
                d="M32.9077 61.4931C29.2105 61.4931 25.5963 60.3967 22.5222 58.3427C19.4481 56.2886 17.0522 53.3692 15.6373 49.9534C14.2225 46.5376 13.8523 42.779 14.5736 39.1529C15.2948 35.5267 17.0752 32.1959 19.6895 29.5816C22.3038 26.9673 25.6347 25.1869 29.2608 24.4656C32.887 23.7444 36.6455 24.1145 40.0613 25.5294C43.4771 26.9442 46.3966 29.3402 48.4506 32.4143C50.5047 35.4884 51.601 39.1026 51.601 42.7998C51.601 47.7575 49.6315 52.5123 46.1258 56.0179C42.6202 59.5236 37.8654 61.4931 32.9077 61.4931ZM32.9077 26.0742C29.5997 26.0742 26.3659 27.0551 23.6154 28.8929C20.8649 30.7308 18.7212 33.343 17.4553 36.3992C16.1893 39.4554 15.8581 42.8183 16.5035 46.0628C17.1488 49.3072 18.7418 52.2874 21.0809 54.6265C23.42 56.9657 26.4002 58.5586 29.6447 59.204C32.8891 59.8493 36.2521 59.5181 39.3083 58.2522C42.3645 56.9863 44.9767 54.8425 46.8145 52.092C48.6523 49.3415 49.6333 46.1078 49.6333 42.7998C49.6333 38.3639 47.8711 34.1096 44.7345 30.973C41.5978 27.8363 37.3436 26.0742 32.9077 26.0742Z"
                fill="#006EFF"
              />
              <path
                d="M32.9074 61.9847C29.1129 61.9847 25.4037 60.8595 22.2487 58.7514C19.0937 56.6433 16.6346 53.647 15.1826 50.1414C13.7305 46.6357 13.3506 42.7782 14.0908 39.0566C14.8311 35.3351 16.6583 31.9166 19.3414 29.2335C22.0245 26.5504 25.443 24.7232 29.1646 23.9829C32.8861 23.2426 36.7437 23.6226 40.2493 25.0746C43.7549 26.5267 46.7513 28.9858 48.8594 32.1408C50.9675 35.2958 52.0927 39.005 52.0927 42.7995C52.0848 47.8853 50.061 52.7607 46.4648 56.3569C42.8686 59.9531 37.9933 61.9769 32.9074 61.9847ZM32.9074 24.5981C29.3075 24.5981 25.7885 25.6656 22.7953 27.6656C19.8021 29.6656 17.4692 32.5083 16.0915 35.8341C14.7139 39.16 14.3535 42.8197 15.0558 46.3504C15.7581 49.8811 17.4916 53.1243 20.0371 55.6698C22.5826 58.2153 25.8258 59.9488 29.3565 60.6512C32.8872 61.3535 36.5469 60.993 39.8728 59.6154C43.1987 58.2378 46.0413 55.9048 48.0413 52.9116C50.0413 49.9184 51.1088 46.3994 51.1088 42.7995C51.1036 37.9738 49.1843 33.3472 45.772 29.9349C42.3597 26.5226 37.7331 24.6033 32.9074 24.5981ZM32.9074 60.017C29.5021 60.017 26.1733 59.0072 23.3419 57.1154C20.5105 55.2235 18.3037 52.5345 17.0005 49.3884C15.6974 46.2423 15.3564 42.7804 16.0207 39.4405C16.6851 36.1006 18.3249 33.0328 20.7328 30.6249C23.1407 28.217 26.2086 26.5772 29.5485 25.9128C32.8883 25.2485 36.3502 25.5894 39.4963 26.8926C42.6424 28.1958 45.3314 30.4026 47.2233 33.234C49.1151 36.0654 50.1249 39.3942 50.1249 42.7995C50.1197 47.3643 48.3041 51.7406 45.0763 54.9684C41.8485 58.1962 37.4722 60.0118 32.9074 60.017ZM32.9074 26.5658C29.6967 26.5658 26.5581 27.5179 23.8885 29.3017C21.2189 31.0855 19.1381 33.6208 17.9095 36.5872C16.6808 39.5535 16.3593 42.8175 16.9857 45.9665C17.6121 49.1156 19.1582 52.0081 21.4285 54.2784C23.6988 56.5488 26.5914 58.0949 29.7404 58.7212C32.8894 59.3476 36.1534 59.0261 39.1198 57.7975C42.0861 56.5688 44.6215 54.488 46.4052 51.8184C48.189 49.1488 49.1411 46.0102 49.1411 42.7995C49.1359 38.4957 47.4239 34.3696 44.3806 31.3263C41.3373 28.2831 37.2112 26.571 32.9074 26.5658Z"
                fill="#006EFF"
              />
           
              <path id="star" 
                d="M45.4906 39.3195L36.8959 37.9407L33.1181 30.001L29.1324 37.9122L20.4717 39.0533L26.7335 45.2244L25.109 53.9154L32.882 49.8742L40.5982 54.001L39.2193 45.348L45.4906 39.3195Z"
                fill="#31FFC1"
              />
        
              <path id="star"
                d="M40.1882 53.4536L32.7994 49.5182L25.3713 53.3553L26.9258 45.1007L20.9341 39.1975L29.2182 38.1251L33.0355 30.5986L36.6266 38.135L44.8517 39.4534L38.8797 45.1892L40.1882 53.4241V53.4536ZM32.8191 47.2947L37.6302 49.8528L36.7742 44.5104L40.6408 40.8012L35.2886 39.9453L32.9765 35.085L30.4972 40.0043L25.204 40.7028L29.0509 44.471L28.0671 49.7937L32.8387 47.3341L32.8191 47.2947Z"
                fill="#006EFF"
              />
              <path id="star"
                d="M40.8376 54.3492L32.7995 50.0694L24.7023 54.2508L26.3946 45.2682L19.8716 38.8731L28.8936 37.6925L33.0455 29.5166L36.9809 37.722L45.934 39.1486L39.4012 45.3961L40.8376 54.3492ZM32.8093 48.9183L39.5488 52.5094L38.3583 45.0025L43.799 39.7684L36.2922 38.5779L33.016 31.6909L29.5331 38.5779L22.0066 39.5618L27.4571 44.9042L26.0404 52.4208L32.8093 48.9183ZM38.2698 50.7187L32.8093 47.7672L27.3784 50.581L28.5197 44.5204L24.1317 40.221L30.1824 39.4339L32.9864 33.8948L35.6232 39.4241L41.6936 40.4079L37.3056 44.6287L38.2698 50.7187ZM32.8192 46.7046L36.9809 48.9183L36.2528 44.2941L39.5881 41.0966L34.964 40.3587L32.9963 36.1675L30.8514 40.3882L26.2962 40.9785L29.6118 44.2253L28.746 48.8199L32.8192 46.7046Z"
                fill="#006EFF"
              />
            </svg>
          </div>
          <p className={p}> Active value <br />  creation</p>
        </div>
      </div>
    </section>
  )
}

export default Strengths
