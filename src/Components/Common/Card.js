import React from "react";

const Cards = [
  {
    id: 1,
    img: "https://www.getonecard.app/images/blog/Loan_on_credit_card.png",
    date: "Jun 30, 2023",
    info: "Credit Card Loan - Apply for a Loan",
    para: "Against a Credit Card",
  },

  {
    id: 2,
    img: "https://www.getonecard.app/images/blog/best_credit_card.png",
    date: "Jun 30, 2023",
    info: "The Best Credit Card in India in 2023:",
    para: "Features and Benefits",
  },

  {
    id: 3,
    img: "https://www.getonecard.app/images/blog/credit-bill-with-another-credit-card.png",
    date: "Jun 30, 2023",
    info: "How to Pay a Credit Card Bill With",
    para: "Another Credit Card?",
  },
];

function Card() {
  return (
    <div className="Main flex justify-center items-center gap-4  flex-wrap">
      {Cards.map((item) => {
        return (
          <div className="main-crd flex flex-col w-[22rem] pt-2 pb-[50px] ">
            <div className="flex w-full justify-center py-2 border-[1px] rounded-xl">
              <img src={item.img} className="w-full" alt="" />
            </div>
            <div className="my-4">{item.date}</div>
            <div className="tw">
              <span className="font-[800] text-[#646464] py-2 text-[16px]">
                {item.info}
              </span>
              <span className="font-[800] text-[#646464] py-2 text-[16px]">
                {item.para}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
